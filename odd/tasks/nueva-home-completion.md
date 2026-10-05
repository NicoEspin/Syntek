# Complete `/nueva-home`

> **Feature identity:** `nueva-home-completion`  
> **Status:** NH-11 source complete; runtime verification deferred  
> **Delivery:** Local and uncommitted by explicit user instruction

## Current state

| Task | State | Verification |
|---|---|---|
| NH-01 | Complete | Lint, focused copy check, and ES/EN JSON parse passed |
| NH-02 | Source complete | Deferred by explicit user instruction |
| NH-03 | Source complete | Deferred by explicit user instruction |
| NH-04 | Source complete | Deferred by explicit user instruction |
| NH-05 | Source complete | Deferred by explicit user instruction |
| NH-06 | Source complete | Deferred by explicit user instruction |
| NH-07 | Pending | Runtime verification remains unauthorized |
| NH-08 | Source complete | Deferred by explicit user instruction |
| NH-09 | Source complete | Deferred by explicit user instruction |
| NH-09R | Source complete | Verification deferred by explicit user instruction |
| NH-10 | Source complete | Deferred by explicit user instruction |
| NH-11 | Source complete | Runtime verification deferred by explicit user instruction |

NH-02–NH-06 remain historically valid as implementation evidence, but their content and assembly are superseded where the revised contract below conflicts with them.

## Binding final contract

### Final page order

1. Hero
2. Manifesto / recognition
3. Fused Systems + Operations
4. Outcome-oriented Services
5. Interstitial
6. Production Projects
7. Production Testimonials
8. Process
9. Offers
10. FAQ
11. CTA
12. Footer

### Content decisions

| Area | Binding decision |
|---|---|
| Hero | Preserve composition, hierarchy, creative direction, and secondary CTA `Ver proyectos`. Remove only real-looking claims and telemetry. |
| Manifesto | Lead with business growth and the disorder that grows with it, not abstract system language. |
| Systems + Operations | Fuse into one section using flow, information, follow-up, and next-step language. Do not use commercial `architecture` framing. |
| Services | Exactly four primary outcomes: generate enquiries; sell or receive orders; organise operations; reduce manual work. AI is an applied capability, not a fifth outcome. |
| Interstitial | Exact ES headline: `La mejor tecnología es la que se vuelve parte del trabajo.` Use a professional EN equivalent. |
| Projects | Reuse the exact production-home `src/app/sections/Projects.jsx` component with its current production selection and behavior. Do not add route-specific selection props or fork its markup. |
| Testimonials | Reuse the exact production-home `src/app/sections/home-v2/TestimonialsSection.jsx` component with its current production content and behavior. Do not recreate or restyle it globally. |
| Process | Exact ES headline: `Primero entendemos. Después construimos.` |
| Offers | Exact ES headline: `No tenés que saber qué solución necesitás.` Modalities: Landing, Corporate Website, System. |
| FAQ | Address objections, including Instagram/WhatsApp versus a website and uncertainty/orientation. Remove questions that merely repeat offered services. Reuse existing `FaqV2`. |
| CTA | Primary uses localized contact route. Secondary uses `getWhatsAppUrl()`. No modal form. WhatsApp is a closing/contact action, not the Hero secondary CTA. |
| Footer | Exact ES statement: `Web, software y automatizaciones para negocios que quieren ordenar su presencia y operación digital.` |

### Truth and reuse constraints

- Do not invent metrics, prices, outcomes, review verification, client classifications, response SLAs, or timelines.
- Do not render internal evidence notes or unresolved attribution.
- Use route-local content and visual components except the explicitly authorized `TitleSection`, `FaqV2`, production `Projects`, and production `TestimonialsSection` reuse.
- Production `Projects.jsx` and `TestimonialsSection.jsx` must be integrated without modifying their selection, markup, cards, cursor, motion, links, or copy unless an unavoidable integration defect is proven.
- Preserve the production home, production footer, reference assets, and unrelated dirty work.
- Keep the preview route `noindex`; do not migrate canonical, schema, or production metadata.
- All visible copy must exist in matching ES/EN message structures; reused production sections retain their existing `Projects` and `HomeV2.testimonials` namespaces.

## Delivery and skipped-check policy

- All new tasks are **delegated** because each requires broad reading and at least two non-trivial files.
- Source readback is required after every task.
- Lint, tests, QA, browser automation, browser checks, dev server, Lighthouse, audits, and builds are skipped unless the user later authorizes them.
- Skipped checks are recorded as `Skipped by explicit user instruction`; no result may be inferred.
- No commits, PRs, staging, pushes, branch changes, remotes, or destructive Git actions.

## Historical implementation evidence

### NH-01 — Baseline, localization, and package hygiene

**State:** Complete.

- Localized existing Manifesto and Services content in ES/EN.
- Kept those sections server-rendered and corrected nueva-home Motion package imports.
- Added the isolated frame map and preservation boundaries.
- Checks passed: `npm run lint`, focused Spanish-literal scan, and ES/EN JSON parsing.
- No commit or build.

### NH-02 — Scroll and beam orchestration

**State:** Source complete; verification deferred.

