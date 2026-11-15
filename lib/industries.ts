// Industries content (spec §33–34, §29–30).

import type { Flow } from "@/lib/flows";
import type { PlatformSlug } from "@/lib/platform";

export type Industry = {
  slug: string;
  name: string;
  /** Primary SEO / AEO keyword. */
  keyword: string;
  icon: string;
  short: string;
  seo: { title: string; description: string };
  hero: { title: string; description: string };
  useCases: string[];
  flow: Flow;
  uses: PlatformSlug[];
  note?: string;
};

export const industries: Industry[] = [
  {
    slug: "retail-ecommerce",
    name: "Retail & E-commerce",
    keyword: "WhatsApp for E-commerce",
    icon: "ShoppingBag",
    short: "Product discovery, enquiries, campaigns, order communication, support and payments.",
    seo: {
      title: "WhatsApp for Retail & E-commerce | WALOOP",
      description: "Product discovery, campaigns, order-related communication, support and payment journeys on WhatsApp with WALOOP.",
    },
    hero: {
      title: "Conversational Commerce for Retail & E-commerce",
      description: "Help customers discover products, answer questions, and move from conversation to payment and follow-up.",
    },
    useCases: ["Product discovery", "Customer enquiries", "Campaigns", "Order-related communication", "Support", "Payment journeys"],
    flow: {
      title: "E-commerce journey",
      caption:
        "Customers discover products on WhatsApp, select, pay and get a confirmation.",
      conceptual: true,
      steps: ["Campaign", "WhatsApp", "Product Discovery", "Product Selection", "Payment", "Confirmation"],
    },
    uses: ["channels", "whatsapp-mini-apps", "payments", "crm", "automations"],
  },
  {
    slug: "education",
    name: "Education",
    keyword: "WhatsApp for Education",
    icon: "GraduationCap",
    short: "Admission enquiries, course information, lead qualification, reminders and student communication.",
    seo: {
      title: "WhatsApp for Education & Admissions | WALOOP",
      description: "Handle admission enquiries, share course information, qualify leads and send reminders with WALOOP.",
    },
    hero: {
      title: "Admissions and Student Communication on WhatsApp",
      description: "Answer admission enquiries, share course information and keep students informed with reminders.",
    },
    useCases: ["Admission enquiries", "Course information", "Lead qualification", "Reminders", "Student communication"],
    flow: {
      title: "Admission enquiry",
      caption:
        "A chatbot shares course details, qualifies the student and a counsellor follows up.",
      conceptual: true,
      steps: ["Admission Enquiry", "Chatbot — Course Info", "Qualification", "CRM", "Counsellor Follow-up"],
    },
    uses: ["chatbots", "crm", "automations", "channels"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    keyword: "WhatsApp for Healthcare",
    icon: "HeartPulse",
    short: "Appointment enquiries, patient communication, reminders and support workflows.",
    seo: {
      title: "WhatsApp for Healthcare Communication | WALOOP",
      description: "Appointment enquiries, patient communication, reminders and support workflows with WALOOP.",
    },
    hero: {
      title: "Patient Communication That's Easier to Manage",
      description: "Handle appointment enquiries, patient communication, reminders and support workflows in one place.",
    },
    useCases: ["Appointment enquiries", "Patient communication", "Reminders", "Support workflows"],
    flow: {
      title: "Appointment journey",
      caption:
        "A patient picks a service in a WhatsApp form, gets a confirmation and a reminder.",
      conceptual: true,
      steps: ["WhatsApp", "Chatbot", "Select Service", "Interactive Form", "Confirmation", "Reminder"],
    },
    uses: ["chatbots", "whatsapp-mini-apps", "automations", "crm"],
    note: "Subject to applicable privacy and regulatory requirements.",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    keyword: "WhatsApp for Real Estate",
    icon: "Building",
    short: "Property enquiries, lead capture, qualification, follow-up and sales conversations.",
    seo: {
      title: "WhatsApp for Real Estate Leads | WALOOP",
      description: "Capture property enquiries, qualify buyers and follow up with sales conversations using WALOOP.",
    },
    hero: {
      title: "Every Property Enquiry, Captured and Followed Up",
      description: "Capture property enquiries, qualify buyers and keep sales conversations moving.",
    },
    useCases: ["Property enquiries", "Lead capture", "Qualification", "Follow-up", "Sales conversations"],
    flow: {
      title: "Property enquiry",
      caption:
        "A chatbot qualifies the property enquiry and sales follows up.",
      conceptual: true,
      steps: ["Property Enquiry", "Lead Capture", "Chatbot Qualification", "CRM + Lead Source", "Sales Team", "Follow-up"],
    },
    uses: ["chatbots", "crm", "workspace", "automations"],
  },
  {
    slug: "financial-services",
    name: "Financial Services",
    keyword: "WhatsApp for Financial Services",
    icon: "Landmark",
    short: "Customer enquiries, lead journeys, notifications and service communication.",
    seo: {
      title: "WhatsApp for Financial Services | WALOOP",
      description: "Customer enquiries, lead journeys, notifications and service communication with WALOOP.",
    },
    hero: {
      title: "Structured Communication for Financial Services",
      description: "Handle customer enquiries, lead journeys, notifications and service communication.",
    },
    useCases: ["Customer enquiries", "Lead journeys", "Notifications", "Service communication"],
    flow: {
      title: "Service enquiry",
      caption:
        "A chatbot identifies the request and routes it to the right department.",
      conceptual: true,
      steps: ["Customer Enquiry", "Chatbot", "Identify Request", "Department Routing", "Service Communication", "Notification"],
    },
    uses: ["chatbots", "workspace", "crm", "automations"],
    note: "Subject to applicable regulatory and compliance requirements.",
  },
  {
    slug: "travel-hospitality",
    name: "Travel & Hospitality",
    keyword: "WhatsApp for Travel & Hospitality",
    icon: "Plane",
    short: "Enquiries, booking-related communication, confirmations, support and personalized communication.",
    seo: {
      title: "WhatsApp for Travel & Hospitality | WALOOP",
      description: "Enquiries, booking-related communication, confirmations and guest support with WALOOP.",
    },
    hero: {
      title: "Guest Communication From Enquiry to Stay",
      description: "Answer enquiries, share booking-related communication, send confirmations and support guests personally.",
    },
    useCases: ["Enquiries", "Booking-related communication", "Confirmation", "Support", "Personalized customer communication"],
    flow: {
      title: "Booking communication",
      caption:
        "A chatbot collects booking details and sends a personalized confirmation.",
      conceptual: true,
      steps: ["Enquiry", "Chatbot", "Booking Details", "Personalized Confirmation", "Support", "Follow-up"],
    },
    uses: ["chatbots", "whatsapp-mini-apps", "dynamic-experiences", "crm"],
  },
  {
    slug: "automotive",
    name: "Automotive",
    keyword: "WhatsApp for Automotive",
    icon: "Car",
    short: "Vehicle enquiries, lead qualification, service reminders, support and follow-up.",
    seo: {
      title: "WhatsApp for Automotive Sales & Service | WALOOP",
      description: "Vehicle enquiries, lead qualification, service reminders and follow-up with WALOOP.",
    },
    hero: {
      title: "From Vehicle Enquiry to Service Reminder",
      description: "Qualify vehicle enquiries, support customers and automate service reminders and follow-up.",
    },
    useCases: ["Vehicle enquiries", "Lead qualification", "Service reminders", "Customer support", "Follow-up"],
    flow: {
      title: "Vehicle journey",
      caption:
        "A chatbot qualifies the enquiry; service reminders are automated later.",
      conceptual: true,
      steps: ["Vehicle Enquiry", "Chatbot Qualification", "CRM", "Sales Team", "Service Reminder", "Follow-up"],
    },
    uses: ["chatbots", "crm", "automations", "workspace"],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
