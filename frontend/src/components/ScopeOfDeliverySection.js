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
      className="corp-pat-dots border-b border-slate-100 bg-[#fafbfc] pb-4 pt-6 sm:pb-6 sm:pt-8 md:pb-8 md:pt-10"
    >
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <AnimatedSection>
          <div className="mb-5 max-w-2xl text-left lg:mb-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
              Scope of Delivery
            </p>
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-[#0B1B3D] sm:text-4xl">
              Our {service.title} Services
            </h2>
            <p className="text-[15px] leading-snug text-slate-600">
              Service modules are structured to shorten time-to-value while keeping architecture
              and operations maintainable.
            </p>
          </div>
        </AnimatedSection>

        <div className="flex min-h-0 flex-col gap-4 lg:flex-row lg:items-start lg:gap-5">
          {/* Left: nav panel grows when column stretches to match detail column */}
          <div className="flex w-full shrink-0 flex-col lg:h-full lg:min-h-0 lg:w-[min(100%,300px)] lg:gap-3 xl:w-[320px]">
            <div className="corp-scope-panel flex min-h-0 flex-col overflow-hidden rounded-md border border-slate-200 bg-white shadow-[0_1px_3px_rgba(15,23,42,0.06)] lg:min-h-0">
              <nav
                className="flex flex-col lg:min-h-0 lg:flex-1 lg:overflow-y-auto lg:overscroll-y-contain lg:[scrollbar-width:thin]"
                aria-label="Service modules menu"
              >
                {subs.map((s, i) => {
                  const isActive = active === i;
                  const ItemIcon = resolveSubserviceNavIcon(s);
                  return (
                    <button
                      key={s.title}
                      type="button"
                      data-testid={`scope-delivery-nav-${i}`}
                      onClick={() => setActive(i)}
                      className={`flex w-full items-center gap-3 border-b border-slate-100 px-3 py-3 text-left transition-colors last:border-b-0 sm:px-4 ${isActive
                          ? "border-l-[3px] border-l-[#0B1B3D] bg-slate-50 pl-[13px]"
                          : "border-l-[3px] border-l-transparent hover:bg-slate-50/80"
                        }`}
                    >
                      <ItemIcon
                        className={`h-4 w-4 shrink-0 ${isActive ? "text-[#0B1B3D]" : "text-slate-400"}`}
                        strokeWidth={2}
                        aria-hidden
                      />
                      <span
                        className={`flex-1 text-sm font-medium leading-snug ${isActive ? "text-[#0B1B3D]" : "text-slate-600"
                          }`}
                      >
                        {s.title}
                      </span>
                      <ChevronRight
                        className={`h-4 w-4 shrink-0 ${isActive ? "text-slate-500" : "text-slate-300"}`}
                        aria-hidden
                      />
                    </button>
                  );
                })}
              </nav>
            </div>

            <div
              className="corp-scope-panel shrink-0 rounded-md border border-slate-200 bg-white p-4 shadow-[0_1px_3px_rgba(15,23,42,0.06)] sm:p-5"
              data-testid="scope-custom-scope-aside"
            >
              <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-slate-50/80">
                <Lightbulb className="h-4 w-4 text-slate-600" aria-hidden />
              </div>
              <h3 className="mb-1.5 text-sm font-semibold text-[#0B1B3D]">Custom scope</h3>
              <p className="mb-4 text-sm leading-snug text-slate-600">
                Discuss architecture, integration points, and delivery sequencing with our team.
              </p>
              <Link
                to={contactFormTo(location.pathname, CONTACT_TOPIC.CONTACT)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-[#0B1B3D] transition-colors hover:border-slate-400 hover:bg-slate-50"
              >
                Contact us
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>

          {/* Right: grows with content at zoom; scrolls only if needed (zoom-safe vs fixed vh + overflow clip) */}
          <div
            data-testid={`subservice-${active}`}
            className="corp-scope-detail flex min-h-0 min-w-0 flex-1 flex-col overflow-y-auto overflow-x-hidden rounded-md border border-slate-200 border-t-[3px] border-t-[#0B1B3D] bg-white shadow-[0_2px_8px_rgba(15,23,42,0.06)] lg:min-h-0"
          >
            <div className="shrink-0 border-b border-slate-100 px-5 pb-4 pt-5 sm:px-6 sm:pb-5 sm:pt-6">
              <h3 className="mb-2 text-xl font-semibold tracking-tight text-[#0B1B3D] sm:text-2xl">
                {moduleTitle}
              </h3>
              <p className="mb-5 text-[15px] leading-snug text-slate-600">{moduleDesc}</p>
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#0B1B3D]/80">
                Outcomes
              </p>
              <p className="mb-3 text-xs leading-snug text-slate-600">
                This methodology emphasizes measurable delivery, integration discipline, and operational readiness.
              </p>
              <ul className="space-y-2 text-sm leading-snug text-slate-700">
                {outcomeBullets.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-slate-400" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex min-h-0 flex-col border-t border-slate-100 bg-[#f4f6f9] lg:min-h-0">
              <div className="shrink-0 border-b border-slate-100 px-5 pb-1.5 pt-2.5 sm:px-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0B1B3D]/80">
                  Core capabilities
                </p>
                <p className="mt-0.5 text-xs leading-snug text-slate-600">
                  Updates when you change the module selection above.
                </p>
              </div>
              <div
                className="flex flex-col px-5 pb-2 pt-2 sm:px-6 sm:pb-2.5"
                role="region"
                aria-label="Core capabilities"
              >
                {capabilityItems.length > 0 ? (
                  <div className="isolate grid grid-cols-1 items-start gap-1.5 sm:grid-cols-2 sm:gap-x-2 sm:gap-y-1.5 sm:auto-rows-auto">
                    {capabilityItems.map((cap, i) => (
                      <div
                        key={`${cap.title}-${i}`}
                        data-testid={`scope-delivery-cap-${i}`}
                        className="corp-scope-cap relative isolate flex h-auto min-h-0 w-full flex-col gap-0.5 self-start rounded-md border border-slate-200 bg-white px-2.5 py-2 shadow-[0_1px_2px_rgba(15,23,42,0.05)] antialiased"
                      >
                        <div className="flex min-h-0 items-start gap-2">
                          <ListChecks className="mt-0.5 h-4 w-4 shrink-0 text-[#0B1B3D]/45" aria-hidden />
                          <span className="min-w-0 flex-1 break-words text-sm font-semibold leading-snug text-[#0B1B3D]">
                            {cap.title}
                          </span>
                        </div>
                        <p className="min-h-0 max-w-full break-words pl-6 text-xs leading-snug text-slate-600">
                          {cap.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="py-4 text-sm text-slate-500">
                    Capability detail is confirmed during discovery for this module.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