- Added direct GSAP dependency and isolated `NewHomeScrollOrchestrator` client boundary.
- Added declarative stage hooks, Hero exit, beam progression, Lenis integration, responsive/reduced-motion gating, and deterministic cleanup.
- Runtime checks were skipped by explicit user instruction.

### NH-03 — Earlier Manifesto, Services, and Interstitial pass

**State:** Source complete; partially superseded by NH-08.

- Preserved the original Manifesto and primary Services composition.
- Added secondary services and route-local lime Interstitial.
- Added ES/EN copy and declarative expansion hooks.
- Revised narrative and Services outcomes now belong to NH-08.

### NH-04 — Earlier Systems / Reliability pass

**State:** Source complete; superseded by the fused NH-08 direction.

- Added a route-local Server Component with architecture and integration scenes.
- Added ES/EN labels, responsive styles, and stage registration.
- Commercial architecture framing must be removed during NH-08.

### NH-05 — Earlier Operations pass

**State:** Source complete; superseded by the fused NH-08 direction.

- Added static activity, system-status, and workflow subcomponents with illustrative-data qualifiers and accessibility summaries.
- Added responsive route-local styles and stage registration.
- Standalone assembly is replaced by the fused Systems + Operations section in NH-08.

### NH-06 — Earlier Proof, Offers, CTA, and Footer pass

**State:** Source complete; partially superseded by NH-09 and NH-10.

- Omitted unsupported prices and metrics.
- Added qualitative proof, service modalities, contact CTA, and route footer using repository-owned links.
- Revised Selected Work, Testimonials, Process, FAQ, Offers headline, CTA, and Footer contract now belongs to NH-09/NH-10.

### NH-07 — Runtime verification

**State:** Pending.

- Reserved for authorized runtime validation across locales, responsive widths, keyboard navigation, reduced motion, overflow, hydration, console output, and performance.
- Do not run it under the current source-only authorization.

## Revised implementation tasks

### - [ ] NH-08 — Narrative core *(source complete; verification deferred)*

**Route:** Delegated.  
**Trigger evidence:** Requires broad reconciliation across Hero, Manifesto, Systems, Operations, Services, Interstitial, messages, route CSS, guide copy, and stage ordering; changes span more than two non-trivial files.

**Intent**

Implement the corrected opening narrative without changing the approved Hero art direction.

**Authorized file scope**

- Existing nueva-home Hero, Manifesto, Systems, Operations, Services, Interstitial, orchestrator stage attributes, route CSS, page assembly, and `NewHome` ES/EN keys only.
- No production components or project data.

**Work**

- Remove only real-looking Hero telemetry/claims; retain `Ver proyectos`.
- Rewrite Manifesto around growth creating operational disorder.
- Fuse Systems + Operations into one maintainable route-local section; remove commercial architecture language and superseded standalone assembly.
- Reframe Services into exactly four primary outcomes; keep AI subordinate/applied.
- Preserve the exact Interstitial headline and professional EN equivalent.
- Align source order for this narrative core.

**Acceptance**

- [ ] Hero visual composition and both CTA intents remain intact. *Source preserved; browser verification skipped.*
- [ ] No realistic telemetry or unsupported claim remains in Hero UI. *Timestamps, durations, counters, and live-looking status treatment removed; browser verification skipped.*
- [ ] Manifesto, fused flow section, four Services outcomes, and Interstitial follow the binding contract. *Source complete; browser verification skipped.*
- [ ] All visible copy has matching ES/EN keys. *Source readback complete; executable parity check skipped.*
- [ ] Superseded standalone Systems/Operations output is removed from assembly without deleting unrelated work. *Assembly updated; old source retained for rollback.*

**Implementation evidence**

