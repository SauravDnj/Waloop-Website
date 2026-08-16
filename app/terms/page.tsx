import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { termsOfService } from "@/lib/legal/terms";

export const metadata: Metadata = {
  title: "Terms of Service | WALOOP",
  description: "The terms governing your use of the WALOOP platform.",
};

export default function TermsPage() {
  return <LegalLayout {...termsOfService} />;
}
