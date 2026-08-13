// src/data/mockData.js

export const mockSummaryData = {
  date: "Oct 24, 2024",
  active_campaigns: 2,
  calls_made: 128,
  calls_today: 42,
  minutes_spoken: 450,
  billing: {
    minutes_left: 350,
    total_minutes_used: 100,
    total_minutes_purchased: 450,
    balance_value: 2450,
  },
  leads_summary: { hot: 12, warm: 24, cold: 8 },
  hot_leads: [
    {
      id: "1",
      name: "Arjun Mehta",
      initials: "AM",
      nextAction: "Confirm site visit",
      nextTime: "Saturday 11AM",
      tags: ["Property Enquiry", "1.2 Cr", "3BHK"],
      timeAgo: "6 min ago",
      message: "Budget ₹1-1.3 Cr confirmed. Site visit Saturday 11AM arranged Sarjapur preferred."
    },
    {
      id: "2",
      name: "Sunita Pillai",
      initials: "SP",
      nextAction: "Confirm site visit",
      nextTime: "Saturday 11AM",
      tags: ["Property Enquiry", "1.5 Cr", "4BHK"],
      timeAgo: "15 min ago",
      message: "High-budget buyer. Open to spacious 4BHK. Spouse Saturday call."
    }
  ],
  campaigns: [
    { id: "1", title: "Hot leads act now", status: "live", hot: 2, qualified: 4, campaign_type: "crm_connected" },
    { id: "2", title: "Prestige Dec Batch", status: "running", hot: 8, qualified: 32, progress: 22, campaign_type: "leads_uploaded" }
  ]
};

export const mockUserData = {
  first_name: "Himanshu",
  last_name: "Sharma",
  email: "himanshu@realestate.com",
  phone: "+91 98765 43210",
  role: "admin",
  company_name: "AI Chief Real Estate"
};

export const mockContactData = [
  { id: "1", name: "Rohan Sharma", phone: "+91 9876543210", email: "rohan@example.com", status: "Contacted", date: "2024-10-24" },
  { id: "2", name: "Ananya Rao", phone: "+91 8765432109", email: "ananya@example.com", status: "Qualified", date: "2024-10-23" },
  { id: "3", name: "Kavya Nair", phone: "+91 6543210987", email: "kavya@example.com", status: "New", date: "2024-10-22" }
];

export const mockKnowledgeBaseData = {
  faqs: [
    { id: 1, question: "Q: What documents are required for booking?", answer: "A: Aadhaar, PAN, 3 Months Bank Statement, And 2 Passport Photos." },
    { id: 2, question: "Q: Is home loan available?", answer: "A: Yes, We Have Tie-Ups With SBI, HDFC, ICICI, And Axis Bank." }
  ],
  workspace_data: {
    id: "kb-workspace-1",
    tables: [
      {
        id: "table-kb-1",
        name: "Property Inventory",
        editable: true,
        fields: [
          { id: "propertyName", name: "Property Name", type: "Single Line Text", value: "Property Name" },
          { id: "bhk", name: "BHK", type: "Single Select", value: "BHK", options: ["1 BHK", "2 BHK", "3 BHK", "4 BHK"] },
          { id: "carpetArea", name: "Carpet Area", type: "Single Line Text", value: "Carpet Area" },
          { id: "priceRange", name: "Price Range", type: "Currency", value: "Price Range" },
          { id: "possession", name: "Possession", type: "Single Line Text", value: "Possession" },
          { id: "unitLeft", name: "Unit Left", type: "Number", value: "Unit Left" },
          { id: "facing", name: "Facing", type: "Single Select", value: "Facing", options: ["East", "West", "North", "South", "North-East"] },
          { id: "amenities", name: "Amenities", type: "Multiple Select", value: "Amenities", options: ["Pool", "Gym", "Clubhouse", "Park", "Security"], editorKind: "tags" },
        ],
        rows: [
          {
            id: "property-1",
            propertyName: "Green Acres Villa",
            bhk: "3 BHK",
            carpetArea: "1550 sqft",
            priceRange: "1.2 - 1.5 Cr",
            possession: "Ready to Move",
            unitLeft: "4",
            facing: "East",
            amenities: "Pool, Gym, Clubhouse",
          },
          {
            id: "property-2",
            propertyName: "Skyline Heights",
            bhk: "2 BHK",
            carpetArea: "1100 sqft",
            priceRange: "85 - 95 Lakhs",
            possession: "Dec 2026",
            unitLeft: "12",
            facing: "North-East",
            amenities: "Park, Security, Power Backup",
          },
          {
            id: "property-3",
            propertyName: "Ocean Breeze Apartments",
            bhk: "4 BHK",
            carpetArea: "2200 sqft",
            priceRange: "2.5 - 3.0 Cr",
            possession: "Ready to Move",
            unitLeft: "2",
            facing: "West",
            amenities: "Sea View, Squash Court, Spa",
          },
        ]
      }
    ]
  }
};