- **Partial state found on resume:** The interrupted invocation had already added and assembled the fused Server Component, revised Hero telemetry, reframed the four Services outcomes, added matching ES/EN namespaces, and introduced route-local desktop/mobile styling. Remaining issues were a stale mobile selector that hid the qualitative Hero stage label and Manifesto copy that did not explicitly name manual tasks and disconnected tools; both were corrected without duplicating files, keys, imports, stages, or styles.
- **Hero preservation:** Headline, body, primary CTA, `Ver proyectos`, workflow panel composition, PointerTilt, intro, navbar, and beam foundations remain intact. Removed `04` step/branch count, status dot, timestamps, millisecond/second durations, and active-run emphasis. Replaced them with qualitative project-stage labels.
- **Manifesto:** Copy now starts from a growing business and the disorder created by WhatsApp, Instagram, spreadsheets, manual tasks, disconnected tools, and memory-dependent follow-up. Existing editorial layout and process panel were preserved.
- **Fused component:** Added route-local Server Component `NewHomeSystemsOperations.jsx`. It replaces separately rendered Systems and Operations with one four-step flow: Input, Information, Follow-up, Next step, plus a responsibility/continuity summary. Commercial architecture framing and illustrative dashboard states are absent.
- **Services:** Retained four cards but changed them to exactly four outcomes: generate enquiries, sell/receive orders, organise operations, and reduce manual work. Applied AI appears only inside the manual-work outcome and its diagram label. Added asymmetric 7/5 and 5/7 desktop spans with explicit single-column mobile fallback. `TitleSection` is imported unchanged for the eyebrow.
- **Interstitial:** Preserved component and expansion hook. Exact ES headline remains `La mejor tecnología es la que se vuelve parte del trabajo.` EN is `The best technology becomes part of the work.` Supporting copy focuses on understandable, useful adoption.
- **Assembly/stages:** Top sequence is Hero → Manifesto → fused flow → Services → Interstitial. The fused section registers one `flow` stage; superseded Systems and Operations are no longer imported or rendered. Lower NH-06 sections remain temporarily assembled for NH-09/NH-10.
- **Localization:** Updated `NewHome.hero`, `manifesto`, `services`, and `interstitial`; added matching `NewHome.systemsOperations` in ES/EN.
- **Files changed:** `src/app/components/nueva-home/NewHomeHero.jsx`, `src/app/components/nueva-home/NewHomeSystemsOperations.jsx`, `src/app/components/nueva-home/NewHomeServices.jsx`, `src/app/[locale]/nueva-home/page.js`, `src/app/[locale]/nueva-home/page.module.css`, `messages/es.json`, `messages/en.json`, and `odd/tasks/nueva-home-completion.md`. `NewHomeManifesto.jsx`, `NewHomeInterstitial.jsx`, `NewHomeScrollOrchestrator.jsx`, and `TitleSection.jsx` were read back but not modified.
- **Source readback:** All changed files were read back. A stale mobile rule that hid the now-final qualitative run label was removed. No executable check ran.
- **Rollback boundary:** Remove `NewHomeSystemsOperations.jsx`; restore prior Systems/Operations imports and assembly; revert only NH-08 Hero markup/copy, Manifesto/Services/Interstitial message changes, service card span classes, fused CSS, and run-grid CSS.
- **Checks:** Lint, QA, tests, browser/dev-server checks, audits, Lighthouse, and builds — **Skipped by explicit user instruction.**
- **Delivery:** Local and uncommitted; no Git delivery action.

**Rollback boundary**

Revert only NH-08 copy, route-local components, assembly order, stage attributes, and CSS selectors; restore the prior NH-03–NH-05 source blocks without touching Hero foundations or other tasks.

**Checks:** Source readback only. All executable/runtime checks: **Skipped by explicit user instruction.**  
**Delivery:** Local and uncommitted; no Git delivery action.

### - [ ] NH-09 — Proof layer: Selected Work and Testimonials *(historical source complete; presentation superseded by NH-09R)*

**Route:** Delegated.  
**Trigger evidence:** Requires broad reading of `src/data/projects.js`, existing project assets, selected project records, testimonial messages/data, route assembly, localized copy, and route CSS; changes span more than two non-trivial files.

**Intent**

Replace abstract proof with factual route-local project evidence and restrained testimonials.

**Authorized file scope**

- New route-local `NewHomeSelectedWork.jsx` and testimonial component(s), nueva-home page/CSS, `NewHome` ES/EN keys, and read-only consumption of `src/data/projects.js` and existing assets.
- Explicitly exclude `Projects.jsx`, `ProjectsClient.jsx`, and `ProjectCard.jsx` from imports and edits.

**Work**

- Render Cari Turismo, Constructora SaaS, and Thumblify from repository data/assets.
- Mark Cari Turismo only as an explicit real client case.
- Use neutral product wording for Constructora SaaS and Thumblify; do not infer client ownership.
- Do not claim external demos without runtime verification.
- Add Fernando as primary testimonial and Vale as secondary; exclude internal attribution phrases from visible UI.

**Acceptance**

- [ ] Selected Work is route-local and data-backed. *Source complete; browser verification skipped.*
- [ ] Project claims match the approved factual restrictions. *Source readback complete; runtime verification skipped.*
- [ ] Testimonials render only approved public-facing text and attribution. *Source complete; browser verification skipped.*
- [ ] No fake social proof, review-verification claim, or unsupported demo link exists. *Source readback complete; external verification skipped.*
- [ ] ES/EN content and image alternatives are present. *Matching source keys read back; executable parity check skipped.*

**Implementation evidence**

