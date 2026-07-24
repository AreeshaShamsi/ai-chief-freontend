import { useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  Alert,
  AppButton,
  AppCard,
  AppIconCircle,
  AppStepper,
  C,
  IconButton,
  Modal,
  T,
  TextField,
} from "../../../components/utils";
import { API_URL } from "../../../config/main";
import {
  FiArrowRight,
  FiAlertTriangle,
  FiCheckCircle,
  FiClipboard,
  FiFileText,
  FiPhone,
  FiSearch,
  FiX,
} from "react-icons/fi";

const scripts = [
  {
    id: "property_enquiry",
    label: "Property Enquiry Call",
    desc: "For residential property buyers. Asks budget, location, configuration, timeline and visit intent.",
  },
  {
    id: "requirement_gathering",
    label: "New Launch Introduction",
    desc: "For leads who came in via ad or form. Introduces the project and gauges interest.",
  },
  {
    id: "cold_call",
    label: "Cold Calling",
    desc: "For unqualified lead lists — introduces the brand, project and qualifies for interest.",
  },
];

const campaignSteps = [
  {
    id: 1,
    label: "Campaign details",
  },
  {
    id: 2,
    label: "Upload leads",
  },
];

const acceptedTypes = ".csv,.xlsx,.xls";
const maxFileSize = 10 * 1024 * 1024;

function ModalHeader({ step, onClose }) {
  const subtitle =
    step === "details"
      ? "Step 1 of 2 — Campaign details"
      : step === "upload"
        ? "Step 2 of 2 — Upload leads"
        : "Campaign launched";

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
      <div style={{ minWidth: 0 }}>
        <div style={{ color: C.text, fontSize: 15, fontWeight: T.font.weight.bold }}>
          New Campaign
        </div>
        <div style={{ color: C.muted, fontSize: T.font.size.caption, marginTop: 2 }}>
          {subtitle}
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        <IconButton aria-label="Close campaign modal" onClick={onClose}>
          <FiX size={15} />
        </IconButton>
      </div>
    </div>
  );
}

