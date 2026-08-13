import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FiX } from "react-icons/fi";
import {
  AppButton,
  C,
  IconButton,
  Modal,
  T,
  TextField,
  Text,
} from "../../../components/utils";


function ModalHeader({ title, onClose }) {
  return (
    <div
      style={{
        padding: "14px 20px 12px",
        borderBottom: `1px solid ${C.border}`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 12,
      }}
    >
      <Text
        as="div"
        style={{
          color: C.text,
          fontSize: T.font.size.cardTitle,
          fontWeight: T.font.weight.bold,
          fontFamily: T.font.family,
        }}
      >
        {title}
      </Text>
      <IconButton aria-label="Close modal" onClick={onClose}>
        <FiX size={15} />
      </IconButton>
    </div>
  );
}

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

function SelectRecordOption({ label, selected, onSelect, disabled }) {
  return (
    <div
      onClick={disabled ? undefined : onSelect}
      style={{
        display: "flex",
        alignItems: "center",
        gap: T.spacing[3],
        padding: `${T.spacing[3]}px ${T.spacing[4]}px`,
        borderRadius: T.radius.md,
        border: selected ? `1.5px solid ${C.accent}` : `1px solid ${C.border}`,
        background: selected ? C.accentLt : C.surface,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        transition: "all 180ms ease",
        boxSizing: "border-box",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          width: 18,
          height: 18,
          borderRadius: T.radius.circle,
          border: `2px solid ${selected ? C.accent : C.muted}`,
          background: selected ? C.accent : "transparent",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {selected ? (
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: T.radius.circle,
              background: C.card,
            }}
          />
        ) : null}
      </span>
      <Text
        variant="body"
        style={{
          color: selected ? C.accent : C.text,
          fontWeight: T.font.weight.semibold,
          fontSize: T.font.size.bodySmall,
        }}
      >
        {label}
      </Text>
    </div>
  );
}

