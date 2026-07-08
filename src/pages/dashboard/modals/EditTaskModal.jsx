import React, { useEffect, useMemo, useState } from "react";
import { FiX } from "react-icons/fi";
import {
  LuBold,
  LuCalendar,
  LuChevronDown,
  LuClock,
  LuItalic,
  LuLink,
  LuList,
  LuListOrdered,
  LuRedo2,
  LuStrikethrough,
  LuType,
  LuUnderline,
  LuUndo2,
} from "react-icons/lu";
import { AppButton, C, IconButton, Modal, T, TextField } from "../../../components/utils";

const defaultDescription = "we need to call the client for confirmation about the property";

const toolbarGroups = [
  [LuBold, LuItalic, LuUnderline, LuStrikethrough, LuType],
  [LuLink, LuList, LuListOrdered],
  [LuUndo2, LuRedo2],
];

function FieldLabel({ children, required = false }) {
  return (
    <label
      style={{
        display: "block",
        marginBottom: 8,
        color: C.text,
        fontSize: T.font.size.sm,
        fontWeight: T.font.weight.semibold,
        lineHeight: "16px",
      }}
    >
      {children}
      {required ? <span style={{ color: C.hot }}> *</span> : null}
    </label>
  );
}

function ToolbarIcon({ icon: Icon }) {
  return (
    <button
      type="button"
      aria-label="Editor toolbar action"
      style={{
        width: 27,
        height: 27,
        border: T.border.none,
        background: "transparent",
        color: C.text,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        cursor: "pointer",
      }}
    >
      <Icon size={15} strokeWidth={2} />
    </button>
  );
}

