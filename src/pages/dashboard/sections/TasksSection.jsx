import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { FiClock, FiColumns, FiList, FiPlus, FiSearch, FiTrash2 } from "react-icons/fi";
import { LuSquarePen } from "react-icons/lu";
import EditColumnsPopover from "../../../components/design-system/EditColumnsPopover";
import { AppButton, AppCard, AppPill, C, T } from "../../../components/utils";
import AddTaskModal from "../modals/AddTaskModal";
import EditTaskModal from "../modals/EditTaskModal";
import DealDetailsModal from "../modals/DealDetailsModal";

const tasks = [
  { task: "Follow-up call", description: "need to call the client", assignedTo: "ramesh yadav", date: "14/04/2025", status: "to do" },
  { task: "Follow-up call", description: "need to call the client", assignedTo: "ramesh yadav", date: "14/04/2025", status: "in progress" },
  { task: "Follow-up call", description: "need to call the client", assignedTo: "ramesh yadav", date: "14/04/2025", status: "completed" },
  { task: "Follow-up call", description: "need to call the client", assignedTo: "ramesh yadav", date: "14/04/2025", status: "pending" },
  { task: "Follow-up call", description: "need to call the client", assignedTo: "ramesh yadav", date: "14/04/2025", status: "to do" },
  { task: "Follow-up call", description: "need to call the client", assignedTo: "ramesh yadav", date: "14/04/2025", status: "in progress" },
  { task: "Follow-up call", description: "need to call the client", assignedTo: "ramesh yadav", date: "14/04/2025", status: "completed" },
];

const initialKanbanColumns = [
  { id: "to-do", label: "to do", status: "to do", type: "Text" },
  { id: "scheduled", label: "scheduled", status: "Scheduled", type: "Text" },
  { id: "in-progress", label: "in progress", status: "in progress", type: "Text" },
  { id: "waiting-for-client", label: "waiting for client", status: "Waiting for client", type: "Text" },
  { id: "review-approval", label: "review / approval", status: "Review / Approval", type: "Text" },
  { id: "completed", label: "completed", status: "Completed", type: "Text" },
  { id: "overdue", label: "overdue", status: "Overdue", type: "Text" },
];

const kanbanTasks = [
  ...Array.from({ length: 2 }, (_, index) => ({
    id: `todo-${index}`,
    status: "to do",
    title: "follow up call",
    description: "need to call the client for confirmation about the property",
    assignedTo: "ramesh yadav",
    date: "14/05/2026",
    category: index % 2 === 0 ? "property enquiry" : "qualified",
  })),
  ...Array.from({ length: 3 }, (_, index) => ({
    id: `scheduled-${index}`,
    status: "Scheduled",
    title: "follow up call",
    description: "need to call the client for confirmation about the property",
    assignedTo: "ramesh yadav",
    date: "14/05/2026",
    category: ["cold call", "property enquiry", "requirement gathering"][index],
  })),
  ...Array.from({ length: 3 }, (_, index) => ({
    id: `progress-${index}`,
    status: "in progress",
    title: "follow up call",
    description: "need to call the client for confirmation about the property",
    assignedTo: "ramesh yadav",
    date: "14/05/2026",
    category: ["property enquiry", "qualified", "cold call"][index],
  })),
  ...Array.from({ length: 3 }, (_, index) => ({
    id: `waiting-${index}`,
    status: "Waiting for client",
    title: "follow up call",
    description: "need to call the client for confirmation about the property",
    assignedTo: "ramesh yadav",
    date: "14/05/2026",
    category: ["qualified", "property enquiry", "requirement gathering"][index],
  })),
  ...Array.from({ length: 3 }, (_, index) => ({
    id: `review-${index}`,
    status: "Review / Approval",
    title: "follow up call",
    description: "need to call the client for confirmation about the property",
    assignedTo: "ramesh yadav",
    date: "14/05/2026",
    category: ["property enquiry", "cold call", "qualified"][index],
  })),
  ...Array.from({ length: 3 }, (_, index) => ({
    id: `completed-${index}`,
    status: "Completed",
    title: "follow up call",
    description: "need to call the client for confirmation about the property",
    assignedTo: "ramesh yadav",
    date: "14/05/2026",
    category: ["qualified", "requirement gathering", "property enquiry"][index],
  })),
  ...Array.from({ length: 3 }, (_, index) => ({
    id: `overdue-${index}`,
    status: "Overdue",
    title: "follow up call",
    description: "need to call the client for confirmation about the property",
    assignedTo: "ramesh yadav",
    date: "14/05/2026",
    category: ["cold call", "property enquiry", "qualified"][index],
  })),
];

