import Vue from 'vue'
import * as Sentry from '@sentry/browser'
import { Integrations } from '@sentry/tracing'

const config = {
  Vue,
  dsn:
    'https://c131dfbb484544a48e4bc4073c95b580@o498536.ingest.sentry.io/5576186',
  autoSessionTracking: true,
  integrations: [new Integrations.BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
}

if (process.env.NODE_ENV !== 'development') {
  Sentry.init(config)
}
