# Sites
This repository hold the content and design of following web pages:
- `tclb.io` - TCLB Solver website
- `mcf.tclb.io` - UQ's MCF Group website

# Contributing
The sites are generated from common content with Hugo static webpage generator.


## Download
The repository uses git submodules for the external hugo themes (`hugo-creative-portfolio-theme` and `congo`). To download everything:
```bash
git clone git@github.com:CFD-GO/sites.git
cd sites
git submodule init
git submodule update
```

## Testing & preview

When doing changes, you can inspect the results by running Hugo locally.
To preview the MCF webpage:
```bash
hugo --config mcf server
```
This will start up a local server. Just ctrl+click the displayed address and inspect.
Changes you make will be immediately refreshed in browser.

For the TCLB site:
```bash
hugo --config tclb server
```

## Publishing
Any changes on the `master` branch will be published on the webpages.
All major changes should be done through a Pull Request.

# Structure
The repo is designed to hold data for multiple sites.
Most content should be kept in the common folders.

## Frontmatter and Content
Most of the content is organised in `.md` markdown files (Goldmark). The markdown format is quite standard, with the exception of so-called [shortcodes](https://gohugo.io/content-management/shortcodes/), which can include special content.

The `.md` files have a data segment at the beginning called "front matter". The data is formatted using `YAML` format and should include such things as `title:` or `date:`. In this repo, front matter data is also used to assign content to different categories of different websites.

To assign a page to `publications` and `news` category on the MCF website, add:
```yaml
mcf:
- publications
- news
```

By default a page is visible in all website it was assigned to something. Any reference to them on other websites will be redirected.
If a page is assigned multiple sites, but should be visible only in one, a `sites:` data can be added. For example:
```yaml
title: Some job offer at MCF
mcf:
- news
- jobs
tclb:
- news
- jobs
sites:
- mcf
```
This way, the job offer will be visible in the news on TCLB site, but will redirect to the MCF website.

## `content/people/`
Content about people. The names of the files should be the person id, written lowercase and with `-` in place of spaces (eg. `content/people/l-laniewski-wollk.md`). The person id is: First letter of first name, space and surname. All latin characters.

In the front matter of the `.md` file we need:
```yaml
short: L Laniewski-Wollk          # person ID
title: Łukasz Łaniewski-Wołłk     # full name, the way you like to write it.
tclb: people                      # if you're on TCLB team
mcf: people                       # if you're on MCF team
scopus: '56719775800'             # Scopus ID if you have one (can be a list)
orcid: 0000-0002-3026-5881        # ORCID if you have one
```

In the content you can include the `{{< publist >}}` shortcode to have a publication list.

### Roles and profile fields (MCF / ZA people directory)
The People directory (`/mcf/people/`, also `/people/`) groups people by their **role**, which is the second entry of the site list:
```yaml
mcf:
- people
- phd
```
MCF roles, in display order: `lead` (group leaders / academics), `postdoc`, `phd`, `masters`, `honours`, `alumni-postdoc`, `alumni-phd`, `alumni`.
Section titles and labels are set in `themes/mcf/data/people_roles.yaml` (there is also a block for the ZA site roles). Keep the `mcf` column of the role table in `auto/get.doi.R` consistent with these.

Optional front matter shown on the cards and the profile page:
```yaml
position: Associate Professor     # display text; if empty the role label is shown
email: someone@uq.edu.au
scholar: https://scholar.google.com/citations?user=...   # Google Scholar URL
uqprofile: https://researchers.uq.edu.au/researcher/...  # UQ researcher profile URL
website: https://...
linkedin: https://www.linkedin.com/in/...
interests:                        # research interests (first two shown on the card)
- Lattice Boltzmann methods
- Multiphase flow
weight: 1                         # optional, orders people within a role (default: by surname)
```
A photo is a page-bundle image in the person's folder: `thumbnail.jpg` (or the file named by `feature:`). It is cropped to a square automatically; without a photo, initials are shown.

**Note:** the weekly auto-update bot (`auto/get.doi.R`) replaces all front matter of a file containing `auto_data: yes` and the whole body of a file containing `auto_content: yes`. Delete those two lines from any people file you edit by hand.

## `content/doi/`
Content about publications. The names of the files should be named `content/doi/[DOI].md`.

In the front matter of the `.md` file we need:
```yaml
doi: 10.1016/j.camwa.2015.12.043  # DOI
title: Adjoint Lattice Boltzmann for topology optimization on multi-GPU architecture
authors:                          # Author IDs
- L Laniewski-Wollk
- J Rokicki
keywords:                         # Keywords if you want
- adjoint
- lattice boltzmann method
- optimization
date: '2016-02-01'                # Date of publication
journal: Computers and Mathematics with Applications
publisher: Elsevier Ltd
auto_content: yes                                     # DELETE THIS TO NOT AUTO GENERATE CONTENT
auto_data: yes                                        # DELETE THIS TO NOT AUTO GENERATE METADATA
redirect: https://doi.org/10.1016/j.camwa.2015.12.043 # DELETE THIS TO NOT REDIRECT
realauthors:                      # This is needed to know how the names on the publication correspond to our IDs
  L Laniewski-Wollk: Ł. Łaniewski-Wołłk
  J Rokicki: J. Rokicki
image: /img/doi/10.1016/j.camwa.2015.12.043/firstpage.png
showonlyimage: yes
```

## `content/posts/`
Main place for general posts.

## `themes/tclb/content/`
Place for TCLB website specific content.

## `themes/mcf/content/`
Place for MCF website specific content. Note that the `za` site also uses the `mcf` theme, so MCF-only templates check `site.Params.sitesme`.

### Editing the MCF website
- **Homepage**: all homepage text (hero, research-theme cards, stats, image, call to action) lives in the `home:` block of `themes/mcf/content/_index.md`. The statistics (publications, current members, citations) are computed by Hugo. Sections with no data are hidden.
- **Research, Contact, Join Us**: `themes/mcf/content/{research,contact,join}/index.md`. The research-theme heading IDs (e.g. `{#multiphase-flows}`) are linked from the homepage cards, so keep them stable.
- **Shortcodes** (`themes/mcf/layouts/_shortcodes/`):
  - `{{< pubs "10.xxxx/a" "10.yyyy/b" >}}`: a "Selected publications" box rendered from `content/doi/` pages. Hugo prints a warning if a DOI page doesn't exist.
  - `{{< opportunities >}}fallback text{{< /opportunities >}}`: lists pages tagged `mcf: jobs`, newest first. A post with an `expiryDate` disappears automatically after that date.
  - `{{< cards >}}{{< card title="..." icon="..." >}}...{{< /card >}}{{< /cards >}}`: a responsive card grid.
  - `{{< cta title="..." button="..." href="..." button2="..." href2="..." >}}text{{< /cta >}}`: a call-to-action box.
- **News, jobs and grants** have archetypes in `themes/mcf/archetypes/`:
  ```bash
  hugo new --config mcf.yaml --kind news  content/posts/<slug>/index.md
  hugo new --config mcf.yaml --kind job   content/posts/<slug>/index.md
  hugo new --config mcf.yaml --kind grant content/grants/<slug>.md
  ```
  Remove `draft: true` when the page is ready.
- **Grants**: the Grants page (`/mcf/grants/`) is not in the menu while it is empty. After adding the first grant, re-enable it in `mcf.yaml` under `menus.main`:
  ```yaml
      - name: Grants
        pageRef: mcf/grants
        weight: 35
  ```
- **Styling**: Congo ships pre-compiled Tailwind, so utility classes that Congo itself doesn't use are not available. Extra styles go in `themes/mcf/assets/css/custom.css`, which is split into sections (branding, home, people, publications, content). The colour palette (UQ purple) is in `themes/mcf/assets/css/schemes/mcf.css`. Logo and favicons are in `themes/mcf/static/brand/`, and the inline logo is in `themes/mcf/layouts/_partials/brand/mark.html`.
- **Static preview**: `mcf.yaml` sets `baseURL: https://mcf.tclb.io/`. `hugo server` overrides this automatically. For a static build that you open locally, pass `--baseURL http://localhost:<port>/`.

## `static/`
All static files (like images, data, etc) should be placed here.

## `static/img/`
Place for images. All files here will be visible on the server at `https://domain.name/img/`

## `static/img/doi/`
Place for DOI images. Images should be placed in `static/img/doi/[DOI]/...`

# Automatic generation of DOI data
A lot of data can be harvested from Scopus. The scripts related to that are placed in `auto/` folder.
Please use them with caution and inspect the changes they make.


