import * as Sentry from '@sentry/nextjs';

/**
 * Dynamically initializes Sentry error monitoring in production environments based on the runtime context.
 *
 * Loads the appropriate Sentry configuration for either Node.js or Edge runtimes when the application is running in production.
 */
export async function register() {
  if (process.env.APP_ENV === 'production') {
    if (process.env.NEXT_RUNTIME === 'nodejs') {
      await import('../sentry.server.config');
    }

    if (process.env.NEXT_RUNTIME === 'edge') {
      await import('../sentry.edge.config');
    }
  }
}

export const onRequestError = Sentry.captureRequestError;
