// Content data for the /products/voice-ai marketing page.
// WALOOP Voice AI is the underlying speech engine (STT / TTS / NLU) that powers
// voice experiences across calls, virtual assistants, and automation — distinct
// from the higher-level "AI Voice Agent" call-automation product.

import type { OverviewPoint } from "@/components/product/OverviewSection";
import type { StatItem } from "@/components/product/StatStrip";
import type { FeatureCard } from "@/components/product/FeatureGrid";
import type { Step } from "@/components/product/HowItWorks";
import type { IconGridItem } from "@/components/product/IconGrid";

export const heroContent = {
  badge: "Advanced Voice AI Technology",
  title: "Voice AI",
  description:
    "Create natural, intelligent voice experiences with advanced AI speech recognition, real-time voice processing, and conversations that feel genuinely human.",
  bullets: ["Speech Recognition", "Real-time Processing", "20+ Languages"],
  primaryCta: { label: "Book Demo", href: "#demo" },
  secondaryCta: { label: "Try Voice AI", href: "/#contact" },
};

export const heroWidgetStats = [
  { label: "Latency", value: "<800ms" },
  { label: "Accuracy", value: "98.9%" },
  { label: "Languages", value: "20+" },
  { label: "Uptime", value: "99.9%" },
];

export const overview = {
  eyebrow: "Understanding Voice AI",
  heading: "What is Voice AI?",
  description:
    "Voice AI is the technology that lets machines understand, process, and respond to human speech the way a person would. It's the engine behind WALOOP's voice bots, virtual assistants, and call automation — turning raw audio into understanding, and understanding back into natural speech.",
  points: [
    {
      icon: "Sparkles",
      title: "Human-like Conversations",
      description: "Neural text-to-speech paired with natural language processing for replies that sound like a person, not a script.",
    },
    {
      icon: "Mic",
      title: "Speech Recognition",
      description: "Speech-to-text trained on Indian accents and noisy real-world environments, with consistently low latency.",
    },
    {
      icon: "Volume2",
      title: "Text-to-Speech",
      description: "Adjustable emotion, pace, and tone across 20+ languages so every voice matches your brand.",
    },
    {
      icon: "Languages",
      title: "Natural Language Understanding",
      description: "Extracts intent and entities from what callers say, keeping track of context across multi-turn conversations.",
    },
    {
      icon: "Zap",
      title: "Real-time Processing",
      description: "Speech is understood and answered in under 800 milliseconds, so conversations feel live, not laggy.",
    },
    {
      icon: "Webhook",
      title: "Business Automation",
      description: "Automates full call workflows end-to-end, from greeting to resolution, without manual scripting.",
    },
    {
      icon: "AudioLines",
      title: "Speech-to-Text",
      description: "Real-time transcription with punctuation, speaker identification, and precise timestamps built in.",
    },
    {
      icon: "ShieldCheck",
      title: "Enterprise Security",
      description: "AES-256 encryption, GDPR-aligned data handling, and biometric authentication for sensitive calls.",
    },
  ] satisfies OverviewPoint[],
  stats: [
    { label: "Response Latency", value: "<800ms" },
    { label: "Recognition Accuracy", value: "98.9%" },
    { label: "Languages Supported", value: "20+" },
    { label: "Platform Uptime", value: "99.9%" },
  ] satisfies StatItem[],
};