- **Selected Work component:** Added route-local Server Component `src/app/components/nueva-home/NewHomeSelectedWork.jsx`. It imports `getProjectById` from `src/data/projects.js`, selects `cari-turismo`, `constructora-software`, and `thumblify` in that order, and does not import production Projects components.
- **Classifications:** Cari Turismo renders `Caso real · Cliente` / `Real case · Client`. Constructora SaaS renders `Producto de software` / `Software product`. Thumblify renders `Producto SaaS` / `SaaS product`. The unresolved products are not described as clients, owned products, or internal products.
- **Project evidence:** Visible descriptions come directly from each localized `project.description.short`. Technology lists come directly from project tags: Cari Turismo — Next.js, TypeScript, Tailwind CSS, GSAP, WhatsApp, SEO; Constructora SaaS — Next.js, NestJS, TypeScript, PostgreSQL, Prisma; Thumblify — React 19, TypeScript, Vite 7, Tailwind CSS v4, i18next, Axios.
- **Assets:** Uses repository cover images `/projects/cari-turismo/cover.webp`, `/projects/constructora-software/cover.webp`, and `/projects/thumblify/cover.webp` through `next/image`, with fixed aspect-ratio containers, responsive `sizes`, localized alternatives, and mobile stacking.
- **Links:** Every project links only to its locale-prefixed internal detail route `/${locale}/projects/${project.id}`. Repository external project URLs are deliberately not rendered, so no demo, live, availability, or verification claim is made.
- **Editorial layout:** Cari Turismo is the dominant full-width split feature; Constructora SaaS and Thumblify use an asymmetric 5/7 lower grid. Mobile collapses all project and testimonial grids to one column without horizontal tracks.
- **Testimonials component:** Added route-local Server Component `src/app/components/nueva-home/NewHomeTestimonials.jsx`. Fernando Catalano is the dominant quote with existing `src/app/assets/testimonials/fernando.webp`; Vale Sosa is secondary with a typographic fallback. There is no carousel, autoplay, star rating, aggregate score, review count, Google badge, or verification wording.
- **Review sources:** Spanish quote text reuses existing `HomeV2.testimonials`; author identities and review substance are also present in repository review JSON-LD records. English copy is explicitly labeled as a translation of the original Spanish review. The only external testimonial link uses repository constant `GOOGLE_MAPS_URL` with neutral copy `Ver perfil en Google` / `View profile on Google`.
- **Assembly/stages:** Removed the `NewHomeProof` import and rendered output from page assembly without deleting its source. Added Selected Work then Testimonials immediately after Interstitial. Registered narrow `work` and `testimonials` stages through existing declarative data attributes; the orchestrator and beam foundations were not modified.
- **Localization:** Added matching `NewHome.selectedWork` and `NewHome.testimonials` namespaces in `messages/es.json` and `messages/en.json`; project descriptions and technology names continue to come from localized project data.
- **Files changed:** `src/app/components/nueva-home/NewHomeSelectedWork.jsx`, `src/app/components/nueva-home/NewHomeTestimonials.jsx`, `src/app/[locale]/nueva-home/page.js`, `src/app/[locale]/nueva-home/page.module.css`, `messages/es.json`, `messages/en.json`, and `odd/tasks/nueva-home-completion.md`.
- **Source readback:** Components, assembly, message blocks, route-local desktop/mobile CSS, project data exports and records, route configuration, business URL constant, testimonial source text, and asset references were read back. No executable check ran.
- **Rollback boundary:** Remove the two NH-09 route-local components, their page imports/render entries, `selectedWork`/`testimonials` message namespaces, and their route CSS; restore the existing `NewHomeProof` import/render entry without deleting its source or touching project data/assets.
- **Checks:** QA, lint, tests, browser/dev-server checks, Playwright, Lighthouse, audits, builds, JSON parsing, and external review checks — **Skipped by explicit user instruction.**
- **Delivery:** Local and uncommitted; no Git delivery action.

**Rollback boundary**

Remove only NH-09 route-local components, assembly entries, message keys, and CSS; project data and production project components remain untouched.

**Checks:** Source readback only. External review verification and all executable/runtime checks: **Skipped by explicit user instruction.**  
**Delivery:** Local and uncommitted; no Git delivery action.

### - [ ] NH-09R — Production proof component substitution

**State:** Source complete; verification deferred.  
**Contract change:** The user explicitly superseded NH-09's route-local presentation decision while preserving NH-09 as historical implementation evidence.

**Intent**

Replace only the active nueva-home proof presentation with the exact Projects and Testimonials components currently rendered by the production home.

**Authorized file scope**

- `src/app/[locale]/nueva-home/page.js`, narrow route-local wrapper/CSS integration if required, this ledger, and scoped message-provider configuration.
- Read-only inspection of production `src/app/[locale]/page.js`, `src/app/sections/Projects.jsx`, `ProjectsClient.jsx`, `ProjectCard.jsx`, `src/app/sections/home-v2/TestimonialsSection.jsx`, and `src/data/projects.js`.
- Preserve `NewHomeSelectedWork.jsx`, `NewHomeTestimonials.jsx`, their messages, and CSS for rollback. Do not modify production components or data unless an unavoidable integration defect is proven.

**Work**

- Remove route-local Selected Work and Testimonials imports/render entries from nueva-home assembly without deleting their source.
- Insert production `Projects.jsx` after Interstitial and production `TestimonialsSection.jsx` immediately after Projects and before Process.
- Reproduce the narrow production message context required under the locale layout's `messages={null}` contract.
- Add wrapper-only `work` and `testimonials` stage ownership without forking production markup.
- Preserve production selection, cards, cursor, motion, links, `TitleSection`, and testimonial copy exactly.

**Acceptance**

- [ ] Nueva-home imports and renders the same Projects and Testimonials modules as the production home. *Source imports and render entries confirmed; browser verification skipped.*
- [ ] Provider namespaces match the exact production dependencies without broadening unrelated messages. *Scoped to `Projects` and `HomeV2.testimonials`.*
- [ ] Wrapper stages preserve the declarative `work` and `testimonials` sequence. *Wrapper order and beam attributes confirmed by source readback.*
- [ ] Route-local NH-09 components/messages/CSS remain available for rollback but are absent from active assembly. *Preserved and unimported.*
- [ ] Source readback records integration and visual-transition risk without claiming browser parity. *Recorded below.*

