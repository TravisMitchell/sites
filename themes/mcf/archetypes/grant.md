---
# Create with:  hugo new --config mcf.yaml --kind grant content/grants/<short-slug>.md
# Only enter verified details (check the funding agreement or official announcement).
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}            # set to the grant start date (controls ordering, newest first)
funder: ""                   # funding body
scheme: ""                   # funding scheme / program name
years: ""                    # e.g. "2025-2027"
investigators: []            # people IDs as used in content/people, e.g. [T Mitchell, C Leonardi]
amount: ""                   # optional, leave empty to hide
partners: []                 # optional partner organisations
summary: ""                  # one line shown in the grants list, e.g. "<Funder> <Scheme>, 2025-2027"
showSummary: true
showDate: false
showAuthor: false
showTableOfContents: false
mcf:
- grants
sites:
- mcf
draft: true                  # delete this line when ready to publish
---

{{ "{{< grant-details >}}" }}

<!-- One or two paragraphs describing the project aims in plain language. -->
