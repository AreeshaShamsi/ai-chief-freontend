import { C } from "../../components/utils";

const initCampaigns = [
  { id: 1, type: "crm", name: "Prestige Lakeside — Live Enquiries", status: "active", called: 47, hot: 11, qualified: 18, crm: "LeadSquared", since: "Dec 15", script: "property_enquiry" },
  { id: 2, type: "crm", name: "Sobha Hartland — CRM Sync", status: "active", called: 23, hot: 5, qualified: 8, crm: "Salesforce", since: "Dec 18", script: "requirement_gathering" },
  { id: 3, type: "cold", name: "Prestige Lakeside — Dec Batch", status: "active", total: 320, called: 187, hot: 8, qualified: 32, uploaded: "Dec 18", script: "cold_call" },
  { id: 4, type: "cold", name: "Brigade Mysuru — Nov Remainder", status: "completed", total: 200, called: 200, hot: 6, qualified: 42, uploaded: "Nov 30", script: "cold_call" },
];

const scriptLabel = { property_enquiry: "Property Enquiry Call", requirement_gathering: "Requirement Gathering Call", cold_call: "Cold Call" };


const ALL_LEADS = [
  {
    id: 1, callType: "property_enquiry", name: "Arjun Mehta", phone: "+91 98765 43210",
    propertyEnquired: "Prestige Lakeside", callOutcome: "Site Visit Scheduled",
    config: "3BHK", budget: "₹1.2 Cr", location: "Sarjapur Road", purpose: "Self Use",
    timeline: "2 months", aiSummary: "Budget ₹1.1–1.3 Cr confirmed. Site visit Saturday 11AM arranged. Sarjapur preferred.",
    objections: "Wants spouse to join for final decision", nextAction: "Confirm site visit — Saturday 11AM",
    followUpDate: "Dec 23", followUpTime: "11:00 AM", score: "hot", ago: "6 min ago"
  },

  {
    id: 2, callType: "property_enquiry", name: "Kavya Nair", phone: "+91 87654 32109",
    propertyEnquired: "Sobha Hartland", callOutcome: "Interested / Follow-up Required",
    config: "2BHK", budget: "₹85L", location: "Whitefield", purpose: "Investment",
    timeline: "1 month", aiSummary: "Loan pre-approved. First-time investor. Comparing with one more project.",
    objections: "Comparing with Prestige Lakeside", nextAction: "Send project comparison sheet",
    followUpDate: "Dec 22", followUpTime: "3:00 PM", score: "qualified", ago: "19 min ago"
  },

  {
    id: 3, callType: "property_enquiry", name: "Sunita Pillai", phone: "+91 65432 10987",
    propertyEnquired: "Prestige Lakeside", callOutcome: "Site Visit Scheduled",
    config: "4BHK", budget: "₹1.5 Cr", location: "Sarjapur", purpose: "Self Use",
    timeline: "4 months", aiSummary: "High-budget buyer. Open to spacious 3BHK. Spouse joining Saturday call.",
    objections: "Wants 4BHK — limited inventory", nextAction: "Site visit Saturday — arrange 3BHK walkthrough",
    followUpDate: "Dec 23", followUpTime: "4:00 PM", score: "hot", ago: "41 min ago"
  },

  {
    id: 4, callType: "requirement_gathering", name: "Rohan Sharma", phone: "+91 76543 21098",
    preferredArea: "Whitefield / ITPL", propertyType: "Apartment", config: "2BHK",
    budget: "₹60L", purpose: "Self Use", timeline: "6 months", loanRequired: "Yes",
    callOutcome: "Qualified Lead", propertyMatchStatus: "Matching Properties Available",
    aiSummary: "IT professional. Budget ₹55–65L. Whitefield preferred. Loan pre-approved at HDFC.",
    nextAction: "Share Brigade Lakefront brochure", followUpDate: "Dec 24", followUpTime: "12:00 PM",
    score: "qualified", ago: "2 hrs ago"
  },

  {
    id: 5, callType: "requirement_gathering", name: "Ananya Rao", phone: "+91 43210 98765",
    preferredArea: "Electronic City", propertyType: "Apartment", config: "2BHK",
    budget: "₹70L", purpose: "Self Use", timeline: "3–6 months", loanRequired: "Yes",
    callOutcome: "Interested", propertyMatchStatus: "Matching Properties Available",
    aiSummary: "Working professional. Interested but busy. Prefers weekend callbacks.",
    nextAction: "Call back Saturday morning", followUpDate: "Dec 23", followUpTime: "10:00 AM",
    score: "warm", ago: "2 days ago"
  },

  {
    id: 6, callType: "cold_call", name: "Deepak Joshi", phone: "+91 54321 09876",
    interestedInBuying: "Maybe Later", purpose: "Investment", preferredArea: "Anywhere Bengaluru",
    propertyType: "Apartment", config: "1BHK", budget: "₹40L", timeline: "1 year+",
    callOutcome: "Future Prospect", interestLevel: "Low",
    aiSummary: "Early exploration. Budget low for current inventory. Long-term nurture candidate.",
    nextAction: "Add to monthly newsletter drip", followUpDate: "Jan 15", followUpTime: "11:00 AM",
    score: "cold", ago: "3 days ago"
  },

  {
    id: 7, callType: "cold_call", name: "Vikram Singh", phone: "+91 32109 87654",
    interestedInBuying: "No", purpose: "—", preferredArea: "—", propertyType: "—",
    config: "—", budget: "—", timeline: "—",
    callOutcome: "Wrong Number", interestLevel: "—",
    aiSummary: "Number belongs to a different person. Invalid lead — not a prospect.",
    nextAction: "Mark as junk", followUpDate: "—", followUpTime: "—",
    score: "junk", ago: "1 week ago"
  },
];

