import { useState } from "react";
import PropTypes from "prop-types";
import { FiPlus } from "react-icons/fi";
import { AppButton, C, T, Text } from "../../../components/utils";
import Workspace from "./Workspace";
import CreateCampaignSelectionModal from "../modals/CreateCampaignSelectionModal";
import { createBulkCampaign } from "../../../api/campaign";

export const contactColumns = [
  { id: "contactName", name: "Contact Name", type: "Single Line Text", value: "Contact Name" },
  { id: "phone", name: "Phone", type: "Phone Number", value: "Phone" },
  { id: "email", name: "Email", type: "Email", value: "Email" },
  { id: "businessName", name: "Business Name", type: "Single Line Text", value: "Business Name" },
  { id: "created", name: "Created", type: "Date Time", value: "Created" },
  { id: "lastActivity", name: "Last Activity", type: "Single Line Text", value: "Last Activity" },
  { id: "tags", name: "Tags", type: "Multiple Select", value: "Tags", options: ["Interested", "Follow Up", "Hot Lead", "Cold", "VIP"], editorKind: "tags" },
];

export const contactRows = [
  {
    id: "contact-1",
    contactName: "Rakesh Paul",
    phone: "+91 98987 65432",
    email: "rakeshpaul234@gmail.com",
    businessName: "Paul Properties",
    created: "Nov 7, 2025 06:39 PM",
    lastActivity: "2 weeks ago",
    tags: "Interested",
  },
  {
    id: "contact-2",
    contactName: "Sunil Verma",
    phone: "+91 98765 43210",
    email: "sunil.verma@gmail.com",
    businessName: "Verma Realty",
    created: "Nov 5, 2025 04:15 PM",
    lastActivity: "3 days ago",
    tags: "Follow Up",
  },
  {
    id: "contact-3",
    contactName: "Anita Sharma",
    phone: "+91 91234 56789",
    email: "anita.sharma@gmail.com",
    businessName: "Sharma Enterprises",
    created: "Oct 28, 2025 11:20 AM",
    lastActivity: "1 week ago",
    tags: "Hot Lead",
  },
];

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

function ContactSection({ data, activeTab = "contacts", onTabChange, onCreateCampaign }) {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  if (!data) {
    return null;
  }

  const handleCreateClick = () => {
    if (onCreateCampaign) {
      onCreateCampaign();
    } else {
      setShowCreateModal(true);
    }
  };

  const addRecord = () => {
    console.log("Add record");
  }

  const handleCampaignCreate = async (modal_data) => {
    const fields = data.tables[0].fields;
    const rows = data.tables[0].rows;

    const fieldMap = Object.fromEntries(
      fields.map((field) => [field.name, field.id])
    );

    const field_mapping = {
      phone: fieldMap["Phone"],
      prospect_name: fieldMap["Contact Name"],
    };

    const static_fields = {
      company_name: localStorage.getItem("company_name"),
    };

    const company_id = localStorage.getItem("company_id");

    let startRowId = rows[0].id;
    let endRowId = rows[rows.length - 1].id;
    let selected_row_ids = [];

    if (modal_data.recordType === "custom") {
      startRowId = rows[Number(modal_data.startRow) - 1].id;
      endRowId = rows[Number(modal_data.endRow) - 1].id;
    } else if (modal_data.recordType === "selected") {
      selected_row_ids = selectedRows.map((r) => r.id);
      startRowId = null;
      endRowId = null;
    }

    const payload = {
      company_id,
      name: modal_data.campaignName,
      table_id: data.tables[0].id,
      start_row_id: startRowId,
      end_row_id: endRowId,
      selected_row_ids,
      script_type: modal_data.callType || (company_id === "0" ? "real_estate_internal" : "real_estate_cold_call"),
      campaign_type: "leads_uploaded",
      field_mapping,
      static_fields,
    };

    console.log(payload);

    const response = await createBulkCampaign(payload);
    setShowCreateModal(false)
  };

  return (
    <div style={{ minHeight: "100%", width: "100%", background: C.backgroundPrimary, padding: T.spacing.page, boxSizing: "border-box" }}>
      {showCreateModal && (
        <CreateCampaignSelectionModal
          selectedCount={selectedRows.length}
          totalRecords={data.tables[0].rows.length}
          onClose={() => setShowCreateModal(false)}
          onContinue={async (modal_data) => {
            await handleCampaignCreate(modal_data);
          }} />
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
          workspaceData={data}
          columns={data.tables[0].fields}
          rowData={data.tables[0].rows}


          activeTab={activeTab}
          onTabChange={onTabChange}
          onSelectionChanged={setSelectedRows}
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