**Implementation evidence**

- **Production source of truth:** Reused `src/app/sections/Projects.jsx` exactly as statically imported by `src/app/[locale]/page.js`, with `locale` as its only prop. Its existing `getFeaturedProjects(locale)` selection, `ProjectsClient`, `ProjectCard`, `ProjectCursor`, links, motion, and `TitleSection` remain unchanged.
- **Production Testimonials:** Reused `src/app/sections/home-v2/TestimonialsSection.jsx` through the same `next/dynamic` pattern used by `src/app/[locale]/page.js`. Its content, cards, mobile carousel, reduced-motion behavior, Google profile link, and `TitleSection` remain unchanged.
- **Provider integration:** The locale layout supplies `messages={null}`. A narrow existing `ScopedIntlProvider` now wraps the two reused sections with exactly `Projects` and `HomeV2.testimonials`. `Projects.jsx` still resolves server copy with `getTranslations`, while client `ProjectCard` receives `Projects` and `TestimonialsSection` receives `HomeV2.testimonials` from the scoped provider.
- **Assembly:** Removed active imports/renders of `NewHomeSelectedWork` and `NewHomeTestimonials`. Production Projects now renders immediately after Interstitial; production Testimonials renders immediately after Projects and before Process.
- **Stage wrappers:** Wrapper-only integration registers `work` with beam values `0.3 / 1 / -1` and `testimonials` with `0.22 / -1 / 1`, preserving the existing declarative sequence without forking production markup.
- **CSS bridge:** Added only `.nueva-home-production-proof` to provide route-local stacking and a restrained dark transition surface. No production selector or global style was changed, and visual parity is not claimed without browser verification.
- **Rollback preservation:** `NewHomeSelectedWork.jsx`, `NewHomeTestimonials.jsx`, matching `NewHome` messages, and their route-local CSS remain untouched and unassembled. No destructive cleanup was performed.
- **Files changed:** `src/app/[locale]/nueva-home/page.js`, `src/app/[locale]/nueva-home/page.module.css`, and `odd/tasks/nueva-home-completion.md`. Production home/components, project data, messages, Hero, Navbar, beam foundations, and other approved sections were not modified by NH-09R.
- **Source readback:** Read back nueva-home imports/order, the production home import/dynamic/provider pattern, `Projects.jsx`, `ProjectsClient.jsx`, `ProjectCard.jsx`, `TestimonialsSection.jsx`, locale layout `messages={null}`, `ScopedIntlProvider`, stage wrappers, and the route-local CSS bridge.
- **Risks:** Runtime rendering, nested provider behavior, visual transition, cursor interaction, hydration, responsive overflow, reduced-motion behavior, and bundle impact remain unverified. The dynamic Testimonials chunk and production Projects client subtree intentionally match production behavior but add that production behavior to the preview route.
- **Checks:** QA, lint, tests, JSON parsing, Playwright, Agent Browser, browser/dev-server checks, Lighthouse, audits, builds, installs, and Git operations — **Skipped by explicit user instruction.**
- **Delivery:** Local and uncommitted; no Git delivery action.

**Rollback boundary**

Restore the route-local Selected Work and Testimonials imports/render entries and remove only the NH-09R production-component providers/wrappers. Do not delete either implementation.

**Checks:** Source readback only. All executable/runtime checks: **Skipped by explicit user instruction.**  
**Delivery:** Local and uncommitted; no Git delivery action.

### - [ ] NH-10 — Decision and conversion *(source complete; verification deferred)*

**Route:** Delegated.  
**Trigger evidence:** Requires broad reading across process/service content, existing `FaqV2`, contact routing, `getWhatsAppUrl()`, footer links/constants, route assembly/CSS, and both message files; changes span more than two non-trivial files.

**Intent**

Complete the decision path from understanding the process through selecting a modality, resolving objections, and contacting Synttek.

**Authorized file scope**

- Route-local Process, Offers, CTA, Footer components; existing `FaqV2` integration/content inputs; `TitleSection` for eyebrow labels; nueva-home page/CSS/messages; read-only business/contact constants.
- Production Footer and unrelated production sections remain untouched.

**Work**

- Add Process with exact ES headline `Primero entendemos. Después construimos.`
- Update Offers with exact ES headline `No tenés que saber qué solución necesitás.` and Landing / Corporate Website / System modalities without prices.
- Reuse `FaqV2`; provide objection-focused content including Instagram/WhatsApp versus web and uncertainty/orientation. Remove service-restatement questions.
- CTA primary links to localized contact route; secondary uses `getWhatsAppUrl()` with localized message. No modal.
- Apply exact ES Footer statement and verified localized/internal/external links only.

**Acceptance**

- [ ] Exact required ES headlines and Footer statement are present with professional EN equivalents. *Source complete; browser verification skipped.*
- [ ] FAQ uses `FaqV2` and addresses objections rather than repeating the service list. *Source complete; interactive verification skipped.*
- [ ] CTA intent is consistent and links use established route/business helpers. *Source readback complete; link checks skipped.*
- [ ] No price, SLA, timeline, metric, outcome, or unverified social destination is introduced. *Source readback complete; runtime/external verification skipped.*

