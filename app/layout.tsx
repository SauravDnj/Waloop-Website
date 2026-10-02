import type { Metadata } from "next";
import { Space_Grotesk, Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.waloop.in"),
  title: "WALOOP | Customer Engagement, WhatsApp, CRM & AI Automation Platform",
  description:
    "WALOOP brings WhatsApp, multi-channel communication, CRM, chatbots, automation, payments, interactive experiences, dynamic content, and AI together in one customer engagement platform.",
  keywords: [
    "WhatsApp business automation",
    "WhatsApp CRM",
    "WhatsApp chatbot",
    "customer engagement platform",
    "chatbot automation",
    "business automation platform",
    "conversational CRM",
    "WhatsApp automation",
    "WhatsApp Mini-App",
    "AI customer engagement",
  ],
  applicationName: "WALOOP",
  openGraph: {
    type: "website",
    siteName: "WALOOP",
    title: "WALOOP — Built on Trust. Driven by AI.",
    description:
      "Connect. Automate. Engage. Grow. WALOOP brings customer conversations, CRM, chatbots, automation, interactive experiences, payments, dynamic content, analytics, and AI together in one connected platform.",
    images: [{ url: "/brand/waloop-logo-light.png", width: 720, height: 447, alt: "WALOOP" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${urbanist.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ScrollProgress />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
