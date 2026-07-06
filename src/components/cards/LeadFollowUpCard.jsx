/* eslint-disable react/prop-types */

const defaultTags = ["Property Enquiry", "1.2 cr", "33bhk", "2 months"];

function ClockIcon() {
  return (
    <svg className="h-3 w-3" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M8 4.75V8l2.25 1.35"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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

function NoteArrowIcon() {
  return (
    <svg className="h-[15px] w-[15px]" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M14.5 5.5 5.5 14.5m0 0h7m-7 0v-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg className="h-3 w-3" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3.5 13V4.25L8 2.5l4.5 1.75V13M2.5 13h11M6 6h.01M8 6h.01M10 6h.01M6 8.5h.01M8 8.5h.01M10 8.5h.01M7 13v-2h2v2"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8.9 1.2c.2 1.9-.6 2.8-1.4 3.7-.7.8-1.4 1.6-1.2 3 .7-.5 1.1-1.1 1.3-1.9 1.6 1.1 2.5 2.4 2.5 4 0 1.5-1 2.7-2.4 2.7-1.6 0-2.7-1.2-2.7-2.9 0-.8.2-1.5.6-2.2-1 .8-1.7 1.9-1.7 3.3 0 2.3 1.8 4 4.1 4s4.1-1.6 4.1-4.1c0-3.1-2.4-4.6-3.2-9.6Z" />
    </svg>
  );
}

function LeadCard({
  nextAction = "Confirm site visit",
  nextTime = "Saturday 11AM",
  name = "Arjun Mehta",
  initials = "AM",
  timeAgo = "6 min ago",
  tags = defaultTags,
  message = "Budget ₹1.1-1.3 Cr confirmed. Site visit Saturday 11AM arranged Sarjapur preferred.",
}) {
  return (
    <article className="mt-[10px] w-full overflow-hidden rounded-[18px] border border-[#BBD2FF] bg-white text-left font-[Inter,system-ui,sans-serif] shadow-none">
      <div className="flex h-[34px] items-center justify-between bg-[#A9B5FF] px-[14px] text-[#4338CA]">
        <p className="m-0 min-w-0 truncate text-[11px] font-medium leading-none">
          Next: {nextAction} &mdash; {nextTime}
        </p>
        <span className="ml-2 shrink-0 text-[#6366F1]">
          <ChevronIcon />
        </span>
      </div>

      <div className="flex flex-col gap-[13px] px-[18px] pb-[18px] pt-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center">
            <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-[#4867FF] text-[10px] font-bold leading-none text-white">
              {initials}
            </div>
            <h3 className="m-0 ml-[14px] truncate text-[15px] font-bold leading-5 text-[#0F172A]">
              {name}
            </h3>
          </div>

          <div className="flex shrink-0 items-center gap-1 text-[10px] font-medium leading-none text-[#94A3B8]">
            <ClockIcon />
            <span>{timeAgo}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-[7px]">
          {tags.map((tag, index) => (
            <span
              className="inline-flex h-[25px] items-center gap-1 rounded-[7px] border border-[#AFC2FF] bg-[#EEF2FF] px-2.5 text-[9px] font-medium leading-none text-[#4F46E5]"
              key={tag}
            >
              {index === 0 ? <BuildingIcon /> : null}
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-start gap-3 text-black">
          <span className="mt-0.5 shrink-0">
            <NoteArrowIcon />
          </span>
          <p className="m-0 max-w-full text-[10px] font-medium leading-[1.45] text-[#334155]">
            {message}
          </p>
        </div>
      </div>
    </article>
  );
}

function LeadFollowUpCard({
  leads,
  sectionTitle = "Hot leads act now",
  leadCount,
  nextAction,
  nextTime,
  name,
  initials,
  timeAgo,
  tags,
  message,
}) {
  if (Array.isArray(leads)) {
    return (
      <section className="w-full rounded-[18px] bg-[#F3F4F6] p-[14px] text-left font-[Inter,system-ui,sans-serif] shadow-none">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2">
            <span className="flex h-[27px] w-[27px] shrink-0 items-center justify-center rounded-full bg-white text-[#EF4444]">
              <FlameIcon />
            </span>
            <h2 className="m-0 truncate text-xs font-bold leading-4 text-[#0F172A]">
              {sectionTitle}
            </h2>
          </div>
          <span className="inline-flex h-[23px] shrink-0 items-center rounded-full border border-[#E5E7EB] bg-white px-[9px] text-[9px] font-semibold leading-none text-[#0F172A]">
            {leadCount ?? leads.length} leads
          </span>
        </div>

        <div className="flex flex-col gap-0">
          {leads.map((lead, index) => (
            <LeadCard key={lead.id || lead.name || index} {...lead} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <LeadCard
      nextAction={nextAction}
      nextTime={nextTime}
      name={name}
      initials={initials}
      timeAgo={timeAgo}
      tags={tags}
      message={message}
    />
  );
}

export default LeadFollowUpCard;
