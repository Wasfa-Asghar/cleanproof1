import type { ProductScreenshotKey } from "@/lib/marketing/image-manifest";

export type HelpCategory =
  | "Getting started"
  | "Operations"
  | "Field"
  | "Quality & evidence"
  | "Client reporting"
  | "Billing & account";

export type HelpArticle = {
  slug: string;
  title: string;
  summary: string;
  category: HelpCategory;
  /** Keywords for client-side search (lowercase). */
  searchText: string;
  steps: string[];
  screenshotKey?: ProductScreenshotKey;
  relatedSlugs: string[];
};

export const HELP_ARTICLES: Record<string, HelpArticle> = {
  "getting-started": {
    slug: "getting-started",
    title: "Getting started",
    summary: "Create an organisation, invite your team, and publish your first checklist template.",
    category: "Getting started",
    searchText: "signup trial onboarding organisation site template team invite first job",
    steps: [
      "Sign up for an account. Your organisation starts a 14 day trial on the Starter plan limits shown on the pricing page.",
      "Complete onboarding: add a client, site, and checklist template from the owner workspace.",
      "Invite managers and cleaners from Settings, then Team, respecting your plan’s active cleaner limit.",
      "Create a job, assign a cleaner, and ask them to open the field workspace today view on their phone browser.",
    ],
    screenshotKey: "owner-overview",
    relatedSlugs: ["managing-jobs", "cleaner-mobile-workflow", "billing"],
  },
  "managing-jobs": {
    slug: "managing-jobs",
    title: "Managing jobs",
    summary: "Schedule jobs, track statuses, and download internal PDFs for approved work.",
    category: "Operations",
    searchText: "jobs list schedule assign status approved pdf download",
    steps: [
      "Open Jobs, then Create job. Choose site, template, assignee, and start time.",
      "Statuses progress from assigned to in progress, needs review, approved, or rejected or sent back.",
      "Supervisors approve from the job detail page or from the Quality queue.",
      "Internal PDF download stays blocked until the job reaches an approved state.",
    ],
    screenshotKey: "jobs-list",
    relatedSlugs: ["quality-reviews", "photo-evidence", "client-reports"],
  },
  "cleaner-mobile-workflow": {
    slug: "cleaner-mobile-workflow",
    title: "Cleaner mobile workflow",
    summary: "Cleaners use the field app in a mobile browser, no app store install required.",
    category: "Field",
    searchText: "mobile field today checklist offline cleaner browser",
    steps: [
      "Sign in and open the field workspace today view.",
      "Start the job, complete checklist lines, and upload before and after photos in the evidence sections.",
      "Submit for review when online. When offline, work is queued until connectivity returns.",
      "Return to today to resume a job if you navigated away while still in progress.",
    ],
    screenshotKey: "field-workspace-mobile",
    relatedSlugs: ["photo-evidence", "managing-jobs", "quality-reviews"],
  },
  "photo-evidence": {
    slug: "photo-evidence",
    title: "Photo evidence",
    summary: "Before and after site photos integrate with checklist completion.",
    category: "Quality & evidence",
    searchText: "photos before after upload jpeg png webp evidence gallery sync",
    steps: [
      "Use the Before photos and After photos sections on the field job page alongside checklist answers.",
      "Accepted formats: JPEG, PNG, or WebP up to 5 MB after compression.",
      'Wait for synced indicators before submitting when you have a connection.',
      "Supervisors review thumbnails in the job detail evidence gallery before approval.",
    ],
    screenshotKey: "job-detail",
    relatedSlugs: ["quality-reviews", "cleaner-mobile-workflow", "client-reports"],
  },
  "quality-reviews": {
    slug: "quality-reviews",
    title: "Quality reviews",
    summary: "Managers approve, send back, or reject submitted jobs from one queue.",
    category: "Quality & evidence",
    searchText: "supervisor approve reject send back queue needs review",
    steps: [
      "Open Quality or open a job with status Needs review.",
      "Approve to mark the job complete for reporting and client share eligibility.",
      "Send back to the cleaner with a clarification comment.",
      "Reject to record a reason and optionally create a corrective re clean follow up.",
    ],
    screenshotKey: "quality-queue",
    relatedSlugs: ["managing-jobs", "client-reports", "photo-evidence"],
  },
  "client-reports": {
    slug: "client-reports",
    title: "Client reports",
    summary: "Share read only completion reports after approval. Clients open a private link without logging in.",
    category: "Client reporting",
    searchText: "share token public report pdf revoke sample",
    steps: [
      "Approve the job, then create or copy a report share link from the Reports area.",
      "Clients open the private link in any browser. No CleanProof account is required.",
      "PDF download uses the same private link as the web view.",
      "Revoke or let links expire from the owner reports area when the engagement ends.",
    ],
    screenshotKey: "client-report",
    relatedSlugs: ["quality-reviews", "managing-jobs", "billing"],
  },
  billing: {
    slug: "billing",
    title: "Billing & plans",
    summary: "Manage subscription, usage, upgrades, and cancellation from Settings, then Billing.",
    category: "Billing & account",
    searchText: "subscription plan upgrade downgrade cancel trial usage limits gbp",
    steps: [
      "Owners open Settings, then Billing to see the current plan, usage meters, and billing period dates.",
      "Upgrading selects a target plan. You are taken to a secure payment page of our payment provider to pay, and your plan starts as soon as the payment is confirmed.",
      "Schedule downgrades when your usage fits the target plan’s limits.",
      "Cancel at period end stops renewal. Access continues until the paid period ends unless already expired.",
    ],
    screenshotKey: "billing",
    relatedSlugs: ["getting-started", "managing-jobs"],
  },
};

export const HELP_SLUGS = Object.keys(HELP_ARTICLES);

export const HELP_CATEGORIES: HelpCategory[] = [
  "Getting started",
  "Operations",
  "Field",
  "Quality & evidence",
  "Client reporting",
  "Billing & account",
];

export const HELP_FEATURED_SLUGS = ["getting-started", "managing-jobs", "cleaner-mobile-workflow"] as const;
