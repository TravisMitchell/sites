---
# Create with:  hugo new --config mcf.yaml --kind job content/posts/<short-slug>/index.md
# Pages with `mcf: [jobs]` appear automatically under "Current opportunities" on /join/
# and on /mcf/jobs/. Set expiryDate so the advert disappears when applications close.
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
# expiryDate: 2026-12-31     # applications close (the page is removed from the site after this date)
summary: ""                  # one or two sentences shown in the opportunities list
mcf:
- news
- jobs
sites:
- mcf
draft: true                  # delete this line when ready to publish
---

<!-- Project background and aims. -->

<!-- Who should apply and the skills that help. -->

<!-- How to apply: Contact t.mitchell@uq.edu.au with a CV and transcripts. See /join/ for what to include. -->
