---
title: MCF at The University of Queensland
mcf:
- index

# ---------------------------------------------------------------------------
# Homepage content (rendered by themes/mcf/layouts/_partials/home/custom.html).
# Everything below can be edited without touching templates. Remove a block
# (or leave its list empty) to hide that section.
# Keys are lower_snake_case because Hugo lower-cases front-matter keys.
# ---------------------------------------------------------------------------
home:
  # The rich homepage is only rendered on the site whose `params.sitesme`
  # matches this value; other sites sharing this theme (e.g. za) fall back to
  # Congo's plain page layout.
  site: mcf
  # Taxonomy used to find this group's people, publications and news.
  taxonomy: mcf

  hero:
    eyebrow: School of Mechanical and Mining Engineering · The University of Queensland
    title: Modelling Complex Fluids
    tagline: Computational fluid dynamics for the energy, resources and chemical industries.
    summary: >-
      We build and apply advanced numerical models, in particular lattice Boltzmann
      methods, to understand multiphase and non-Newtonian flows, particle suspensions,
      heat transfer and flow through porous and fractured media.
    buttons:
    - label: Our research
      url: /research/
      style: primary
    - label: Join us
      url: /join/
      style: secondary

  # Statistics. `metric` values are computed at build time:
  #   publications - number of pages tagged `<taxonomy>: publications`
  #   members      - people tagged `<taxonomy>: people` whose roles do not start
  #                  with one of `exclude_role_prefixes`
  #   citations    - sum of `scopus_cite` over the group's publications
  # Use `value` instead of `metric` for a fixed value.
  stats:
    exclude_role_prefixes:
    - alumni
    # TODO(MCF): should former postdocs (role `post-postdoc`) also be excluded?
    items:
    - metric: publications
      label: Publications
      url: /mcf/publications/
    - metric: members
      label: Current members
      url: /mcf/people/
    - metric: citations
      label: Citations (Scopus)
    - value: "2016"
      label: Established

  about:
    title: About the group
    # Image: an asset path (themes/*/assets/...) or a page resource given as
    # "<page path>/<file name>".
    image: posts/phd-project-pyrolysis/methane-pyrolysis.png
    # Optional crop steps (Hugo image Crop specs, applied in order). These trim
    # the colour-bar legends from the render to give a wide banner.
    image_crop:
    - 1740x515 Bottom
    - 1740x395 Top
    image_alt: Simulation visualisation of bubbles along a cylindrical conduit, with the surrounding flow coloured by strain magnitude.
    caption: Simulation snapshot from our methane pyrolysis project.
    caption_link: /posts/phd-project-pyrolysis/
    caption_link_label: Read more

  research:
    title: Research themes
    intro: >-
      Our work spans the physics of complex fluids and the numerical methods
      needed to simulate them at scale.
    more_label: Explore our research
    more_url: /research/
    themes:
    - title: Multiphase and interfacial flows
      anchor: multiphase-flows
      icon: droplet
      blurb: Phase-field lattice Boltzmann models of liquid–gas flows, including bubbles, droplets, Taylor bubbles and wetting in complex geometries.
    - title: Non-Newtonian and complex fluids
      anchor: non-newtonian
      icon: viscous
      blurb: Capturing non-Newtonian rheology in simulations, from hydraulic fracturing fluids to blood flow in arterial geometries.
    - title: Particle-laden flows and suspensions
      anchor: particle-suspensions
      icon: particles
      blurb: Coupled lattice Boltzmann and discrete element modelling of suspensions, proppant and micro-particle transport, clogging and segregation.
    - title: Flow in porous and fractured media
      anchor: porous-fractured-media
      icon: porous
      blurb: Flow through realistic complex geometries, including synthetic rough fractures and micro-CT images of porous rock.
    - title: Heat transfer and thermocapillary flows
      anchor: heat-transfer
      icon: heat
      blurb: Heat transfer in particle suspensions and nanofluids, and thermocapillary flows driven by surface-tension gradients.
    - title: Clean hydrogen and energy processes
      anchor: hydrogen-energy
      icon: hydrogen
      blurb: Hydrodynamics of molten-media bubble columns for low-emission hydrogen production through methane pyrolysis.
    - title: High-performance computational methods
      anchor: hpc-methods
      icon: gpu
      wide: true
      blurb: GPU-accelerated lattice Boltzmann simulation with TCLB, an open-source MPI+CUDA code co-developed at UQ and Warsaw University of Technology.
      links:
      - label: tclb.io
        url: https://tclb.io

  news:
    title: Latest news
    count: 3
    more_label: All news
    more_url: /mcf/news/

  publications:
    title: Recent publications
    count: 5
    max_authors: 6
    more_label: All publications
    more_url: /mcf/publications/

  cta:
    title: Join the group
    text: >-
      Interested in a PhD, a postdoctoral position or a research collaboration in
      computational fluid dynamics? We would love to hear from you.
    buttons:
    - label: Opportunities
      url: /join/
      style: primary
    - label: Get in touch
      url: /contact/
      style: secondary
---

The MCF group was founded in 2016 by [A/Prof Christopher Leonardi](people/c-leonardi) and [Dr Travis Mitchell](people/t-mitchell) to bring together a team of researchers interested in the study of complex fluid systems in the energy and resources sector. The group has significant experience in the computational modelling of multiphase systems and has developed advanced capability in capturing non-Newtonian effects, particle suspensions, realistic complex geometries (synthetic rough fractures and microCT porous media), heat transfer, and bubble/droplet dynamics. As a team, we seek to contribute to the development of innovative solutions that drive progress in the chemical, energy, and resource industries.
