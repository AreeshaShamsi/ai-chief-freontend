import { useState } from "react";
import PropTypes from "prop-types";
import { FiCheck, FiCopy, FiFileText, FiX } from "react-icons/fi";
import {
  AppButton,
  AppIconCircle,
  C,
  Modal,
  T,
  Text,
} from "../../../components/utils";

export default function NextActionModal({
  isOpen,
  text,
  dealName,
  onClose,
}) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const contentText = typeof text === "string" ? text.trim() : text ? String(text).trim() : "";

  const handleCopy = async () => {
    if (!contentText) return;
    try {
      await navigator.clipboard.writeText(contentText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Modal width={480} onClose={onClose}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 20px",
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <AppIconCircle size={32} variant="primary" style={{ borderRadius: T.radius.md }}>
            <FiFileText size={16} />
          </AppIconCircle>
          <div>
            <Text variant="sectionTitle" style={{ margin: 0, fontWeight: T.font.weight.bold }}>
              Next Action
            </Text>
            {dealName ? (
              <Text variant="caption" style={{ color: C.muted, marginTop: 2 }}>
                {dealName}
              </Text>
            ) : null}
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          style={{
            background: "transparent",
            border: "none",
            color: C.muted,
            cursor: "pointer",
            padding: 6,
            borderRadius: T.radius.sm,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.15s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = C.text;
            e.currentTarget.style.background = C.surface;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = C.muted;
            e.currentTarget.style.background = "transparent";
          }}
        >
          <FiX size={18} />
        </button>
      </div>

      {/* Body */}
      <div style={{ padding: "20px" }}>
        <div
          style={{
            background: C.surface,
            border: `1px solid ${C.border}`,
            borderRadius: T.radius.md,
            padding: "16px",
            maxHeight: 320,
            overflowY: "auto",
            userSelect: "text",
          }}
        >
          {contentText ? (
            <div
              style={{
                fontSize: T.font.size.body,
                lineHeight: 1.6,
                color: C.text,
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              {contentText}
            </div>
          ) : (
            <div
              style={{
                fontSize: T.font.size.bodySmall,
                color: C.muted,
                fontStyle: "italic",
              }}
            >
              No next action details specified for this record.
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: `1px solid ${C.border}`,
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: C.card,
        }}
      >
        <div>
          {contentText ? (
            <AppButton
              compact
              variant="outline"
              onClick={handleCopy}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: T.font.size.caption,
              }}
            >
              {copied ? (
                <>
                  <FiCheck size={13} style={{ color: C.green || "#10B981" }} />
                  <span style={{ color: C.green || "#10B981" }}>Copied!</span>
                </>
              ) : (
                <>
                  <FiCopy size={13} />
                  <span>Copy Text</span>
                </>
              )}
            </AppButton>
          ) : null}
        </div>

        <AppButton compact variant="primary" onClick={onClose}>
          Close
        </AppButton>
      </div>
    </Modal>
  );
}

NextActionModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  text: PropTypes.any,
  dealName: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
