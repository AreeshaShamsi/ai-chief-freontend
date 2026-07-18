import PropTypes from "prop-types";
import { FiX } from "react-icons/fi";
import { FaEdit } from "react-icons/fa";
import { Modal, IconButton, C, T, Text } from "../../../components/utils";
import { getFieldTypeMeta } from "./fieldTypeMeta";

function ManageFieldsModal({ open, fields, onClose, onEditField }) {
  if (!open) return null;

  return (
    <Modal
      width={780}
      onClose={onClose}
      style={{
        borderRadius: T.radius.sm,
        border: `1px solid ${C.border}`,
        boxShadow: T.shadow.soft,
        background: C.card,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          minHeight: 44,
          padding: `0 ${T.spacing[4]}px`,
          borderBottom: `1px solid ${C.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: T.spacing[3],
        }}
      >
        <Text as="h2" variant="pageTitle" style={{ margin: 0, fontSize: T.font.size.cardTitle, lineHeight: "24px" }}>
          Manage Fields
        </Text>
        <IconButton
          aria-label="Close manage fields"
          onClick={onClose}
          onMouseEnter={(event) => {
            event.currentTarget.style.background = C.surface;
            event.currentTarget.style.color = C.text;
          }}
          onMouseLeave={(event) => {
            event.currentTarget.style.background = "transparent";
            event.currentTarget.style.color = C.muted;
          }}
          style={{
            width: 28,
            height: 28,
            borderRadius: T.radius.circle,
            color: C.muted,
            transition: "background 150ms ease, color 150ms ease",
          }}
        >
          <FiX size={15} />
        </IconButton>
      </div>

      <div style={{ padding: T.spacing[3] }}>
        <div
          style={{
            border: `1px solid ${C.border}`,
            borderRadius: T.radius.sm,
            overflow: "hidden",
            background: C.card,
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              tableLayout: "fixed",
              background: C.card,
            }}
          >
            <colgroup>
              <col style={{ width: 44 }} />
              <col />
              <col style={{ width: "38%" }} />
              <col style={{ width: 58 }} />
            </colgroup>
            <thead>
              <tr>
                <th
                  scope="col"
                  style={{
                    height: 34,
                    padding: `0 0 0 ${T.spacing[3]}px`,
                    borderBottom: `1px solid ${C.border}`,
                    textAlign: "left",
                    background: C.card,
                    boxSizing: "border-box",
                  }}
                />
                <th
                  scope="col"
                  style={{
                    height: 34,
                    padding: `0 ${T.spacing[3]}px`,
                    borderBottom: `1px solid ${C.border}`,
                    textAlign: "left",
                    background: C.card,
                    boxSizing: "border-box",
                  }}
                >
                  <Text variant="mutedLabel">Name</Text>
                </th>
                <th
                  scope="col"
                  style={{
                    height: 34,
                    padding: `0 ${T.spacing[3]}px`,
                    borderBottom: `1px solid ${C.border}`,
                    textAlign: "left",
                    background: C.card,
                    boxSizing: "border-box",
                  }}
                >
                  <Text variant="mutedLabel">Field Type</Text>
                </th>
                <th
                  scope="col"
                  style={{
                    height: 34,
                    padding: `0 ${T.spacing[3]}px`,
                    borderBottom: `1px solid ${C.border}`,
                    textAlign: "center",
                    background: C.card,
                    boxSizing: "border-box",
                  }}
                >
                  <Text variant="mutedLabel">Edit</Text>
                </th>
              </tr>
            </thead>
            <tbody>
              {fields.map((field, index) => {
                const typeMeta = getFieldTypeMeta(field.type);
                const FieldTypeIcon = typeMeta.icon;
                const handleEdit = () => onEditField(field);

                return (
                  <tr
                    key={field.id}
                    onClick={handleEdit}
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        handleEdit();
                      }
                    }}
                    style={{
                      height: 36,
                      cursor: "pointer",
                      transition: "background 150ms ease",
                    }}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.background = C.surface;
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.background = C.card;
                    }}
                  >
                    <td
                      style={{
                        height: 36,
                        padding: `0 0 0 ${T.spacing[3]}px`,
                        borderBottom: index < fields.length - 1 ? `1px solid ${C.borderLt}` : T.border.none,
                        verticalAlign: "middle",
                        boxSizing: "border-box",
                      }}
                    >
                      <input
                        type="checkbox"
                        defaultChecked={false}
                        aria-label={`Select ${field.name}`}
                        onClick={(event) => event.stopPropagation()}
                        style={{ width: 13, height: 13, accentColor: C.accent, cursor: "pointer", display: "block" }}
                      />
                    </td>

                    <td
                      style={{
                        height: 36,
                        padding: `0 ${T.spacing[3]}px`,
                        borderBottom: index < fields.length - 1 ? `1px solid ${C.borderLt}` : T.border.none,
                        verticalAlign: "middle",
                        boxSizing: "border-box",
                      }}
                    >
                      <Text
                        variant="body"
                        style={{
                          display: "block",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {field.name}
                      </Text>
                    </td>

                    <td
                      style={{
                        height: 36,
                        padding: `0 ${T.spacing[3]}px`,
                        borderBottom: index < fields.length - 1 ? `1px solid ${C.borderLt}` : T.border.none,
                        verticalAlign: "middle",
                        boxSizing: "border-box",
                      }}
                    >
                      <span style={{ display: "inline-flex", alignItems: "center", gap: T.spacing[2], minWidth: 0, maxWidth: "100%" }}>
                        <FieldTypeIcon size={14} color={C.muted} style={{ flexShrink: 0 }} />
                        <Text
                          variant="body"
                          style={{
                            display: "block",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {field.type}
                        </Text>
                      </span>
                    </td>

                    <td
                      style={{
                        height: 36,
                        padding: `0 ${T.spacing[3]}px`,
                        borderBottom: index < fields.length - 1 ? `1px solid ${C.borderLt}` : T.border.none,
                        textAlign: "center",
                        verticalAlign: "middle",
                        boxSizing: "border-box",
                      }}
                    >
                      <IconButton
                        aria-label={`Edit ${field.name}`}
                        onClick={(event) => {
                          event.stopPropagation();
                          handleEdit();
                        }}
                        onMouseEnter={(event) => {
                          event.currentTarget.style.background = C.surface;
                          event.currentTarget.style.borderColor = C.border;
                        }}
                        onMouseLeave={(event) => {
                          event.currentTarget.style.color = C.muted;
                          event.currentTarget.style.background = C.card;
                          event.currentTarget.style.borderColor = C.borderLt;
                        }}
                        style={{
                          width: 24,
                          height: 24,
                          borderRadius: T.radius.sm,
                          border: `1px solid ${C.borderLt}`,
                          background: C.card,
                          color: C.muted,
                          transition: "background 150ms ease, border-color 150ms ease, color 150ms ease",
                        }}
                      >
                        <FaEdit size={13} />
                      </IconButton>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Modal>
  );
}

ManageFieldsModal.propTypes = {
  open: PropTypes.bool.isRequired,
  fields: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
  onEditField: PropTypes.func.isRequired,
};

export default ManageFieldsModal;
