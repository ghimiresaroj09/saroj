/**
 * Prepend the base path to asset URLs for GitHub Pages deployment
 */
const basePath = ''; // No basePath needed for username.github.io repo

export function assetPath(path: string): string {
  // Don't add basePath to external URLs
  if (path.startsWith('http') || path.startsWith('//')) {
    return path;
  }
  // Return path as-is (no prefix needed)
  return path;
}
