/**
 * Prepend the base path to asset URLs for GitHub Pages deployment
 * Also adds cache-busting version parameter
 */
const basePath = ''; // No basePath needed for username.github.io repo
const CACHE_VERSION = '2'; // Increment this when images are updated

export function assetPath(path: string): string {
  // Don't add basePath or version to external URLs
  if (path.startsWith('http') || path.startsWith('//')) {
    return path;
  }
  
  // Add cache-busting version parameter to images
  if (path.match(/\.(png|jpg|jpeg|gif|webp|svg|ico)$/i)) {
    const separator = path.includes('?') ? '&' : '?';
    return `${path}${separator}v=${CACHE_VERSION}`;
  }
  
  // Return path as-is for non-images
  return path;
}
