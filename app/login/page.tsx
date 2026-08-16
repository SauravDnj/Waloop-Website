import type { Metadata } from "next";
import { AuthCard } from "@/components/auth/AuthCard";

export const metadata: Metadata = {
  title: "Log In | WALOOP",
  description: "Log in to your WALOOP customer portal.",
};

export default function LoginPage() {
  return (
    <AuthCard
      eyebrow="Welcome Back"
      title="Log in to WALOOP"
      description="Access your dashboard, campaigns, and account settings."
      fields={[
        { id: "email", label: "Email Address", type: "email", placeholder: "you@company.com", autoComplete: "email" },
        { id: "password", label: "Password", type: "password", placeholder: "••••••••", autoComplete: "current-password" },
      ]}
      submitLabel="Log In"
      footerText="Don't have an account?"
      footerLinkLabel="Sign up"
      footerLinkHref="/signup"
    />
  );
}