**Implementation evidence**

- **Process:** Added route-local Server Component `src/app/components/nueva-home/NewHomeProcess.jsx`; it imports shared `TitleSection` unchanged and does not import the production 460vh sticky Process. Exact ES headline is `Primero entendemos. Después construimos.` and EN is `First we understand. Then we build.`
- **Process content:** Four cautious steps cover understanding context and constraints, prioritising an agreed scope, designing/building agreed pieces, and launching or handing off before evaluating initial use. Copy does not promise continuous optimisation, measurement, support, saved time, outcomes, or universal timelines.
- **Offers:** Preserved the existing three-card baseline and updated the exact heading to `No tenés que saber qué solución necesitás.` / `You do not need to know which solution you need.` Modalities and situations are: Landing for presenting one focused offer and opening an inquiry path; Corporate Website for explaining the business and unifying its digital presence; System for operations that no longer fit spreadsheets or generic tools.
- **Offer restrictions:** No prices, delivery timelines, subscription framing, or guaranteed outcomes render. Proposal language remains contingent on understanding context and agreeing scope.
- **FAQ reuse:** Reused the same production client component `src/app/sections/home-v2/FaqV2.jsx`; no route-local FAQ recreation or production visual wrapper was introduced. `ScopedIntlProvider` supplies only `NewHome.faq` and `NewHome.waMessage`, with component props `namespace="NewHome.faq"` and `waNamespace="NewHome"`.
- **FAQ objections:** The exact ES questions are `Ya vendemos por Instagram y WhatsApp. ¿Para qué necesitamos una web?`, `No tengo claro qué necesito. ¿Me pueden orientar?`, `¿Cómo se define el precio?`, `¿Cuánto puede tardar un proyecto?`, `¿Pueden integrar las herramientas que ya usamos?`, and `¿Voy a poder actualizar el contenido?`. Matching natural EN questions are present. Service-list repetition and SLA/timeline guarantees are absent.
- **FAQ WhatsApp:** The existing `FaqV2` contract continues to call `getWhatsAppUrl(useTranslations(waNamespace)("waMessage"))`; the new `NewHome.waMessage` supplies localized intent without a modal or response-time claim.
- **Shared FAQ change:** `FaqV2.jsx` received one strictly necessary, backward-compatible accessibility correction: existing Motion transitions now consult `useReducedMotion()` and settle immediately when requested. Its props, namespaces, markup structure, production defaults, and standard-motion behavior are unchanged.
- **CTA:** Updated route-local `NewHomeFinalCta.jsx` with shared `TitleSection`, a primary contact link generated by `getLocalizedPath(locale, "/contacto")`, and a secondary external WhatsApp link generated by `getWhatsAppUrl()` from localized `NewHome.waMessage`. No modal was added.
- **Localized contact routing:** The helper resolves `/contacto` to `/es/contacto` and `/en/contact` under the existing routing table; no literal English `/contacto` path is constructed in the final CTA.
- **Existing routing debt outside NH-10:** The unchanged Hero and Navbar still construct `/${locale}/contacto` directly, so their English contact destinations remain an NH-11/source-wide routing risk. They were not edited because the binding NH-10 scope explicitly preserves Hero and limits this contact-routing change to the final CTA.
- **Footer:** Exact ES statement is `Web, software y automatizaciones para negocios que quieren ordenar su presencia y operación digital.` with a natural EN equivalent. Internal links now use `getLocalizedPath`; only repository business constants for Instagram and LinkedIn remain. The placeholder email constant is deliberately not rendered.
- **Assembly:** Final lower sequence is Testimonials → Process → Offers → FAQ → CTA → Footer. Upper NH-08/NH-09 order remains unchanged. FAQ is wrapped only by a route-local bridge for stage/background ownership.
- **Stages:** Process registers `process`; existing Offers and Final CTA retain `offers` and `final`; the FAQ bridge registers `faq`. The orchestrator and beam foundations were not modified.
- **Localization:** Added matching `NewHome.process`, `NewHome.faq`, and `NewHome.waMessage`; revised matching `NewHome.offers`, `NewHome.finalCta`, and `NewHome.routeFooter` content in ES/EN. Visible route-local copy remains message-backed.
- **Responsive/accessibility:** Process and Offers explicitly collapse to one column below 768px; CTA actions stack on mobile. Process uses an ordered list and labelled section; FAQ retains button/region relationships; external links retain safe target attributes. Shared FAQ now respects reduced motion.
- **Files changed:** `src/app/components/nueva-home/NewHomeProcess.jsx`, `src/app/components/nueva-home/NewHomeOffers.jsx`, `src/app/components/nueva-home/NewHomeFinalCta.jsx`, `src/app/components/nueva-home/NewHomeFooter.jsx`, `src/app/[locale]/nueva-home/page.js`, `src/app/[locale]/nueva-home/page.module.css`, `src/app/sections/home-v2/FaqV2.jsx`, `messages/es.json`, `messages/en.json`, and `odd/tasks/nueva-home-completion.md`.
- **Source readback:** All changed components, assembly, scoped provider contract, localized route helper, business helper, ES/EN message blocks, desktop/mobile CSS, and shared reduced-motion branch were read back. No executable check ran.
- **Rollback boundary:** Remove `NewHomeProcess.jsx`; revert NH-10-only Offers/CTA/Footer markup and messages, page imports/assembly/provider bridge, route CSS, and the backward-compatible FAQ reduced-motion additions. Preserve NH-08/NH-09 work, shared FAQ behavior otherwise, production Process, production home, project data/assets, and beam foundations.
- **Checks:** QA, lint, tests, Playwright, Agent Browser, browser/dev-server checks, Lighthouse, audits, builds, installs, JSON parsing, and link/runtime checks — **Skipped by explicit user instruction.**
- **Delivery:** Local and uncommitted; no Git delivery action.