ModalHeader.propTypes = {
  step: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

function ScriptOption({ option, selected, onSelect }) {
  const icons = {
    property_enquiry: <FiClipboard size={13} />,
    requirement_gathering: <FiSearch size={13} />,
    cold_call: <FiPhone size={13} />,
  };

  return (
    <AppCard
      variant="selectable"
      onClick={onSelect}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        cursor: "pointer",
        borderColor: selected ? C.accent : C.border,
        background: selected ? C.accentLt : C.surface,
      }}
    >
      <span
        aria-hidden="true"
        style={{
          width: 16,
          height: 16,
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
      <div style={{ minWidth: 0, flex: 1 }}>
        <div
          style={{
            color: selected ? C.accent : C.text,
            fontSize: T.font.size.bodySmall,
            fontWeight: T.font.weight.bold,
            lineHeight: 1.25,
          }}
        >
          {option.label}
        </div>
        <div style={{ color: C.muted, fontSize: T.font.size.caption, marginTop: 3, lineHeight: 1.35 }}>
          {option.desc}
        </div>
      </div>
      <AppIconCircle
        size={26}
        variant={selected ? "primary" : "neutral"}
        style={{
          borderRadius: T.radius.sm,
          border: selected ? `1px solid ${C.accentTrack}` : `1px solid ${C.border}`,
        }}
      >
        {icons[option.id]}
      </AppIconCircle>
    </AppCard>
  );
}

ScriptOption.propTypes = {
  option: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};

function ModalFooter({ children }) {
  return (
    <div
      style={{
        borderTop: `1px solid ${C.border}`,
        padding: "12px 20px",
        display: "flex",
        justifyContent: "flex-end",
        gap: 8,
      }}
    >
      {children}
    </div>
  );
}

ModalFooter.propTypes = {
  children: PropTypes.node,
};

function CreateCampaignModal({ onClose, onLaunch }) {
  const [step, setStep] = useState("details");
  const [name, setName] = useState("");
  const [script, setScript] = useState("cold_call");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [launching, setLaunching] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const inputRef = useRef(null);

  const resetAndClose = () => {
    setStep("details");
    setName("");
    setScript("cold_call");
    setFile(null);
    setError("");
    setLaunching(false);
    setResponseData(null);
    onClose?.();
  };

  const handleNext = () => {
    if (!name.trim()) {
      setError("Campaign name is required.");
      return;
    }
    setError("");
    setStep("upload");
  };

  const validateFile = (nextFile) => {
    if (!nextFile) return "Please select a CSV or Excel file.";
    const lowerName = nextFile.name.toLowerCase();
    const validExt = [".csv", ".xlsx", ".xls"].some((ext) => lowerName.endsWith(ext));
    if (!validExt) return "Only CSV, XLS, or XLSX files are supported.";
    if (nextFile.size > maxFileSize) return "File size must be 10MB or less.";
    return "";
  };

  const handleFileSelect = (nextFile) => {
    const validationError = validateFile(nextFile);
    setError(validationError);
    setFile(validationError ? null : nextFile);
  };

  const handleFileChange = (event) => {
    handleFileSelect(event.target.files?.[0]);
    event.target.value = "";
  };

  const handleLaunch = async () => {
    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("company_id", localStorage.getItem("company_id") || "default");
    formData.append("type", "leads");
    formData.append("campaign_name", name.trim());
    formData.append("script_type", script);

    try {
      setLaunching(true);
      setError("");

      const res = await fetch(`${API_URL}/upload`, {
        method: "POST",
        body: formData,
      });

      let data = null;
      try {
        data = await res.json();
      } catch {
        data = null;
      }

      if (!res.ok) {
        throw new Error(data?.message || data?.error || "Campaign launch failed.");
      }

      setResponseData(data);
      await onLaunch?.(data);
      setStep("success");
    } catch (err) {
      setError(err.message || "Campaign launch failed.");
    } finally {
      setLaunching(false);
    }
  };

  if (step === "success") {
    return (
      <Modal width={T.layout.successModalWidth}>
        <div style={{ padding: 28, textAlign: "center" }}>
          <AppIconCircle size={48} background={C.greenSoft} color={C.greenText} style={{ margin: "0 auto 16px" }}>
            <FiCheckCircle size={24} />
          </AppIconCircle>
          <div style={{ color: C.text, fontSize: 17, fontWeight: T.font.weight.bold }}>
            Campaign Launched!
          </div>
          <p style={{ margin: "10px 0 0", color: C.muted, fontSize: T.font.size.bodySmall, lineHeight: 1.5 }}>
            Your leads have been successfully uploaded and the AI calling is now live.
          </p>
          <p style={{ margin: "6px 0 22px", color: C.muted, fontSize: T.font.size.caption }}>
            Track progress from your campaigns dashboard.
          </p>
          {responseData?.message ? (
            <Alert variant="success" style={{ marginBottom: 16, textAlign: "left" }}>
              {responseData.message}
            </Alert>
          ) : null}
          <AppButton
            variant="primary"
            onClick={resetAndClose}
            style={{ width: "100%", height: 36, fontSize: T.font.size.bodySmall }}
          >
            Back to campaigns
          </AppButton>
        </div>
      </Modal>
    );
  }

  return (
    <Modal>
      <AppStepper steps={campaignSteps} currentStep={step === "details" ? 1 : 2} />
      <ModalHeader step={step} onClose={onClose} />

      {step === "details" ? (
        <>
          <div style={{ padding: "18px 20px" }}>
            {error ? (
              <Alert variant="error" style={{ marginBottom: 14 }}>
                {error}
              </Alert>
            ) : null}

            <div style={{ marginBottom: 16 }}>
              <label
                style={{
                  display: "block",
                  color: C.text,
                  fontSize: T.font.size.bodySmall,
                  fontWeight: T.font.weight.semibold,
                  marginBottom: 7,
                }}
              >
                Campaign name *
              </label>
              <TextField
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="e.g. Prestige Lakeside — Jan 2026"
                style={{ height: 36 }}
              />
            </div>

            <div
              style={{
                color: C.text,
                fontSize: T.font.size.bodySmall,
                fontWeight: T.font.weight.semibold,
                marginBottom: 9,
              }}
            >
              AI qualification script
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {scripts.map((option) => (
                <ScriptOption
                  key={option.id}
                  option={option}
                  selected={script === option.id}
                  onSelect={() => setScript(option.id)}
                />
              ))}
            </div>
          </div>
          <ModalFooter>
            <AppButton onClick={resetAndClose} compact>
              cancel
            </AppButton>
            <AppButton
              variant="primary"
              compact
              onClick={handleNext}
              style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
            >
              Next: upload leads
              <FiArrowRight size={13} />
            </AppButton>
          </ModalFooter>
        </>
      ) : (
        <>
          <div style={{ padding: "18px 20px" }}>
            <input
              ref={inputRef}
              type="file"
              accept={acceptedTypes}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />

            {error ? (
              <Alert variant="error" style={{ marginBottom: 14 }}>
                {error}
              </Alert>
            ) : null}

            <AppCard
              variant="upload"
              style={{
                textAlign: "center",
                cursor: "default",
                marginBottom: 12,
              }}
            >
              <AppIconCircle
                size={34}
                variant="primary"
                style={{ margin: "0 auto 12px", borderRadius: T.radius.sm }}
              >
                <FiFileText size={18} />
              </AppIconCircle>
              <div style={{ color: C.text, fontSize: T.font.size.sm, fontWeight: T.font.weight.semibold }}>
                Drop your Excel or CSV file here
              </div>
              <div style={{ color: C.muted, fontSize: T.font.size.caption, marginTop: 4, marginBottom: 14 }}>
                Supports .xlsx, .xls, .csv&nbsp;&nbsp; Max 10MB
              </div>
              <AppButton variant="primary" compact onClick={() => inputRef.current?.click()}>
                Browse files
              </AppButton>
            </AppCard>

            {file ? (
              <Alert variant="success" style={{ marginBottom: 12 }}>
                <strong>{file.name}</strong> selected
              </Alert>
            ) : null}

            <Alert
              variant="warning"
              contentAlign="center"
              style={{ minHeight: 28, padding: "0 12px", fontSize: T.font.size.caption }}
            >
              <FiAlertTriangle size={11} color={C.warm} />
              <span>Required columns: phone number and first name</span>
            </Alert>
          </div>
          <ModalFooter>
            <AppButton
              compact
              onClick={() => {
                setError("");
                setStep("details");
              }}
              disabled={launching}
            >
              back
            </AppButton>
            <AppButton
              variant="primary"
              compact
              onClick={handleLaunch}
              disabled={!file || launching}
              style={{ minWidth: 126 }}
            >
              {launching ? "launching..." : "launch campaign"}
            </AppButton>
          </ModalFooter>
        </>
      )}
    </Modal>
  );
}

CreateCampaignModal.propTypes = {
  onClose: PropTypes.func,
  onLaunch: PropTypes.func,
};

export default CreateCampaignModal;
