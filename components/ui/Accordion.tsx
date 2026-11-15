"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionItemProps = {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

/**
 * Answers are always rendered in the HTML (collapsed with CSS grid rows) so search and
 * answer engines can read every FAQ answer, matching the FAQPage structured data.
 */
function AccordionItem({ id, question, answer, isOpen, onToggle }: AccordionItemProps) {
  const buttonId = `${id}-q`;
  const panelId = `${id}-a`;
  return (
    <div className={cn("soft-panel px-5 sm:px-7", isOpen && "ring-1 ring-brand-blue/20")}>
      <h3 className="m-0">
        <button
          type="button"
          id={buttonId}
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex min-h-14 w-full cursor-pointer items-center justify-between gap-4 py-4 text-left"
        >
          <span className="font-sans text-base font-semibold text-text">{question}</span>
          <span aria-hidden className="btn-soft-dark flex h-8 w-8 shrink-0 items-center justify-center rounded-md">
            <ChevronDown className={cn("h-4 w-4 text-brand-green transition-transform duration-300", isOpen && "rotate-180")} />
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden" inert={!isOpen}>
          <p className="pb-5 text-base leading-relaxed text-text-muted">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function Accordion({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const baseId = React.useId();

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => (
        <AccordionItem
          key={item.question}
          id={`${baseId}-${i}`}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}