**Rollback boundary**

Remove only NH-10 route-local components/integration, FAQ inputs, message keys, and CSS; production FAQ/Footer/contact infrastructure remains unchanged.

**Checks:** Source readback only. All executable/runtime/link checks: **Skipped by explicit user instruction.**  
**Delivery:** Local and uncommitted; no Git delivery action.

### - [ ] NH-11 — Assembly and motion integration *(source complete; runtime verification deferred)*

**Route:** Delegated.  
**Trigger evidence:** Requires broad route-wide reading of all nueva-home sections, page assembly, data attributes, orchestrator behavior, CSS ordering, localized messages, and superseded components; changes span more than two non-trivial files.

**Interrupted-attempt finding:** The failed connection did not leave a clean state. It had already changed Hero, Navbar, and route-local Selected Work links to `getLocalizedPath` and marked NH-11 source complete in this ledger. Those routing edits are preserved as pre-existing partial NH-11 work and are out of scope for NH-09R; final NH-11 reconciliation is reopened after the accepted production-component substitution.

**Intent**

Assemble the approved sequence and remap declarative motion stages without performing runtime verification.

**Authorized file scope**

- Nueva-home page assembly, route-local section imports/components, route CSS, `NewHome` messages, and narrow declarative stage/orchestrator configuration only.
- No production home/components, package changes, reference edits, or runtime tooling.

**Work**

- Enforce the exact final page order.
- Remove superseded sections from assembly while preserving rollback-safe source until explicitly authorized for deletion.
- Remap beam/stage progression to the final section sequence.
- Confirm static/reduced-motion final states and mobile source ordering by readback.
- Record remaining NH-07 verification debt.

**Acceptance**

- [ ] Assembly matches the approved twelve-part order exactly. *Source order includes production Projects and Testimonials; browser verification skipped.*
- [ ] No superseded section renders twice. *No active import/render remains for standalone Systems, Operations, Proof, route-local Selected Work, or route-local Testimonials.*
- [ ] Stage hooks are unique, ordered, and owned by the existing orchestrator. *Active DOM order and NH-09R wrappers confirmed by source readback; motion timing remains unverified.*
- [ ] Static source remains meaningful without motion. *Content order and links do not depend on the orchestrator; reduced-motion and mobile branches preserve native document flow by source inspection.*
- [ ] Source readback records responsive, accessibility, and performance risks without claiming runtime results. *Recorded below; all executable checks remain skipped.*

**Implementation evidence**

