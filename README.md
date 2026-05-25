# ChuPa Portfolio

Portfolio website for **ChuPa** — Creative High-performance User-centric Programming Applications.

Built by [David Onyango](https://github.com/davidChuPaDev), a Kenyan software engineer building offline-first mobile apps and PWAs for the Kenyan market.

**Live site:** [https://davidChuPaDev.github.io/Chupa-portfolio-/](https://davidChuPaDev.github.io/Chupa-portfolio-/)

---

## Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- TypeScript

---

## Local Development

### Prerequisites

- Node.js 18+
- pnpm (`npm install -g pnpm`)

### Setup

```bash
# Clone the repo
git clone https://github.com/davidChuPaDev/Chupa-portfolio-.git
cd Chupa-portfolio-

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The site will be available at `http://localhost:5173`.

---

## Build

```bash
# Production build (for local preview)
npm run build

# Build for GitHub Pages
npm run build:gh-pages
```

---

## Deploy to GitHub Pages

### Option 1: Automatic (Recommended)

The repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the site to GitHub Pages on every push to `main`.

**One-time setup:**

1. Push this repo to GitHub at `https://github.com/davidChuPaDev/Chupa-portfolio-`
2. Go to **Settings > Pages** in your GitHub repo
3. Under **Source**, select **GitHub Actions**
4. Push any commit to `main` — the workflow will build and deploy automatically

### Option 2: Manual deploy

```bash
# Build the GitHub Pages bundle
npm run build:gh-pages

# Install gh-pages tool globally (first time only)
npm install -g gh-pages

# Deploy the dist-gh-pages folder to the gh-pages branch
gh-pages -d dist-gh-pages
```

---

## Project Structure

```
src/
  components/
    Navbar.tsx       # Sticky nav with mobile hamburger
    Hero.tsx         # Full-screen hero with CTAs
    About.tsx        # Bio and stats
    WhyChupa.tsx     # Feature cards
    Projects.tsx     # 13 projects in two groups
    Contact.tsx      # Contact form + quick links
    Footer.tsx       # Copyright footer
  pages/
    Home.tsx         # Assembles all sections
  App.tsx
  main.tsx
  index.css          # Theme + Manrope font
```

---

## Contact

- Email: onyangodavid5566@gmail.com
- GitHub: [github.com/davidChuPaDev](https://github.com/davidChuPaDev)
- WhatsApp: [wa.me/254797968578](https://wa.me/254797968578)
