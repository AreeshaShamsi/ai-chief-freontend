import { useState } from "react";
import PropTypes from "prop-types";
import { FiPlus } from "react-icons/fi";
import { AppButton, C, T, Text } from "../../../components/utils";
import Workspace from "./Workspace";
import CreateCampaignSelectionModal from "../modals/CreateCampaignSelectionModal";

export const contactColumns = [
  { id: "contactName", name: "Contact Name", type: "Single Line Text", value: "Contact Name" },
  { id: "email", name: "Email", type: "Email", value: "Email" },
  { id: "phoneNumber", name: "Phone Number", type: "Phone Number", value: "Phone Number" },
  { id: "callOutcome", name: "Call Outcome", type: "Single Line Text", value: "Call Outcome" },
  { id: "created", name: "Created", type: "Date Time", value: "14/08/2026 5:00pm" },
  { id: "businessName", name: "Business Name", type: "Single Line Text", value: "Business Name" },
  { id: "lastActivity", name: "Last Activity", type: "Date Time", value: "14/08/2026 5:00pm" },
  { id: "assignedAgent", name: "Assigned Agent", type: "User / Assigned Agent", value: "Assigned Agent", options: ["Ramesh Yadav", "Vikash Yadav", "User", "Admin"] },
];

export const contactRows = [
  {
    id: "contact-1",
    contactName: "Rakesh Paul",
    email: "rakeshpaul234@gmail.com",
    phoneNumber: "0989876543",
    callOutcome: "Interested",
    created: "14/08/2026 5:00pm",
    businessName: "Paul Properties",
    lastActivity: "14/08/2026 5:00pm",
    assignedAgent: "Vikash Yadav",
  },
  {
    id: "contact-2",
    contactName: "Sunil Verma",
    email: "sunil.verma@gmail.com",
    phoneNumber: "0987654321",
    callOutcome: "Follow Up",
    created: "14/08/2026 5:00pm",
    businessName: "Verma Realty",
    lastActivity: "14/08/2026 5:00pm",
    assignedAgent: "Ramesh Yadav",
  },
  {
    id: "contact-3",
    contactName: "Anita Sharma",
    email: "anita.sharma@gmail.com",
    phoneNumber: "0912345678",
    callOutcome: "Meeting Scheduled",
    created: "14/08/2026 5:00pm",
    businessName: "Sharma Enterprises",
    lastActivity: "14/08/2026 5:00pm",
    assignedAgent: "Vikash Yadav",
  },
];

export const contactViews = ["Grid Name", "Grid Name", "Grid Name", "Grid Name"];

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

function ContactSection({ activeTab = "contacts", onTabChange, onCreateCampaign }) {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleCreateClick = () => {
    if (onCreateCampaign) {
      onCreateCampaign();
    } else {
      setShowCreateModal(true);
    }
  };

  return (
    <div style={{ minHeight: "100%", width: "100%", background: C.backgroundPrimary, padding: T.spacing.page, boxSizing: "border-box" }}>
      {showCreateModal && (
        <CreateCampaignSelectionModal onClose={() => setShowCreateModal(false)} />
      )}
      <PageSection>
        <header
          style={{
            marginBottom: 18,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div>
            <Text as="h1" variant="pageTitle" style={{ margin: 0 }}>
              Contacts
            </Text>
            <Text as="div" variant="subtitle" style={{ marginTop: 5 }}>
              View and manage your contacts.
            </Text>
          </div>
          <AppButton
            variant="primary"
            onClick={handleCreateClick}
            style={{
              height: 36,
              borderRadius: T.radius.md,
              padding: "0 16px",
              fontSize: T.font.size.bodySmall,
              fontWeight: T.font.weight.semibold,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              boxShadow: T.shadow.xs,
            }}
          >
            <FiPlus size={14} />
            <span>Create Campaign</span>
          </AppButton>
        </header>
        <Workspace
          workspaceId="contacts"
          columns={contactColumns}
          rowData={contactRows}
          views={contactViews}
          activeTab={activeTab}
          onTabChange={onTabChange}
        />
      </PageSection>
    </div>
  );
}

ContactSection.propTypes = {
  activeTab: PropTypes.string,
  onTabChange: PropTypes.func,
  onCreateCampaign: PropTypes.func,
};

export default ContactSection;
