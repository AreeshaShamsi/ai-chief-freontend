import PropTypes from "prop-types";
import Workspace from "./Workspace";

export const dealColumns = [
  { id: "dealName", name: "Deal Name", type: "Single Line Text", value: "Deal Name" },
  { id: "callType", name: "Call Type", type: "Single Select", value: "Call Type", options: ["Inbound", "Outbound", "Follow Up"] },
  { id: "score", name: "Score", type: "Multiple Select", value: "Score", options: ["Hot", "Warm", "Cold"], editorKind: "tags" },
  { id: "callOutcome", name: "Call Outcome", type: "Single Line Text", value: "Call Outcome" },
  { id: "budget", name: "Budget", type: "Currency", value: "Budget" },
  { id: "timeline", name: "Timeline", type: "Date", value: "Timeline" },
  { id: "assignedAgent", name: "Assigned Agent", type: "User / Assigned Agent", value: "Assigned Agent", options: ["Assigned Agent", "User", "Admin"] },
  { id: "status", name: "Status", type: "Single Select", value: "Status", options: ["Open", "Won", "Lost"], editorKind: "tags" },
  { id: "nextAction", name: "Next Action", type: "Single Line Text", value: "Next Action" },
  { id: "aiCallSummary", name: "AI Generated Call Summary", type: "Single Line Text", value: "AI Generated Call Summary" },
  { id: "createdTime", name: "Created Time", type: "Date Time", value: "14/08/2026 5:00pm" },
  { id: "lastModifiedTime", name: "Last Modified Time", type: "Date Time", value: "14/08/2026 5:00pm" },
  { id: "createdBy", name: "Created By", type: "User / Assigned Agent", value: "User", options: ["User", "Admin"] },
  { id: "lastModifiedBy", name: "Last Modified By", type: "User / Assigned Agent", value: "Admin", options: ["Admin", "User"] },
];

