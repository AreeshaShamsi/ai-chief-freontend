import React, { useState } from "react";
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

function AssignSelect({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const options = ["admin", "admin"];

  return (
    <div style={{ position: "relative" }}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        style={{
          width: "100%",
          height: 40,
          padding: "0 38px 0 12px",
          border: `1px solid ${C.border}`,
          borderRadius: T.radius.md,
          background: C.surface,
          color: value ? C.text : C.muted,
          fontSize: T.font.size.sm,
          fontFamily: T.font.family,
          textAlign: "left",
          boxSizing: "border-box",
          cursor: "pointer",
        }}
      >
        {value || "select"}
      </button>
      <LuChevronDown
        size={16}
        strokeWidth={1.9}
        style={{
          position: "absolute",
          right: 13,
          top: 20,
          transform: "translateY(-50%)",
          color: C.text,
          pointerEvents: "none",
        }}
      />

      {open ? (
        <div
          role="listbox"
          style={{
            position: "absolute",
            zIndex: 2,
            top: 46,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            gap: 7,
            padding: 0,
          }}
        >
          {options.map((option, index) => (
            <button
              key={`${option}-${index}`}
              type="button"
              role="option"
              aria-selected={value === option}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              style={{
                width: "100%",
                height: 38,
                border: `1px solid ${C.border}`,
                borderRadius: T.radius.md,
                background: C.card,
                color: C.text,
                fontSize: T.font.size.sm,
                fontFamily: T.font.family,
                textAlign: "left",
                padding: "0 12px",
                cursor: "pointer",
                boxSizing: "border-box",
              }}
            >
              {option}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function AddTaskModal({ open, onClose, onSave }) {
  const [title, setTitle] = useState("Filled");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("14/06/2026");
  const [dueTime, setDueTime] = useState("14:08");
  const [assignedTo, setAssignedTo] = useState("");
  const [titleError, setTitleError] = useState(false);

  if (!open) return null;

  const handleSave = () => {
    if (!title.trim()) {
      setTitleError(true);
      return;
    }

    onSave({
      title: title.trim(),
      description: description.trim(),
      date,
      dueTime,
      assignedTo,
    });
    setTitle("Filled");
    setDescription("");
    setDate("14/06/2026");
    setDueTime("14:08");
    setAssignedTo("");
    setTitleError(false);
  };

  const handleClose = () => {
    setTitleError(false);
    onClose();
  };

  return (
    <Modal
      width={575}
      onClose={handleClose}
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
          Add Task
        </h2>
        <IconButton
          aria-label="Close add task modal"
          onClick={handleClose}
          style={{ width: 32, height: 32, color: C.muted }}
        >
          <FiX size={20} strokeWidth={1.8} />
        </IconButton>
      </div>

      <div style={{ padding: 24 }}>
        <div>
          <FieldLabel required>Title</FieldLabel>
          <TextField
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
              if (titleError) setTitleError(false);
            }}
            style={{
              height: 40,
              borderRadius: T.radius.md,
              fontSize: T.font.size.sm,
              borderColor: titleError ? C.hot : C.border,
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
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Enter task description"
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
            <IconField ariaLabel="Due date" value={date} onChange={setDate} icon={LuCalendar} />
            <IconField ariaLabel="Due time" value={dueTime} onChange={setDueTime} icon={LuClock} />
          </div>
        </div>

        <div style={{ marginTop: 18, paddingBottom: 84 }}>
          <FieldLabel>Assign to</FieldLabel>
          <AssignSelect value={assignedTo} onChange={setAssignedTo} />
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
          onClick={handleClose}
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

export default AddTaskModal;
