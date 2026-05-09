import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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

  return (    <section
      data-testid="subservices-section"
      className="relative overflow-hidden bg-[#F8FAFC] py-16 border-b border-slate-200"
    >
      {/* Background Decorative Accents */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-100/15 rounded-full blur-[80px] -ml-48 -mt-48" />

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        <AnimatedSection>
          <div className="mb-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
              <span className="text-[9px] font-black text-blue-700 uppercase tracking-widest">Scope of Delivery</span>
            </div>
            <h2 className="mb-4 text-3xl font-black tracking-tighter text-[#0B1B3D] sm:text-4xl lg:text-[2.2rem] lg:leading-none uppercase">
              Applied <span className="text-blue-600">{service.title}</span> Services
            </h2>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">
              Efficient service modules structured for rapid time-to-value.
            </p>
          </div>
        </AnimatedSection>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
          {/* Left: Sidebar Navigation */}
          <div className="w-full lg:w-[280px] shrink-0 lg:sticky lg:top-24 lg:self-start space-y-4">
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <nav className="flex flex-col" aria-label="Service modules menu">
                {subs.map((s, i) => {
                  const isActive = active === i;
                  const ItemIcon = resolveSubserviceNavIcon(s);
                  return (
                    <button
                      key={s.title}
                      type="button"
                      onClick={() => setActive(i)}
                      className={`group flex items-center gap-3 px-4 py-3 text-left transition-all duration-300 border-b border-slate-100 last:border-b-0 ${isActive
                          ? "bg-[#0B1B3D] text-white"
                          : "text-slate-600 hover:bg-blue-50/50 hover:text-blue-600"
                        }`}
                    >
                      <div className={`p-1.5 rounded-lg transition-colors duration-300 ${isActive ? "bg-white/10" : "bg-slate-50 group-hover:bg-blue-100"}`}>
                        <ItemIcon
                          className={`h-3.5 w-3.5 shrink-0 ${isActive ? "text-white" : "text-slate-500 group-hover:text-blue-600"}`}
                          strokeWidth={2.5}
                        />
                      </div>
                      <span className={`flex-1 text-[11px] font-black uppercase tracking-tight ${isActive ? "text-white" : "text-slate-600"}`}>
                        {s.title}
                      </span>
                      <ChevronRight
                        className={`h-3.5 w-3.5 shrink-0 transition-transform duration-300 ${isActive ? "text-white/40 translate-x-1" : "text-slate-300"}`}
                      />
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm group">
              <h3 className="mb-1 text-[11px] font-black text-[#0B1B3D] uppercase tracking-tight">Custom Scope</h3>
              <p className="mb-4 text-[11px] text-slate-500 font-medium leading-relaxed">
                Discuss integration points with our team.
              </p>
              <Link
                to={contactFormTo(location.pathname, CONTACT_TOPIC.CONTACT)}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-[#0B1B3D] text-white text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all"
              >
                Contact
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Expert Support Card to fill space */}
            <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-5 hidden lg:block">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                  <ShieldCheck className="h-4 w-4 text-white" />
                </div>
                <h4 className="text-[10px] font-black text-[#0B1B3D] uppercase tracking-widest">Institutional Support</h4>
              </div>
              <p className="text-[10px] text-slate-500 font-medium leading-relaxed">
                Our engineering teams provide full-lifecycle support from deployment to optimization.
              </p>
            </div>
          </div>

          {/* Right: Content Detail */}
          <div
            data-testid={`subservice-${active}`}
            className="flex-1 min-w-0 bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden"
          >
            {/* Header Content */}
            <div className="p-6 lg:p-8 border-b border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 bg-blue-600 rounded-full" />
                <h3 className="text-2xl font-black tracking-tighter text-[#0B1B3D] uppercase">
                  {moduleTitle}
                </h3>
              </div>
              <p className="text-[15px] text-slate-500 font-medium leading-relaxed mb-8">
                {moduleDesc}
              </p>
              
              <div className="space-y-4">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-blue-600 mb-3">Outcomes</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {outcomeBullets.map((line, idx) => (
                      <li key={idx} className="flex gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100/50">
                        <div className="mt-0.5 w-4 h-4 rounded bg-blue-600 flex items-center justify-center shrink-0">
                          <Check className="h-2.5 w-2.5 text-white" strokeWidth={4} />
                        </div>
                        <span className="text-[12px] text-slate-600 font-medium leading-relaxed">{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Capabilities Grid */}
            <div className="bg-[#F8FAFC]/50 p-6 lg:p-8">
              <div className="mb-6">
                <p className="text-[9px] font-black uppercase tracking-widest text-blue-600 mb-1">Core Capabilities</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {capabilityItems.map((cap, i) => (
                  <div
                    key={`${cap.title}-${i}`}
                    className="group relative bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:border-blue-300 transition-all duration-300 h-full flex flex-col"
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <div className="p-1.5 rounded-md bg-blue-50 group-hover:bg-blue-600 transition-colors duration-300">
                        <ListChecks className="h-3 w-3 text-blue-600 group-hover:text-white" />
                      </div>
                      <h4 className="text-[12px] font-black text-[#0B1B3D] uppercase tracking-tight mt-0.5">
                        {cap.title}
                      </h4>
                    </div>
                    <p className="pl-9 text-[11px] text-slate-500 font-medium leading-relaxed flex-1">
                      {cap.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
