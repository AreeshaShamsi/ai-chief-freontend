import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import {
  FiAlignLeft,
  FiCalendar,
  FiCheckCircle,
  FiCheckSquare,
  FiDollarSign,
  FiHash,
  FiLink,
  FiList,
  FiMail,
  FiPaperclip,
  FiPhone,
  FiSearch,
  FiStar,
  FiType,
  FiUser,
} from "react-icons/fi";
import { C, T, Text, TextField } from "../../../components/utils";

const fieldTypes = [
  { label: "Single Line Text", icon: FiType },
  { label: "Long Text", icon: FiAlignLeft },
  { label: "Attachment", icon: FiPaperclip },
  { label: "Checkbox", icon: FiCheckSquare },
  { label: "Multiple Select", icon: FiList },
  { label: "Single Select", icon: FiCheckCircle },
  { label: "User / Assigned Agent", icon: FiUser },
  { label: "Date", icon: FiCalendar },
  { label: "Email", icon: FiMail },
  { label: "Phone Number", icon: FiPhone },
  { label: "URL", icon: FiLink },
  { label: "Number", icon: FiHash },
  { label: "Currency", icon: FiDollarSign },
  { label: "Rating", icon: FiStar },
];

const dropdownWidth = Math.round(T.layout.modalWidth * 0.67);
const dropdownOffset = T.spacing[2];
const viewportPadding = T.spacing[2];
const overlayZIndex = 1000;

function AddColumnModal({ children, onSelectField }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [position, setPosition] = useState({ top: 0, left: 0, maxHeight: "none" });
  const triggerRef = useRef(null);
  const panelRef = useRef(null);

  const filteredTypes = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return fieldTypes;
    return fieldTypes.filter((type) => type.label.toLowerCase().includes(query));
  }, [search]);

  const updatePosition = () => {
    const rect = triggerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const top = rect.bottom + dropdownOffset;
    const preferredLeft = rect.right - dropdownWidth;
    const maxLeft = window.innerWidth - dropdownWidth - viewportPadding;
    const availableHeight = window.innerHeight - top - viewportPadding;

    setPosition({
      top,
      left: Math.max(viewportPadding, Math.min(preferredLeft, maxLeft)),
      maxHeight: Math.max(0, availableHeight),
    });
  };

  useLayoutEffect(() => {
    if (!open) return;
    updatePosition();
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;

    const handlePointerDown = (event) => {
      const target = event.target;
      if (triggerRef.current?.contains(target) || panelRef.current?.contains(target)) return;
      setOpen(false);
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const handleViewportChange = () => updatePosition();

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleViewportChange);
    window.addEventListener("scroll", handleViewportChange, true);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleViewportChange);
      window.removeEventListener("scroll", handleViewportChange, true);
    };
  }, [open]);

  const handleSelect = (type) => {
    onSelectField(type);
    setOpen(false);
    setSearch("");
  };

  const trigger = children({
    isOpen: open,
    ref: triggerRef,
    onClick: (event) => {
      event.preventDefault();
      event.stopPropagation();
      setOpen((current) => !current);
    },
    "aria-expanded": open,
    "aria-haspopup": "menu",
  });

  return (
    <>
      {trigger}
      {open
        ? createPortal(
            <div
              ref={panelRef}
              role="menu"
              aria-label="Add column field types"
              style={{
                position: "fixed",
                top: position.top,
                left: position.left,
                zIndex: overlayZIndex,
                width: dropdownWidth,
                maxHeight: position.maxHeight,
                overflowY: "auto",
                borderRadius: T.radius.xl,
                border: `1px solid ${C.border}`,
                background: C.card,
                boxShadow: T.shadow.soft,
                padding: T.spacing[3],
                boxSizing: "border-box",
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(-4px)",
                transition: "opacity 180ms ease, transform 180ms ease",
              }}
            >
              <div style={{ position: "relative" }}>
                <FiSearch
                  size={T.font.size.cardTitle}
                  style={{
                    position: "absolute",
                    left: T.spacing[3],
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: C.muted,
                    pointerEvents: "none",
                  }}
                />
                <TextField
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Find A Field Type"
                  autoFocus
                  style={{
                    height: T.spacing[5] * 2,
                    borderRadius: T.radius.lg,
                    background: C.surface,
                    paddingLeft: T.spacing[6] + T.spacing[2],
                    fontSize: T.font.size.bodySmall,
                  }}
                />
              </div>

              <div
                style={{
                  height: 1,
                  background: C.borderLt,
                  margin: `${T.spacing[3]}px 0 ${T.spacing[2]}px`,
                }}
              />

              <div style={{ display: "grid", gap: T.spacing[1] }}>
                {filteredTypes.map(({ label, icon: Icon }) => (
                  <button
                    key={label}
                    type="button"
                    role="menuitem"
                    onClick={() => handleSelect(label)}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.background = C.surface;
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.background = C.card;
                    }}
                    style={{
                      width: "100%",
                      minHeight: T.spacing[5] * 2,
                      border: T.border.none,
                      borderRadius: T.radius.md,
                      background: C.card,
                      color: C.text,
                      display: "flex",
                      alignItems: "center",
                      gap: T.spacing[3],
                      padding: `0 ${T.spacing[3]}px`,
                      cursor: "pointer",
                      fontFamily: T.font.family,
                      textAlign: "left",
                      boxSizing: "border-box",
                    }}
                  >
                    <Icon size={T.font.size.sectionTitle} color={C.muted} style={{ flexShrink: 0 }} />
                    <Text variant="label" color={C.text}>
                      {label}
                    </Text>
                  </button>
                ))}
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}

AddColumnModal.propTypes = {
  children: PropTypes.func.isRequired,
  onSelectField: PropTypes.func,
};

AddColumnModal.defaultProps = {
  onSelectField: () => {},
};

export default AddColumnModal;
