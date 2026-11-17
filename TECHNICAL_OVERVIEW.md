# Technical Overview: Emily Tuttle Sports Portfolio

## Project Overview

The Emily Tuttle Sports Portfolio is a static, multi-page website built with HTML, CSS, and JavaScript and hosted through GitHub Pages. It presents sports journalism work across reporting, feature writing, sideline coverage, hosting, audio, and multimedia.

The site is organized around individual HTML pages and shared assets, allowing visitors to browse writing samples and media without creating an account.

## Architecture and Components

| Component | Role in the project |
| --- | --- |
| HTML5 | Defines the structure and content of the homepage, About page, Rivets page, Cedars page, and Hosting & Audio page. |
| CSS3 | Controls typography, layout, responsive presentation, and visual styling. |
| JavaScript | Adds client-side interactions, including the mobile navigation menu and homepage story selector. |
| GitHub Pages | Publishes the static site from the repository. |
| Assets | Holds images, audio recordings, and video used by the pages. |

### Key files

- `index.html`: Homepage and interactive featured-story area.
- `about.html`: Biography and contact information.
- `rivets.html`: Rockford Rivets reporting samples.
- `sidelining-sundays.html`: Cedars writing and feature samples.
- `hosting-audio.html`: Hosting, audio, interview, and video examples.
- `assets/site.js`: Client-side navigation and featured-story interactions.
- `assets/styles.css` and `assets/additions.css`: Site styling.
- `assets/images/`, `assets/audio/`, and `assets/`: Images and multimedia files.

## Request and Rendering Flow

1. A visitor navigates to the portfolio URL.
2. GitHub Pages serves the requested static HTML document from the published repository.
3. The browser reads the HTML and requests referenced stylesheets, JavaScript, images, audio, and video.
4. The browser renders the page and executes the JavaScript locally.
5. When a visitor interacts with the navigation menu or featured-story selector, client-side event handlers update the page presentation.

The featured-story selector in `assets/site.js` updates the featured image, supporting image, label, heading, summary, and destination link according to the selected story. The mobile menu toggles its expanded state and navigation visibility.

## Authentication, Credentials, and Tokens

### Visitor authentication

The portfolio does not currently implement visitor accounts or an application-level authentication system. Its content is publicly viewable and visitors are not asked to log in.

A review of the site's HTML, JavaScript, and README found no application login flow, password handling, OAuth flow, session management, access-token use, refresh-token use, or authenticated API requests.

### Credential and token handling

Because the portfolio has no visitor authentication flow:

- The application does not collect or store visitor passwords.
- The application does not issue, store, or refresh access or refresh tokens.
- The application does not establish application-managed login sessions.
- The reviewed frontend code does not attach authorization credentials to API requests.

GitHub account authentication is separate from the website itself. Repository access and the ability to publish changes are managed by GitHub. GitHub Pages serves the published site; it does not make the portfolio's visitors authenticate with the repository owner's GitHub credentials.

### Security implications

The static architecture means the site does not handle private user credentials or session secrets. It also means there is no application-level mechanism for restricting individual portfolio pages to signed-in users.

If the project later adds private content, visitor accounts, forms that process sensitive information, or authenticated integrations, those features should use an appropriately designed backend or trusted authentication provider. Secrets must not be embedded in public frontend files.

## Deployment and Maintenance

The repository README describes publishing through GitHub Pages by selecting **Settings → Pages → Deploy from a branch**, then choosing the `main` branch and root folder.

To add a new portfolio section, create or duplicate a page, update its content and media references, and add the appropriate navigation links. Keep media in the assets folders and use relative paths so the pages continue to work when hosted from the repository.

## Project Skills Demonstrated

- Structuring and maintaining a multi-page website.
- Frontend development with semantic HTML, CSS, and JavaScript.
- Creating interactive browser experiences with event listeners and DOM updates.
- Organizing image, audio, and video assets.
- Publishing and maintaining a static site with GitHub Pages.
- Identifying the boundary between frontend interactions, hosting permissions, and application authentication.