const HOT_LEADS = ALL_LEADS.filter(l => l.score === "hot");

const CALLS = [
  {
    id: 1, lead: "Arjun Mehta", callType: "property_enquiry", dur: "3:42", date: "Today 10:15 AM",
    score: "hot", status: "completed", callOutcome: "Site Visit Scheduled",
    nextAction: "Confirm site visit — Saturday 11AM", followUp: "Dec 23, 11:00 AM",
    summary: "Budget ₹1.2 Cr confirmed. Sarjapur preferred. Site visit Saturday arranged.",
    transcript: [
      { t: "0:03", r: "AI", tx: "Hello, this is an automated call from Prestige Realty. Is this a good time?" },
      { t: "0:09", r: "Lead", tx: "Yes, go ahead." },
      { t: "0:11", r: "AI", tx: "Are you looking for own stay or investment?" },
      { t: "0:16", r: "Lead", tx: "Own stay for my family." },
      { t: "0:19", r: "AI", tx: "What would be your approximate budget?" },
      { t: "0:24", r: "Lead", tx: "Around 1.2 crore, maybe up to 1.3." },
      { t: "0:40", r: "AI", tx: "Are you looking to move in within 3 months?" },
      { t: "0:46", r: "Lead", tx: "Within 2 months if possible." },
      { t: "1:01", r: "AI", tx: "Prestige Lakeside near Sarjapur looks like an excellent fit. Would you like a site visit?" },
      { t: "1:10", r: "Lead", tx: "Yes, Saturday works." },
    ]
  },
  {
    id: 2, lead: "Kavya Nair", callType: "property_enquiry", dur: "2:18", date: "Today 10:52 AM",
    score: "qualified", status: "completed", callOutcome: "Interested / Follow-up Required",
    nextAction: "Send comparison sheet", followUp: "Dec 22, 3:00 PM",
    summary: "Investor, 2BHK, ₹85L. Loan pre-approved. Comparing one more project.",
    transcript: [
      { t: "0:04", r: "AI", tx: "Hello Kavya, automated call from Sobha Realty about your 2BHK inquiry." },
      { t: "0:10", r: "Lead", tx: "Yes I filled a form online." },
      { t: "0:13", r: "AI", tx: "Are you looking for personal use or investment?" },
      { t: "0:18", r: "Lead", tx: "Investment. Loan approved for 85 lakhs." },
    ]
  },
  {
    id: 3, lead: "Rohan Sharma", callType: "requirement_gathering", dur: "0:00", date: "Today 09:30 AM",
    score: "warm", status: "no_answer", callOutcome: "Not Reachable",
    nextAction: "Retry at 3 PM", followUp: "Today, 3:00 PM", summary: "No answer. 3rd attempt.", transcript: []
  },
  {
    id: 4, lead: "Deepak Joshi", callType: "cold_call", dur: "0:42", date: "Yesterday 11 AM",
    score: "cold", status: "completed", callOutcome: "Future Prospect",
    nextAction: "Add to newsletter drip", followUp: "Jan 15, 11:00 AM",
    summary: "Budget ₹40L. Timeline 1 year+. Long-term nurture only.", transcript: []
  },
];

