import type { NextConfig } from "next";

const APP_URL = "https://app.waloop.in";

// Old product URLs map onto the new platform structure (spec §72, §79).
const legacyProducts: Record<string, string> = {
  "whatsapp-business-api": "/platform/channels",
  "rcs-messaging": "/platform/channels",
  "whatsapp-ai-chatbot": "/platform/chatbots",
  "whatsapp-workflow-builder": "/platform/automations",
  "conversational-ai-platform": "/platform",
  "ai-voice-agent": "/platform/ai",
  "voice-ai": "/platform/ai",
  "smart-voice-ivr": "/platform",
  "bulk-sms-gateway": "/platform",
  "missed-call-service": "/platform",
  "webhook-engine": "/integrations",
};

const nextConfig: NextConfig = {
  // Lets the dev server be opened at 127.0.0.1 as well as localhost (dev only).
  allowedDevOrigins: ["127.0.0.1"],
  redirects() {
    return [
      { source: "/products", destination: "/platform", permanent: true },
      ...Object.entries(legacyProducts).map(([slug, destination]) => ({
        source: `/products/${slug}`,
        destination,
        permanent: true,
      })),
      { source: "/features", destination: "/platform", permanent: true },
      { source: "/careers", destination: "/about", permanent: false },
      { source: "/login", destination: APP_URL, permanent: false },
      { source: "/signup", destination: APP_URL, permanent: false },
    ];
  },
};

export default nextConfig;
