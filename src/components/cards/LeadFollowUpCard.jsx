/* eslint-disable react/prop-types */

const defaultTags = ["Property Enquiry", "1.2 cr", "3bhk", "2 months"];

function ClockIcon({ compact = false }) {
  return (
    <svg
      className={compact ? "h-3 w-3" : "h-3.5 w-3.5"}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8 4.75V8l2.25 1.35"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon({ compact = false }) {
  return (
    <svg
      className={compact ? "h-3 w-3" : "h-4 w-4"}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m6 3.5 4.5 4.5L6 12.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon({ compact = false }) {
  return (
    <svg
      className={compact ? "h-3.5 w-3.5" : "h-5 w-5"}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 15 15 5M8 5h7v7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BuildingIcon({ compact = false }) {
  return (
    <svg
      className={compact ? "h-3 w-3" : "h-3.5 w-3.5"}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.5 13V4.25L8 2.5l4.5 1.75V13M2.5 13h11M6 6h.01M8 6h.01M10 6h.01M6 8.5h.01M8 8.5h.01M10 8.5h.01M7 13v-2h2v2"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LeadFollowUpCard({
  nextAction = "Confirm site visit",
  nextTime = "Saturday 11AM",
  name = "Arjun Mehta",
  initials = "AM",
  timeAgo = "6 min ago",
  tags = defaultTags,
  message = "Budget ₹1.1-1.3 Cr confirmed. Site visit Saturday 11AM arranged Sarjapur preferred.",
  compact = false,
}) {
  const articleClass = compact
    ? "w-full overflow-hidden rounded-[18px] border border-[var(--primary-300)] bg-[var(--generic-white)] text-left font-[Inter,system-ui,sans-serif] shadow-[0_8px_20px_rgba(37,99,235,0.05)]"
    : "h-[246px] w-[456px] overflow-hidden rounded-[28px] border border-[var(--primary-300)] bg-[var(--generic-white)] text-left font-[Inter,system-ui,sans-serif] shadow-[0_18px_42px_rgba(37,99,235,0.08)]";
  const headerClass = compact
    ? "flex h-[30px] items-center justify-between bg-[var(--secondary-100)] px-4 text-[var(--primary-600)]"
    : "flex h-[42px] items-center justify-between bg-[var(--secondary-100)] px-7 text-[var(--primary-600)]";
  const bodyClass = compact ? "px-4 pb-4 pt-4" : "px-7 pb-6 pt-6";
  const avatarClass = compact
    ? "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[var(--primary-400)] to-[var(--primary-600)] text-[10px] font-bold leading-none text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.36)]"
    : "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[var(--primary-400)] to-[var(--primary-600)] text-[13px] font-bold leading-none text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.36)]";

  return (
    <article className={articleClass}>
      <div className={headerClass}>
        <div className={compact ? "flex min-w-0 items-center gap-2" : "flex min-w-0 items-center gap-2.5"}>
          <span
            className={compact ? "h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary-500)]" : "h-2 w-2 shrink-0 rounded-full bg-[var(--primary-500)]"}
            aria-hidden="true"
          />
          <p className={compact ? "m-0 truncate text-[10px] font-semibold leading-none" : "m-0 truncate text-[13px] font-semibold leading-none"}>
            <span className="text-[var(--primary-500)]">Next</span>
            <span className="mx-1 text-[var(--secondary-500)]">·</span>
            <span>{nextTime}</span>
            <span className="mx-1.5 text-[var(--primary-400)]">/</span>
            <span className="text-[var(--secondary-600)]">{nextAction}</span>
          </p>
        </div>
        <ChevronIcon compact={compact} />
      </div>

      <div className={bodyClass}>
        <div className={compact ? "flex items-center justify-between gap-3" : "flex items-center justify-between gap-5"}>
          <div className={compact ? "flex min-w-0 items-center gap-2.5" : "flex min-w-0 items-center gap-3.5"}>
            <div className={avatarClass}>{initials}</div>
            <h3 className={compact ? "m-0 truncate text-[13px] font-bold leading-4 text-[var(--generic-foreground)]" : "m-0 truncate text-[20px] font-bold leading-6 text-[var(--generic-foreground)]"}>
              {name}
            </h3>
          </div>

          <div className={compact ? "flex shrink-0 items-center gap-1 text-[10px] font-medium leading-none text-[var(--gray-500)]" : "flex shrink-0 items-center gap-1.5 text-[13px] font-medium leading-none text-[var(--gray-500)]"}>
            <ClockIcon compact={compact} />
            <span>{timeAgo}</span>
          </div>
        </div>

        <div className={compact ? "mt-3 flex flex-wrap gap-1.5" : "mt-[18px] flex flex-wrap gap-2"}>
          {tags.map((tag, index) => (
            <span
              className={compact ? "inline-flex h-[20px] items-center gap-1 rounded-full border border-[var(--secondary-300)] bg-[var(--secondary-100)] px-2 text-[9px] font-semibold leading-none text-[var(--primary-600)]" : "inline-flex h-[28px] items-center gap-1.5 rounded-full border border-[var(--secondary-300)] bg-[var(--secondary-100)] px-3 text-[12px] font-semibold leading-none text-[var(--primary-600)]"}
              key={tag}
            >
              {index === 0 ? <BuildingIcon compact={compact} /> : null}
              {tag}
            </span>
          ))}
        </div>

        <div className={compact ? "mt-3 flex items-start gap-2.5" : "mt-[22px] flex items-start gap-3.5"}>
          <div className="mt-[1px] shrink-0 text-[var(--generic-black)]">
            <ArrowIcon compact={compact} />
          </div>
          <p className={compact ? "m-0 text-[9px] font-medium leading-[14px] text-[var(--gray-600)]" : "m-0 text-[13px] font-medium leading-[20px] text-[var(--gray-600)]"}>
            {message}
          </p>
        </div>
      </div>
    </article>
  );
}

export default LeadFollowUpCard;
