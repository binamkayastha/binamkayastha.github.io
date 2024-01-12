---
title: "LightDocsMd"
description: "Render documentation files from your git repo automagically with just a link to your repository!"
heroImage: "/light-docs.webp"
githubUrl: "https://github.com/binamkayastha/light-docs"
priority: 2
---

## **Documentation should live with project code.**

Benefits:

➕ Gets peer reviewed - so quality is improved.\
➕ Stays more up to date due to it being close to code.\
➕ Is lives with project rather than with team docs (project handoffs are easier).\
➕ Can be enforced (via reviews/PR template checkboxes).\
➕ Version control automatically based on revision history via tags/commits.

Unfortunately the biggest problem with having documentation in git is that it is not _accessable_ for non developers to read. And hosting your own site takes time and energy.

LightDocsMd solves these problems by:

✅ Automatically generating the site based on where the markdown files are in the repository\
✅ Uses git repositories like github/gitlab (currently only github is supported) etc. to actually host the markdown files, and parses them on runtime.


## Caveats with LightDocsMd:

- It is not good for SEO/webcrawling, therefore it should only be used for internal tools
- Pageloads might be slow, the site has to make an additional request to github

If there is interest, I'd love to create a payed version which will cache the pageloads serve the files statically, where update strategies can either be cron, or pushes on CI/CD changes!

For now checkout lightdocs <a href="https://light-docs.binamkayastha.com"> here! </a>

