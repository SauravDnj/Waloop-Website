// Industries content (spec §33–34, §29–30).

import type { Flow } from "@/lib/flows";
import type { PlatformSlug } from "@/lib/platform";

export type Industry = {
  slug: string;
  name: string;
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
        "A campaign brings a customer to WhatsApp, where they discover products in an interactive experience, select an item, are recorded in the CRM, pay, receive a confirmation and get order follow-up.",
      conceptual: true,
      steps: ["Campaign", "Customer", "WhatsApp", "Product Discovery", "Interactive Experience", "Product Selection", "CRM", "Payment", "Confirmation", "Order Follow-up"],
    },
    uses: ["channels", "whatsapp-mini-apps", "payments", "crm", "automations"],
    note: "This is a conceptual example; it does not describe a dedicated order-management system.",
  },
  {
    slug: "education",
    name: "Education",
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
        "A prospective student sends an enquiry, a chatbot shares course information and asks qualification questions, the lead is stored in the CRM, a counsellor follows up and reminders are automated.",
      conceptual: true,
      steps: ["Admission Enquiry", "WhatsApp", "Chatbot — Course Information", "Qualification Questions", "CRM", "Counsellor Follow-up", "Reminder Automation"],
    },
    uses: ["chatbots", "crm", "automations", "channels"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
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
        "A patient messages on WhatsApp, a chatbot asks which service they need, an interactive form collects details and preferences, the CRM is updated, a confirmation is sent and a reminder automation follows.",
      conceptual: true,
      steps: ["Customer", "WhatsApp", "Chatbot", "Select Service", "Interactive Form", "Select Available Option", "CRM", "Confirmation", "Reminder Automation"],
    },
    uses: ["chatbots", "whatsapp-mini-apps", "automations", "crm"],
    note: "All healthcare messaging must remain subject to applicable privacy, security, and regulatory requirements. Calendar and availability features depend on your configuration.",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
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
        "A property enquiry is captured from a campaign, qualified by a chatbot, stored in the CRM with its lead source and followed up by the sales team.",
      conceptual: true,
      steps: ["Property Enquiry", "Lead Capture", "Chatbot Qualification", "CRM + Lead Source", "Sales Team", "Follow-up"],
    },
    uses: ["chatbots", "crm", "workspace", "automations"],
  },
  {
    slug: "financial-services",
    name: "Financial Services",
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
        "A customer enquiry is identified by a chatbot, routed to the right department, handled as service communication and followed by a notification.",
      conceptual: true,
      steps: ["Customer Enquiry", "Chatbot", "Identify Request", "Department Routing", "Service Communication", "Notification"],
    },
    uses: ["chatbots", "workspace", "crm", "automations"],
    note: "Subject to applicable regulatory and compliance requirements.",
  },
  {
    slug: "travel-hospitality",
    name: "Travel & Hospitality",
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
        "A traveller's enquiry is answered by a chatbot, booking details are collected, a personalized confirmation is sent and support continues throughout the stay.",
      conceptual: true,
      steps: ["Enquiry", "Chatbot", "Booking Details", "Personalized Confirmation", "Support", "Follow-up"],
    },
    uses: ["chatbots", "whatsapp-mini-apps", "dynamic-experiences", "crm"],
  },
  {
    slug: "automotive",
    name: "Automotive",
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
        "A vehicle enquiry is qualified by a chatbot, stored in the CRM and passed to sales; later, service reminders and follow-up are automated.",
      conceptual: true,
      steps: ["Vehicle Enquiry", "Chatbot Qualification", "CRM", "Sales Team", "Service Reminder", "Follow-up"],
    },
    uses: ["chatbots", "crm", "automations", "workspace"],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
