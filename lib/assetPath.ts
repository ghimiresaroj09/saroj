/**
 * Prepend the base path to asset URLs for GitHub Pages deployment
 */
const basePath = process.env.NODE_ENV === 'production' ? '/my-portfolio' : '';

export function assetPath(path: string): string {
  // Don't add basePath to external URLs
  if (path.startsWith('http') || path.startsWith('//')) {
    return path;
  }
  // Add basePath to relative paths
  return `${basePath}${path}`;
}
