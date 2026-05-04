/**
 * High-resolution AI / enterprise IT hero imagery (Unsplash).
 * Used with HeroAnimatedBackdrop (Ken Burns + subtle “digital pulse”).
 * `ixlib` + `ixid` pattern matches Unsplash’s hotlink expectations and improves load reliability.
 */
export const hq = (photoPath) =>
  `https://images.unsplash.com/${photoPath}?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=88`;

/** Architecture / diagram-style visual for industry overview panels (not hero duplicate). */
export const INDUSTRY_ARCHITECTURE_IMAGE = hq("photo-1558494949-ef010cbdcc31");

/** Homepage: flagship abstract AI / neural aesthetic */
export const HOME_HERO_IMAGE = hq("photo-1677442136019-21780ecad995");

/** Fallback when `PageHero` is used without an `image` prop */
export const DEFAULT_PAGE_HERO_IMAGE = HOME_HERO_IMAGE;

/** Services listing (`/services`): engineering delivery & AI consulting */
export const SERVICES_LANDING_HERO_IMAGE = hq("photo-1518980120692-3cfe64c152d0");

/** Listing pages */
export const LISTING_PAGE_HERO_IMAGES = {
  /** Solutions: data intelligence & product innovation */
  solutions: hq("photo-1551288049-bebda4e38f71"),
  /** Industries: global enterprise connectivity */
  industries: hq("photo-1451187580459-43490279c0fa"),
  /** Case studies: outcomes & analytics */
  caseStudies: hq("photo-1460925895917-afdab827c52f"),
  /** Blog: engineering insights & editorial */
  blog: hq("photo-1517694712202-14dd9538aa97"),
};

/** Company pages */
export const ABOUT_HERO_IMAGE = hq("photo-1522071820081-4ef5e1c0b612");
export const CAREERS_HERO_IMAGE = hq("photo-1521737711867-e3b97375f902");

/** Product / solution detail pages */
export const SOLUTION_HERO_IMAGES = {
  "databrain-ai": hq("photo-1551288049-bebda4e38f71"),
  "medimind-ai": hq("photo-1576091160399-112ba8d25d1d"),
  "talentify-ai": hq("photo-1522071820081-4ef5e1c0b612"),
  "quikbiz-ai": hq("photo-1556740738-b6a63e27c4df"),
  "intellibot-ai": hq("photo-1531482615713-2afd69097998"),
};

/**
 * Industry verticals; indices referenced by `industries` data (not strictly display order)
 */
export const INDUSTRY_HERO_IMAGES = [
  hq("photo-1556742049-0cfed4f6a45d"),
  hq("photo-1576091160399-112ba8d25d1d"),
  hq("photo-1563013544-824ae1b704d3"),
  hq("photo-1503676260728-1c00da094a0b"),
  hq("photo-1511512578047-dfb367046420"),
  hq("photo-1560518883-ce09059eeffa"),
  hq("photo-1581091226825-a6a2a5aee158"),
];

/** Case study detail: order matches `caseStudies` */
export const CASE_STUDY_HERO_IMAGES = [
  hq("photo-1536240478700-b869070f9279"),
  hq("photo-1503676260728-1c00da094a0b"),
  hq("photo-1462331940025-496dfbfc7564"),
  hq("photo-1488646953014-85cb44e25828"),
];

/** Blog listing cards + article heroes */
export const BLOG_ARTICLE_HERO_IMAGES = {
  "augment-code-vs-cursor": hq("photo-1555949963-aa79dcee981c"),
  "claude-vs-chatgpt-coding": hq("photo-1677442136019-21780ecad995"),
  "top-vibe-coding-tools": hq("photo-1461749280684-dccba630e2f6"),
};

/**
 * Services listing heroes; order matches `services` array:
 * Applied AI, Generative AI, Custom software, Mobile, Agents, LLM, DevOps, Data
 *
 * Themes: neural/AI · generative robotics · IDE & code · mobile · automation/robotics ·
 * engineering workspace (LLM) · CI/CD & keyboards · analytics dashboards
 */
export const SERVICES_HERO_IMAGES = [
  hq("photo-1677442136019-21780ecad995"),
  hq("photo-1620712943543-bcc4688e7485"),
  hq("photo-1461749280684-dccba630e2f6"),
  hq("photo-1512941937669-90a1b58e7e9c"),
  hq("photo-1555949963-aa79dcee981c"),
  hq("photo-1517694712202-14dd9538aa97"),
  hq("photo-1558494949-ef010cbdcc31"),
  hq("photo-1551288049-bebda4e38f71"),
];
