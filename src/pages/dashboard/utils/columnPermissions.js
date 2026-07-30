const fieldActionRestrictionBoundaries = {
  inventory: "priority",
  tasks: "status",
};

function normalizeFieldLabel(value) {
  return String(value || "").trim().toLowerCase();
}

function readBooleanFlag(source, keys) {
  if (!source || typeof source !== "object") return undefined;

  for (const key of keys) {
    if (typeof source[key] === "boolean") {
      return source[key];
    }
  }

  return undefined;
}

export function isReadOnlyTable(table) {
  const explicitReadOnly = readBooleanFlag(table, [
    "readOnly",
    "readonly",
    "read_only",
    "isReadOnly",
    "is_read_only",
    "locked",
    "isLocked",
    "is_locked",
  ]);

  if (explicitReadOnly !== undefined) return explicitReadOnly;

  const explicitEditable = readBooleanFlag(table, [
    "editable",
    "isEditable",
    "is_editable",
    "canEdit",
    "can_edit",
    "canModify",
    "can_modify",
    "allowFieldModification",
    "allow_field_modification",
  ]);

  return explicitEditable === false;
}

export function canModifyColumn({ workspaceId, columnId, fields = [], table }) {
  const normalizedWorkspaceId = normalizeFieldLabel(workspaceId);

  if (normalizedWorkspaceId === "deals" && isReadOnlyTable(table)) {
    return false;
  }

  if (normalizedWorkspaceId === "contacts") {
    return false;
  }

  const boundaryFieldName = fieldActionRestrictionBoundaries[normalizedWorkspaceId];
  if (!boundaryFieldName) {
    return true;
  }

  const normalizedColumnId = String(columnId);
  const columnIndex = fields.findIndex((field) => String(field.id) === normalizedColumnId);
  const boundaryIndex = fields.findIndex(
    (field) =>
      normalizeFieldLabel(field.name) === boundaryFieldName ||
      normalizeFieldLabel(field.id) === boundaryFieldName
  );

  if (columnIndex < 0 || boundaryIndex < 0) {
    return true;
  }

  return columnIndex > boundaryIndex;
}
