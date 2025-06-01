/**
 * Utility functions for image optimization
 */

/**
 * Generates a tiny placeholder SVG with a dominant color
 * @param width Image width
 * @param height Image height
 * @param color Dominant color in hex format
 * @returns Base64 encoded SVG
 */
export function generatePlaceholder(width: number, height: number, color: string = '#e2e8f0'): string {
  const svg = `
    <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="${color}"/>
    </svg>
  `;
  const encodedSvg = Buffer.from(svg).toString('base64');
  return `data:image/svg+xml;base64,${encodedSvg}`;
}

/**
 * Returns appropriate sizes attribute for responsive images
 * @param type Type of image layout
 * @returns Sizes attribute string
 */
export function getImageSizes(type: 'banner' | 'card' | 'thumbnail' | 'avatar' | 'full'): string {
  switch (type) {
    case 'banner':
      return '(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 1200px';
    case 'card':
      return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
    case 'thumbnail':
      return '(max-width: 640px) 50vw, 25vw';
    case 'avatar':
      return '48px';
    case 'full':
      return '100vw';
    default:
      return '100vw';
  }
}
