---
# Create with:  hugo new --config mcf.yaml --kind news content/posts/<short-slug>/index.md
# For a new paper, set date to the publication date and link the DOI.
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
summary: ""                  # one or two sentences, used in lists and link previews
mcf:
- news
sites:
- mcf
# thumbnail: thumb.png       # optional: an image file placed in this post's folder
draft: true                  # delete this line when ready to publish
---

<!-- One or two paragraphs. Link group members to their profiles, e.g. [Travis Mitchell](/people/t-mitchell/). -->

<!-- For a publication, finish with:
Published in *Journal Name* (Year). DOI: [10.xxxx/yyyy](https://doi.org/10.xxxx/yyyy)
-->
