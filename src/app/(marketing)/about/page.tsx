import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { businessIdentity } from "@/lib/config/business-identity";
import { MarketingInteriorHeroSplit } from "@/components/marketing/marketing-interior-hero";
import { SectionIntro } from "@/components/marketing/section-intro";
import { Button } from "@/components/ui/button";
import {
  IconChecklist,
  IconStatus,
  IconTokenLink,
} from "@/components/marketing/marketing-icons";
import { getPublicSiteUrl } from "@/lib/site-url";

const SITE_URL = getPublicSiteUrl();
const DIRECTOR_EMAIL = "houseofveynor@gmail.com";
const DIRECTOR_LINKEDIN = "https://www.linkedin.com/in/muhammad-tayyab-b4a08125b/";

const WORKFLOW_CARDS = [
  {
    title: "Assign and complete",
    body: "Owners assign jobs, cleaners finish checklists and upload photos.",
    Icon: IconChecklist,
  },
  {
    title: "Review",
    body: "Supervisors approve or send work back before anything reaches the client.",
    Icon: IconStatus,
  },
  {
    title: "Report",
    body: "Clients get a read only completion report through a private link.",
    Icon: IconTokenLink,
  },
] as const;

const COMPANY_DETAILS: Array<{ label: string; value: ReactNode }> = [
  { label: "Legal name", value: businessIdentity.operatorName },
  {
    label: "Registration",
    value: `Registered in England and Wales, company number ${businessIdentity.companyRegistrationNumber}`,
  },
  { label: "Registered office", value: businessIdentity.registeredAddress },
  { label: "Director", value: "Muhammad Tayyab" },
  {
    label: "Email",
    value: (
      <a href={`mailto:${DIRECTOR_EMAIL}`} className="font-semibold text-[var(--cp-teal)] hover:underline">
        {DIRECTOR_EMAIL}
      </a>
    ),
  },
  {
    label: "Phone",
    value: (
      <a
        href={`tel:${businessIdentity.supportPhone.replace(/\s/g, "")}`}
        className="font-semibold text-[var(--cp-teal)] hover:underline"
      >
        {businessIdentity.supportPhone}
      </a>
    ),
  },
];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: businessIdentity.tradingName,
  legalName: businessIdentity.operatorName,
  url: SITE_URL,
  logo: `${SITE_URL}/marketing/photos/hero-cleaning-cutout.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office 2236, 85 Dunstall Hill",
    addressLocality: "Wolverhampton",
    addressRegion: "England",
    postalCode: "WV6 0SR",
    addressCountry: "GB",
  },
  telephone: businessIdentity.supportPhone,
  founder: {
    "@type": "Person",
    name: "Muhammad Tayyab",
    jobTitle: "Director",
    sameAs: [DIRECTOR_LINKEDIN],
  },
};

export const metadata: Metadata = {
  title: "About",
  description:
    "CleanProof is cleaning quality software from The House Of Veynor Ltd. Assign jobs, capture proof, review work, and share client reports.",
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <MarketingInteriorHeroSplit
        eyebrow="About CleanProof"
        title="Software for cleaning teams, run by a real team"
        lead="CleanProof is cleaning quality software made by The House Of Veynor Ltd. It helps cleaning companies assign jobs, complete checklists, attach before and after photos, review the work and send clients a clear completion report."
        aside={
          <div className="overflow-hidden rounded-2xl border border-[var(--cp-border)] shadow-lg">
            <Image
              src="/marketing/photos/about-hero.jpg"
              alt="Two cleaning staff in navy uniforms reviewing work together near a bright office reception desk"
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
          </div>
        }
      />

      <section className="border-b border-[var(--cp-border)] py-[var(--marketing-section-y)]">
        <div className="mx-auto max-w-[1216px] px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="order-2 lg:order-1">
              <div className="overflow-hidden rounded-2xl border border-[var(--cp-border)] shadow-md">
                <Image
                  src="/marketing/photos/about-workflow.jpg"
                  alt="Gloved hand holding a smartphone toward a clean washroom counter to capture job evidence"
                  width={1200}
                  height={900}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-semibold text-[var(--cp-navy)] sm:text-3xl">Why we built it</h2>
              <p className="mt-4 text-[17px] leading-relaxed text-[var(--cp-muted)]">
                Cleaning companies lose time and contracts when they cannot show what was done on site. Photos sit on personal phones,
                checklists get lost in vans, proof ends up in group chats.
              </p>
              <p className="mt-4 text-[17px] leading-relaxed text-[var(--cp-muted)]">
                CleanProof gives every job one record the owner, supervisor and client can trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--cp-section-muted)] py-[var(--marketing-section-y)]">
        <div className="mx-auto max-w-[1216px] px-4">
          <SectionIntro
            eyebrow="Workflow"
            title="How it works"
            description="Three steps from assignment to the report your client actually opens."
            tone="brand"
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WORKFLOW_CARDS.map(({ title, body, Icon }) => (
              <li
                key={title}
                className="rounded-2xl border border-[var(--cp-border)] bg-white p-6 shadow-[0_8px_24px_rgba(12,55,66,0.06)]"
              >
                <Icon className="h-9 w-9 text-[var(--cp-teal)]" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold text-[var(--cp-navy)]">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--cp-muted)]">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-[var(--cp-border)] py-[var(--marketing-section-y)]">
        <div className="mx-auto max-w-[1216px] px-4">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)] lg:items-start lg:gap-14">
            <div className="mx-auto w-full max-w-[280px] lg:mx-0">
              <div className="overflow-hidden rounded-2xl border border-[var(--cp-border)] bg-[var(--cp-section-muted)] shadow-md">
                <Image
                  src="/marketing/photos/director.jpg"
                  alt="Muhammad Tayyab, director at The House Of Veynor Ltd"
                  width={800}
                  height={800}
                  className="h-auto w-full object-cover"
                  sizes="280px"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <SectionIntro eyebrow="Leadership" title="Who runs CleanProof" tone="brand" className="max-w-none" />
              <p className="mt-2 text-xl font-semibold text-[var(--cp-navy)]">Muhammad Tayyab</p>
              <p className="mt-1 text-sm font-medium text-[var(--cp-teal)]">Director, {businessIdentity.operatorName}</p>
              <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-[var(--cp-muted)]">
                Muhammad Tayyab leads {businessIdentity.operatorName} and the team behind CleanProof. He speaks regularly with
                cleaning owners and supervisors about what slows proof on site, and uses that feedback to keep the product practical
                for field teams, not just the back office.
              </p>
              <p className="mt-4">
                <a
                  href={DIRECTOR_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[var(--cp-teal)] underline decoration-teal-200/80 underline-offset-[5px] hover:decoration-[var(--cp-teal)]"
                >
                  LinkedIn profile
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--cp-section-muted)] py-[var(--marketing-section-y)]">
        <div className="mx-auto max-w-[1216px] px-4">
          <SectionIntro eyebrow="Legal" title="Company details" tone="quiet" />
          <dl className="mt-8 grid gap-x-12 gap-y-6 sm:grid-cols-2">
            {COMPANY_DETAILS.map(({ label, value }) => (
              <div key={label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--cp-muted)]">{label}</dt>
                <dd className="mt-1.5 text-[15px] leading-relaxed text-[var(--cp-navy)]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-[var(--cp-border)] py-[var(--marketing-section-y)]">
        <div className="mx-auto flex max-w-[1216px] flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--cp-navy)] sm:text-3xl">Want to see it in action?</h2>
            <p className="mt-2 max-w-xl text-[16px] leading-relaxed text-[var(--cp-muted)]">
              See the product walkthrough or send us a note and we will help you map CleanProof to your sites.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/demo" className="border-transparent bg-[var(--cp-teal)] px-6 hover:bg-[var(--cp-teal-600)]">
              See the walkthrough
            </Button>
            <Button href="/contact" variant="secondary" className="px-6">
              Contact us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
