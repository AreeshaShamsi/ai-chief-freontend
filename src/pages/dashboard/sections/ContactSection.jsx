import { useState } from "react";
import PropTypes from "prop-types";
import { FiPlus } from "react-icons/fi";
import { AppButton, C, T, Text } from "../../../components/utils";
import Workspace from "./Workspace";


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

const generateAllContactsTable = (tables) => {
  if (!tables) return null;
  const allContactsRows = [];
  tables.forEach((table) => {
    if (table.id === "all-contacts") return;
    const phoneFieldId = table.fields.find(f => f.type === "Phone Number" || f.name.toLowerCase().includes("phone"))?.id;
    const emailFieldId = table.fields.find(f => f.type === "Email" || f.name.toLowerCase().includes("email"))?.id;
    const nameFieldId = table.fields.find(f => f.name.toLowerCase().includes("name") && !f.name.toLowerCase().includes("business"))?.id;
    const businessFieldId = table.fields.find(f => f.name.toLowerCase().includes("business"))?.id;
    const tagsFieldId = table.fields.find(f => f.type === "Multiple Select" || f.name.toLowerCase().includes("tag"))?.id;

    table.rows.forEach(row => {
      allContactsRows.push({
        id: `${table.id}-${row.id}`,
        contactName: nameFieldId && row[nameFieldId] ? row[nameFieldId] : row.contactName || "—",
        phone: phoneFieldId && row[phoneFieldId] ? row[phoneFieldId] : row.phone || "—",
        email: emailFieldId && row[emailFieldId] ? row[emailFieldId] : row.email || "—",
        businessName: businessFieldId && row[businessFieldId] ? row[businessFieldId] : row.businessName || "—",
        created: row.created || "—",
        lastActivity: row.lastActivity || "—",
        tags: tagsFieldId && row[tagsFieldId] ? row[tagsFieldId] : row.tags || [],
        sourceTable: table.name,
      });
    });
  });

  return {
    id: "all-contacts",
    name: "All Contacts",
    fields: [
      ...contactColumns,
      { id: "sourceTable", name: "Source List", type: "Single Line Text", value: "Source List" }
    ],
    rows: allContactsRows
  };
};

function ContactSection({ data, activeTab = "contacts", onTabChange, onCreateCampaign }) {
  const [localData, setLocalData] = useState(() => {
    if (!data || !data.tables) return data;
    const allContacts = generateAllContactsTable(data.tables);
    return {
      ...data,
      tables: allContacts ? [allContacts, ...data.tables.filter(t => t.id !== "all-contacts")] : data.tables
    };
  });
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [activeTableId, setActiveTableId] = useState(localData?.tables?.[0]?.id || "all-contacts");

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

  const handleTableCreated = (table) => {
    setLocalData((prev) => {
      const newTables = [...prev.tables.filter(t => t.id !== "all-contacts"), table];
      const allContacts = generateAllContactsTable(newTables);
      return {
        ...prev,
        tables: [allContacts, ...newTables],
      };
    });
  };

  const handleTableDeleted = (tableId) => {
    if (tableId === "all-contacts") return;
    setLocalData((prev) => {
      const newTables = prev.tables.filter((t) => t.id !== tableId && t.id !== "all-contacts");
      const allContacts = generateAllContactsTable(newTables);
      return {
        ...prev,
        tables: [allContacts, ...newTables],
      };
    });
    if (activeTableId === tableId) {
      setActiveTableId("all-contacts");
    }
  };

  const addRecord = () => {
    console.log("Add record");
  }

  const handleCampaignCreate = async (modal_data) => {
    const activeTable = localData.tables.find(t => t.id === activeTableId) || localData.tables[0];
    const fields = activeTable.fields;
    const rows = activeTable.rows;

    const field_mapping = modal_data.fieldMapping || {};

    const static_fields = {
      company_name: localStorage.getItem("company_name"),
    };

    const company_id = localStorage.getItem("company_id");

    let startRowId = rows[0].id;
    let endRowId = rows[rows.length - 1].id;
    let selected_row_ids = [];

    if (modal_data.recordType === "custom") {
      startRowId = rows[Number(modal_data.startRow) - 1]?.id || startRowId;
      endRowId = rows[Number(modal_data.endRow) - 1]?.id || endRowId;
    } else if (modal_data.recordType === "selected") {
      selected_row_ids = selectedRows.map((r) => r.id);
      startRowId = null;
      endRowId = null;
    }

    const payload = {
      company_id,
      name: modal_data.campaignName,
      table_id: activeTable.id,
      start_row_id: startRowId,
      end_row_id: endRowId,
      row_ids: selected_row_ids,
      script_type: modal_data.callType || (company_id === "0" ? "real_estate_internal" : "real_estate_cold_call"),
      campaign_type: "leads_uploaded",
      field_mapping,
      static_fields,
      scheduled_time: modal_data.scheduledTime || null,
    };

    console.log(payload);
    setShowCreateModal(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100dvh", width: "100%", background: C.backgroundPrimary, padding: T.spacing.page, boxSizing: "border-box" }}>
      {showCreateModal && (() => {
        const activeTable = localData.tables.find(t => t.id === activeTableId) || localData.tables[0];
        return (
          <CreateCampaignSelectionModal
            selectedRows={selectedRows}
            totalRecords={activeTable.rows.length}
            tableFields={activeTable.fields}
            onClose={() => setShowCreateModal(false)}
            onContinue={async (modal_data) => {
              await handleCampaignCreate(modal_data);
            }}
          />
        );
      })()}
      <PageSection style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
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
          workspaceData={localData}
          activeTab={activeTab}
          onTabChange={onTabChange}
          onSelectionChanged={setSelectedRows}
          onActiveViewChange={(newViewId) => {
            setActiveTableId(newViewId);
          }}
          onTableCreated={handleTableCreated}
          onTableDeleted={handleTableDeleted}
          flex={1}
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
