'use client';

import NextError from 'next/error';
import { useEffect } from 'react';

/**
 * Displays a generic error page and reports the error to Sentry in production environments.
 *
 * Renders the default Next.js error page with a status code of 0, and conditionally sends the provided error to Sentry if the app is running in production.
 *
 * @param error - The error object to display and report, optionally including a `digest` property.
 * @returns The rendered error page as a React element.
 */
export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    // Only capture errors in production
    if (process.env.NEXT_PUBLIC_APP_ENV === 'production') {
      import('@sentry/nextjs').then((Sentry) => {
        Sentry.captureException(error);
      });
    }
  }, [error]);

  return (
    <html>
      <body>
        {/* `NextError` is the default Next.js error page component. Its type
        definition requires a `statusCode` prop. However, since the App Router
        does not expose status codes for errors, we simply pass 0 to render a
        generic error message. */}
        <NextError statusCode={0} />
      </body>
    </html>
  );
}