- **Prior partial state:** The interrupted attempt had already changed Hero, Navbar, and rollback-only `NewHomeSelectedWork` links to `getLocalizedPath`. It had also prematurely marked NH-11 complete. Those routing edits were preserved, then the ledger was reopened after NH-09R changed active proof presentation.
- **Final assembly:** `page.js` renders Hero → Manifesto / recognition → fused Systems + Operations → objective-oriented Services → Interstitial → production `Projects.jsx` → production `TestimonialsSection.jsx` → route-local Process → Offers → reused `FaqV2` → CTA inside `<main>`, followed by Footer outside `<main>`.
- **Declarative stages:** The active sequence is `hero` → `manifesto` → `flow` → `services` → `interstitial` → `work` → `testimonials` → `process` → `offers` → `faq` → `final`. Footer intentionally has no stage and inherits the lower-page atmospheric state.
- **Beam progression:** Source values progress coherently as `hero 1/0/0`, `manifesto .68/-3/4`, `flow .34/1/1`, `services .5/2/0`, `interstitial .42/-1/3`, `work .3/1/-1`, `testimonials .22/-1/1`, `process .3/1/0`, `offers .34/-1/0`, `faq .24/1/1`, and `final .28/0/-1`. This is source evidence only, not a runtime appearance claim.
- **Orchestrator preservation:** `NewHomeScrollOrchestrator.jsx` remains unchanged. Its only named-stage selector is the required Hero exit hook; all progression remains declarative through DOM-ordered `[data-nh-stage]` discovery. Native scrolling, delayed GSAP loading, fine-pointer desktop guard, reduced-motion guard, cleanup, and beam foundations remain intact.
- **Routing correction:** Hero contact/projects actions, desktop/mobile Navbar service/projects/about links, and Navbar contact CTA use `getLocalizedPath`. No assembled route-local component constructs a raw locale-prefixed Spanish slug. Hero secondary CTA remains `Ver proyectos` / `View projects` and does not use WhatsApp. The inactive rollback-only Selected Work links also use the helper.
- **FAQ contract:** Production `FaqV2.jsx` remains reused through `ScopedIntlProvider` with namespaces `NewHome.faq` and `NewHome.waMessage`, plus props `namespace="NewHome.faq"` and `waNamespace="NewHome"`.
- **Production proof provider:** Production Projects and Testimonials remain wrapped by the narrow `ScopedIntlProvider` namespaces `Projects` and `HomeV2.testimonials`. Projects is statically imported as on production; Testimonials retains the production `next/dynamic` pattern. Wrapper-only `work` and `testimonials` stages do not fork production markup.
- **CTA and Footer:** Final CTA retains `getLocalizedPath(locale, "/contacto")` plus `getWhatsAppUrl(whatsappMessage)`. Footer internal service/project/about/blog/contact links all use `getLocalizedPath`; verified Instagram and LinkedIn constants remain unchanged.
- **Static and responsive source:** Every section remains in semantic document order without animation. Existing mobile CSS collapses section grids and stacks CTA actions; reduced-motion CSS suppresses animation/transition duration, while the orchestrator does not initialize under the reduced-motion query.
- **Localization reconciliation:** Matching ES/EN structures were read back for assembled `NewHome` namespaces and required production `Projects` / `HomeV2.testimonials` namespaces. Historical `selectedWork`, `testimonials`, `systems`, `operations`, and `proof` keys remain deliberately preserved for rollback.
- **CSS reconciliation:** Active `.nueva-home-production-proof` and `.nueva-home-faq-bridge` wrappers are route-scoped under the CSS module root. Historical Selected Work, Testimonials, Systems, Operations, and Proof selectors remain inactive because their components are unassembled; no active conflict was found by source inspection.
- **Superseded source:** `NewHomeSystems.jsx`, `NewHomeOperations.jsx`, `NewHomeProof.jsx`, `NewHomeSelectedWork.jsx`, and `NewHomeTestimonials.jsx` are not imported or rendered by the route. Their source/messages/CSS remain preserved for rollback.
- **Files changed:** Prior partial NH-11 work changed `NewHomeHero.jsx`, `NewHomeNavbar.jsx`, rollback-only `NewHomeSelectedWork.jsx`, and this task ledger. The resumed reconciliation required no further source-code edit beyond final ledger evidence. NH-09R's earlier `page.js` and CSS changes remain intact but are not reclassified as NH-11 edits.
- **Source readback:** Read back final page imports/order, dynamic import, both scoped providers, production component dependencies, route helpers, every active stage/beam attribute, orchestrator selectors/guards, assembled ES/EN message shapes, route wrapper selectors, mobile/reduced-motion CSS, and rollback-only source references. No executable or runtime result is claimed.
- **Residual risks:** Runtime appearance, stage timing, interaction behavior, localized navigation, hydration, responsive overflow, reduced-motion behavior, and bundle impact remain unverified until NH-07 is explicitly authorized.
- **Checks:** QA, lint, tests, JSON parsing, Playwright, Agent Browser, browser/dev-server checks, Lighthouse, audits, builds, installs, and Git-derived diff accounting — **Skipped by explicit user instruction.**
- **Delivery:** Local and uncommitted; no Git delivery action. Source-accounting delta for NH-11 route code is three added imports with route expressions replaced in place; Git-derived line delta is unavailable because Git commands are prohibited.

**Rollback boundary**

Revert only the NH-11 `getLocalizedPath` substitutions in Hero, Navbar, and rollback-only Selected Work plus this final reconciliation evidence. Do not revert NH-09R production-component assembly or completed NH-08–NH-10 work.

**Checks:** Source readback only. Lint, tests, QA, browser/dev-server checks, audits, Lighthouse, and builds: **Skipped by explicit user instruction.**  
**Delivery:** Local and uncommitted; no Git delivery action.

## Evidence ledger

| Task | Evidence | Rollback | Notes |
|---|---|---|---|
| NH-01 | Baseline/i18n checks passed | Surgical NH-01 edits | Complete |
| NH-02 | GSAP orchestration and stage API | Remove NH-02 orchestration changes | Verification deferred |
| NH-03 | Earlier Manifesto/Services/Interstitial | Remove NH-03 additions | Partially superseded by NH-08 |
| NH-04 | Earlier Systems section | Remove NH-04 additions | Superseded by NH-08 fusion |
| NH-05 | Earlier Operations section | Remove NH-05 additions | Superseded by NH-08 fusion |
| NH-06 | Earlier proof/offers/CTA/footer | Remove NH-06 additions | Partially superseded by NH-09/NH-10 |
| NH-07 | Pending runtime verification | N/A | Unauthorized in current workflow |
| NH-08 | Source complete | Scoped in task | Verification deferred |
| NH-09 | Source complete | Scoped in task | Verification deferred |
| NH-09R | Source complete | Restore route-local NH-09 assembly | Verification deferred |
| NH-10 | Source complete | Scoped in task | Verification deferred |
| NH-11 | Source complete | Scoped in task | Runtime verification deferred |

## Next step

No further approved source implementation is pending. NH-07 runtime verification is the only remaining task and requires future explicit authorization.