const listTasks = tasks.map((task, index) => ({
  ...task,
  id: `list-${index}`,
  title: task.task,
  dueTime: "14:08",
}));

const initialTaskTableColumns = [
  { id: "task", label: "task", visible: true },
  { id: "description", label: "description", visible: true },
  { id: "assignedTo", label: "Assigned To", visible: true },
  { id: "date", label: "date", visible: true },
  { id: "status", label: "status", visible: true },
  { id: "nextAction", label: "next action", visible: true },
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
        textTransform: "capitalize",
      }}
    >
      {status}
    </AppPill>
  );
}

function CategoryBadge({ category }) {
  const variants = {
    "property enquiry": {
      background: C.accentLt,
      color: C.accent,
      border: C.accentTrack,
      dot: C.accent,
    },
    qualified: {
      background: C.greenSoft,
      color: C.greenText,
      border: C.greenBdr,
      dot: C.green,
    },
    "cold call": {
      background: C.warmBg,
      color: C.warm,
      border: C.warmBdr,
      dot: C.warm,
    },
    "requirement gathering": {
      background: C.greenSoft,
      color: C.greenText,
      border: C.greenBdr,
      dot: C.green,
    },
  };
  const tone = variants[category] || variants["property enquiry"];

  return (
    <AppPill
      dot
      size="xs"
      dotColor={tone.dot}
      style={{
        height: 20,
        padding: "0 8px",
        background: tone.background,
        color: tone.color,
        border: `1px solid ${tone.border}`,
        fontSize: T.font.size.caption,
        fontWeight: T.font.weight.medium,
        textTransform: "capitalize",
      }}
    >
      {category}
    </AppPill>
  );
}

function IconAction({ label, children, onClick }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
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

function KanbanTaskCard({ task, onEdit }) {
  return (
    <AppCard
      variant="compact"
      style={{
        padding: 12,
        borderRadius: T.radius.md,
        border: `1px solid ${C.border}`,
        boxShadow: T.shadow.none,
        background: C.card,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 5, color: C.muted, fontSize: T.font.size.caption }}>
          <FiClock size={12} />
          {task.date}
        </div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 2 }}>
          <IconAction label={`Delete ${task.title}`}>
            <FiTrash2 size={13} />
          </IconAction>
          <IconAction label={`Edit ${task.title}`} onClick={() => onEdit(task)}>
            <LuSquarePen size={14} />
          </IconAction>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginTop: 10 }}>
        <div style={{ color: C.text, fontSize: T.font.size.bodySmall, fontWeight: T.font.weight.bold }}>
          {task.title}
        </div>
        <CategoryBadge category={task.category} />
      </div>

      <div style={{ marginTop: 9, color: C.muted, fontSize: T.font.size.caption, lineHeight: 1.45 }}>
        {task.description}
      </div>
      <div style={{ marginTop: 12, color: C.text, fontSize: T.font.size.caption, fontWeight: T.font.weight.medium }}>
        Assigned to - {task.assignedTo}
      </div>
    </AppCard>
  );
}

