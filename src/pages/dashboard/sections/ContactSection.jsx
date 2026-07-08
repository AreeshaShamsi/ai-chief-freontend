import React, { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { LuSquarePen } from "react-icons/lu";
import EditColumnsPopover from "../../../components/design-system/EditColumnsPopover";
import { AppButton, AppCard, AppPill, C, T } from "../../../components/utils";

const contacts = [
  { name: "rakesh paul", email: "rakeshpaul234@gmail.com", phone: "0989876543", type: "seller", agent: "Vikash yadav", budget: "1.2 cr" },
  { name: "rakesh paul", email: "rakeshpaul234@gmail.com", phone: "0989876543", type: "investor", agent: "Vikash yadav", budget: "1.2 cr" },
  { name: "rakesh paul", email: "rakeshpaul234@gmail.com", phone: "0989876543", type: "buyer", agent: "Vikash yadav", budget: "1.2 cr" },
  { name: "rakesh paul", email: "rakeshpaul234@gmail.com", phone: "0989876543", type: "seller", agent: "Vikash yadav", budget: "1.2 cr" },
  { name: "rakesh paul", email: "rakeshpaul234@gmail.com", phone: "0989876543", type: "investor", agent: "Vikash yadav", budget: "1.2 cr" },
  { name: "rakesh paul", email: "rakeshpaul234@gmail.com", phone: "0989876543", type: "buyer", agent: "Vikash yadav", budget: "1.2 cr" },
  { name: "rakesh paul", email: "rakeshpaul234@gmail.com", phone: "0989876543", type: "seller", agent: "Vikash yadav", budget: "1.2 cr" },
  { name: "rakesh paul", email: "rakeshpaul234@gmail.com", phone: "0989876543", type: "investor", agent: "Vikash yadav", budget: "1.2 cr" },
  { name: "rakesh paul", email: "rakeshpaul234@gmail.com", phone: "0989876543", type: "buyer", agent: "Vikash yadav", budget: "1.2 cr" },
];

const initialColumns = [
  { id: "name", label: "contact", tableLabel: "contact name", type: "Text" },
  { id: "email", label: "email", type: "Text" },
  { id: "phone", label: "phone number", type: "Text" },
  { id: "type", label: "contact type", type: "Text" },
  { id: "agent", label: "assigned agent", type: "Text" },
  { id: "budget", label: "budget", type: "Text" },
];

function ContactTypeBadge({ type }) {
  const variants = {
    seller: {
      background: C.hotBg,
      color: C.hot,
      border: C.hotBdr,
    },
    investor: {
      background: C.warmBg,
      color: C.warm,
      border: C.warmBdr,
    },
    buyer: {
      background: C.greenSoft,
      color: C.greenText,
      border: C.greenBdr,
    },
  };
  const tone = variants[type] || variants.buyer;

  return (
    <AppPill
      size="xs"
      style={{
        height: 22,
        padding: "0 11px",
        background: tone.background,
        color: tone.color,
        border: `1px solid ${tone.border}`,
        fontSize: T.font.size.caption,
        fontWeight: T.font.weight.semibold,
        textTransform: "lowercase",
      }}
    >
      {type}
    </AppPill>
  );
}

function ContactSection() {
  const [columns, setColumns] = useState(initialColumns);
  const [isEditColumnsOpen, setIsEditColumnsOpen] = useState(false);
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

  const handleDeleteColumn = (columnId) => {
    setColumns((current) => (current.length > 1 ? current.filter((column) => column.id !== columnId) : current));
  };

  const handleAddColumn = ({ name, type }) => {
    const idBase = name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "column";
    const existingIds = new Set(columns.map((column) => column.id));
    let id = idBase;
    let index = 1;
    while (existingIds.has(id)) {
      id = `${idBase}-${index}`;
      index += 1;
    }
    setColumns((current) => [...current, { id, label: name, type }]);
  };

  const renderCell = (contact, column) => {
    if (column.id === "type") return <ContactTypeBadge type={contact.type} />;
    return contact[column.id] || "";
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
          }}
        >
          Contact
        </h1>
        <div style={{ marginTop: 4, color: C.muted, fontSize: T.font.size.caption, fontWeight: T.font.weight.medium }}>
          view all of your contact
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
            aria-label="Search contacts"
            placeholder="search any number"
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
            columns={columns}
            onClose={() => setIsEditColumnsOpen(false)}
            onReorder={setColumns}
            onDelete={handleDeleteColumn}
            onAdd={handleAddColumn}
          />
        </div>
      </div>

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
              minWidth: 900,
              borderCollapse: "separate",
              borderSpacing: 0,
            }}
          >
            <thead>
              <tr style={{ background: C.accentLt }}>
                {columns.map((column) => (
                  <th
                    key={column.id}
                    scope="col"
                    style={{
                      padding: "12px 16px",
                      color: C.muted,
                      fontSize: T.font.size.xs,
                      fontWeight: T.font.weight.bold,
                      textAlign: "left",
                      borderBottom: `1px solid ${C.border}`,
                      textTransform: "lowercase",
                    }}
                  >
                    {column.tableLabel || column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={`${contact.type}-${index}`}>
                  {columns.map((column) => (
                    <td
                      key={`${contact.type}-${index}-${column.id}`}
                      style={{
                        padding: column.id === "type" ? "12px 16px" : "13px 16px",
                        borderBottom: `1px solid ${C.borderLt}`,
                        fontSize: T.font.size.bodySmall,
                        fontWeight: column.id === "name" ? T.font.weight.semibold : T.font.weight.medium,
                        color: C.text,
                        textTransform: column.id === "name" || column.id === "budget" ? "lowercase" : "none",
                      }}
                    >
                      {renderCell(contact, column)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AppCard>
    </div>
  );
}

export default ContactSection;
