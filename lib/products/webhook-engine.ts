import type { OverviewPoint } from "@/components/product/OverviewSection";
import type { FeatureCard } from "@/components/product/FeatureGrid";
import type { Step } from "@/components/product/HowItWorks";
import type { IconGridItem } from "@/components/product/IconGrid";
import type { ChannelHeroWidgetProps } from "@/components/product/heroes/ChannelHeroWidget";

type CtaLink = { label: string; href: string };

export const heroContent: {
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
} = {
  badge: "Real-Time Event Delivery",
  title: "Webhook Engine",
  description:
    "Push every platform event — message delivered, call ended, payment completed, campaign triggered — to any HTTP endpoint the instant it happens, with sub-100ms dispatch, automatic retries, and full delivery observability.",
  bullets: ["Sub-100ms dispatch", "Automatic retries", "HMAC-signed payloads"],
  primaryCta: { label: "Book Demo", href: "#demo" },
  secondaryCta: { label: "View Documentation", href: "/#contact" },
};

export const heroWidgetProps: ChannelHeroWidgetProps = {
  icon: "Webhook",
  title: "WALOOP Webhook Engine",
  status: "LIVE · EVENT STREAM",
  stats: [
    { label: "Avg Dispatch Latency", value: "84ms" },
    { label: "Delivery Success Rate", value: "99.97%" },
  ],
  feedLabel: "Live Event Stream",
  feed: [
    { title: "message.delivered → WhatsApp", subtitle: "endpoint: /hooks/messages", tag: "62ms" },
    { title: "call.ended → Voice", subtitle: "endpoint: /hooks/calls", tag: "78ms" },
    { title: "payment.completed → Billing", subtitle: "endpoint: /hooks/payments", tag: "91ms" },
  ],
};

export const overviewContent: {
  eyebrow: string;
  heading: string;
  description: string;
  points: OverviewPoint[];
} = {
  eyebrow: "Understanding Webhook Engine",
  heading: "What is the WALOOP Webhook Engine?",
  description:
    "The Webhook Engine is a real-time event delivery system that listens for every event across WhatsApp, SMS, RCS, Voice, and Payments, and pushes it to the HTTP endpoints you configure — instantly, reliably, and with cryptographic proof of origin.",
  points: [
    {
      icon: "Zap",
      title: "Sub-100ms Dispatch",
      description: "Events are captured and pushed to your endpoint in under 100 milliseconds on average, so your systems stay in sync in real time.",
    },
    {
      icon: "RefreshCw",
      title: "Intelligent Retries",
      description: "Failed deliveries are retried automatically on an exponential backoff schedule, with no manual intervention required.",
    },
    {
      icon: "Inbox",
      title: "Dead-Letter Queues",
      description: "Events that exhaust every retry attempt land in a dead-letter queue instead of vanishing, ready for inspection or replay.",
    },
    {
      icon: "ShieldCheck",
      title: "HMAC-Signed Payloads",
      description: "Every request is signed with HMAC-SHA256 so your endpoint can verify it genuinely came from WALOOP before processing it.",
    },
    {
      icon: "Filter",
      title: "Granular Event Filtering",
      description: "Subscribe to exactly the event types you care about — down to a single event name per endpoint — and ignore the rest.",
    },
    {
      icon: "GitFork",
      title: "Fan-Out Delivery",
      description: "Route a single event to multiple endpoints simultaneously, so billing, analytics, and CRM systems all stay current together.",
    },
    {
      icon: "Activity",
      title: "Full Observability",
      description: "Watch every dispatch in a live event stream, inspect historical logs, and track P50/P95/P99 latency in one dashboard.",
    },
    {
      icon: "Server",
      title: "Deploy Your Way",
      description: "Integrate over our managed REST API or self-host the dispatcher on your own Docker or Kubernetes infrastructure.",
    },
  ],
};

