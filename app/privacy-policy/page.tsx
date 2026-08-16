import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { privacyPolicy } from "@/lib/legal/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy | WALOOP",
  description: "How WALOOP collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return <LegalLayout {...privacyPolicy} />;
}
