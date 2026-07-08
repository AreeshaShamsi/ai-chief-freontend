import React, { useState } from "react";
import { FiChevronDown, FiPlus, FiTrash2 } from "react-icons/fi";
import { LuGripVertical } from "react-icons/lu";
import { AppButton, C, T, TextField } from "../utils";

const fieldTypes = ["Text", "Date"];

function EditColumnsPopover({
  open,
  columns,
  onReorder,
  onDelete,
  onAdd,
}) {
  const [adding, setAdding] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [selectOpen, setSelectOpen] = useState(false);
  const [draggedId, setDraggedId] = useState(null);

  if (!open) return null;

  const resetAddForm = () => {
    setAdding(false);
    setName("");
    setType("");
    setSelectOpen(false);
  };

  const handleAdd = () => {
    if (!name.trim() || !type) return;
    onAdd({ name: name.trim(), type });
    resetAddForm();
  };

  const handleDrop = (targetId) => {
    if (!draggedId || draggedId === targetId) return;
    const fromIndex = columns.findIndex((column) => column.id === draggedId);
    const toIndex = columns.findIndex((column) => column.id === targetId);
    if (fromIndex === -1 || toIndex === -1) return;
    const nextColumns = [...columns];
    const [moved] = nextColumns.splice(fromIndex, 1);
    nextColumns.splice(toIndex, 0, moved);
    onReorder(nextColumns);
    setDraggedId(null);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 42,
        right: 0,
        zIndex: 30,
        width: 282,
        borderRadius: 12,
        border: `1px solid ${C.border}`,
        background: C.card,
        boxShadow: "0 8px 22px rgba(15, 23, 42, 0.08)",
        padding: 10,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "4px 2px 8px",
        }}
      >
        <div style={{ color: C.text, fontSize: T.font.size.bodySmall, fontWeight: T.font.weight.semibold }}>
          Edit columns
        </div>
        <div style={{ color: C.muted, fontSize: T.font.size.caption, fontWeight: T.font.weight.medium }}>
          Drag to reorder
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {columns.map((column) => (
          <div
            key={column.id}
            draggable
            onDragStart={() => setDraggedId(column.id)}
            onDragOver={(event) => event.preventDefault()}
            onDrop={() => handleDrop(column.id)}
            onDragEnd={() => setDraggedId(null)}
            style={{
              height: 31,
              borderRadius: T.radius.sm,
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "0 4px",
              background: draggedId === column.id ? C.surface : C.card,
              boxSizing: "border-box",
            }}
          >
            <LuGripVertical size={14} color={C.muted} style={{ cursor: "grab", flexShrink: 0 }} />
            <span
              style={{
                flex: 1,
                minWidth: 0,
                color: C.text,
                fontSize: T.font.size.bodySmall,
                fontWeight: T.font.weight.medium,
                textTransform: "lowercase",
              }}
            >
              {column.label}
            </span>
            <button
              type="button"
              aria-label={`Delete ${column.label} column`}
              onClick={() => onDelete(column.id)}
              disabled={columns.length <= 1}
              style={{
                width: 24,
                height: 24,
                border: T.border.none,
                background: "transparent",
                color: C.hot,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
                cursor: columns.length <= 1 ? "not-allowed" : "pointer",
                opacity: columns.length <= 1 ? 0.45 : 1,
              }}
            >
              <FiTrash2 size={13} strokeWidth={1.8} />
            </button>
          </div>
        ))}
      </div>

      {adding ? (
        <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 8 }}>
          <TextField
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="type name"
            style={{
              height: 34,
              borderRadius: T.radius.sm,
              fontSize: T.font.size.bodySmall,
            }}
          />
          <div style={{ position: "relative" }}>
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded={selectOpen}
              onClick={() => setSelectOpen((current) => !current)}
              style={{
                width: "100%",
                height: 34,
                border: `1px solid ${C.border}`,
                borderRadius: T.radius.sm,
                background: C.surface,
                color: type ? C.text : C.muted,
                fontSize: T.font.size.bodySmall,
                fontFamily: T.font.family,
                textAlign: "left",
                padding: "0 30px 0 12px",
                cursor: "pointer",
                boxSizing: "border-box",
              }}
            >
              {type || "select"}
            </button>
            <FiChevronDown
              size={14}
              style={{
                position: "absolute",
                right: 10,
                top: 10,
                color: C.muted,
                pointerEvents: "none",
              }}
            />
            {selectOpen ? (
              <div
                role="listbox"
                style={{
                  marginTop: 6,
                  borderRadius: T.radius.sm,
                  overflow: "hidden",
                  border: `1px solid ${C.border}`,
                  background: C.card,
                }}
              >
                {fieldTypes.map((option) => (
                  <button
                    key={option}
                    type="button"
                    role="option"
                    aria-selected={type === option}
                    onClick={() => {
                      setType(option);
                      setSelectOpen(false);
                    }}
                    style={{
                      width: "100%",
                      height: 30,
                      border: T.border.none,
                      borderBottom: option === fieldTypes[0] ? `1px solid ${C.borderLt}` : T.border.none,
                      background: C.card,
                      color: C.text,
                      fontSize: T.font.size.bodySmall,
                      fontFamily: T.font.family,
                      textAlign: "left",
                      padding: "0 12px",
                      cursor: "pointer",
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            <AppButton
              variant="primary"
              compact
              onClick={handleAdd}
              style={{
                height: 34,
                borderRadius: T.radius.sm,
                fontSize: T.font.size.bodySmall,
                fontWeight: T.font.weight.semibold,
              }}
            >
              add
            </AppButton>
            <AppButton
              compact
              onClick={resetAddForm}
              style={{
                height: 34,
                borderRadius: T.radius.sm,
                background: C.hotBg,
                color: C.hot,
                border: `1px solid ${C.hotBdr}`,
                fontSize: T.font.size.bodySmall,
                fontWeight: T.font.weight.semibold,
              }}
            >
              cancel
            </AppButton>
          </div>
        </div>
      ) : (
        <AppButton
          variant="primary"
          compact
          onClick={() => setAdding(true)}
          style={{
            width: "100%",
            height: 34,
            marginTop: 10,
            borderRadius: T.radius.sm,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 7,
            fontSize: T.font.size.bodySmall,
            fontWeight: T.font.weight.semibold,
          }}
        >
          <FiPlus size={14} />
          Add deal
        </AppButton>
      )}
    </div>
  );
}

export default EditColumnsPopover;