export const featuresContent: {
  eyebrow: string;
  heading: string;
  description: string;
  items: FeatureCard[];
} = {
  eyebrow: "Platform Features",
  heading: "Everything your event pipeline needs",
  description: "A production-grade delivery layer for every event your platform generates, built for engineering teams who need reliability by default.",
  items: [
    {
      icon: "Zap",
      title: "Real-Time Dispatch",
      description: "Events fire the moment they occur, with average end-to-end dispatch latency under 100ms across regions.",
      tags: ["<100ms", "Real-Time", "Low Latency"],
    },
    {
      icon: "RefreshCw",
      title: "Exponential Backoff Retries",
      description: "Delivery failures are retried on an increasing backoff schedule, protecting your endpoint from retry storms during downtime.",
      tags: ["Backoff", "Auto-Retry", "Resilient"],
    },
    {
      icon: "Inbox",
      title: "Dead-Letter Queues",
      description: "Undeliverable events are captured in a durable queue rather than dropped, so nothing is lost during an outage.",
      tags: ["DLQ", "No Data Loss", "Durable"],
    },
    {
      icon: "History",
      title: "One-Click Event Replay",
      description: "Resend any historical event — or an entire failed batch — to a live or newly fixed endpoint in a single click.",
      tags: ["Replay", "Batch Resend", "Debug"],
    },
    {
      icon: "Lock",
      title: "HMAC-SHA256 Signing",
      description: "Every payload is signed with a per-endpoint secret so you can verify authenticity before trusting the request.",
      tags: ["HMAC-SHA256", "Signed", "Verified"],
    },
    {
      icon: "ShieldCheck",
      title: "IP Allowlisting",
      description: "Restrict inbound configuration and outbound dispatch to approved IP ranges for an added layer of network security.",
      tags: ["Allowlist", "Network Security", "Access Control"],
    },
    {
      icon: "Filter",
      title: "Granular Subscriptions",
      description: "Subscribe each endpoint to precise event types like message.delivered or rcs.read instead of receiving a firehose.",
      tags: ["Event Types", "Subscriptions", "Precise"],
    },
    {
      icon: "GitFork",
      title: "Multi-Endpoint Fan-Out",
      description: "Deliver the same event to unlimited destinations in parallel, keeping every downstream system consistent.",
      tags: ["Fan-Out", "Parallel", "Multi-Target"],
    },
    {
      icon: "Radio",
      title: "Live Event Stream",
      description: "Watch events dispatch in real time from a live console, filterable by event type, endpoint, or delivery status.",
      tags: ["Live View", "Streaming", "Console"],
    },
    {
      icon: "BarChart3",
      title: "Latency & Delivery Analytics",
      description: "Track P50, P95, and P99 delivery latency alongside success and failure rates for every endpoint.",
      tags: ["P50/P95/P99", "Analytics", "SLA"],
    },
    {
      icon: "FileClock",
      title: "Historical Delivery Logs",
      description: "Every attempt, response code, and payload is logged and searchable, giving you a full audit trail on demand.",
      tags: ["Audit Trail", "Searchable", "Logs"],
    },
    {
      icon: "Server",
      title: "Self-Hosted Option",
      description: "Run the dispatcher inside your own VPC with our Docker image or Kubernetes Helm chart for full data residency control.",
      tags: ["Docker", "Kubernetes", "Self-Hosted"],
    },
  ],
};

export const howItWorksContent: {
  eyebrow: string;
  heading: string;
  description: string;
  steps: Step[];
} = {
  eyebrow: "How It Works",
  heading: "From platform event to your endpoint in five steps",
  description: "Every event travels the same reliable path, from the moment it happens to a confirmed, logged delivery.",
  steps: [
    {
      step: "01",
      title: "Event Occurs",
      description: "A platform action fires an event — a message is delivered, a call ends, a payment completes.",
    },
    {
      step: "02",
      title: "Matched to Subscriptions",
      description: "The engine checks which endpoints are subscribed to that event type and prepares each payload.",
    },
    {
      step: "03",
      title: "Signed and Dispatched",
      description: "Each payload is signed with HMAC-SHA256 and pushed to every matching endpoint in parallel, in under 100ms.",
    },
    {
      step: "04",
      title: "Delivery Confirmed or Retried",
      description: "A 2xx response marks the event delivered; anything else triggers an exponential-backoff retry automatically.",
    },
    {
      step: "05",
      title: "Logged and Replayable",
      description: "The full attempt history is logged and visible in your dashboard, with one-click replay available at any time.",
    },
  ],
};

export const industriesContent: {
  eyebrow: string;
  heading: string;
  description?: string;
  items: IconGridItem[];
} = {
  eyebrow: "Built For",
  heading: "Built for every event-driven team",
  description: "The Webhook Engine adapts to how each type of platform actually consumes real-time data.",
  items: [
    {
      icon: "ShoppingCart",
      title: "E-commerce",
      description: "Sync order confirmations, delivery updates, and payment events straight into your storefront and OMS in real time.",
    },
    {
      icon: "Landmark",
      title: "BFSI",
      description: "Stream transaction and notification status into core banking and compliance systems with signed, auditable delivery.",
    },
    {
      icon: "Cloud",
      title: "SaaS Platforms",
      description: "Give your customers real-time event feeds for the messaging and calling activity happening inside your product.",
    },
    {
      icon: "Truck",
      title: "Logistics",
      description: "Push delivery, dispatch, and shipment status events into fleet and warehouse systems the moment they happen.",
    },
    {
      icon: "Building2",
      title: "Real Estate",
      description: "Trigger lead-routing and follow-up workflows the instant a call ends or a message is read.",
    },
    {
      icon: "HeartPulse",
      title: "Healthcare",
      description: "Feed appointment and communication events into patient systems with signed, verifiable delivery.",
    },
    {
      icon: "GraduationCap",
      title: "EdTech",
      description: "Keep enrollment and communication platforms current with real-time student engagement events.",
    },
    {
      icon: "Megaphone",
      title: "Marketing & CDPs",
      description: "Stream campaign.triggered and engagement events directly into your customer data platform for instant segmentation.",
    },
    {
      icon: "Code2",
      title: "Developer Platforms",
      description: "Give internal and partner teams a single, reliable event bus instead of building custom polling for every integration.",
    },
  ],
};

