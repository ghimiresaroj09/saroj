# Saroj Ghimire Portfolio

Next.js (App Router, TypeScript) rebuild of https://www.ghimiresaroj09.com.np/.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (fully static)
npm run start
```

## Project layout

```
app/
  layout.tsx      Metadata, Open Graph, Twitter card, DM Sans font, Google Analytics
  page.tsx        Section order
  globals.css     All styles (ported from the original site)
  icon.png        Favicon (auto-served by Next.js)
  apple-icon.png  Apple touch icon
  manifest.ts     Web app manifest
  sitemap.ts / robots.ts
components/       One component per section
lib/data.ts       All content: links, timeline, services, skills, projects, contact
public/assets     Images from the original site
public/media/cv.pdf
```

To update content, edit `lib/data.ts`. No component changes are needed for text, links,
timeline entries, skills, or projects.

## Contact form

Posts to the existing Formspree endpoint (`FORMSPREE_ENDPOINT` in `lib/data.ts`) via
fetch, showing inline success/error states without leaving the page.

## Deploy to GitHub Pages

This project is configured for GitHub Pages deployment with GitHub Actions.

### Automated Deployment (Recommended)

1. Push this repository to GitHub
2. Go to repository Settings → Pages
3. Under "Build and deployment", select:
   - **Source**: GitHub Actions
4. Push to the `main` branch to trigger automatic deployment
5. Your site will be available at `https://yourusername.github.io/portfolio/`

### Manual Deployment

```bash
npm run deploy    # Build and prepare for GitHub Pages
```

The build output will be in the `out/` directory with `.nojekyll` and `CNAME` files added automatically.

### Custom Domain Setup

The repository includes a `CNAME` file for `www.ghimiresaroj09.com.np`. To use your custom domain:

1. In repository Settings → Pages, add your custom domain
2. At your DNS provider, point:
   - `www` CNAME → `yourusername.github.io`
   - apex A records → GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
3. Wait for DNS propagation and SSL certificate issuance
4. Verify: `https://www.ghimiresaroj09.com.np/`

### Alternative: Deploy to Vercel/Netlify

1. Import the repository on Vercel or Netlify
2. No environment variables required
3. Deploy with default Next.js settings
4. Configure custom domain in hosting dashboard

Google Analytics ID `G-1FJ937GPK7` is carried over from the original site.