const CALL_TYPE_META = {
  property_enquiry: { label: "Property Enquiry", bg: "#EEF2FF", c: C.accent, b: "#C7D2FE", icon: "🏢" },
  requirement_gathering: { label: "Requirement Gathering", bg: C.greenBg, c: C.green, b: C.greenBdr, icon: "🔍" },
  cold_call: { label: "Cold Call", bg: C.warmBg, c: "#B45309", b: C.warmBdr, icon: "📲" },
};

const DETECTED_COLS = ["Name", "Phone", "City", "Project", "Budget", "Source", "Email", "-- Skip --"];
const PREVIEW_ROWS = [
    { Name: "Arjun Mehta", Phone: "9876543210", City: "Bengaluru", Project: "Prestige Lakeside", Budget: "1.2 Cr", Source: "Walk-in" },
    { Name: "Kavya Nair", Phone: "8765432109", City: "Bengaluru", Project: "Sobha Hartland", Budget: "85 L", Source: "Referral" },
    { Name: "Rohan Sharma", Phone: "7654321098", City: "Mysuru", Project: "Brigade Lakefront", Budget: "60 L", Source: "Website" },
];

const SCORE_META = {
  hot: { l: "🔥 Hot", bg: C.hotBg, c: C.hot, b: C.hotBdr, def: "Site visit scheduled or very high buying intent. Needs immediate follow-up." },
  warm: { l: "⚡ Warm", bg: C.warmBg, c: C.warm, b: C.warmBdr, def: "Interested but needs nurturing. Medium intent, follow-up required." },
  cold: { l: "❄️ Cold", bg: "#F8FAFC", c: C.muted, b: C.border, def: "Low intent or long timeline (6 months+). Future prospect only." },
  qualified: { l: "✓ Qualified", bg: C.greenBg, c: C.green, b: C.greenBdr, def: "Clear budget, defined timeline & requirement confirmed. Ready for sales team handoff." },
  junk: { l: "✕ Junk", bg: "#F9FAFB", c: "#9CA3AF", b: "#E5E7EB", def: "Wrong number, not reachable, not interested, or Do Not Call." },
};

function CallTypeBadge({ type }) {
  const m = CALL_TYPE_META[type] || { label: type, bg: "#F8FAFC", c: C.muted, b: C.border, icon: "📞" };
  return <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "2px 9px", borderRadius: 20, fontSize: 10, fontWeight: 600, background: m.bg, color: m.c, border: `1px solid ${m.b}`, whiteSpace: "nowrap" }}>{m.icon} {m.label}</span>;
}

function ScoreBadge({ score }) {
  const m = SCORE_META[score] || { l: "–", bg: "#F8FAFC", c: C.muted, b: C.border };
  return <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "2px 9px", borderRadius: 20, fontSize: 10, fontWeight: 600, background: m.bg, color: m.c, border: `1px solid ${m.b}`, whiteSpace: "nowrap" }}>{m.l}</span>;
}

export { initCampaigns, scriptLabel, HOT_LEADS, ALL_LEADS, CALLS, DETECTED_COLS, PREVIEW_ROWS, CALL_TYPE_META, SCORE_META, CallTypeBadge, ScoreBadge };