function KanbanColumn({ column, tasks: columnTasks, onEditTask }) {
  return (
    <div style={{ width: 214, minWidth: 214 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <div style={{ color: C.text, fontSize: T.font.size.bodySmall, fontWeight: T.font.weight.semibold }}>
          {column} <span style={{ color: C.muted, fontSize: T.font.size.caption }}>{columnTasks.length}</span>
        </div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 3 }}>
          <IconAction label={`Add task to ${column}`}>
            <FiPlus size={14} />
          </IconAction>
          <IconAction label={`Edit ${column} column`}>
            <LuSquarePen size={14} />
          </IconAction>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
        {columnTasks.map((task) => (
          <KanbanTaskCard key={task.id} task={task} onEdit={onEditTask} />
        ))}
        <button
          type="button"
          style={{
            width: "100%",
            height: 34,
            borderRadius: T.radius.md,
            border: `1px solid ${C.border}`,
            background: C.card,
            color: C.muted,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 7,
            padding: "0 11px",
            fontSize: T.font.size.bodySmall,
            fontWeight: T.font.weight.medium,
            cursor: "pointer",
          }}
        >
          <FiPlus size={13} />
          new
        </button>
      </div>
    </div>
  );
}

function KanbanView({ tasks, columns, onEditTask }) {
  return (
    <div
      style={{
        background: C.sectionBg,
        borderRadius: T.radius.section,
        padding: 14,
        overflowX: "auto",
        border: `1px solid ${C.borderLt}`,
      }}
    >
      <div style={{ display: "flex", gap: 10, alignItems: "flex-start", minWidth: 1560 }}>
        {columns.map((column) => (
          <KanbanColumn
            key={column.id}
            column={column.label}
            tasks={tasks.filter((task) => task.status === column.status)}
            onEditTask={onEditTask}
          />
        ))}
      </div>
    </div>
  );
}

export const taskColumns = [
  { id: "taskName", name: "Task Name", type: "Single Line Text", value: "Task Name" },
  { id: "description", name: "Description", type: "Single Line Text", value: "Description" },
  { id: "assignedAgent", name: "Assigned Agent", type: "User / Assigned Agent", value: "Assigned Agent", options: ["Ramesh Yadav", "Himanshu S.", "Admin"] },
  { id: "date", name: "Date", type: "Date", value: "14/04/2025" },
  { id: "status", name: "Status", type: "Single Select", value: "Status", options: ["To Do", "In Progress", "Completed", "Pending"], editorKind: "tags" },
];

export const taskRows = [
  {
    id: "task-1",
    taskName: "Follow-up call",
    description: "Need to call the client for confirmation",
    assignedAgent: "Ramesh Yadav",
    date: "14/04/2025",
    status: "To Do",
  },
  {
    id: "task-2",
    taskName: "Property Inspection",
    description: "Accompany buyer for site visit",
    assignedAgent: "Himanshu S.",
    date: "15/04/2025",
    status: "In Progress",
  },
  {
    id: "task-3",
    taskName: "Document Verification",
    description: "Verify title deed documents",
    assignedAgent: "Ramesh Yadav",
    date: "16/04/2025",
    status: "Completed",
  },
];

export const taskViews = ["Grid Name", "Grid Name", "Grid Name", "Grid Name"];

function PageSection({ children, style }) {
  return (
    <section
      style={{
        width: "100%",
        maxWidth: T.layout.pageMaxWidth,
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

function TasksSection({ activeTab = "tasks", onTabChange }) {
  return (
    <div style={{ minHeight: "100%", width: "100%", background: C.backgroundPrimary, padding: T.spacing.page, boxSizing: "border-box" }}>
      <PageSection>
        <header style={{ marginBottom: 18 }}>
          <Text as="h1" variant="pageTitle" style={{ margin: 0 }}>
            Tasks
          </Text>
          <Text as="div" variant="subtitle" style={{ marginTop: 5 }}>
            View and manage your tasks.
          </Text>
        </header>
        <Workspace
          workspaceId="tasks"
          columns={taskColumns}
          rowData={taskRows}
          views={taskViews}
          activeTab={activeTab}
          onTabChange={onTabChange}
        />
      </PageSection>
    </div>
  );
}

TasksSection.propTypes = {
  activeTab: PropTypes.string,
  onTabChange: PropTypes.func,
};

export default TasksSection;
