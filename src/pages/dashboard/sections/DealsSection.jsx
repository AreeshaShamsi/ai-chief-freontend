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
  { id: "createdTime", name: "Created Time", type: "Date Time", value: "14/08/2026 5:00pm" },
  { id: "lastModifiedTime", name: "Last Modified Time", type: "Date Time", value: "14/08/2026 5:00pm" },
  { id: "createdBy", name: "Created By", type: "User / Assigned Agent", value: "User", options: ["User", "Admin"] },
  { id: "lastModifiedBy", name: "Last Modified By", type: "User / Assigned Agent", value: "Admin", options: ["Admin", "User"] },
];

export const dealRows = [
  {
    id: "deal-1",
    dealName: "Deal Name",
    callType: "Call Type",
    score: "Score",
    callOutcome: "Call Outcome",
    budget: "Budget",
    timeline: "Timeline",
    assignedAgent: "Assigned Agent",
    status: "Status",
    nextAction: "Next Action",
    createdTime: "14/08/2026 5:00pm",
    lastModifiedTime: "14/08/2026 5:00pm",
    createdBy: "User",
    lastModifiedBy: "Admin",
  },
  {
    id: "deal-2",
    dealName: "Deal Name",
    callType: "Call Type",
    score: "Score",
    callOutcome: "Call Outcome",
    budget: "Budget",
    timeline: "Timeline",
    assignedAgent: "Assigned Agent",
    status: "Status",
    nextAction: "Next Action",
    createdTime: "14/08/2026 5:00pm",
    lastModifiedTime: "14/08/2026 5:00pm",
    createdBy: "User",
    lastModifiedBy: "Admin",
  },
  {
    id: "deal-3",
    dealName: "Deal Name",
    callType: "Call Type",
    score: "Score",
    callOutcome: "Call Outcome",
    budget: "Budget",
    timeline: "Timeline",
    assignedAgent: "Assigned Agent",
    status: "Status",
    nextAction: "Next Action",
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
