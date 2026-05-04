import { CASE_STUDY_HERO_IMAGES as caseStudyHeroes } from "../lib/heroImageThemes";

/**
 * Tracefold delivery narratives: problem classes NeuralTrix is built to address.
 * Not depictions of completed customer programs; use them to compare your situation to our methods.
 */
const caseStudies = [
  {
    slug: "ai-video-creation",
    archetype: "Media & brand content teams",
    title: "Tracefold: AI-assisted video and avatar production",
    industry: "Media & Content",
    heroTitle: "Multilingual avatar-led video with governed rendering pipelines",
    heroDesc:
      "A representative pattern for organizations that want to scale persona-led video: avatar and voice integrations, script workflows, and cloud rendering with cost and concurrency controls.",
    heroImage: caseStudyHeroes[0],
    challenge:
      "Media and marketing teams often face high cost per minute, slow turnaround across languages, and inconsistent brand voice when expanding video output. A typical engagement begins by prioritizing languages, compliance boundaries (e.g. likeness and disclosure), and throughput targets.",
    solution:
      "NeuralTrix designs retrieval-assisted scripting tools, integrates proven avatar and speech APIs where appropriate, and implements Azure (or your approved cloud) pipelines for batch and interactive rendering, with monitoring, quotas, and rollback paths suited to your risk profile.",
    results: [
      { metric: "Scope", label: "Pilot definition", desc: "Languages, SLAs, and acceptance tests fixed before scale-up." },
      { metric: "Cost", label: "Unit economics", desc: "Per-minute and concurrency models aligned to your budget." },
      { metric: "Gov", label: "Brand & safety", desc: "Review steps and policy hooks for published output." },
      { metric: "Ops", label: "Observability", desc: "Queues, failures, and usage surfaced for your teams." },
    ],
    techStack: ["Next.js", "Python", "PostgreSQL", "Azure", "LLM APIs", "Retrieval", "Media pipelines"],
    testimonial: null,
    features: [
      "Configurable avatar and voice workflows",
      "Script and brief ingestion with RAG where useful",
      "Rendering orchestration and queue visibility",
      "Role-based access and audit-friendly exports",
      "APIs for CMS or campaign tools",
      "Cost and latency dashboards for stakeholders",
    ],
    faqs: [
      { q: "Is this a guarantee of specific avatar vendors?", a: "Vendor choices depend on your licensing, regions, and quality bar. We evaluate options during discovery and document tradeoffs." },
      { q: "How do we measure success in a pilot?", a: "We co-define metrics such as time-to-publish, cost per finished minute, and qualitative review scores, measured on agreed sample workloads." },
      { q: "Can we start without full enterprise procurement?", a: "Yes. Pilots are scoped to demonstrate value and technical fit with explicit exit criteria." },
    ],
  },
  {
    slug: "smart-teaching-platform",
    archetype: "Schools, districts, and EdTech products",
    title: "Tracefold: educator workflows with AI assistance",
    industry: "Education",
    heroTitle: "Lesson prep, assessment drafts, and feedback loops teachers can govern",
    heroDesc:
      "A representative pattern for reducing administrative load while keeping humans in control: tools for planning, quizzes, and communication aligned to curriculum and privacy rules.",
    heroImage: caseStudyHeroes[1],
    challenge:
      "Instructional teams lose hours to repetitive documentation and alignment work. Programs in this space must respect student data rules (e.g. FERPA), district approval paths, and classroom realities, not generic chat-only demos.",
    solution:
      "NeuralTrix builds modular tools (planning, quiz generation, rubrics, parent drafts) using API-driven models, structured prompts, and human review gates. Data stays in approved environments; we integrate with your identity and storage policies.",
    results: [
      { metric: "Privacy", label: "Policy-first", desc: "Architecture aligned to your jurisdiction and DPA." },
      { metric: "Review", label: "Human gates", desc: "Teacher approval before student-facing use where required." },
      { metric: "Fit", label: "Curriculum hooks", desc: "Standards and formats you specify, not generic output." },
      { metric: "Proof", label: "Pilot metrics", desc: "Time saved and quality checks on agreed samples." },
    ],
    techStack: ["React", "Next.js", "Python", "PostgreSQL", "AWS or Azure", "LLM APIs", "LangChain"],
    testimonial: null,
    features: [
      "Role-aware workflows for staff versus students",
      "Template libraries tied to your standards",
      "Logging suited to district IT review",
      "Exports compatible with LMS where applicable",
    ],
    faqs: [
      { q: "Do you train on student data?", a: "Not without explicit agreement and legal review. Pilots typically use synthetic or district-approved sample sets." },
      { q: "Can IT block features by role?", a: "Yes. Entitlements and feature flags are part of the design." },
    ],
  },
  {
    slug: "ai-astrology-app",
    archetype: "Consumer product companies",
    title: "Tracefold: LLM-powered consumer application",
    industry: "Consumer Tech",
    heroTitle: "Personalized experiences with controlled generation and safety filters",
    heroDesc:
      "A representative mobile-and-API pattern: conversational features, structured calculations or rules engines, and moderated creative output, applicable to wellness, coaching, or other regulated-light consumer domains.",
    heroImage: caseStudyHeroes[2],
    challenge:
      "Product teams need differentiated UX without unbounded model behavior. Mobile performance, offline modes, moderation, and store policies must be designed in, not patched later.",
    solution:
      "NeuralTrix delivers Flutter or native clients with a backend that separates deterministic logic from generative layers, adds safety and content policies, and instruments usage for iteration.",
    results: [
      { metric: "Safety", label: "Moderation", desc: "Policies and escalation paths for generated content." },
      { metric: "Perf", label: "Latency targets", desc: "Budgets for mobile and API routes." },
      { metric: "Data", label: "Retention", desc: "Deletion and export aligned to your policy." },
      { metric: "Ship", label: "Store readiness", desc: "Checklists for review and compliance artifacts." },
    ],
    techStack: ["Flutter", "Python", "Django or FastAPI", "PostgreSQL", "LLM APIs", "Push notifications"],
    testimonial: null,
    features: [
      "Account lifecycle and entitlement handling",
      "Moderation hooks and logging",
      "Analytics events for product iteration",
      "CI/CD and staged rollouts",
    ],
    faqs: [
      { q: "Can this pattern apply outside consumer?", a: "Yes, the same separation of rules, generation, and governance applies to many B2B assistants." },
    ],
  },
  {
    slug: "ai-trip-planner",
    archetype: "Travel and mobility products",
    title: "Tracefold: conversational planning with live data",
    industry: "Travel",
    heroTitle: "Itinerary assistance grounded in maps, pricing hooks, and preferences",
    heroDesc:
      "A representative pattern for combining conversational UX with external APIs: preferences, constraints, and refresh strategies, relevant to travel, logistics-style scheduling, or field operations.",
    heroImage: caseStudyHeroes[3],
    challenge:
      "Users expect coherent plans across suppliers and locations. Systems must handle stale prices, API limits, and ambiguous requests without silent failures.",
    solution:
      "NeuralTrix builds orchestration across LLM routing, maps and places APIs, and your booking or inventory connectors, with explicit failure modes, caching, and human-edit flows.",
    results: [
      { metric: "Truth", label: "Source of truth", desc: "Which fields come from APIs vs. draft text." },
      { metric: "Refresh", label: "Data cadence", desc: "TTLs and re-fetch rules per integration." },
      { metric: "Trust", label: "User control", desc: "Edit, undo, and explain steps in the UI." },
      { metric: "Scale", label: "Cost caps", desc: "Token and API budgets per session." },
    ],
    techStack: ["Flutter or React Native", "Node.js", "LLM APIs", "Maps APIs", "PostgreSQL"],
    testimonial: null,
    features: [
      "Preference capture and constraint solving",
      "Itinerary objects your backend can persist",
      "Offline or degraded-mode behavior where feasible",
      "Experiment hooks for ranking changes",
    ],
    faqs: [
      { q: "Do you guarantee lowest prices?", a: "No, pricing accuracy depends on partner APIs and timing. We design disclosure and refresh behavior instead." },
    ],
  },
];

export default caseStudies;
