# GitHub Pages Deployment Setup

This portfolio is now configured for GitHub Pages deployment with automatic CI/CD using GitHub Actions.

## ✅ What's Been Configured

### 1. Next.js Configuration (`next.config.ts`)
- **Static Export**: `output: 'export'` - Generates static HTML files
- **Image Optimization**: `images.unoptimized: true` - Compatible with static hosting
- **Trailing Slashes**: `trailingSlash: true` - Better compatibility with GitHub Pages

### 2. Build Scripts (`package.json`)
- `npm run deploy` - Builds the project and adds GitHub Pages required files
- Automatically creates `.nojekyll` file (prevents Jekyll processing)
- Automatically copies `CNAME` file for custom domain

### 3. GitHub Actions Workflow (`.github/workflows/deploy.yml`)
- Triggers on push to `main` branch
- Automatically builds and deploys to GitHub Pages
- Uses official GitHub Pages actions for deployment

### 4. Post-Build Script (`scripts/add-nojekyll.js`)
- Creates `.nojekyll` file in output directory
- Copies `CNAME` file for custom domain support

## 🚀 Deployment Steps

### Option 1: Automated Deployment (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Build and deployment":
     - **Source**: Select "GitHub Actions"
   - Save the settings

3. **Wait for Deployment**
   - Go to the **Actions** tab
   - Watch the deployment workflow complete
   - Your site will be live at: `https://[username].github.io/[repository-name]/`

### Option 2: Manual Deployment

1. **Build the project**
   ```bash
   npm run deploy
   ```

2. **Deploy the `out/` folder**
   - Use GitHub Desktop or git commands to push the `out/` folder to a `gh-pages` branch
   - Or use a tool like `gh-pages` package:
   ```bash
   npm install -g gh-pages
   gh-pages -d out
   ```

## 🌐 Custom Domain Setup

Your custom domain `www.ghimiresaroj09.com.np` is already configured via the `CNAME` file.

### DNS Configuration

At your DNS provider (domain registrar), add these records:

#### For www subdomain:
```
Type: CNAME
Name: www
Value: [your-github-username].github.io
```

#### For apex domain (optional):
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

### GitHub Settings

1. Go to **Settings** → **Pages**
2. Under "Custom domain", enter: `www.ghimiresaroj09.com.np`
3. Click **Save**
4. Wait for DNS check to complete
5. Enable "Enforce HTTPS" once DNS is verified

## 🔍 Verification

After deployment, verify these URLs work:
- `https://[username].github.io/[repo-name]/` - Home page
- `https://[username].github.io/[repo-name]/projects/` - Projects page
- `https://[username].github.io/[repo-name]/sitemap.xml` - Sitemap
- `https://[username].github.io/[repo-name]/robots.txt` - Robots file

With custom domain:
- `https://www.ghimiresaroj09.com.np/`
- `https://www.ghimiresaroj09.com.np/projects/`
- `https://www.ghimiresaroj09.com.np/sitemap.xml`

## 🛠️ Troubleshooting

### Images or CSS not loading
- Check that all paths are relative (starting with `/` or `./`)
- Verify `basePath` in `next.config.ts` if using a repository name in the URL

### 404 errors on direct navigation
- Ensure `trailingSlash: true` is set in `next.config.ts`
- GitHub Pages expects `.html` files or trailing slashes

### Workflow fails
- Check the **Actions** tab for error details
- Ensure repository has **Pages** enabled in Settings
- Verify workflow has proper permissions (already configured)

### Custom domain not working
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct using `nslookup` or `dig`
- Check GitHub Pages settings for any errors

## 📝 Local Testing

Test the production build locally:
```bash
npm run deploy
npx serve out
```

Open http://localhost:3000 to preview the static site.

## 🔄 Making Changes

1. Edit your code locally
2. Test with `npm run dev`
3. Commit and push to `main` branch
4. GitHub Actions automatically rebuilds and deploys
5. Changes live in ~2-5 minutes

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Custom Domain Configuration](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
