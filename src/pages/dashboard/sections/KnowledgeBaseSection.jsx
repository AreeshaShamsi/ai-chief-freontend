import { useState } from "react";
import PropTypes from "prop-types";
import { AppPill, C, T, Text } from "../../../components/utils";
import Workspace from "./Workspace";
import DealDetailsModal from "../modals/DealDetailsModal";

export const knowledgeBaseColumns = [
  { id: "propertyName", name: "Property Name", type: "Single Line Text", value: "Property Name" },
  { id: "bhk", name: "BHK", type: "Single Select", value: "BHK", options: ["1 BHK", "2 BHK", "3 BHK", "4 BHK"] },
  { id: "carpetArea", name: "Carpet Area", type: "Single Line Text", value: "Carpet Area" },
  { id: "priceRange", name: "Price Range", type: "Currency", value: "Price Range" },
  { id: "possession", name: "Possession", type: "Single Line Text", value: "Possession" },
  { id: "unitLeft", name: "Unit Left", type: "Number", value: "Unit Left" },
  { id: "facing", name: "Facing", type: "Single Select", value: "Facing", options: ["East", "West", "North", "South", "North-East"] },
  { id: "amenities", name: "Amenities", type: "Multiple Select", value: "Amenities", options: ["Pool", "Gym", "Clubhouse", "Park", "Security"], editorKind: "tags" },
];

export const knowledgeBaseRows = [
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
];

export const knowledgeBaseViews = ["Grid Name", "Grid Name", "Grid Name", "Grid Name"];

function PageSection({ children, style }) {
  return (
    <section
      style={{
        width: "100%",
        maxWidth: T.layout.pageMaxWidth,
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

function KnowledgeBaseSection({ data, activeTab = "inventory", onTabChange }) {
  if (!data) return null;
  const [currentTab, setCurrentTab] = useState(activeTab === "kb" ? "inventory" : activeTab);
  console.log(data);
  const handleTabChange = (tab) => {
    setCurrentTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <div style={{ minHeight: "100%", width: "100%", background: C.backgroundPrimary, padding: T.spacing.page, boxSizing: "border-box" }}>
      <PageSection>
        <header style={{ marginBottom: 18, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <div>
            <Text as="h1" variant="pageTitle" style={{ margin: 0 }}>
              Knowledge Base
            </Text>
            <Text as="div" variant="subtitle" style={{ marginTop: 5 }}>
              Everything The AI Agent Knows Before Picking Up A Call
            </Text>
          </div>
          <AppPill
            dot
            size="xs"
            dotColor={C.green}
            style={{
              height: 28,
              padding: "0 12px",
              background: C.greenSoft,
              color: C.greenText,
              border: `1px solid ${C.greenBdr}`,
              fontSize: T.font.size.caption,
              fontWeight: T.font.weight.semibold,
            }}
          >
            Agent Is Using This Knowledge
          </AppPill>
        </header>
        <Workspace
          workspaceId="kb"
          workspaceData={data.workspace_data}
          faqs={data.faqs}
          activeTab={currentTab}
          onTabChange={handleTabChange}
        />
      </PageSection>
    </div>
  );
}

KnowledgeBaseSection.propTypes = {
  activeTab: PropTypes.string,
  onTabChange: PropTypes.func,
};

export default KnowledgeBaseSection;
