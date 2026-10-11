# Changelog

## 2026-10-11: MCF group website redesign

The MCF site (`mcf.yaml`, https://mcf.tclb.io) was a bare Congo skeleton: a one-paragraph homepage, a paginated tag list of people, a badge-cluttered publication list, an empty Grants page and default theme branding. This release turns it into a complete research-group website. The commits are local only and have not been pushed.

### Site-wide
- **Navigation**: Research, People, Publications, News, Join Us, Contact. Grants is hidden until it has content.
- **Branding**:
  - UQ-purple colour scheme (`themes/mcf/assets/css/schemes/mcf.css`), with contrast checked in light and dark mode.
  - New abstract droplet logo, shown inline so it follows the theme colours.
  - Full favicon set and web manifest (`themes/mcf/static/brand/`).
- **Header**: logo with the group name. The current section is highlighted. Below 1180px the menu becomes a no-JavaScript hamburger.
- **Footer**: affiliation, contact email, quick links, TCLB/GitHub/RSS links and a dynamic "© 2016–{year}" copyright. Theme attribution is removed.
- **SEO**:
  - `baseURL` is set, so canonical, RSS and sitemap URLs are now absolute.
  - ResearchOrganization structured data on the homepage.
  - Default 1200×630 social-share card.
- **Dates**: Australian format ("1 July 2025"). `dateFormat` moved under `params`, which is where Congo reads it.
- **404 page**: branded, with links to the main sections.

### Homepage
- Hero with tagline, summary and calls to action, plus a generated streamline-and-bubble illustration.
- Statistics computed by Hugo at build time: publications, current members, Scopus citations, year founded.
- "About the group", seven research-theme cards linking to the Research page, latest news, five recent publications and a "Join the group" banner.
- All text is editable in the `home:` front matter of `themes/mcf/content/_index.md`.

### People
- `/mcf/people/` is now one page with no pagination. It is grouped into Group Leaders, Postdoctoral Researchers, PhD Students and Alumni, shown as photo or initials-avatar cards with role, interests and ORCID/Scopus links.
- Profile pages have a header with photo, position, role badge, links (ORCID, Scopus, email, Scholar, UQ profile) and research-interest chips. Invalid values such as `.na.character` are ignored.
- `/people/` only lists people on the current site, so Warsaw (ZA) staff no longer appear on the MCF site.
- Roles are standardised (`lead`, `postdoc`, `phd`, `alumni-postdoc`, `alumni-phd`, ...), and `post-postdoc` is renamed `alumni-postdoc`. The bot table in `auto/get.doi.R` is updated to match.
- New optional front-matter fields: `position`, `email`, `scholar`, `uqprofile`, `website`, `linkedin`, `interests`, `weight`. They are documented in the README.
- Replaced the placeholder bio for C. Leonardi ("Another chap.") with a factual one, pending his review. Fixed a typo and a broken photo reference for N. Di Vaira.

### Publications
- `/mcf/publications/` is a single scannable list grouped by year, with:
  - a year jump-nav;
  - a search box and publication-type filter, which work without JavaScript and keep their state in the URL;
  - citation counts and collapsible abstracts.
- `/authors/<id>/` pages use the same style and link back to the person's profile.
- The profile `{{< publist >}}` shortcode shows "Most cited" and "Recent" without duplicates, plus one "View all" link.
- Citation formatting is cleaned up and shared by all lists: no stray commas, "and" before the last author, MCF members highlighted.

### Content
- **Research page**: seven themes, each written from the group's own papers, with 32 selected publications, two simulation images, two YouTube videos, a TCLB software section and a "Collaborate with us" box.
- **Contact page**: email, location, group leaders, and guidance for students, industry and media.
- **Join Us page**: PhD, honours/masters and visitor routes, what to include in an enquiry, and an automatic "Current opportunities" list.
- **News**: five factual posts announcing 2024–2025 papers. News and Jobs pages have intro text, and the Grants page has an intro ready for when grants are added.
- **Archetypes** for news, jobs and grants (`hugo new --kind ...`). New shortcodes: `pubs`, `opportunities`, `cards`/`card`, `cta`, and `todo` (a non-rendering editor note).

### Fixes and housekeeping
- Editor TODO notes no longer appear in the published HTML.
- CSS collisions between the parallel workstreams are fixed: there is now a single shared button component, and the shortcode classes are namespaced.
- `resources/` (Hugo cache) is added to `.gitignore`.
- README has a new section on editing the MCF site.

### Verification
- The mcf, za and tclb sites all build with Hugo 0.147.9: exit code 0, no warnings.
- The internal link check of the MCF build found no broken links.
- Pages were checked visually in screenshots at desktop and phone widths, in light and dark mode.
- tclb's `/tclb/publications/` and `/authors/*` output is byte-identical to before. Its people pages now use the new publication-list markup.

### Needs input from the group
Search the repo for `TODO(MCF)` to find each of these in place.
1. **Full names, photos and bios** for B Hill, D Sashko, S Brennand, I Lenane, D Wang, J McCullough, R Reisabadi and A Roslin. Alumni also need their current positions.
2. **Scopus IDs look wrong** for I Lenane (sheep-genetics papers) and S Brennand (geodesy papers). Neither has any MCF papers, so their profiles list unrelated work.
3. **Ł. Łaniewski-Wołłk's role**: currently shown as a postdoc. Should that be alumni, collaborator, or something else?
4. **C. Leonardi** to review his new bio. Emails and UQ profile/Scholar links can be added for anyone.
5. **Possibly new members**: these people are recent co-authors without a people page. Add them if they are members:
   - S Sadeghi, J Mojumder, P Lopez, R Okajima, M Holzer, J Abraham, U Bhardwaj, Y Liu, M Aziz, H Ramanandraibe.
6. **The 2023 PhD advert** (`content/posts/phd-project-pyrolysis/`) still shows under "Current opportunities". Set an `expiryDate` if it has closed.
7. **Contact details**: building and room number, phone number, and Chris's public email. The postal address could also go in the footer and structured data.
8. **Captions and wording**: confirm the caption of the bubble/annular-pipe image (homepage and Research page), and review the homepage tagline and research-theme text.
9. **Grants**: add grants with `hugo new --kind grant`, then re-enable the menu item (see README).

### Notes
- The `za` site also uses the `mcf` theme. MCF-specific templates check `site.Params.sitesme`, so za keeps Congo's defaults. Separately, za still shows MCF's homepage text because it shares `themes/mcf/content`; that problem existed before this change.
- A direct request for `/favicon.ico` still returns Congo's icon, because MCF's icons live in `/brand/` so they don't override za's. Browsers use the `<link>` tags, which point to the MCF icons.
