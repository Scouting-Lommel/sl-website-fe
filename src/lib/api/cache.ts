// Cache configuration for different types of data
export const CACHE_CONFIG = {
  // Static data that rarely changes
  STATIC: {
    revalidate: 604800, // 7 days
    tags: ['static-data'],
    headers: {
      'Cache-Control': 'public, s-maxage=604800, stale-while-revalidate=600',
      'CDN-Cache-Control': 'public, s-maxage=604800',
    },
  },
  // Dynamic content that changes frequently
  DYNAMIC: {
    revalidate: 3600, // 1 hour
    tags: ['dynamic-data'],
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=120',
      'CDN-Cache-Control': 'public, s-maxage=3600',
    },
  },
  // User-specific data
  USER: {
    revalidate: 1800, // 30 minutes
    tags: ['user-data'],
    headers: {
      'Cache-Control': 'private, s-maxage=1800, stale-while-revalidate=300',
    },
  },
  // Write operations - no cache
  WRITE: {
    revalidate: 0,
    tags: [],
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      Expires: '0',
    },
  },
} as const;

// Helper function to get appropriate cache headers
export function getCacheHeaders(type: keyof typeof CACHE_CONFIG) {
  return CACHE_CONFIG[type].headers;
}

// Helper function to get Next.js cache options
export function getCacheOptions(type: keyof typeof CACHE_CONFIG) {
  const config = CACHE_CONFIG[type];
  return {
    next: {
      revalidate: config.revalidate,
      tags: config.tags,
    },
  };
}