export const features = {
  eyebrow: "Voice AI Features",
  heading: "Everything you need to build with voice",
  description:
    "A full toolkit of speech capabilities, ready to plug into calls, assistants, and automated workflows.",
  items: [
    {
      icon: "Mic",
      title: "Speech-to-Text (STT)",
      description: "Converts spoken audio into accurate text in real time, even across accents and background noise.",
      tags: ["Accent Aware", "Noise Cancel", "Low Latency"],
    },
    {
      icon: "Volume2",
      title: "Text-to-Speech (TTS)",
      description: "Neural voice synthesis with fine control over emotion and delivery for natural-sounding replies.",
      tags: ["Neural Voice", "Emotion", "SSML"],
    },
    {
      icon: "Waves",
      title: "Natural Voice Generation",
      description: "Custom, expressive synthetic voices that can be shaped to match your brand's tone.",
      tags: ["Brand Voice", "Customizable", "Expressive"],
    },
    {
      icon: "Headset",
      title: "AI Voice Assistant",
      description: "A ready-to-deploy conversational layer for inbound support, outbound calls, and collections.",
      tags: ["Inbound", "Outbound", "Collections"],
    },
    {
      icon: "Sparkles",
      title: "Voice Commands",
      description: "Lets users navigate menus and trigger actions hands-free, replacing rigid keypad IVR trees.",
      tags: ["Hands-Free", "IVR", "Commands"],
    },
    {
      icon: "AudioLines",
      title: "Real-time Transcription",
      description: "Live, speaker-separated transcripts with timestamps as the conversation happens.",
      tags: ["Live", "Speaker ID", "Timestamps"],
    },
    {
      icon: "Languages",
      title: "Multi-language Support",
      description: "Fluent recognition and speech generation across Hindi, English, and 20+ other languages.",
      tags: ["Hindi", "English", "20+ Languages"],
    },
    {
      icon: "BarChart3",
      title: "Voice Analytics",
      description: "Surfaces sentiment, keyword trends, and call outcomes in ready-to-read reports.",
      tags: ["Sentiment", "Keywords", "Reports"],
    },
    {
      icon: "VolumeX",
      title: "Noise Cancellation",
      description: "AI-driven denoising isolates the caller's voice from traffic, offices, and background chatter.",
      tags: ["AI Denoiser", "Clear Audio", "Background"],
    },
    {
      icon: "Fingerprint",
      title: "Speaker Recognition",
      description: "Identifies and verifies callers by their unique voice signature for secure interactions.",
      tags: ["Biometrics", "Verify", "Secure"],
    },
    {
      icon: "Wand2",
      title: "Voice Cloning Ready",
      description: "Build a distinct branded voice persona from reference audio for consistent TTS output.",
      tags: ["Clone", "Brand Voice", "Persona"],
    },
    {
      icon: "Webhook",
      title: "API Integration",
      description: "Drop Voice AI into your stack with a REST API, SDKs, and webhook event delivery.",
      tags: ["REST API", "SDK", "Webhooks"],
    },
  ] satisfies FeatureCard[],
};

export const howItWorks = {
  eyebrow: "How Voice AI Works",
  heading: "From spoken word to spoken reply",
  description: "Five steps happen in under a second, every time someone talks to a WALOOP-powered voice experience.",
  steps: [
    {
      step: "01",
      title: "User Speaks",
      description: "The caller talks naturally — no menus to navigate and no keypad trees to sit through.",
    },
    {
      step: "02",
      title: "Voice to Text",
      description: "Automatic speech recognition converts the audio to text, accounting for regional accents.",
    },
    {
      step: "03",
      title: "AI Understands",
      description: "Natural language understanding parses intent, entities, and the context of the conversation.",
    },
    {
      step: "04",
      title: "Smart Response",
      description: "A context-aware answer is generated from your knowledge base or connected systems.",
    },
    {
      step: "05",
      title: "Voice Speaks Back",
      description: "Natural text-to-speech delivers the reply with human-like tone and intonation.",
    },
  ] satisfies Step[],
};

export const useCases = {
  eyebrow: "Business Use Cases",
  heading: "Built for every voice touchpoint",
  description: "Voice AI adapts to how each industry actually talks to its customers.",
  items: [
    { icon: "Headset", title: "Customer Support", description: "Resolve common questions instantly, without hold queues." },
    { icon: "Users", title: "AI Receptionist", description: "Greet, route, and answer calls around the clock without a front desk." },
    { icon: "PhoneCall", title: "Contact Centers", description: "Handle high call volumes with consistent, on-brand responses." },
    { icon: "TrendingUp", title: "Sales Calls", description: "Qualify leads and book meetings through natural conversation." },
    { icon: "Clock", title: "Appointment Booking", description: "Schedule, confirm, and reschedule appointments entirely by voice." },
    { icon: "Stethoscope", title: "Healthcare", description: "Automate patient reminders, triage, and follow-up calls securely." },
    { icon: "Landmark", title: "Banking", description: "Handle balance checks, verification, and fraud alerts by phone." },
    { icon: "ShieldCheck", title: "Insurance", description: "Answer claims status, renewals, and policy queries instantly." },
    { icon: "GraduationCap", title: "Education", description: "Handle admissions and course queries at scale, any time of day." },
    { icon: "Truck", title: "Logistics", description: "Share delivery updates and resolve shipment queries by voice." },
    { icon: "UtensilsCrossed", title: "Restaurants", description: "Take orders and reservations without a single missed call." },
    { icon: "Hotel", title: "Hotels", description: "Manage bookings, concierge requests, and guest support seamlessly." },
  ] satisfies IconGridItem[],
};

