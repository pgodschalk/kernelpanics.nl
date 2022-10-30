import Vue from "vue"
import * as Sentry from "@sentry/vue"
import { BrowserTracing } from "@sentry/tracing"

const config = {
  Vue,
  dsn: "https://c131dfbb484544a48e4bc4073c95b580@o498536.ingest.sentry.io/5576186",
  integrations: [
    new BrowserTracing({
      tracingOrigins: ["localhost", "my-site-url.com", /^\//],
    }),
  ],
  tracesSampleRate: 1.0,
}

if (process.env.NODE_ENV !== "development") {
  Sentry.init(config)
}