function IconField({ value, onChange, icon: Icon, ariaLabel }) {
  return (
    <div style={{ position: "relative", flex: 1, minWidth: 0 }}>
      <TextField
        aria-label={ariaLabel}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        style={{
          height: 40,
          borderRadius: T.radius.md,
          paddingRight: 38,
          fontSize: T.font.size.sm,
        }}
      />
      <Icon
        size={16}
        strokeWidth={1.8}
        style={{
          position: "absolute",
          right: 13,
          top: "50%",
          transform: "translateY(-50%)",
          color: C.text,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

function normalizeTask(task) {
  const rawTitle = task?.title || task?.task || "Follow-up calls";
  return {
    title: rawTitle === "Follow-up call" || rawTitle === "follow up call" ? "Follow-up calls" : rawTitle,
    description:
      task?.description === "need to call the client" || !task?.description
        ? defaultDescription
        : task.description,
    date: task?.date || "14/06/2026",
    dueTime: task?.dueTime || "14:08",
    assignedTo: task?.assignedTo || "",
  };
}

function EditTaskModal({ task, onClose, onSave }) {
  const initialValues = useMemo(() => normalizeTask(task), [task]);
  const [form, setForm] = useState(initialValues);

  useEffect(() => {
    setForm(initialValues);
  }, [initialValues]);

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSave = () => {
    onSave({
      ...task,
      title: form.title,
      task: form.title,
      description: form.description,
      date: form.date,
      dueTime: form.dueTime,
      assignedTo: form.assignedTo,
    });
  };

  return (
    <Modal
      width={575}
      onClose={onClose}
      style={{
        borderRadius: 20,
        boxShadow: T.shadow.none,
        border: `1px solid ${C.border}`,
        maxHeight: "calc(100vh - 24px)",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          padding: "22px 24px",
          borderBottom: `1px solid ${C.borderMuted}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <h2
          style={{
            margin: 0,
            color: C.text,
            fontSize: T.font.size.pageTitle,
            fontWeight: T.font.weight.bold,
            lineHeight: "26px",
          }}
        >
          Edit Task
        </h2>
        <IconButton
          aria-label="Close edit task modal"
          onClick={onClose}
          style={{
            width: 32,
            height: 32,
            color: C.muted,
          }}
        >
          <FiX size={20} strokeWidth={1.8} />
        </IconButton>
      </div>

      <div style={{ padding: 24 }}>
        <div>
          <FieldLabel required>Title</FieldLabel>
          <TextField
            value={form.title}
            onChange={(event) => updateField("title", event.target.value)}
            style={{
              height: 40,
              borderRadius: T.radius.md,
              fontSize: T.font.size.sm,
            }}
          />
        </div>

        <div style={{ marginTop: 20 }}>
          <FieldLabel>Add description</FieldLabel>
          <div
            style={{
              border: `1px solid ${C.border}`,
              borderRadius: T.radius.sm,
              overflow: "hidden",
              background: C.card,
            }}
          >
            <div
              style={{
                minHeight: 46,
                background: C.surface,
                borderBottom: `1px solid ${C.border}`,
                display: "flex",
                alignItems: "center",
                gap: 4,
                padding: "0 11px",
                boxSizing: "border-box",
              }}
            >
              {toolbarGroups.map((group, groupIndex) => (
                <React.Fragment key={groupIndex}>
                  {group.map((Icon) => (
                    <ToolbarIcon key={Icon.displayName || Icon.name} icon={Icon} />
                  ))}
                  {groupIndex < toolbarGroups.length - 1 ? (
                    <span
                      aria-hidden="true"
                      style={{
                        width: 1,
                        height: 22,
                        background: C.border,
                        margin: "0 5px",
                      }}
                    />
                  ) : null}
                </React.Fragment>
              ))}
            </div>
            <textarea
              aria-label="Task description"
              value={form.description}
              onChange={(event) => updateField("description", event.target.value)}
              style={{
                width: "100%",
                minHeight: 125,
                resize: "vertical",
                border: T.border.none,
                outline: "none",
                padding: 16,
                boxSizing: "border-box",
                background: C.card,
                color: C.text,
                fontFamily: T.font.family,
                fontSize: T.font.size.sm,
                lineHeight: 1.5,
              }}
            />
          </div>
          <div
            style={{
              marginTop: 7,
              textAlign: "right",
              color: C.muted,
              fontSize: T.font.size.caption,
              fontWeight: T.font.weight.medium,
            }}
          >
            0 / 2000 characters
          </div>
        </div>

        <div style={{ marginTop: 18 }}>
          <FieldLabel>Due date and time (IST)</FieldLabel>
          <div style={{ display: "flex", gap: 12 }}>
            <IconField
              ariaLabel="Due date"
              value={form.date}
              onChange={(value) => updateField("date", value)}
              icon={LuCalendar}
            />
            <IconField
              ariaLabel="Due time"
              value={form.dueTime}
              onChange={(value) => updateField("dueTime", value)}
              icon={LuClock}
            />
          </div>
        </div>

        <div style={{ marginTop: 18 }}>
          <FieldLabel>Assign to</FieldLabel>
          <div style={{ position: "relative" }}>
            <select
              aria-label="Assign to"
              value={form.assignedTo}
              onChange={(event) => updateField("assignedTo", event.target.value)}
              style={{
                width: "100%",
                height: 40,
                padding: "0 38px 0 12px",
                border: `1px solid ${C.border}`,
                borderRadius: T.radius.md,
                background: C.surface,
                color: form.assignedTo ? C.text : C.muted,
                fontSize: T.font.size.sm,
                fontFamily: T.font.family,
                outline: "none",
                appearance: "none",
                boxSizing: "border-box",
              }}
            >
              <option value="">select</option>
              <option value="ramesh yadav">ramesh yadav</option>
            </select>
            <LuChevronDown
              size={16}
              strokeWidth={1.9}
              style={{
                position: "absolute",
                right: 13,
                top: "50%",
                transform: "translateY(-50%)",
                color: C.text,
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          padding: "16px 24px",
          borderTop: `1px solid ${C.borderMuted}`,
          display: "flex",
          justifyContent: "flex-end",
          gap: 10,
          background: C.card,
        }}
      >
        <AppButton
          compact
          onClick={onClose}
          style={{
            height: 38,
            minWidth: 78,
            borderRadius: T.radius.md,
            background: C.surface,
            color: C.text,
            fontSize: T.font.size.sm,
            fontWeight: T.font.weight.semibold,
          }}
        >
          cancel
        </AppButton>
        <AppButton
          variant="primary"
          compact
          onClick={handleSave}
          style={{
            height: 38,
            minWidth: 72,
            borderRadius: T.radius.md,
            fontSize: T.font.size.sm,
            fontWeight: T.font.weight.semibold,
          }}
        >
          save
        </AppButton>
      </div>
    </Modal>
  );
}

export default EditTaskModal;
