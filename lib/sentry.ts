import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || '';
const ENVIRONMENT = process.env.NODE_ENV || 'development';

export function initSentry() {
  if (!SENTRY_DSN) {
    console.warn('Sentry DSN not found. Error tracking disabled.');
    return;
  }

  Sentry.init({
    dsn: SENTRY_DSN,
    environment: ENVIRONMENT,
    tracesSampleRate: 1.0, // Capture 100% of transactions for performance monitoring
    replaysSessionSampleRate: 0.1, // Sample rate for session replays (10%)
    replaysOnErrorSampleRate: 1.0, // Sample rate for session replays when an error occurs (100%)
    integrations: [
      new Sentry.BrowserTracing({
        // Set sampling based on route complexity
        tracingOrigins: ['localhost', 'pledgeandgrow.com'],
      }),
      new Sentry.Replay(),
    ],
  });
}

export function captureException(error: Error, context?: Record<string, any>) {
  Sentry.captureException(error, {
    extra: context,
  });
}

export function captureMessage(message: string, level?: Sentry.SeverityLevel) {
  Sentry.captureMessage(message, level);
}

export function setUserContext(user: { id?: string; email?: string; username?: string }) {
  Sentry.setUser(user);
}

export function clearUserContext() {
  Sentry.setUser(null);
}
