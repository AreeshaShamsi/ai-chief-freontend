import { useState } from "react";
import PropTypes from "prop-types";
import { FiChevronDown, FiChevronUp, FiSliders } from "react-icons/fi";
import {
  AppCard,
  AppIconCircle,
  AppPill,
  C,
  T,
  Text,
} from "../../../components/utils";
import Workspace from "./Workspace";

const categoryDefinitions = [
  {
    label: "Hot",
    variant: "danger",
    background: C.hotBg,
    border: C.hotBdr,
    description: "Site Visit Scheduled Or Very High Buying Intent. Needs Immediate Follow-Up.",
  },
  {
    label: "Warm",
    variant: "neutral",
    background: C.warmBg,
    border: C.warmBdr,
    pillStyle: { color: C.warmText, borderColor: C.warmBdr, background: C.card },
    description: "Interested But Needs Nurturing. Medium Intent. Follow-Up Required.",
  },
  {
    label: "Cold",
    variant: "neutral",
    background: C.surface,
    border: C.border,
    description: "Low Intent Or Long Timeline (6 Months+). Future Prospect Only.",
  },
];

const cardFrameStyle = {
  borderRadius: T.radius.lg,
  border: `1px solid ${C.border}`,
  background: C.card,
  boxShadow: T.shadow.xs,
};

function PageSection({ children, style }) {
  return (
    <section
      style={{
        width: "100%",
        maxWidth: "100%",
        margin: "0 auto",
        ...style,
      }}
    >
      {children}
    </section>
  );
}

PageSection.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

function LeadCategoryCard({ category }) {
  return (
    <div
      style={{
        minHeight: 92,
        borderRadius: T.radius.lg,
        border: `1px solid ${category.border}`,
        background: category.background,
        padding: T.spacing[3],
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: T.spacing[2],
        textAlign: "center",
      }}
    >
      <AppPill variant={category.variant} size="xs" style={category.pillStyle}>
        {category.label}
      </AppPill>
      <Text as="div" variant="body">
        {category.description}
      </Text>
    </div>
  );
}

LeadCategoryCard.propTypes = {
  category: PropTypes.shape({
    label: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    border: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    pillStyle: PropTypes.object,
  }).isRequired,
};

function LeadCategorySection() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <AppCard variant="compact" style={{ ...cardFrameStyle, padding: T.spacing[4], marginTop: T.spacing[4] }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <AppIconCircle size={26} variant="primary" style={{ borderRadius: T.radius.sm }}>
            <FiSliders size={14} />
          </AppIconCircle>
          <Text as="div" variant="sectionTitle">
            Lead Category Definition
          </Text>
        </div>
        <button
          type="button"
          onClick={() => setCollapsed((value) => !value)}
          style={{
            border: T.border.none,
            background: "transparent",
            color: C.muted,
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            cursor: "pointer",
          }}
        >
          <Text variant="mutedLabel">{collapsed ? "Show" : "Hide"}</Text>
          {collapsed ? <FiChevronDown size={14} /> : <FiChevronUp size={14} />}
        </button>
      </div>

      {!collapsed ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: T.spacing[3],
            marginTop: T.spacing[4],
          }}
        >
          {categoryDefinitions.map((category) => (
            <LeadCategoryCard key={category.label} category={category} />
          ))}
        </div>
      ) : null}
    </AppCard>
  );
}

const defaultDealsWorkspace = {
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
      ],
    },
  ],
};

function LeadsSection({ data }) {
  const initialDeals = data?.deals_data || (data?.tables ? data : defaultDealsWorkspace);
  const initialTasks = data?.tasks_data;
  const [activeTab, setActiveTab] = useState("deals");
  const [dealsData, setDealsData] = useState(initialDeals);
  const isTasks = activeTab === "tasks";

  const handleTableCreated = (table) => {
    // Only deals support creating tables
    setDealsData((prev) => ({
      ...prev,
      tables: [...prev.tables, table],
    }));
  };

  const handleTableDeleted = (tableId) => {
    // Only deals support creating tables
    setDealsData((prev) => ({
      ...prev,
      tables: prev.tables.filter((table) => table.id !== tableId),
    }));
  };

  const handleTableUpdated = (updatedTable) => {
    setDealsData((prev) => ({
      ...prev,
      tables: prev.tables.map((table) =>
        table.id === updatedTable.id ? updatedTable : table
      ),
    }));
  };

  return (
    <div style={{ minHeight: "100%", width: "100%", background: C.backgroundPrimary, padding: T.spacing.page, boxSizing: "border-box" }}>
      <PageSection>
        <header>
          <Text as="h1" variant="pageTitle" style={{ margin: 0 }}>
            Deals
          </Text>
          <Text as="div" variant="subtitle" style={{ marginTop: 5 }}>
            Track And Manage Your Property Deals From Lead To Closure.
          </Text>
        </header>
        <LeadCategorySection />
        <Workspace
          workspaceId={isTasks ? "tasks" : "deals"}
          workspaceData={isTasks ? (initialTasks || dealsData) : dealsData}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onTableCreated={handleTableCreated}
          onTableDeleted={handleTableDeleted}
          onTableUpdated={handleTableUpdated}
        />
      </PageSection>
    </div>
  );
}

export default LeadsSection;
