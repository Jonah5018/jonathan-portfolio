# Jonathan Nwofoke Portfolio

A responsive portfolio for Jonathan Uchenna Nwofoke, DevOps Engineer and Full-stack Developer.

## Project structure

```text
jonathan-portfolio/
  index.html       Page content, structure, metadata, and links
  styles.css       Theme, layouts, animations, and mobile breakpoints
  script.js        Project disclosures and navigation effects
  README.md        Editing and GitHub instructions
  .editorconfig    Consistent formatting settings
  .gitignore       Files excluded from version control
```

## Open in VS Code

Choose **File → Open Folder** and select this `jonathan-portfolio` folder, or run:

```powershell
code "C:\Users\user\Documents\Codex\2026-10-05\i\outputs\jonathan-portfolio"
```

## Preview locally

Open `index.html` in a browser. There is no installation or build step.
For automatic reloads while editing, you can use VS Code's Live Server extension.

## Push to GitHub from VS Code

1. Open this folder in VS Code.
2. Open **Source Control** from the sidebar.
3. Select **Initialize Repository** if this folder is not already a repository.
4. Stage your files, enter `Add DevOps portfolio`, and commit.
5. Select **Publish to GitHub**, sign in if prompted, and choose a repository name and visibility.
6. For later changes, stage, commit, and use **Sync Changes** or **Push**.

If you already created a GitHub repository, add its URL as your remote rather than creating another one. Git may request your name and email before the first commit.

## Backend

This is a static frontend website. It has no backend, database, API, or admin panel.
Contact links open the visitor's email application using `mailto:jonahnwofoke@gmail.com`; the website does not send or store messages.

A backend would be useful for a contact form that sends email directly, an admin dashboard, or database-managed projects.

## Responsive behavior

- Desktop: two-column hero and projects, three-column skills.
- Tablet: smaller spacing and typography.
- Mobile at 720px and below: single-column content and touch-friendly links.
- Checked at 1440px and 390px widths without horizontal overflow.
- Reduced-motion preferences disable animation and smooth scrolling.

## Editing

Edit descriptions and links in `index.html`. Theme colors are under `:root` in `styles.css`. Responsive rules are near the bottom. `script.js` adds progressive enhancements; content and navigation work without JavaScript.

Google Fonts is the only external styling request; local font fallbacks are provided.

Online publication is not complete because the environment blocked input to the publishing process.