export const mockDealsData = {
  deals_data: {
    id: "deals-workspace-1",
    tables: [
      {
        id: "table-deals-1",
        name: "Deals Pipeline",
        editable: true,
        fields: [
          { id: "dealName", name: "Deal Name", type: "Single Line Text", value: "Deal Name" },
          { id: "callType", name: "Call Type", type: "Single Select", value: "Call Type", options: ["Inbound", "Outbound", "Follow Up"] },
          { id: "score", name: "Score", type: "Multiple Select", value: "Score", options: ["Hot", "Warm", "Cold"], editorKind: "tags" },
          { id: "callOutcome", name: "Call Outcome", type: "Single Line Text", value: "Call Outcome" },
          { id: "budget", name: "Budget", type: "Currency", value: "Budget" },
          { id: "timeline", name: "Timeline", type: "Date", value: "Timeline" },
          { id: "assignedAgent", name: "Assigned Agent", type: "User / Assigned Agent", value: "Assigned Agent", options: ["Ramesh Yadav", "Himanshu S.", "Admin"] },
          { id: "status", name: "Status", type: "Single Select", value: "Status", options: ["Open", "Won", "Lost"], editorKind: "tags" },
          { id: "nextAction", name: "Next Action", type: "Single Line Text", value: "Next Action" },
          { id: "createdTime", name: "Created Time", type: "Date Time", value: "14/08/2026 5:00pm" },
          { id: "lastModifiedTime", name: "Last Modified Time", type: "Date Time", value: "14/08/2026 5:00pm" },
          { id: "createdBy", name: "Created By", type: "User / Assigned Agent", value: "User", options: ["User", "Admin"] },
          { id: "lastModifiedBy", name: "Last Modified By", type: "User / Assigned Agent", value: "Admin", options: ["Admin", "User"] },
        ],
        rows: [
          {
            id: "deal-1",
            dealName: "3BHK Villa Sarjapur",
            callType: "Inbound",
            score: "Hot",
            callOutcome: "Site Visit Scheduled",
            budget: "₹1.2 Cr",
            timeline: "2 Weeks",
            assignedAgent: "Himanshu S.",
            status: "Open",
            nextAction: "Confirm Site Visit",
            createdTime: "14/08/2026 5:00pm",
            lastModifiedTime: "14/08/2026 5:00pm",
            createdBy: "User",
            lastModifiedBy: "Admin",
          },
          {
            id: "deal-2",
            dealName: "4BHK Apartment Whitefield",
            callType: "Follow Up",
            score: "Warm",
            callOutcome: "Price Discussion",
            budget: "₹2.5 Cr",
            timeline: "1 Month",
            assignedAgent: "Ramesh Yadav",
            status: "Open",
            nextAction: "Send Cost Sheet",
            createdTime: "14/08/2026 5:00pm",
            lastModifiedTime: "14/08/2026 5:00pm",
            createdBy: "User",
            lastModifiedBy: "Admin",
          },
          {
            id: "deal-3",
            dealName: "Penthouse Indiranagar",
            callType: "Outbound",
            score: "Hot",
            callOutcome: "Negotiation Stage",
            budget: "₹4.0 Cr",
            timeline: "Immediate",
            assignedAgent: "Himanshu S.",
            status: "Open",
            nextAction: "Draft Sale Agreement",
            createdTime: "14/08/2026 5:00pm",
            lastModifiedTime: "14/08/2026 5:00pm",
            createdBy: "User",
            lastModifiedBy: "Admin",
          }
        ],
      }
    ]
  },
  tasks_data: {
    id: "tasks-workspace-1",
    tables: [
      {
        id: "table-tasks-1",
        name: "Tasks List",
        editable: true,
        fields: [
          { id: "taskName", name: "Task Name", type: "Single Line Text", value: "Task Name" },
          { id: "description", name: "Description", type: "Single Line Text", value: "Description" },
          { id: "assignedAgent", name: "Assigned Agent", type: "User / Assigned Agent", value: "Assigned Agent", options: ["Ramesh Yadav", "Himanshu S.", "Admin"] },
          { id: "date", name: "Date", type: "Date", value: "14/04/2025" },
          { id: "status", name: "Status", type: "Single Select", value: "Status", options: ["To Do", "In Progress", "Completed"], editorKind: "tags" },
        ],
        rows: [
          {
            id: "task-1",
            taskName: "Follow-up call",
            description: "Need to call the client for confirmation",
            assignedAgent: "Ramesh Yadav",
            date: "14/04/2025",
            status: "To Do",
          },
          {
            id: "task-2",
            taskName: "Property Inspection",
            description: "Accompany buyer for site visit",
            assignedAgent: "Himanshu S.",
            date: "15/04/2025",
            status: "In Progress",
          }
        ]
      }
    ]
  }
};