SelectRecordOption.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default function CreateCampaignSelectionModal({ onClose, onContinue, selectedRows = [], totalRecords = 0, tableFields = [] }) {
  const [actionType, setActionType] = useState("new");
  const [recordType, setRecordType] = useState("all");
  const [startRow, setStartRow] = useState("1");
  const [endRow, setEndRow] = useState("100");
  const [campaignName, setCampaignName] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");
  const [existingCampaigns, setExistingCampaigns] = useState([]);
  const [loadingCampaigns, setLoadingCampaigns] = useState(false);
  const company_id = localStorage.getItem("company_id");

  const [callType, setCallType] = useState(company_id === "0" ? "real_estate_internal" : "real_estate_cold_call");
  const selectedCount = selectedRows.length || 0;

  // Field mapping and Context state
  const defaultPhoneField = tableFields.find(f => f.name.toLowerCase().includes("phone") || f.type === "Phone Number")?.id || "";
  const defaultNameField = tableFields.find(f => f.name.toLowerCase().includes("name") && !f.name.toLowerCase().includes("business"))?.id || "";
  
  const [mappedPhone, setMappedPhone] = useState(defaultPhoneField);
  const [mappedProspectName, setMappedProspectName] = useState(defaultNameField);

  useEffect(() => {
    setExistingCampaigns([
      { id: "1", title: "Hot leads act now", status: "live" },
      { id: "2", title: "Prestige Dec Batch", status: "running" }
    ]);
  }, []);

  const handleContinue = () => {
    const fieldMapping = { 
      phone: mappedPhone,
      prospect_name: mappedProspectName,
    };

    if (onContinue) {
      onContinue({
        actionType,
        campaignName: campaignName.trim(),
        recordType,
        startRow,
        endRow,
        callType,
        scheduledTime,
        fieldMapping,
      });
    }
    onClose?.();
  };

  return (
    <Modal width={T.layout.modalWidth}>
      <ModalHeader title="Select Records" onClose={() => onClose?.()} />
      <div
        style={{
          padding: "18px 20px",
          display: "flex",
          flexDirection: "column",
          gap: T.spacing[4],
          maxHeight: "70vh",
          overflowY: "auto",
        }}
      >
        <div style={{ display: "flex", gap: 12, marginBottom: 8 }}>
          <label style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer", fontSize: T.font.size.bodySmall, color: C.text, fontFamily: T.font.family }}>
            <input
              type="radio"
              name="actionType"
              value="new"
              checked={actionType === "new"}
              onChange={() => setActionType("new")}
              style={{ accentColor: C.accent }}
            />
            Create a new campaign
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer", fontSize: T.font.size.bodySmall, color: C.text, fontFamily: T.font.family }}>
            <input
              type="radio"
              name="actionType"
              value="existing"
              checked={actionType === "existing"}
              onChange={() => setActionType("existing")}
              style={{ accentColor: C.accent }}
            />
            Add to existing campaign
          </label>
        </div>

        <div>
          <label
            style={{
              display: "block",
              color: C.text,
              fontSize: T.font.size.bodySmall,
              fontWeight: T.font.weight.semibold,
              marginBottom: 6,
              fontFamily: T.font.family,
            }}
          >
            {actionType === "new" ? "Campaign Name" : "Select Existing Campaign"}
          </label>
          {actionType === "new" ? (
            <TextField
              value={campaignName}
              onChange={(e) => setCampaignName(e.target.value)}
              placeholder="Enter campaign name"
              style={{ height: 36 }}
            />
          ) : (
            <select
              value={campaignName}
              onChange={(e) => setCampaignName(e.target.value)}
              style={{
                width: "100%",
                height: 36,
                padding: "0 12px",
                border: `1px solid ${C.border}`,
                borderRadius: T.radius.sm,
                background: C.surface,
                color: C.text,
                fontSize: T.font.size.bodySmall,
                fontFamily: T.font.family,
                outline: "none",
                boxSizing: "border-box",
                cursor: "pointer",
              }}
            >
              <option value="">Select a campaign...</option>
              {loadingCampaigns ? (
                <option value="" disabled>Loading campaigns...</option>
              ) : (
                existingCampaigns.map((camp) => (
                  <option key={camp.campaign_id || camp.id} value={camp.campaign_name || camp.name || camp.title}>
                    {camp.campaign_name || camp.name || camp.title}
                  </option>
                ))
              )}
            </select>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: T.spacing[3] }}>
          <SelectRecordOption
            label={`All Records In View (${totalRecords.toLocaleString()} Total)`}
            selected={recordType === "all"}
            onSelect={() => setRecordType("all")}
          />

          <SelectRecordOption
            label={`Selected Rows (${selectedCount} Total)`}
            selected={recordType === "selected"}
            onSelect={() => setRecordType("selected")}
            disabled={selectedCount === 0}
          />

          <SelectRecordOption
            label="Custom Row Range"
            selected={recordType === "custom"}
            onSelect={() => setRecordType("custom")}
          />

          {recordType === "custom" && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: T.spacing[3],
                marginTop: T.spacing[1],
                padding: T.spacing[3],
                background: C.surface,
                borderRadius: T.radius.md,
                border: `1px solid ${C.borderLt}`,
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    color: C.text,
                    fontSize: T.font.size.bodySmall,
                    fontWeight: T.font.weight.semibold,
                    marginBottom: 6,
                    fontFamily: T.font.family,
                  }}
                >
                  Start Row
                </label>
                <TextField
                  value={startRow}
                  onChange={(e) => setStartRow(e.target.value)}
                  placeholder="1"
                  style={{ height: 36 }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    color: C.text,
                    fontSize: T.font.size.bodySmall,
                    fontWeight: T.font.weight.semibold,
                    marginBottom: 6,
                    fontFamily: T.font.family,
                  }}
                >
                  End Row
                </label>
                <TextField
                  value={endRow}
                  onChange={(e) => setEndRow(e.target.value)}
                  placeholder="100"
                  style={{ height: 36 }}
                />
              </div>
            </div>
          )}
        </div>

        <div>
          <label
            style={{
              display: "block",
              color: C.text,
              fontSize: T.font.size.bodySmall,
              fontWeight: T.font.weight.semibold,
              marginBottom: 6,
              fontFamily: T.font.family,
            }}
          >
            Call Type
          </label>
          <select
            value={callType}
            onChange={(e) => setCallType(e.target.value)}
            style={{
              width: "100%",
              height: 36,
              padding: "0 12px",
              border: `1px solid ${C.border}`,
              borderRadius: T.radius.sm,
              background: C.surface,
              color: C.text,
              fontSize: T.font.size.bodySmall,
              fontFamily: T.font.family,
              outline: "none",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          > {company_id === "0" ? (
            <>
              <option value="real_estate_internal_cold_call">Cold Call</option>

              <option value="real_estate_internal_cold_call_detailed">Detailed Cold Call</option>
            </>
          ) : (
            <>
              <option value="real_estate_cold_call">Cold Call</option>
              <option value="real_estate_requirement">Requirement Gathering</option>
            </>

          )}
          </select>
        </div>

        <div>
          <label
            style={{
              display: "block",
              color: C.text,
              fontSize: T.font.size.bodySmall,
              fontWeight: T.font.weight.semibold,
              marginBottom: 6,
              fontFamily: T.font.family,
            }}
          >
            Schedule Start Time (Optional)
          </label>
          <input
            type="datetime-local"
            value={scheduledTime}
            onChange={(e) => setScheduledTime(e.target.value)}
            style={{
              width: "100%",
              height: 36,
              padding: "0 12px",
              border: `1px solid ${C.border}`,
              borderRadius: T.radius.sm,
              background: C.surface,
              color: C.text,
              fontSize: T.font.size.bodySmall,
              fontFamily: T.font.family,
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Variable Mapping Section */}
        <div
          style={{
            background: C.surface,
            padding: T.spacing[3],
            borderRadius: T.radius.md,
            border: `1px solid ${C.borderLt}`,
          }}
        >
          <Text
            as="div"
            style={{
              color: C.text,
              fontSize: T.font.size.bodySmall,
              fontWeight: T.font.weight.bold,
              marginBottom: 12,
            }}
          >
            Variable Mapping
          </Text>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
            <div>
              <label style={{ display: "block", fontSize: 12, color: C.text, marginBottom: 4, fontWeight: T.font.weight.semibold }}>
                Phone (Required)
              </label>
              <select
                value={mappedPhone}
                onChange={(e) => setMappedPhone(e.target.value)}
                style={{
                  width: "100%",
                  height: 32,
                  padding: "0 8px",
                  border: `1px solid ${C.border}`,
                  borderRadius: T.radius.sm,
                  background: C.surface,
                  color: C.text,
                  fontSize: 12,
                  outline: "none",
                }}
              >
                <option value="">Select Column...</option>
                {tableFields.map(f => (
                  <option key={f.id} value={f.id}>{f.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label style={{ display: "block", fontSize: 12, color: C.text, marginBottom: 4, fontWeight: T.font.weight.semibold }}>
                Prospect Name (Required)
              </label>
              <select
                value={mappedProspectName}
                onChange={(e) => setMappedProspectName(e.target.value)}
                style={{
                  width: "100%",
                  height: 32,
                  padding: "0 8px",
                  border: `1px solid ${C.border}`,
                  borderRadius: T.radius.sm,
                  background: C.surface,
                  color: C.text,
                  fontSize: 12,
                  outline: "none",
                }}
              >
                <option value="">Select Column...</option>
                {tableFields.map(f => (
                  <option key={f.id} value={f.id}>{f.name}</option>
                ))}
              </select>
            </div>
          </div>

        </div>
      </div>
      <div
        style={{
          borderTop: `1px solid ${C.border}`,
          padding: "12px 20px",
          display: "flex",
          justifyContent: "flex-end",
          gap: T.spacing[2],
        }}
      >
        <AppButton onClick={() => onClose?.()} compact>
          Cancel
        </AppButton>
        <AppButton disabled={!campaignName.trim() || !mappedPhone || !mappedProspectName} variant="primary" compact onClick={handleContinue}>
          Continue
        </AppButton>
      </div>
    </Modal>
  );
}

CreateCampaignSelectionModal.propTypes = {
  onClose: PropTypes.func,
  onContinue: PropTypes.func,
  selectedCount: PropTypes.number,
  tableFields: PropTypes.array,
};
