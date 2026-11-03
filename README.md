# Hillary Bantu — Teaching Portfolio

A responsive personal portfolio for Hillary Bantu, a mathematics and computer science teacher based in Bangkok. It presents teaching experience, classroom philosophy, an interactive mathematics demo, and contact details for schools and programme leads.

## Site overview

This repository contains a static portfolio website built with plain HTML, CSS, and JavaScript. It is designed to showcase:

- Mathematics and computer science teaching experience
- A teaching philosophy focused on understanding, differentiation, and problem solving
- Professional work experience across education and IT leadership
- An interactive sine-wave graphing demo for classroom use
- A contact experience that opens a pre-filled email for prospective schools and partners

## Files

- `index.html` — page structure and content
- `style.css` — styling, layout, animation, and responsiveness
- `main.js` — interactive features such as the menu, counters, plotter, and gallery
- `.github/workflows/pages.yml` — GitHub Pages deployment workflow

## Local preview

No build step is required. You can preview the site locally by opening `index.html` directly in a browser, or by serving the repo with a simple static server:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## GitHub Pages deployment

The repository is configured for deployment via GitHub Pages using the workflow in `.github/workflows/pages.yml`.

Steps:

1. Open the GitHub repository.
2. Go to Settings → Pages.
3. Set the source to GitHub Actions.
4. Push to the `main` branch or run the workflow manually from the Actions tab.

After deployment, the site is available at:

https://larybantu.github.io/trlaryteaching/

## Important notes before publishing

- Add the portrait and gallery images referenced in `index.html` under `img/`, or update the image paths.
- Review the contact details, school information, and teaching experience for accuracy.
- The CV link is currently commented out; add `cv/Hillary-Bantu-CV.pdf` and enable it if needed.
- Do not publish identifiable student photos without written consent.

## Technologies

Plain HTML, CSS, and JavaScript. No framework or package installation is required.