export const mockIntegrationsData = {
  housing: { connected: true },
  acres99: { connected: false },
  google_ads: { connected: false }
};

export const mockActivityData = {
  metrics: {
    total_calls_today: 94,
    pickup_rate_percent: 78,
    avg_call_duration_seconds: 184,
  },
  activity: [
    {
      id: "call-1",
      name: "Rahul Sharma",
      phone: "+91 98765 43210",
      status: "completed",
      calls: [
        {
          retry_id: "retry-1",
          output: {
            outcome: "Customer confirmed site visit for Saturday at 11 AM.",
            next_action: "Confirm site visit",
            follow_up_date: "Saturday 11 AM",
            ai_generated_call_summary: "Prospect confirmed budget of ₹1.2 Cr and requested a 3BHK layout walkthrough.",
            lead_status: "hot",
            messages: [
              { sender: "AI Agent", time: "10:15 AM", text: "Hi Rahul, following up on your inquiry for 3BHK in Sarjapur." },
              { sender: "Customer", time: "10:16 AM", text: "Yes, I am looking for a visit this weekend." }
            ]
          }
        }
      ]
    },
    {
      id: "call-2",
      name: "Ananya Rao",
      phone: "+91 87654 32109",
      status: "completed",
      calls: [
        {
          retry_id: "retry-2",
          output: {
            outcome: "Interested in brochure and price list.",
            next_action: "Send floor plans",
            follow_up_date: "Tomorrow 2 PM",
            ai_generated_call_summary: "Prospect requested detailed cost breakdown and 4BHK floor plan.",
            lead_status: "warm",
            messages: [
              { sender: "AI Agent", time: "10:52 AM", text: "Hi Ananya, would you like to review the floor plans?" },
              { sender: "Customer", time: "10:53 AM", text: "Please send them over email." }
            ]
          }
        }
      ]
    }
  ]
};