export const benefitsContent: {
  eyebrow: string;
  heading: string;
  description?: string;
  items: IconGridItem[];
} = {
  eyebrow: "Benefits",
  heading: "Why engineering teams standardize on it",
  items: [
    { icon: "Zap", title: "Real-Time by Default", description: "Sub-100ms dispatch keeps downstream systems in sync without polling." },
    { icon: "RefreshCw", title: "Nothing Gets Lost", description: "Exponential backoff and dead-letter queues guarantee every event is delivered or captured." },
    { icon: "ShieldCheck", title: "Verifiable and Secure", description: "HMAC-SHA256 signing and IP allowlisting keep every payload authenticated and trusted." },
    { icon: "Filter", title: "Precise Event Control", description: "Granular subscriptions mean endpoints only receive the events they actually need." },
    { icon: "GitFork", title: "Scales to Any Architecture", description: "Fan-out delivery keeps unlimited downstream systems consistent from a single event." },
    { icon: "Activity", title: "Total Visibility", description: "Live streams, historical logs, and latency percentiles remove the guesswork from debugging." },
    { icon: "History", title: "Fast Incident Recovery", description: "One-click replay gets a downed endpoint back in sync in seconds, not hours." },
    { icon: "Server", title: "Deployment Flexibility", description: "Use the managed REST API or self-host on Docker and Kubernetes to meet any compliance need." },
  ],
};

export const integrationsContent: {
  eyebrow: string;
  heading: string;
  description?: string;
  items: IconGridItem[];
} = {
  eyebrow: "Integrations",
  heading: "Fits directly into your stack",
  items: [
    { icon: "Webhook", title: "REST API", description: "Register endpoints, manage subscriptions, and query delivery logs programmatically." },
    { icon: "Container", title: "Docker", description: "Run the self-hosted dispatcher as a container inside your own infrastructure." },
    { icon: "Ship", title: "Kubernetes", description: "Deploy and scale the dispatcher with our official Helm chart for high-availability clusters." },
    { icon: "Database", title: "Data Warehouses", description: "Stream delivery logs and event history into your warehouse for long-term analysis." },
    { icon: "Slack", title: "Slack", description: "Get real-time alerts for delivery failures and dead-letter events posted to your team channel." },
    { icon: "GitBranch", title: "CI/CD Pipelines", description: "Trigger deployment and workflow automation directly from platform events." },
    { icon: "Users", title: "CRM", description: "Push message, call, and campaign events into HubSpot, Salesforce, or Zoho as they happen." },
    { icon: "BarChart3", title: "Observability Tools", description: "Export latency and delivery metrics to your existing monitoring and alerting stack." },
  ],
};

export const faqContent: {
  heading: string;
  description?: string;
  items: { question: string; answer: string }[];
} = {
  heading: "Frequently Asked Questions",
  description: "Everything engineering teams ask before wiring up the WALOOP Webhook Engine.",
  items: [
    {
      question: "What events can I subscribe to?",
      answer:
        "Any platform event, including message.delivered, sms.sent, call.ended, rcs.read, payment.completed, and campaign.triggered, along with every other event WALOOP emits across channels.",
    },
    {
      question: "How fast are events delivered?",
      answer:
        "Events are dispatched to your endpoint in under 100 milliseconds on average from the moment they occur, so downstream systems stay effectively real time.",
    },
    {
      question: "What happens if my endpoint is down?",
      answer:
        "Failed deliveries are retried automatically on an exponential-backoff schedule. If every retry is exhausted, the event lands in a dead-letter queue instead of being dropped, and can be replayed once your endpoint is back up.",
    },
    {
      question: "How do I verify a webhook actually came from WALOOP?",
      answer:
        "Every request is signed with HMAC-SHA256 using a secret unique to your endpoint. Verify the signature header against your secret before trusting or processing the payload.",
    },
    {
      question: "Can I send events to more than one endpoint?",
      answer:
        "Yes. Fan-out delivery lets a single event dispatch to unlimited endpoints in parallel, so you can keep billing, analytics, and CRM systems in sync from one source of truth.",
    },
    {
      question: "Can I replay old events?",
      answer:
        "Yes. Every event and delivery attempt is logged, and you can replay a single event or an entire failed batch to any endpoint with one click from the dashboard.",
    },
    {
      question: "Can I self-host the Webhook Engine?",
      answer:
        "Yes. Alongside the managed REST API, we provide a Docker image and a Kubernetes Helm chart so you can run the dispatcher inside your own infrastructure for full data residency control.",
    },
    {
      question: "How do I monitor delivery performance?",
      answer:
        "The dashboard provides a live event stream, historical delivery logs, and P50, P95, and P99 latency metrics per endpoint, so you can track and alert on performance in real time.",
    },
  ],
};

export const ctaContent: {
  heading: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
} = {
  heading: "Ready to Deliver Events in Real Time?",
  description:
    "Wire up the WALOOP Webhook Engine to push every message, call, and payment event to your systems the instant it happens — with retries, signing, and full observability built in.",
  primaryCta: { label: "Book a Free Demo", href: "/#contact" },
  secondaryCta: { label: "Contact Sales", href: "/#contact" },
};
