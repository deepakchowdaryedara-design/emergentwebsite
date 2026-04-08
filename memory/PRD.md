# NeuralTrix AI - PRD

## Problem Statement
Create a corporate website for NeuralTrix AI (AI consulting & software development) based on openxcell.com structure, with navy blue + white corporate style, plain colors. All sections from reference site + individual subpages for every section + careers page.

## Architecture
- **Frontend**: React + Tailwind CSS + Shadcn UI + Framer Motion
- **Backend**: FastAPI + MongoDB
- **Routing**: React Router v7 with 30+ routes
- **Fonts**: Cabinet Grotesk (headings), Satoshi (body), JetBrains Mono (metrics)
- **Icons**: Lucide React + React Icons (Si prefix for tech stack)

## What's Been Implemented (April 6, 2025)

### Homepage (14 sections)
- Sticky header with navigation, Hero section, CEO Letter, Services grid, Solutions list, Case Studies, Tech Stack, Stats, Industries, Why Choose Us (accordion), Testimonials (carousel), Blog Resources, Contact Form (DB connected), Footer

### Subpages (30+ routes) — Updated April 6
- **/services** - Listing page + 8 individual service pages with 14 sections each:
  1. Hero with image 2. Impact Stats (5 metrics with sources) 3. Overview 4. Subservices (8 expandable cards, 4 sub-items each) 5. Tech Stack (4 categories) 6. Process Roadmap (6 steps) 7. Mid-page CTA 8. Why Choose Us + Stats Grid 9. Related Case Studies 10. Industries Served (tabbed) 11. Testimonials Carousel 12. Blog Resources 13. FAQ Accordion 14. Contact Form
- **/solutions** - Listing + 5 detail pages with hero images, overview, features, CTA, testimonials, blog, FAQ, contact
- **/case-studies** - Listing + 4 detail pages with hero images, results metrics, challenge/solution, testimonials, blog, FAQ, contact
- **/industries** - Listing + 7 detail pages with 12 sections: hero image, overview, capabilities, impact stats, CTA, process, case studies, testimonials, blog, FAQ, contact
- **/blog** - Listing + 3 full articles with related articles
- **/about** - Timeline, team, mission/vision, offices, CTA, contact
- **/careers** - Job listings, department filters, culture section, contact

### Animations & UX
- Scroll-in animations on all sections (framer-motion useInView)
- Staggered card animations on grids
- Hover effects on all interactive elements
- Smooth page transitions with ScrollToTop

### Every Subpage Includes
- Hero section with CTAs
- Detailed content (features, process steps, paragraphs)
- Mid-page CTA section
- FAQ accordion
- Contact form with MongoDB storage

### Backend API
- POST /api/contact - Stores form submissions
- GET /api/contact - Retrieves submissions

## Prioritized Backlog
- P1: SEO meta tags per page, Open Graph tags
- P1: Blog CMS / admin panel for managing articles
- P2: Newsletter subscription functionality
- P2: Pricing/cost estimation section on service pages
- P3: Search functionality across all pages
