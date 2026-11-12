import Image from "next/image";
import { PRODUCT_SCREENSHOTS } from "@/lib/marketing/image-manifest";

const OWNER = PRODUCT_SCREENSHOTS["owner-overview"];
const FIELD = PRODUCT_SCREENSHOTS["field-workspace-mobile"];

/**
 * Homepage hero — real product UI: owner dashboard in a browser frame plus the mobile field workspace.
 */
export function HomeHeroVisual() {
  return (
    <figure className="marketing-hero-visual m-0 w-full">
      <div className="marketing-hero-product relative mx-auto w-full pb-16 pt-2 sm:pb-20 lg:mx-0 lg:max-w-none lg:pb-6 lg:pt-0">
        <div className="marketing-hero-product-browser overflow-hidden rounded-xl border border-[var(--cp-border)] bg-white shadow-[0_24px_60px_rgba(12,55,66,0.11)] ring-1 ring-[var(--cp-ring)]">
          <div
            className="flex items-center gap-2 border-b border-[var(--cp-border)] bg-[#f4f8f9] px-3 py-2 sm:px-4 sm:py-2.5"
            aria-hidden
          >
            <span className="h-2 w-2 rounded-full bg-[#e2b6b0] sm:h-2.5 sm:w-2.5" />
            <span className="h-2 w-2 rounded-full bg-[#e8d9a8] sm:h-2.5 sm:w-2.5" />
            <span className="h-2 w-2 rounded-full bg-[#b8d9c4] sm:h-2.5 sm:w-2.5" />
            <span className="ml-1 min-w-0 flex-1 truncate rounded-md bg-white/90 px-2 py-0.5 text-[9px] font-medium text-[var(--cp-muted)] sm:ml-2 sm:px-3 sm:py-1 sm:text-[10px]">
              CleanProof owner overview
            </span>
          </div>
          <Image
            src={OWNER.file}
            alt={OWNER.alt}
            width={1280}
            height={800}
            priority
            className="block h-auto w-full"
            sizes="(max-width: 1023px) 94vw, min(58vw, 780px)"
          />
        </div>

        <div className="marketing-hero-product-phone absolute bottom-0 left-2 w-[34%] min-w-[118px] max-w-[188px] sm:left-4 sm:w-[32%] sm:max-w-[200px] lg:left-0 lg:w-[30%] lg:max-w-[210px] lg:-translate-x-[6%]">
          <div className="overflow-hidden rounded-[1.35rem] border-[6px] border-[#163344] bg-white shadow-[0_18px_42px_rgba(17,43,60,0.22)] sm:rounded-[1.5rem] sm:border-[7px]">
            <Image
              src={FIELD.file}
              alt={FIELD.alt}
              width={390}
              height={844}
              priority
              className="block h-auto w-full"
              sizes="200px"
            />
          </div>
          <p className="mt-2 hidden text-center text-[10px] font-semibold text-[var(--cp-teal)] lg:block">Field workspace</p>
        </div>
      </div>
    </figure>
  );
}
