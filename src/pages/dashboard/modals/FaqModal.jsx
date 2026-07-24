import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { LuX } from "react-icons/lu";
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
        padding: "16px 20px 14px",
        borderBottom: `1px solid ${C.border}`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: T.spacing[3],
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
        <LuX size={16} />
      </IconButton>
    </div>
  );
}

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default function FaqModal({ open = true, mode = "add", faq, onClose, onSubmit, onDelete }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    if (faq && (mode === "edit" || mode === "delete")) {
      setQuestion(faq.question || "");
      setAnswer(faq.answer || "");
    } else {
      setQuestion("");
      setAnswer("");
    }
  }, [faq, mode, open]);

  if (!open) return null;

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (mode === "delete") {
      if (onDelete && faq) onDelete(faq.id);
    } else {
      if (!question.trim()) return;
      if (onSubmit) {
        onSubmit({
          id: faq?.id,
          question: question.trim(),
          answer: answer.trim(),
        });
      }
    }
    onClose?.();
  };

  const getTitle = () => {
    if (mode === "add") return "Add FAQ";
    if (mode === "edit") return "Edit FAQ";
    return "Delete FAQ";
  };

  const getSubmitLabel = () => {
    if (mode === "add") return "Add FAQ";
    if (mode === "edit") return "Save Changes";
    return "Delete";
  };

  return (
    <Modal width={T.layout.modalWidth || 460} onClose={onClose}>
      <ModalHeader title={getTitle()} onClose={() => onClose?.()} />
      <form onSubmit={handleSubmit}>
        <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: T.spacing[4] }}>
          {mode === "delete" ? (
            <Text variant="body" color={C.text}>
              Are you sure you want to delete this FAQ item?
            </Text>
          ) : (
            <>
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
                  Question *
                </label>
                <TextField
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="e.g. Q: What documents are required for booking?"
                  style={{ height: 38 }}
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
                  Answer
                </label>
                <textarea
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="e.g. A: Aadhaar, PAN, 3 Months Bank Statement..."
                  rows={4}
                  style={{
                    width: "100%",
                    minHeight: 90,
                    padding: "10px 12px",
                    border: `1px solid ${C.border}`,
                    borderRadius: T.radius.sm,
                    background: C.surface,
                    color: C.text,
                    fontSize: T.font.size.bodySmall,
                    fontFamily: T.font.family,
                    outline: "none",
                    boxSizing: "border-box",
                    resize: "vertical",
                  }}
                />
              </div>
            </>
          )}
        </div>

        <div
          style={{
            borderTop: `1px solid ${C.border}`,
            padding: "14px 20px",
            display: "flex",
            justifyContent: "flex-end",
            gap: T.spacing[2],
          }}
        >
          <AppButton type="button" onClick={() => onClose?.()} compact>
            Back
          </AppButton>
          <AppButton
            type="submit"
            variant={mode === "delete" ? "danger" : "primary"}
            compact
            style={
              mode === "delete"
                ? { background: C.hot, color: "#fff", border: "none" }
                : undefined
            }
          >
            {getSubmitLabel()}
          </AppButton>
        </div>
      </form>
    </Modal>
  );
}

FaqModal.propTypes = {
  open: PropTypes.bool,
  mode: PropTypes.oneOf(["add", "edit", "delete"]),
  faq: PropTypes.object,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  onDelete: PropTypes.func,
};
