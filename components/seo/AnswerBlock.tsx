import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * "What is …?" direct-answer card. A clear question heading followed by a one-paragraph
 * answer is the format search snippets and AI answer engines quote most reliably.
 */
export function AnswerBlock({ question, answer, className }: { question: string; answer: string; className?: string }) {
  return (
    <div className={cn("border-brand-gradient mx-auto max-w-3xl rounded-[var(--radius-panel)] p-6 shadow-soft sm:p-8", className)}>
      <p className="flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-widest text-brand-green-deep">
        <Sparkles aria-hidden className="h-4 w-4" /> Quick answer
      </p>
      <h2 className="mt-3 text-balance font-heading text-2xl font-bold text-text sm:text-3xl">{question}</h2>
      <p className="mt-3 text-pretty text-lg leading-relaxed text-text-muted">{answer}</p>
    </div>
  );
}
