import Link from "next/link";
import { FaqDetailsList } from "@/components/marketing/faq-details-list";
import { FaqJsonLd } from "@/components/marketing/faq-json-ld";

type FaqItem = { q: string; a: string };

export function MarketingFaqSection({
  title,
  eyebrow = "FAQ",
  items,
  pricingLinks = false,
}: {
  title: string;
  eyebrow?: string;
  items: readonly FaqItem[];
  pricingLinks?: boolean;
}) {
  return (
    <section data-design="faq" className="mx-auto max-w-[1216px] px-4 py-[var(--marketing-section-y)]">
      <FaqJsonLd items={items} />
      <div className="marketing-faq-layout">
        <div className="marketing-section-intro max-w-2xl">
          <p className="text-sm font-medium text-[var(--cp-muted)]">{eyebrow}</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--cp-navy)] md:text-[1.75rem]">{title}</h2>
          {pricingLinks ? (
            <p className="mt-5 text-sm text-[var(--cp-muted)]">
              See also{" "}
              <Link
                href="/subscription-terms"
                className="font-medium text-[var(--cp-teal)] underline decoration-teal-200/80 underline-offset-[5px] hover:decoration-[var(--cp-teal)]"
              >
                subscription terms
              </Link>{" "}
              and{" "}
              <Link
                href="/refund-policy"
                className="font-medium text-[var(--cp-teal)] underline decoration-teal-200/80 underline-offset-[5px] hover:decoration-[var(--cp-teal)]"
              >
                refund &amp; cancellation policy
              </Link>
              .
            </p>
          ) : null}
        </div>
        <FaqDetailsList items={items} />
      </div>
    </section>
  );
}
