import { Section } from "@/components/sections/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppConversation } from "@/components/mockups/WhatsAppConversation";
import { FlowDiagram } from "@/components/diagrams/FlowDiagram";
import { conversationToPlatform } from "@/lib/journeys";

/** §26 WhatsApp conversation example + conversation-to-platform graphic. */
export function ConversationShowcase() {
  return (
    <Section id="conversation">
      <SectionHeading
        eyebrow="See it on WhatsApp"
        title="A Real Conversation, Connected to Your Business"
        description="A realistic WhatsApp journey: the customer asks, the WALOOP bot answers with choices, shares pricing and books a demo — while the platform captures the lead behind the scenes."
      />
      <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <Reveal direction="right">
          <WhatsAppConversation />
        </Reveal>
        <Reveal direction="left" delay={0.1}>
          <FlowDiagram flow={conversationToPlatform} />
        </Reveal>
      </div>
    </Section>
  );
}
