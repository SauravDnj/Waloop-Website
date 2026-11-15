import type { Metadata } from "next";
import { Space_Grotesk, Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { MotionProvider } from "@/components/motion-provider";

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
  metadataBase: new URL("https://waloop.in"),
  title: "WALOOP | WhatsApp CRM, Chatbot & AI Automation Platform",
  description:
    "WALOOP is a WhatsApp CRM, chatbot and AI automation platform — multi-channel messaging, CRM, workflows, payments and AI in one place.",
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
    description: "WhatsApp CRM, chatbots, automation, payments and AI in one platform.",
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
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <MotionProvider>
            <ScrollProgress />
            <Header />
            <main id="main" tabIndex={-1} className="flex-1 outline-none">
              {children}
            </main>
            <Footer />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
