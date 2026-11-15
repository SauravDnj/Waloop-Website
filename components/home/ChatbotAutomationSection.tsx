import { ArrowRight, Bot, Contact, MousePointerClick, Workflow } from "lucide-react";
import { Section } from "@/components/sections/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { WhatsAppConversation } from "@/components/mockups/WhatsAppConversation";
import { platformHref } from "@/lib/platform";

// What the chatbot does behind the animated conversation on the left.
const steps = [
  { icon: Bot, title: "Instant bot reply", description: "Answers every WhatsApp message in seconds." },
  { icon: MousePointerClick, title: "Buttons & choices", description: "Customers tap options instead of typing." },
  { icon: Contact, title: "Lead saved to CRM", description: "Answers become contact data automatically." },
  { icon: Workflow, title: "Automated follow-up", description: "Sales gets the lead; reminders run on their own." },
];

/** Homepage: animated WhatsApp chatbot conversation (left) + chatbot automation summary (right). */
export function ChatbotAutomationSection() {
  return (
    <Section id="chatbot-automation">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal direction="right">
          <WhatsAppConversation />
        </Reveal>

        <div>
          <Reveal>
            <Badge className="mb-4">WhatsApp Chatbot Automation</Badge>
            <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Your WhatsApp Chatbot Replies, Qualifies and <span className="text-gradient-brand">Books Demos</span>
            </h2>
            <p className="mt-4 text-pretty text-base text-text-muted sm:text-lg">
              A no-code WALOOP chatbot handles the conversation on WhatsApp while automation saves the lead and starts follow-up.
            </p>
          </Reveal>

          <RevealGroup className="mt-8 space-y-3">
            {steps.map((s, i) => (
              <RevealItem key={s.title} className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-4">
                <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white">
                  <s.icon aria-hidden className="h-5 w-5" />
                  <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-border bg-surface font-heading text-xs font-bold text-text">
                    {i + 1}
                  </span>
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold text-text">{s.title}</h3>
                  <p className="mt-0.5 text-sm text-text-muted">{s.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1}>
            <Button as="a" href={platformHref("chatbots")} variant="primary" className="mt-8" icon={<ArrowRight className="h-4 w-4" />}>
              Build Your WhatsApp Chatbot
            </Button>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
