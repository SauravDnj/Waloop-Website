import type { Metadata } from "next";
import { AuthCard } from "@/components/auth/AuthCard";

export const metadata: Metadata = {
  title: "Sign Up | WALOOP",
  description: "Create a WALOOP account to get started with the platform.",
};

export default function SignupPage() {
  return (
    <AuthCard
      eyebrow="Get Started"
      title="Create your WALOOP account"
      description="Set up your workspace and start automating WhatsApp, RCS, SMS and voice."
      fields={[
        { id: "name", label: "Full Name", type: "text", placeholder: "Jordan Lee", autoComplete: "name" },
        { id: "email", label: "Business Email", type: "email", placeholder: "you@company.com", autoComplete: "email" },
        { id: "password", label: "Password", type: "password", placeholder: "••••••••", autoComplete: "new-password" },
      ]}
      submitLabel="Create Account"
      footerText="Already have an account?"
      footerLinkLabel="Log in"
      footerLinkHref="/login"
    />
  );
}