export const benefits = {
  eyebrow: "Benefits of Voice AI",
  heading: "Why teams switch to WALOOP Voice AI",
  description: "Real gains in cost, speed, and customer experience — measured, not promised.",
  items: [
    { icon: "Sparkles", title: "Human-like Voice", description: "Natural intonation that callers rarely mistake for a machine." },
    { icon: "Clock", title: "24/7 Availability", description: "Every call answered, any hour, without added headcount." },
    { icon: "Zap", title: "Faster Response", description: "Sub-second replies remove the frustration of hold time." },
    { icon: "TrendingUp", title: "Reduce Costs", description: "Cut voice support costs by up to 60% compared to live agents." },
    { icon: "CheckCircle2", title: "High Accuracy", description: "98.9% recognition accuracy across real-world call audio." },
    { icon: "Globe", title: "Multi-language", description: "Serve customers fluently across 20+ languages and dialects." },
    { icon: "ShieldCheck", title: "Enterprise Security", description: "AES-256 encryption with GDPR and SOC 2 aligned practices." },
    { icon: "BarChart3", title: "Easy Scalability", description: "Absorb traffic spikes instantly, with no added infrastructure." },
    { icon: "Users", title: "Better CX", description: "Consistent, on-brand experiences delivered on every single call." },
    { icon: "Webhook", title: "AI Automation", description: "End-to-end workflow automation without writing manual scripts." },
  ] satisfies IconGridItem[],
};

export const capabilities = {
  eyebrow: "Voice AI Capabilities",
  heading: "Under the hood",
  description: "The technical depth that makes production voice deployments reliable at scale.",
  items: [
    { icon: "Zap", title: "Real-time Voice Processing", description: "Sub-800ms round-trip from spoken input to spoken response." },
    { icon: "Sparkles", title: "AI Conversation Engine", description: "Multi-turn dialogue that retains context and memory through the call." },
    { icon: "Fingerprint", title: "Voice Biometrics", description: "Authenticates callers by their unique vocal signature." },
    { icon: "BarChart3", title: "Sentiment Analysis", description: "Detects caller emotion in real time to guide the conversation." },
    { icon: "AudioLines", title: "Live Transcription", description: "Speaker-separated transcripts with timestamps as calls happen." },
    { icon: "Webhook", title: "Smart Call Routing", description: "Routes calls intelligently based on detected intent and priority." },
    { icon: "TrendingUp", title: "AI Voice Analytics", description: "Surfaces call patterns, resolution rates, and agent performance." },
    { icon: "CheckCircle2", title: "Voice Workflow Automation", description: "Triggers conditional logic and API calls directly from a conversation." },
  ] satisfies IconGridItem[],
};

export const faq = {
  heading: "Voice AI, answered",
  description: "The questions we hear most from teams evaluating WALOOP Voice AI.",
  items: [
    {
      question: "What is Voice AI?",
      answer:
        "WALOOP Voice AI is the core speech technology platform — speech recognition, text-to-speech, and natural language understanding — that powers voice bots, virtual assistants, and call automation across the WALOOP suite.",
    },
    {
      question: "Which languages and accents are supported?",
      answer:
        "Voice AI supports 20+ languages, including Hindi and English, with recognition models tuned for Indian accents and typical real-world call-center audio conditions.",
    },
    {
      question: "How fast is the voice response time?",
      answer:
        "End-to-end response time — from the caller finishing a sentence to hearing a reply — is typically under 800 milliseconds, so conversations stay natural and don't feel like they're waiting on a machine.",
    },
    {
      question: "Can Voice AI integrate with our existing systems?",
      answer:
        "Yes. Voice AI ships with a REST API, SDKs, and webhooks, so it can connect to your CRM, helpdesk, dialer, or knowledge base without re-architecting your stack.",
    },
    {
      question: "Is Voice AI suitable for enterprise use?",
      answer:
        "Yes. It's built with AES-256 encryption, GDPR-aligned data handling, and biometric authentication, and scales to high call volumes without added infrastructure on your end.",
    },
    {
      question: "How does Voice Cloning work?",
      answer:
        "You provide reference audio of the voice you want, and Voice AI builds a branded synthetic voice persona from it, which can then be used for consistent, on-brand TTS output across every call.",
    },
  ],
};

export const cta = {
  heading: "Ready to Experience Voice AI?",
  description: "Deploy WALOOP Voice AI in under 24 hours with zero setup fees, and hear the difference on your first call.",
  primaryCta: { label: "Book a Free Demo", href: "/#contact" },
  secondaryCta: { label: "Contact Sales", href: "/#contact" },
};
