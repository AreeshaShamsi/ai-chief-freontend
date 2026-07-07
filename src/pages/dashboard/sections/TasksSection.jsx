import React, { useState } from "react";
import { FiColumns, FiList, FiPlus, FiSearch, FiTrash2 } from "react-icons/fi";
import { LuSquarePen } from "react-icons/lu";
import { AppButton, AppCard, AppPill, C, T } from "../../../components/utils";

const tasks = [
  { task: "Follow-up call", description: "need to call the client", assignedTo: "ramesh yadav", date: "14/04/2025", status: "to do" },
  { task: "Follow-up call", description: "need to call the client", assignedTo: "ramesh yadav", date: "14/04/2025", status: "in progress" },
  { task: "Follow-up call", description: "need to call the client", assignedTo: "ramesh yadav", date: "14/04/2025", status: "completed" },
  { task: "Follow-up call", description: "need to call the client", assignedTo: "ramesh yadav", date: "14/04/2025", status: "pending" },
  { task: "Follow-up call", description: "need to call the client", assignedTo: "ramesh yadav", date: "14/04/2025", status: "to do" },
  { task: "Follow-up call", description: "need to call the client", assignedTo: "ramesh yadav", date: "14/04/2025", status: "in progress" },
  { task: "Follow-up call", description: "need to call the client", assignedTo: "ramesh yadav", date: "14/04/2025", status: "completed" },
];

function StatusBadge({ status }) {
  const variants = {
    "to do": {
      background: C.warmBg,
      color: C.warm,
      border: C.warmBdr,
      dot: C.warm,
    },
    "in progress": {
      background: C.accentLt,
      color: C.accent,
      border: C.accentTrack,
      dot: C.accent,
    },
    completed: {
      background: C.greenSoft,
      color: C.greenText,
      border: C.greenBdr,
      dot: C.green,
    },
    pending: {
      background: C.hotBg,
      color: C.hot,
      border: C.hotBdr,
      dot: C.hot,
    },
  };
  const tone = variants[status] || variants.pending;

  return (
    <AppPill
      dot
      size="xs"
      dotColor={tone.dot}
      style={{
        height: 22,
        padding: "0 10px",
        background: tone.background,
        color: tone.color,
        border: `1px solid ${tone.border}`,
        fontSize: T.font.size.caption,
        fontWeight: T.font.weight.semibold,
        textTransform: "lowercase",
      }}
    >
      {status}
    </AppPill>
  );
}