export const dealRows = [
  {
    id: "deal-1",
    dealName: "Arjun Mehta — Prestige Lakeside",
    callType: "Inbound",
    score: "Hot",
    callOutcome: "Site Visit Scheduled",
    budget: "₹1.2 Cr",
    timeline: "2 months",
    assignedAgent: "Rahul Sharma",
    status: "Open",
    nextAction: "Confirm site visit — Saturday 11AM",
    aiCallSummary: "Budget ₹1.1–1.3 Cr confirmed. Site visit Saturday 11AM arranged. Sarjapur preferred. Spouse will join for final decision.",
    aiCallSummaryData: {
      summary: `The prospect Arjun Mehta called enquiring about Prestige Lakeside. He confirmed a budget of ₹1.1–1.3 Cr and expressed strong interest in a 3BHK configuration.

Key discussion points:
• Budget: ₹1.1–1.3 Cr (confirmed, flexible up to ₹1.35 Cr for the right unit)
• Configuration: 3BHK, minimum 1500 sq ft
• Location preference: Sarjapur Road corridor
• Purpose: Self use
• Timeline: Looking to finalize within 2 months

Action agreed upon: Site visit scheduled for Saturday, 23rd Dec at 11 AM. Arjun mentioned his spouse will join for the site visit before making the final decision.

Objections noted: Spouse needs to be present for final decision. No loan pre-approval yet — HDFC Bank meeting scheduled next week.`,
      transcript: [
        { sender: "AI", time: "10:02 AM", message: "Good morning! Thank you for calling Prestige Lakeside. My name is Aria. How may I assist you today?" },
        { sender: "User", time: "10:02 AM", message: "Hi, I saw your ad online for Prestige Lakeside. I'm interested in a 3BHK apartment." },
        { sender: "AI", time: "10:03 AM", message: "That's great to hear! We have excellent 3BHK units available. May I know your preferred budget range and possession timeline?" },
        { sender: "User", time: "10:03 AM", message: "My budget is around 1.2 crore. I'm looking to move in within 2 months if possible." },
        { sender: "AI", time: "10:04 AM", message: "Perfect! We have units in the ₹1.1–1.35 Cr range that would be a great fit. Are you looking for self-use or investment?" },
        { sender: "User", time: "10:04 AM", message: "Self-use. My family and I. Sarjapur Road is our preferred location." },
        { sender: "AI", time: "10:05 AM", message: "Excellent choice. Prestige Lakeside is located right on Sarjapur Road with excellent connectivity. Would you like to schedule a site visit this weekend?" },
        { sender: "User", time: "10:05 AM", message: "Yes, Saturday morning works. Can we do 11 AM?" },
        { sender: "AI", time: "10:06 AM", message: "Absolutely! I've booked your site visit for Saturday 23rd Dec at 11 AM. Our team will greet you at the entrance. Is there anything else I can help you with?" },
        { sender: "User", time: "10:06 AM", message: "That's all for now. My wife will be joining me — she'll want to see the amenities." },
        { sender: "AI", time: "10:07 AM", message: "Of course! We'll ensure a complete walkthrough including the clubhouse and landscaped areas. See you Saturday — have a wonderful day!" },
      ],
      callHistory: [
        {
          date: "Dec 21, 2026 — 10:02 AM",
          score: "hot",
          callOutcome: "Site Visit Scheduled",
          aiSummary: "Budget ₹1.1–1.3 Cr confirmed. Site visit Saturday 11AM arranged. Sarjapur preferred.",
          nextAction: "Confirm site visit — Saturday 11AM",
        },
        {
          date: "Dec 15, 2026 — 3:45 PM",
          score: "warm",
          callOutcome: "Interested / Follow-up Required",
          aiSummary: "First contact. Prospect saw digital ad. Basic interest expressed but no specifics shared.",
          nextAction: "Call back in a week with project brochure",
        },
      ],
    },
    createdTime: "14/08/2026 5:00pm",
    lastModifiedTime: "14/08/2026 5:00pm",
    createdBy: "User",
    lastModifiedBy: "Admin",
  },
  {
    id: "deal-2",
    dealName: "Kavya Nair — Sobha Hartland",
    callType: "Outbound",
    score: "Warm",
    callOutcome: "Interested / Follow-up Required",
    budget: "₹85L",
    timeline: "1 month",
    assignedAgent: "Ananya Rao",
    status: "Open",
    nextAction: "Send project comparison sheet",
    aiCallSummary: "Loan pre-approved at HDFC. First-time investor. Comparing with Prestige Lakeside. Needs comparison sheet.",
    aiCallSummaryData: {
      summary: `Kavya Nair is a first-time real estate investor interested in Sobha Hartland as an investment property. She has a loan pre-approval from HDFC Bank for up to ₹80L.

Key discussion points:
• Budget: ₹85L (₹80L loan + ₹5L own funds)
• Configuration: 2BHK
• Location: Whitefield
• Purpose: Investment
• Timeline: 1 month — wants to close quickly

She is currently evaluating two projects: Sobha Hartland and Prestige Lakeside. Main differentiator she's looking for is rental yield potential and re-sale value.

Action agreed: Share a detailed comparison sheet by EOD showing price per sq ft, expected rental yield, and appreciation trends for both projects.`,
      transcript: [
        { sender: "AI", time: "2:15 PM", message: "Hello Kavya! This is Aria from Sobha Hartland. I'm calling regarding your earlier enquiry. Is this a good time to talk?" },
        { sender: "User", time: "2:15 PM", message: "Yes, go ahead." },
        { sender: "AI", time: "2:16 PM", message: "Thank you! We noticed you were interested in a 2BHK for investment. Could you share your budget range and preferred location?" },
        { sender: "User", time: "2:16 PM", message: "Around 85 lakhs. Whitefield area. I have a loan pre-approved from HDFC for 80 lakhs." },
        { sender: "AI", time: "2:17 PM", message: "That's a great position to be in! Our Whitefield project offers 2BHK units in that range with an excellent rental yield of around 4–5%. Are you comparing with other projects?" },
        { sender: "User", time: "2:17 PM", message: "Yes, I'm also looking at Prestige Lakeside. I want to compare both before deciding." },
        { sender: "AI", time: "2:18 PM", message: "Absolutely, that's a smart approach! I'll send you a detailed comparison sheet today covering price per sq ft, rental yield, and appreciation trends. Would that help?" },
        { sender: "User", time: "2:18 PM", message: "Yes please. Send it to my email." },
        { sender: "AI", time: "2:19 PM", message: "Will do! You'll receive the comparison sheet by EOD. Feel free to call back with any questions. Thank you Kavya!" },
      ],
      callHistory: [
        {
          date: "Dec 22, 2026 — 2:15 PM",
          score: "warm",
          callOutcome: "Interested / Follow-up Required",
          aiSummary: "First-time investor. HDFC pre-approved. Comparing Sobha with Prestige Lakeside.",
          nextAction: "Send comparison sheet by EOD",
        },
        {
          date: "Dec 10, 2026 — 11:30 AM",
          score: "cold",
          callOutcome: "No Answer",
          aiSummary: "Called but no answer. Left voicemail.",
          nextAction: "Follow up in 3 days",
        },
      ],
    },
    createdTime: "14/08/2026 5:00pm",
    lastModifiedTime: "14/08/2026 5:00pm",
    createdBy: "User",
    lastModifiedBy: "Admin",
  },
  {
    id: "deal-3",
    dealName: "Rohan Sharma — Brigade Lakefront",
    callType: "Follow Up",
    score: "Warm",
    callOutcome: "Qualified Lead",
    budget: "₹60L",
    timeline: "6 months",
    assignedAgent: "Rohan Mehta",
    status: "Open",
    nextAction: "Share Brigade Lakefront brochure",
    aiCallSummary: "IT professional. Budget ₹55–65L. Whitefield preferred. HDFC loan pre-approved. Wants brochure.",
    aiCallSummaryData: {
      summary: `Rohan Sharma is an IT professional based in Whitefield looking for a self-use 2BHK apartment. He has a confirmed loan pre-approval from HDFC Bank.

Key discussion points:
• Budget: ₹55–65L
• Configuration: 2BHK
• Location: Whitefield / ITPL corridor
• Purpose: Self use
• Timeline: 6 months (not in a rush)
• Loan pre-approved at HDFC Bank

He's actively looking but not in a hurry. The primary requirement is proximity to his office in ITPL. Brigade Lakefront's location matches his criteria well.

Action agreed: Send the full digital brochure and floor plan for Brigade Lakefront 2BHK units. Follow up call scheduled for Dec 24 at 12 PM to discuss and answer any questions.`,
      transcript: [
        { sender: "AI", time: "4:30 PM", message: "Hi Rohan! This is Aria from Brigade Lakefront. We spoke briefly last week. Just following up — do you have a few minutes?" },
        { sender: "User", time: "4:30 PM", message: "Sure, yeah." },
        { sender: "AI", time: "4:31 PM", message: "Great! We have some exciting offers on 2BHK units this month. Your budget of around 60 lakhs fits well within our current pricing. Would you like to know more?" },
        { sender: "User", time: "4:31 PM", message: "Yes. I'm still exploring but I need something close to ITPL. Is Brigade Lakefront within 5 km?" },
        { sender: "AI", time: "4:32 PM", message: "Absolutely! Brigade Lakefront is just 3.5 km from ITPL via the main road. Very convenient for your daily commute. I'll send the brochure with the exact map." },
        { sender: "User", time: "4:32 PM", message: "Okay. I also have HDFC loan approval for up to 55 lakhs. If the total cost is around 60 lakhs, I can manage the rest from savings." },
        { sender: "AI", time: "4:33 PM", message: "That works perfectly! We have units in the ₹56–62L range. I'll send the complete brochure and floor plans today. Can I schedule a quick call on the 24th at noon to go over any questions?" },
        { sender: "User", time: "4:33 PM", message: "Sure, 12 PM works." },
        { sender: "AI", time: "4:34 PM", message: "Perfect! Talk to you then, Rohan. Have a great evening!" },
      ],
      callHistory: [
        {
          date: "Dec 21, 2026 — 4:30 PM",
          score: "warm",
          callOutcome: "Qualified Lead",
          aiSummary: "IT professional. HDFC approved. Close to ITPL is key requirement. Interested in 2BHK.",
          nextAction: "Share brochure, follow-up call Dec 24",
        },
        {
          date: "Dec 14, 2026 — 9:45 AM",
          score: "warm",
          callOutcome: "Initial Contact",
          aiSummary: "First contact from a web form. Basic budget and location captured. Showed moderate interest.",
          nextAction: "Follow up in a week",
        },
        {
          date: "Dec 8, 2026 — 2:00 PM",
          score: "cold",
          callOutcome: "No Answer",
          aiSummary: "No response. Left SMS follow-up.",
          nextAction: "Retry after 3 days",
        },
      ],
    },
    createdTime: "14/08/2026 5:00pm",
    lastModifiedTime: "14/08/2026 5:00pm",
    createdBy: "User",
    lastModifiedBy: "Admin",
  },
];

export const dealViews = ["Grid Name", "Grid Name", "Grid Name", "Grid Name"];

function DealsSection({ activeTab = "deals", onTabChange }) {
  return (
    <Workspace
      workspaceId="deals"
      workspaceType="deals"
      columns={dealColumns}
      rowData={dealRows}
      views={dealViews}
      activeTab={activeTab}
      onTabChange={onTabChange}
    />
  );
}

DealsSection.propTypes = {
  activeTab: PropTypes.string,
  onTabChange: PropTypes.func,
};

export default DealsSection;
