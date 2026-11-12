type FaqItem = { q: string; a: string };

/** Server-rendered FAQ: every answer is in the HTML for crawlers and reviewers. */
export function FaqDetailsList({ items }: { items: readonly FaqItem[] }) {
  return (
    <div className="marketing-faq marketing-faq--details">
      {items.map((item) => (
        <details key={item.q} className="marketing-faq-details group border-b border-[var(--cp-border-strong)]">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 pr-1 text-left font-medium text-[var(--cp-navy)] marker:content-none hover:text-[var(--cp-teal)] [&::-webkit-details-marker]:hidden">
            <span>{item.q}</span>
            <span className="text-[var(--cp-muted)] transition-transform group-open:rotate-180" aria-hidden>
              ▾
            </span>
          </summary>
          <div className="pb-5 pr-8 text-sm leading-relaxed text-[var(--cp-muted)]">{item.a}</div>
        </details>
      ))}
    </div>
  );
}
