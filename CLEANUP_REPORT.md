Search-and-replace and routing cleanup report

Encoding fixes
- src/pages/Home.jsx: replaced titles with garbled ranges → "Key Explorers (Ages 6-8)", "Home Row Heroes (Ages 9-11)".
- src/pages/Programs.jsx: replaced garbled ranges → "Key Explorers (Ages 6-8)", "Home Row Heroes (Ages 9-11)", "Future Coders (Ages 12-14)".
- src/components/Testimonials.jsx: replaced names with proper separators → "Alicia - Austin", "Jamal - Chicago", "Priya - San Jose".
- src/components/SharedFooter.jsx: replaced malformed separators in footer → "Powered by Google Meet - Typing.com - Stripe".

Internal links converted to React Router <Link>
- src/components/Hero.jsx: /how-it-works → <Link to="/how-it-works">.
- src/components/EarlyStartHighlights.jsx: /why-typing → <Link to="/why-typing">.
- src/components/SharedFooter.jsx: Nav links and resource links to /policies and /why-typing#research.
- src/components/NavBar.jsx: Brand link "/" → <Link to="/">.
- src/pages/Home.jsx: /try-typing → <Link to="/try-typing">.
- src/pages/Roadmap.jsx: /try-typing → <Link to="/try-typing">.

Public assets made base-aware (import.meta.env.BASE_URL)
- src/pages/Home.jsx: /roadmap.pdf → ${import.meta.env.BASE_URL}roadmap.pdf.
- src/pages/Programs.jsx: /roadmap.pdf → ${import.meta.env.BASE_URL}roadmap.pdf.
- src/pages/HowItWorks.jsx: /images/launchpad-*.png → ${import.meta.env.BASE_URL}images/launchpad-*.png; /roadmap.pdf → base-aware, rel updated.
- src/pages/Roadmap.jsx: /roadmap.pdf → base-aware in link + iframe.
- src/pages/WhyTyping.jsx: /roadmap.pdf → base-aware.

Other
- Added WhyChooseUs section component and inserted below Hero on Home.
- Added GitHub Pages base + build to docs/, SPA 404 postbuild.
- Injected favicon at runtime to respect BASE_URL.
- Added OG metadata across top-level pages.
- Replaced heavy logo with optimized PNG; added public/favicon.png and public/og-image.png.
- Added visible focus styles and prefers-reduced-motion handling.