function IconAction({ label, children }) {
  return (
    <button
      type="button"
      aria-label={label}
      style={{
        width: 26,
        height: 26,
        border: "none",
        background: "transparent",
        color: C.text,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

function ViewToggleButton({ label, active, onClick, children }) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={active}
      onClick={onClick}
      style={{
        width: 31,
        height: 31,
        borderRadius: T.radius.sm,
        border: "none",
        background: active ? C.accent : C.card,
        color: active ? C.card : C.muted,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

function KanbanView() {
  const columns = ["to do", "in progress", "completed", "pending"];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
        gap: 12,
      }}
    >
      {columns.map((column) => {
        const columnTasks = tasks.filter((task) => task.status === column);

        return (
          <AppCard
            key={column}
            variant="compact"
            style={{
              padding: 12,
              borderRadius: T.radius.card,
              border: `1px solid ${C.border}`,
              boxShadow: T.shadow.none,
              background: C.surface,
              minHeight: 260,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
              <div style={{ color: C.text, fontSize: T.font.size.bodySmall, fontWeight: T.font.weight.bold, textTransform: "lowercase" }}>
                {column}
              </div>
              <StatusBadge status={column} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {columnTasks.map((task, index) => (
                <AppCard
                  key={`${column}-${index}`}
                  variant="compact"
                  style={{
                    padding: 12,
                    borderRadius: T.radius.md,
                    border: `1px solid ${C.borderLt}`,
                    boxShadow: T.shadow.none,
                    background: C.card,
                  }}
                >
                  <div style={{ color: C.text, fontSize: T.font.size.bodySmall, fontWeight: T.font.weight.semibold }}>
                    {task.task}
                  </div>
                  <div style={{ marginTop: 5, color: C.muted, fontSize: T.font.size.caption, lineHeight: 1.35 }}>
                    {task.description}
                  </div>
                  <div style={{ marginTop: 10, color: C.text, fontSize: T.font.size.caption }}>
                    {task.assignedTo}
                  </div>
                  <div style={{ marginTop: 4, color: C.muted, fontSize: T.font.size.caption }}>
                    {task.date}
                  </div>
                </AppCard>
              ))}
            </div>
          </AppCard>
        );
      })}
    </div>
  );
}

function TasksSection() {
  const [viewMode, setViewMode] = useState("list");

  return (
    <div
      style={{
        minHeight: "100%",
        width: "100%",
        minWidth: 0,
        background: C.card,
        padding: T.spacing.page,
        boxSizing: "border-box",
        color: C.text,
      }}
    >
      <header style={{ marginBottom: 18 }}>
        <h1
          style={{
            margin: 0,
            color: C.text,
            fontSize: T.font.size.pageTitle,
            fontWeight: T.font.weight.extraBold,
            lineHeight: 1.1,
            textTransform: "lowercase",
          }}
        >
          tasks
        </h1>
        <div style={{ marginTop: 4, color: C.muted, fontSize: T.font.size.caption, fontWeight: T.font.weight.medium }}>
          view and manage your task
        </div>
      </header>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          marginBottom: 16,
        }}
      >
        <div
          style={{
            width: 300,
            flex: "0 0 300px",
            height: 34,
            border: `1px solid ${C.border}`,
            borderRadius: T.radius.sm,
            background: C.card,
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "0 11px",
            boxSizing: "border-box",
          }}
        >
          <FiSearch size={14} color={C.muted} />
          <input
            aria-label="Search tasks"
            placeholder="Search in all deals"
            style={{
              flex: 1,
              minWidth: 0,
              border: "none",
              outline: "none",
              background: "transparent",
              color: C.text,
              fontFamily: T.font.family,
              fontSize: T.font.size.bodySmall,
            }}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <AppButton
            variant="primary"
            compact
            style={{
              height: 34,
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              borderRadius: T.radius.sm,
              fontSize: T.font.size.bodySmall,
              fontWeight: T.font.weight.semibold,
            }}
          >
            <FiPlus size={14} />
            Add task
          </AppButton>
          <AppButton
            compact
            style={{
              height: 34,
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              borderRadius: T.radius.sm,
              background: C.card,
              color: C.text,
              fontSize: T.font.size.bodySmall,
            }}
          >
            <LuSquarePen size={15} />
            edit column
          </AppButton>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 3,
              height: 36,
              padding: 2,
              borderRadius: 12,
              border: `1px solid ${C.border}`,
              background: C.card,
              boxSizing: "border-box",
            }}
          >
            <ViewToggleButton
              label="List view"
              active={viewMode === "list"}
              onClick={() => setViewMode("list")}
            >
              <FiList size={16} />
            </ViewToggleButton>
            <ViewToggleButton
              label="Kanban view"
              active={viewMode === "kanban"}
              onClick={() => setViewMode("kanban")}
            >
              <FiColumns size={16} />
            </ViewToggleButton>
          </div>
        </div>
      </div>

      {viewMode === "list" ? (
        <AppCard
        variant="compact"
        style={{
          padding: 0,
          overflow: "hidden",
          borderRadius: T.radius.card,
          border: `1px solid ${C.border}`,
          boxShadow: T.shadow.none,
          background: C.card,
        }}
      >
        <div style={{ overflowX: "auto", width: "100%" }}>
          <table
            style={{
              width: "100%",
              minWidth: 860,
              borderCollapse: "separate",
              borderSpacing: 0,
            }}
          >
            <thead>
              <tr style={{ background: C.accentLt }}>
                {["task", "description", "Assigned To", "date", "status", "next action"].map((heading) => (
                  <th
                    key={heading}
                    scope="col"
                    style={{
                      padding: "12px 16px",
                      color: C.muted,
                      fontSize: T.font.size.xs,
                      fontWeight: T.font.weight.bold,
                      textAlign: heading === "next action" ? "center" : "left",
                      borderBottom: `1px solid ${C.border}`,
                    }}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={`${task.status}-${index}`}>
                  <td style={{ padding: "13px 16px", borderBottom: `1px solid ${C.borderLt}`, fontSize: T.font.size.bodySmall, fontWeight: T.font.weight.semibold, color: C.text }}>
                    {task.task}
                  </td>
                  <td style={{ padding: "13px 16px", borderBottom: `1px solid ${C.borderLt}`, fontSize: T.font.size.bodySmall, color: C.text }}>
                    {task.description}
                  </td>
                  <td style={{ padding: "13px 16px", borderBottom: `1px solid ${C.borderLt}`, fontSize: T.font.size.bodySmall, color: C.text, textTransform: "lowercase" }}>
                    {task.assignedTo}
                  </td>
                  <td style={{ padding: "13px 16px", borderBottom: `1px solid ${C.borderLt}`, fontSize: T.font.size.bodySmall, color: C.text }}>
                    {task.date}
                  </td>
                  <td style={{ padding: "12px 16px", borderBottom: `1px solid ${C.borderLt}` }}>
                    <StatusBadge status={task.status} />
                  </td>
                  <td style={{ padding: "9px 16px", borderBottom: `1px solid ${C.borderLt}`, textAlign: "center" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                      <IconAction label={`Edit ${task.task}`}>
                        <LuSquarePen size={15} />
                      </IconAction>
                      <IconAction label={`Delete ${task.task}`}>
                        <FiTrash2 size={14} />
                      </IconAction>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </AppCard>
      ) : (
        <KanbanView />
      )}
    </div>
  );
}

export default TasksSection;
