import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { CONTACT_TOPIC, contactFormTo } from "../lib/contactIntent";
import {
  AppWindow,
  ArrowRight,
  BarChart3,
  BookOpen,
  Bot,
  Boxes,
  Brain,
  Building2,
  ChevronRight,
  Check,
  ClipboardCheck,
  Cloud,
  Code2,
  Compass,
  Cpu,
  Database,
  FileText,
  Gauge,
  Globe2,
  Languages,
  Layers,
  LayoutGrid,
  LineChart,
  Link2,
  ListChecks,
  Lock,
  MessageSquareText,
  MessagesSquare,
  Network,
  Plug,
  RefreshCw,
  Rocket,
  Route,
  ScanEye,
  Server,
  ShieldAlert,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  Sparkles,
  TabletSmartphone,
  Store,
  Target,
  UserCog,
  Workflow,
  Wrench,
  Lightbulb,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

/** Keyword → icon; first match wins (more specific patterns first). */
const SUBSERVICE_ICON_RULES = [
  [/rag|knowledge base/i, BookOpen],
  [/copilot|assistant/i, Bot],
  [/nlp|natural language/i, Languages],
  [/computer vision/i, ScanEye],
  [/predictive|forecasting|churn|demand forecast/i, LineChart],
  [/recommendation/i, Sparkles],
  [/anomaly|fraud|intrusion/i, ShieldAlert],
  [/automation|automate processes/i, Workflow],
  [/prototyping|rapid ai/i, Rocket],
  [/fine-tun|model tuning|dpo|rlhf|lora/i, SlidersHorizontal],
  [/multi-modal|multimodal|cross-modal/i, Layers],
  [/code generation|code review/i, Code2],
  [/prompt engineering/i, MessageSquareText],
  [/safety|governance|guardrail|bias detection/i, ShieldCheck],
  [/content generation|marketing copy/i, FileText],
  [/strategy|consulting|readiness/i, Target],
  [/enterprise application|erp|internal tool/i, Building2],
  [/api development|graphql|restful|api gateway/i, Plug],
  [/legacy modern|modernization|migration/i, RefreshCw],
  [/cloud-native|microservices|serverless|container/i, Cloud],
  [/web application|next\.js|progressive web|pwa/i, AppWindow],
  [/saas|multi-tenant|subscription/i, Boxes],
  [/security-first|penetration|encryption at rest/i, Lock],
  [/performance optimization|caching|load balancing/i, Gauge],
  [/ios|swiftui/i, Smartphone],
  [/android|jetpack|kotlin development/i, TabletSmartphone],
  [/cross-platform|flutter|react native/i, Layers],
  [/app modernization|ui\/ux redesign/i, RefreshCw],
  [/backend.*api|mobile backend/i, Server],
  [/app store|aso|optimization \(aso\)/i, Store],
  [/orchestration|multi-agent|agent team/i, Network],
  [/tool-using|tool using/i, Wrench],
  [/conversational agent|dialogue/i, MessagesSquare],
  [/agent analytics|performance dashboard/i, BarChart3],
  [/agent strategy|feasibility study/i, Compass],
  [/agent training|personalization|feedback loop/i, UserCog],
  [/custom llm training|pre-training/i, Brain],
  [/rag systems|retrieval-augmented/i, Database],
  [/llm evaluation|benchmarking/i, ClipboardCheck],
  [/model optimization|quantization|distillation/i, Cpu],
  [/llm security|prompt injection/i, Lock],
  [/llm integration|streaming response/i, Link2],
  [/multilingual llm|cross-lingual/i, Globe2],
  [/ai-powered feature|on-device ml|camera ai/i, Cpu],
];

function iconForSubserviceTitle(title) {
  const t = String(title || "");
  for (const [re, Icon] of SUBSERVICE_ICON_RULES) {
    if (re.test(t)) return Icon;
  }
  return LayoutGrid;
}

/**
 * Optional override: set `icon` on a subservice or on `delivery` (same shape as Lucide export names in camelCase),
 * e.g. `bookOpen`, `barChart3`, `layoutGrid`. Kebab-case (`book-open`) and PascalCase (`BookOpen`) also work.
 */
const SUBSERVICE_ICON_BY_KEY = {
  appWindow: AppWindow,
  barChart3: BarChart3,
  bookOpen: BookOpen,
  bot: Bot,
  boxes: Boxes,
  brain: Brain,
  building2: Building2,
  clipboardCheck: ClipboardCheck,
  cloud: Cloud,
  code2: Code2,
  compass: Compass,
  cpu: Cpu,
  database: Database,
  fileText: FileText,
  gauge: Gauge,
  globe2: Globe2,
  languages: Languages,
  layers: Layers,
  layoutGrid: LayoutGrid,
  lineChart: LineChart,
  link2: Link2,
  listChecks: ListChecks,
  lock: Lock,
  messageSquareText: MessageSquareText,
  messagesSquare: MessagesSquare,
  network: Network,
  plug: Plug,
  refreshCw: RefreshCw,
  rocket: Rocket,
  route: Route,
  scanEye: ScanEye,
  server: Server,
  shieldAlert: ShieldAlert,
  shieldCheck: ShieldCheck,
  slidersHorizontal: SlidersHorizontal,
  smartphone: Smartphone,
  sparkles: Sparkles,
  tabletSmartphone: TabletSmartphone,
  store: Store,
  target: Target,
  userCog: UserCog,
  workflow: Workflow,
  wrench: Wrench,
};

/** Normalizes user input to a key in SUBSERVICE_ICON_BY_KEY (camelCase). */
function normalizeIconKey(raw) {
  const t = String(raw).trim();
  if (!t) return null;
  if (SUBSERVICE_ICON_BY_KEY[t]) return t;
  if (/[-_]/.test(t)) {
    const parts = t.split(/[-_]+/).filter(Boolean);
    const camel =
      parts[0].toLowerCase() +
      parts.slice(1).map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join("");
    if (SUBSERVICE_ICON_BY_KEY[camel]) return camel;
  }
  const lowerFirst = t.charAt(0).toLowerCase() + t.slice(1);
  if (SUBSERVICE_ICON_BY_KEY[lowerFirst]) return lowerFirst;
  return null;
}

/** Resolves sidebar icon: explicit `sub.icon` / `sub.delivery.icon`, else title keyword rules. */
export function resolveSubserviceNavIcon(sub) {
  const raw = sub?.icon ?? sub?.delivery?.icon;
  if (raw != null && typeof raw === "string") {
    const key = normalizeIconKey(raw);
    if (key && SUBSERVICE_ICON_BY_KEY[key]) return SUBSERVICE_ICON_BY_KEY[key];
  }
  return iconForSubserviceTitle(sub?.title);
}

/** Normalize capability entries: legacy string or `{ title, desc }`. */
function normalizeCapabilityItem(raw) {
  if (raw == null) return { title: "", desc: "" };
  if (typeof raw === "object" && !Array.isArray(raw) && raw.title != null) {
    return {
      title: String(raw.title),
      desc: raw.desc != null ? String(raw.desc).trim() : "",
    };
  }
  return { title: String(raw), desc: "" };
}

const CAP_DESC_OPENERS = [
  "Defines",
  "Documents",
  "Maps",
  "Aligns",
  "Structures",
  "Tracks",
  "Validates",
  "Coordinates",
  "Measures",
  "Governs",
];

function syntheticCapabilityDesc(title, index) {
  const opener = CAP_DESC_OPENERS[index % CAP_DESC_OPENERS.length];
  const fragment = String(title || "")
    .trim()
    .replace(/\.$/, "");
  const tail = fragment ? fragment.charAt(0).toLowerCase() + fragment.slice(1) : "this scope item";
  return `${opener} interfaces, ownership, and acceptance criteria for ${tail}.`;
}

/** Enterprise outcome bullets when `delivery.outcomes` is not set. */
function defaultOutcomesForModule(sub) {
  return [
    `${sub.title} is scoped with defined interfaces, acceptance criteria, and staged validation so progress stays measurable.`,
    "Technical choices prioritize fit with existing systems, operational visibility, and sustainable ownership.",
    "Delivery checkpoints and documentation support governance without unnecessary friction.",
  ];
}

/**
 * Scope-of-delivery explorer: left menu grid (standalone) + right detail grid (standalone).
 * Optional per subservice: `icon` (string key, see `SUBSERVICE_ICON_BY_KEY`).
 * Optional `delivery`: `{ icon?, title?, desc?, outcomes?: string[] }`
 * Optional `items`: `string[]` or `{ title: string, desc: string }[]` per capability card.
 */
export default function ScopeOfDeliverySection({ service }) {
  const location = useLocation();
  const subs = service.subservices || [];
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(0);
  }, [service.slug]);

  const sub = subs[active] || subs[0];
  if (!sub) return null;

  const delivery = sub.delivery || {};
  const moduleTitle = delivery.title ?? sub.title;
  const moduleDesc = delivery.desc ?? sub.desc;
  const outcomeBullets =
    Array.isArray(delivery.outcomes) && delivery.outcomes.length > 0
      ? delivery.outcomes
      : defaultOutcomesForModule(sub);
  const capabilityItems = (sub.items || []).map((raw, idx) => {
    const n = normalizeCapabilityItem(raw);
    return {
      title: n.title,
      desc: n.desc || syntheticCapabilityDesc(n.title, idx),
    };
  });

  return (
    <section
      data-testid="subservices-section"
      className="relative overflow-hidden bg-[#F8FAFC] py-10 border-b border-slate-200"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="mb-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="flex-1">
            <div className="text-[9px] font-black text-blue-600 uppercase tracking-[0.3em] mb-3">Scope of Delivery</div>
            <h2 className="mb-2 text-3xl font-black tracking-tighter text-[#0B1B3D] lg:text-[2.8rem] lg:leading-[1] uppercase">
              Applied <span className="text-blue-600">{service.title}</span> Services
            </h2>
            <p className="text-sm text-slate-500 font-medium max-w-xl opacity-90">
              Efficient service modules structured for rapid time-to-value.
            </p>
          </div>
          
          <div className="hidden lg:flex items-center gap-6">
            <div className="grid grid-cols-4 gap-2 opacity-10">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              ))}
            </div>
            <div className="relative w-72 h-36 overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
              <img src="/meeting-1.png" alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start gap-4">
          {/* Sidebar - Tightened Spatial Density */}
          <aside className="w-full lg:w-[260px] shrink-0 flex flex-col gap-4">
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <nav className="flex flex-col">
                {subs.map((s, i) => {
                  const isActive = active === i;
                  const ItemIcon = resolveSubserviceNavIcon(s);
                  return (
                    <button
                      key={s.title}
                      type="button"
                      onClick={() => setActive(i)}
                      className={`group flex items-center gap-2.5 px-3.5 py-2.5 text-left transition-all border-b border-slate-50 last:border-b-0 ${isActive
                        ? "bg-slate-50 shadow-[inset_3px_0_0_0_#2563EB]"
                        : "text-slate-500 hover:bg-slate-50"
                        }`}
                    >
                      <div className={`p-1 rounded-lg ${isActive ? "bg-blue-50 text-blue-600" : "bg-slate-50"}`}>
                        <ItemIcon className="h-3.5 w-3.5" />
                      </div>
                      <span className={`flex-1 text-[10px] font-black uppercase tracking-tight ${isActive ? "text-[#0B1B3D]" : "text-slate-500"}`}>
                        {s.title}
                      </span>
                      <ChevronRight className={`h-3 w-3 ${isActive ? "text-blue-600" : "text-slate-300"}`} />
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
              <h4 className="text-[10px] font-black text-[#0B1B3D] uppercase tracking-[0.1em] mb-4">Solutions Portfolio</h4>
              <div className="space-y-3">
                {subs.slice(0, 4).map((s, i) => (
                  <div key={i} className="flex items-start gap-3 border-b border-slate-50 last:border-0 pb-3 last:pb-0">
                    <div className="p-1.5 rounded-lg bg-slate-50 text-slate-400">
                      <LayoutGrid className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <h4 className="text-[9px] font-black text-[#0B1B3D] uppercase tracking-tight">{s.title}</h4>
                      <p className="text-[8px] text-slate-500 font-medium leading-tight">AI extraction of data.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full h-36 overflow-hidden rounded-xl shadow-sm border border-slate-200">
              <img src="/meeting-2.png" alt="" className="w-full h-full object-cover" />
            </div>
          </aside>

          {/* Dashboard Area */}
          <div className="flex-1 bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden flex flex-col">
            {/* Outcomes Section */}
            <div className="p-6 lg:p-8 border-b border-slate-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1 h-6 bg-blue-600 rounded-full" />
                <h3 className="text-lg font-black text-[#0B1B3D] uppercase tracking-tight">Executive Outcomes</h3>
              </div>
              <p className="text-[11px] text-slate-500 font-medium mb-8 max-w-2xl leading-relaxed">
                {moduleDesc}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: "Defined Scope for Progress", icon: Target },
                  { title: "Operational Readiness", icon: Workflow },
                  { title: "Governance Support", icon: ShieldCheck }
                ].map((outcome, idx) => (
                  <div key={idx} className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center mb-5">
                      <outcome.icon className="h-4.5 w-4.5 text-blue-600" />
                    </div>
                    <h4 className="text-[11px] font-black text-[#0B1B3D] uppercase tracking-tight mb-2 leading-tight">{outcome.title}</h4>
                    <p className="text-[10px] text-slate-500 font-medium leading-relaxed">
                      {outcomeBullets[idx % outcomeBullets.length].substring(0, 80)}...
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Capabilities Tier */}
            <div className="bg-[#F3F4F6]/70 p-6 lg:p-8 flex-1">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8">
                {[
                  { category: "Knowledge & Research", start: 0, end: 2 },
                  { category: "Security & Compliance", start: 2, end: 4 },
                  { category: "Development & Flow", start: 4, end: 6 },
                  { category: "Performance & Latency", start: 6, end: 8 }
                ].map((group) => (
                  <div key={group.category}>
                    <h5 className="text-[9px] font-black text-[#0B1B3D] uppercase tracking-[0.2em] mb-6 border-b border-slate-200 pb-2">
                      {group.category}
                    </h5>
                    <div className="space-y-3">
                      {capabilityItems.slice(group.start, group.end).map((cap, i) => (
                        <div key={i} className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm group hover:border-blue-400 transition-all">
                          <div className="flex items-start gap-4">
                            <div className="w-11 h-11 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 text-blue-600 font-black text-[10px] border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                              {12 + group.start + i * 3}
                            </div>
                            <div>
                              <h6 className="text-[10px] font-black text-[#0B1B3D] uppercase tracking-tight mb-1">
                                {cap.title}
                              </h6>
                              <p className="text-[9px] text-slate-500 font-medium leading-relaxed">
                                {cap.desc.substring(0, 100)}...
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Banner */}
            <div className="p-6 bg-white border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0B1B3D] flex items-center justify-center shadow-xl">
                  <Network className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-[#0B1B3D] uppercase tracking-tight mb-1">Connect & Scale</h4>
                  <p className="text-[9px] text-slate-500 font-medium">Partnership for Success: Full-lifecycle support.</p>
                </div>
              </div>
              <Button asChild className="bg-[#0B1B3D] text-white hover:bg-blue-600 rounded-sm px-8 font-black uppercase text-[9px] tracking-widest h-10 shadow-lg">
                <Link to={contactFormTo(location.pathname, CONTACT_TOPIC.CONTACT)}>
                  Request Custom Integration
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}







