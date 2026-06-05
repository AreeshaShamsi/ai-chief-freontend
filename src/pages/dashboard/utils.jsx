const initCampaigns = [
    { id: 1, name: "Prestige Lakeside — Dec Launch", status: "active", total: 320, called: 187, hot: 11, qualified: 38, uploaded: "Dec 18", script: "Standard qualify" },
    { id: 2, name: "Sobha Hartland — Investor Batch", status: "active", total: 145, called: 63, hot: 5, qualified: 14, uploaded: "Dec 19", script: "Investment focus" },
    { id: 3, name: "Brigade Mysuru — Nov Remainder", status: "paused", total: 200, called: 200, hot: 8, qualified: 42, uploaded: "Nov 30", script: "Standard qualify" },
];

const HOT_LEADS = [
    { id: 1, name: "Arjun Mehta", phone: "+91 98765 43210", project: "Prestige Lakeside", budget: "₹1.2 Cr", bhk: "3BHK", timeline: "2 months", ago: "6 min ago", summary: "Confirmed budget ₹1.1–1.3 Cr. Whitefield/Sarjapur preferred. Available Saturday for site visit.", campaign: "Prestige Lakeside" },
    { id: 2, name: "Kavya Nair", phone: "+91 87654 32109", project: "Sobha Hartland", budget: "₹85 L", bhk: "2BHK", timeline: "1 month", ago: "19 min ago", summary: "First-time investor. Loan pre-approved. Wants possession within 6 months.", campaign: "Sobha Hartland" },
    { id: 3, name: "Sunita Pillai", phone: "+91 65432 10987", project: "Prestige Lakeside", budget: "₹1.5 Cr", bhk: "4BHK", timeline: "4 months", ago: "41 min ago", summary: "Spouse needs to join call. High intent. Callback scheduled Saturday 11 AM.", campaign: "Prestige Lakeside" },
];

const ALL_LEADS = [
    ...HOT_LEADS.map(l => ({ ...l, score: "hot" })),
    { id: 4, name: "Rohan Sharma", phone: "+91 76543 21098", project: "Brigade Lakefront", budget: "₹60 L", bhk: "2BHK", timeline: "6 months", ago: "2 hrs ago", campaign: "Brigade Mysuru", score: "warm", summary: "Loan pre-approved. Comparing options." },
    { id: 5, name: "Deepak Joshi", phone: "+91 54321 09876", project: "Unknown", budget: "₹40 L", bhk: "1BHK", timeline: "1 year+", ago: "2 days ago", campaign: "Prestige Lakeside", score: "cold", summary: "Early exploration stage." },
    { id: 6, name: "Ananya Rao", phone: "+91 43210 98765", project: "Brigade Lakefront", budget: "₹70 L", bhk: "2BHK", timeline: "Not sure", ago: "3 days ago", campaign: "Brigade Mysuru", score: "cold", summary: "Busy professional. Weekend call preferred." },
    { id: 7, name: "Vikram Singh", phone: "+91 32109 87654", project: "N/A", budget: "N/A", bhk: "N/A", timeline: "N/A", ago: "1 week ago", campaign: "Sobha Hartland", score: "invalid", summary: "Out of geography." },
];

const CALLS = [
    {
        id: 1, lead: "Arjun Mehta", dur: "3:42", date: "Today 10:15 AM", score: "hot", status: "completed",
        summary: "Budget ₹1.2 Cr confirmed. Site visit Saturday arranged. Sarjapur preferred.",
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
        id: 2, lead: "Kavya Nair", dur: "2:18", date: "Today 10:52 AM", score: "hot", status: "completed",
        summary: "Investor, 2BHK, ₹85–90L. Loan pre-approved. Wants possession in 6 months.",
        transcript: [
            { t: "0:04", r: "AI", tx: "Hello Kavya, automated call from Sobha Realty about your 2BHK inquiry." },
            { t: "0:10", r: "Lead", tx: "Yes I filled a form online." },
            { t: "0:13", r: "AI", tx: "Are you looking for personal use or investment?" },
            { t: "0:18", r: "Lead", tx: "Investment. Loan approved for 85 lakhs." },
        ]
    },
    { id: 3, lead: "Rohan Sharma", dur: "0:00", date: "Today 09:30 AM", score: "warm", status: "no_answer", summary: "No answer. 3rd attempt. Retry at 3 PM.", transcript: [] },
    { id: 4, lead: "Deepak Joshi", dur: "0:42", date: "Yesterday 11 AM", score: "cold", status: "completed", summary: "Budget ₹40L doesn't match inventory. Long-term nurture.", transcript: [] },
];

const DETECTED_COLS = ["Name", "Phone", "City", "Project", "Budget", "Source", "Email", "-- Skip --"];
const PREVIEW_ROWS = [
    { Name: "Arjun Mehta", Phone: "9876543210", City: "Bengaluru", Project: "Prestige Lakeside", Budget: "1.2 Cr", Source: "Walk-in" },
    { Name: "Kavya Nair", Phone: "8765432109", City: "Bengaluru", Project: "Sobha Hartland", Budget: "85 L", Source: "Referral" },
    { Name: "Rohan Sharma", Phone: "7654321098", City: "Mysuru", Project: "Brigade Lakefront", Budget: "60 L", Source: "Website" },
];

export { initCampaigns, HOT_LEADS, ALL_LEADS, CALLS, DETECTED_COLS, PREVIEW_ROWS };