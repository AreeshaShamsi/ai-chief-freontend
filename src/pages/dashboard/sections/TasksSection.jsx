import React, { useEffect, useRef, useState } from "react";
import { FiClock, FiColumns, FiList, FiPlus, FiSearch, FiTrash2 } from "react-icons/fi";
import { LuSquarePen } from "react-icons/lu";
import EditColumnsPopover from "../../../components/design-system/EditColumnsPopover";
import { AppButton, AppCard, AppPill, C, T } from "../../../components/utils";
import AddTaskModal from "../modals/AddTaskModal";
import EditTaskModal from "../modals/EditTaskModal";

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
        textTransform: "lowercase",
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
        textTransform: "lowercase",
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
        <div style={{ color: C.text, fontSize: T.font.size.bodySmall, fontWeight: T.font.weight.bold, textTransform: "lowercase" }}>
          {task.title}
        </div>
        <CategoryBadge category={task.category} />
      </div>

      <div style={{ marginTop: 9, color: C.muted, fontSize: T.font.size.caption, lineHeight: 1.45 }}>
        {task.description}
      </div>
      <div style={{ marginTop: 12, color: C.text, fontSize: T.font.size.caption, fontWeight: T.font.weight.medium, textTransform: "lowercase" }}>
        assigned to - {task.assignedTo}
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

function TasksSection() {
  const [viewMode, setViewMode] = useState("list");
  const [tableTasks, setTableTasks] = useState(listTasks);
  const [taskTableColumns, setTaskTableColumns] = useState(initialTaskTableColumns);
  const [boardTasks, setBoardTasks] = useState(kanbanTasks.map((task) => ({ ...task, dueTime: "14:08" })));
  const [kanbanColumns, setKanbanColumns] = useState(initialKanbanColumns);
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [isEditColumnsOpen, setIsEditColumnsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const editColumnsRef = useRef(null);

  useEffect(() => {
    if (!isEditColumnsOpen) return undefined;

    const handlePointerDown = (event) => {
      if (editColumnsRef.current && !editColumnsRef.current.contains(event.target)) {
        setIsEditColumnsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [isEditColumnsOpen]);

  const openEditTask = (source, task) => {
    setSelectedTask({ source, task });
  };

  const closeEditTask = () => {
    setSelectedTask(null);
  };

  const saveEditedTask = (updatedTask) => {
    if (selectedTask?.source === "list") {
      setTableTasks((current) =>
        current.map((task) => (task.id === updatedTask.id ? { ...task, ...updatedTask } : task))
      );
    }

    if (selectedTask?.source === "kanban") {
      setBoardTasks((current) =>
        current.map((task) => (task.id === updatedTask.id ? { ...task, ...updatedTask } : task))
      );
    }

    closeEditTask();
  };

  const handleAddTask = (task) => {
    const id = `task-${Date.now()}`;
    const newTableTask = {
      id: `list-${id}`,
      task: task.title,
      title: task.title,
      description: task.description || "Enter task description",
      assignedTo: task.assignedTo || "admin",
      date: task.date,
      dueTime: task.dueTime,
      status: "to do",
    };
    const newBoardTask = {
      id: `kanban-${id}`,
      status: "to do",
      title: task.title,
      description: task.description || "Enter task description",
      assignedTo: task.assignedTo || "admin",
      date: task.date,
      dueTime: task.dueTime,
      category: "property enquiry",
    };

    setTableTasks((current) => [newTableTask, ...current]);
    setBoardTasks((current) => [newBoardTask, ...current]);
    setIsAddTaskOpen(false);
  };

  const handleDeleteColumn = (columnId) => {
    setTaskTableColumns((current) => (current.length > 1 ? current.filter((column) => column.id !== columnId) : current));
  };

  const handleAddColumn = ({ name }) => {
    const label = name.trim();
    if (!label) return;

    const id = label
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    setTaskTableColumns((current) => {
      if (current.some((column) => column.id === id)) return current;
      return [...current, { id, label, visible: true }];
    });
  };

  const renderTaskActions = (task) => (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
      <IconAction label={`Edit ${task.task}`} onClick={() => openEditTask("list", task)}>
        <LuSquarePen size={15} />
      </IconAction>
      <IconAction label={`Delete ${task.task}`}>
        <FiTrash2 size={14} />
      </IconAction>
    </div>
  );

  const renderTaskCell = (task, column) => {
    if (column.id === "task") return task.task || task.title || "";
    if (column.id === "assignedTo") return task.assignedTo || "";
    if (column.id === "nextAction") return renderTaskActions(task);
    if (column.id === "status") return <StatusBadge status={task.status} />;
    return task[column.id] || "—";
  };

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
            onClick={() => setIsAddTaskOpen(true)}
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
          <div ref={editColumnsRef} style={{ position: "relative" }}>
            <AppButton
              compact
              onClick={() => setIsEditColumnsOpen((current) => !current)}
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
            <EditColumnsPopover
              open={isEditColumnsOpen}
              columns={taskTableColumns}
              onClose={() => setIsEditColumnsOpen(false)}
              onReorder={setTaskTableColumns}
              onDelete={handleDeleteColumn}
              onAdd={handleAddColumn}
            />
          </div>
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
                {taskTableColumns.filter((column) => column.visible).map((column) => (
                  <th
                    key={column.id}
                    scope="col"
                    style={{
                      padding: "12px 16px",
                      color: C.muted,
                      fontSize: T.font.size.xs,
                      fontWeight: T.font.weight.bold,
                      textAlign: column.id === "nextAction" ? "center" : "left",
                      borderBottom: `1px solid ${C.border}`,
                    }}
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableTasks.map((task) => (
                <tr key={task.id}>
                  {taskTableColumns.filter((column) => column.visible).map((column) => (
                    <td
                      key={column.id}
                      style={{
                        padding: column.id === "nextAction" ? "9px 16px" : column.id === "status" ? "12px 16px" : "13px 16px",
                        borderBottom: `1px solid ${C.borderLt}`,
                        fontSize: T.font.size.bodySmall,
                        fontWeight: column.id === "task" ? T.font.weight.semibold : T.font.weight.medium,
                        color: C.text,
                        textAlign: column.id === "nextAction" ? "center" : "left",
                        textTransform: column.id === "assignedTo" ? "lowercase" : "none",
                      }}
                    >
                      {renderTaskCell(task, column)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </AppCard>
      ) : (
        <KanbanView tasks={boardTasks} columns={kanbanColumns} onEditTask={(task) => openEditTask("kanban", task)} />
      )}

      {selectedTask ? (
        <EditTaskModal
          task={selectedTask.task}
          onClose={closeEditTask}
          onSave={saveEditedTask}
        />
      ) : null}
      <AddTaskModal
        open={isAddTaskOpen}
        onClose={() => setIsAddTaskOpen(false)}
        onSave={handleAddTask}
      />
    </div>
  );
}

export default TasksSection;
