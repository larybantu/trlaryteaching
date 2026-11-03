# Hillary Bantu — Teaching Portfolio

A responsive personal portfolio for Hillary Bantu, a mathematics and computer science teacher based in Bangkok. It presents teaching experience and approach, classroom resources, an interactive mathematics demonstration, and contact details for schools and programme leads.

## About the site

The portfolio highlights:

- Secondary mathematics and computer science teaching, alongside master's-level software engineering lecturing
- A teaching approach focused on understanding, differentiated learning, problem solving, and purposeful use of technology
- Professional experience in education, IT operations, cybersecurity, and network services
- An interactive sine-wave plotter with amplitude, frequency, and phase controls
- A responsive navigation menu, animated counters, scroll reveals, and a classroom gallery lightbox
- Contact links and a form that opens a pre-filled message in the visitor's email application
- Accessibility considerations including a skip link, keyboard-operable gallery items, visible focus styles, and reduced-motion support

## Files

- `index.html` — portfolio content and page structure
- `style.css` — responsive layout, visual styling, and motion effects
- `main.js` — navigation, contact form, animations, graph controls, counters, and gallery interactions

## Run locally

This is a static website and does not require a build step or package installation. Open `index.html` in a browser, or serve the repository directory with any static file server.

> **Setup note:** The HTML currently links to `css/style.css` and `js/main.js`, while those files are at the repository root. Move the files into the referenced directories or update the stylesheet and script paths in `index.html` before running the site. The page also references portrait and gallery images under `img/`; add those image files or change the image paths to match the available assets.

## Personalize before publishing

- Add the referenced portrait and classroom gallery images under `img/`, or update their paths in `index.html`.
- Review the contact details, school information, experience, and other personal content for accuracy.
- The CV download link is currently commented out. Add the PDF at `cv/Hillary-Bantu-CV.pdf` and enable the link if you want to offer a download.
- The HTML metadata points to `https://larybantu.github.io/myteachingportfolio/`; update the canonical and social-sharing URLs if this portfolio will be published at a different address.
- Avoid publishing identifiable student photos without the necessary written consent.

## Technologies

Plain HTML, CSS, and JavaScript. Google Fonts are loaded externally; no framework or build tooling is required.
