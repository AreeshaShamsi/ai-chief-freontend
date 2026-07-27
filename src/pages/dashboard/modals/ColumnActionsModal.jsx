import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import {
  LuPencil,
  LuType,
  LuCopy,
  LuArrowLeft,
  LuArrowRight,
  LuArrowUpAZ,
  LuArrowDownZA,
  LuTrash2,
} from "react-icons/lu";
import { C, T, Text } from "../../../components/utils";

const dropdownWidth = 200;
const dropdownOffset = 4;
const viewportPadding = 8;
const overlayZIndex = 1000;

export default function ColumnActionsModal({
  isOpen,
  onClose,
  triggerRef,
  columnId,
  columnName,
  onEditField,
  onRenameField,
  onDuplicateField,
  onMoveLeft,
  onMoveRight,
  onSortAsc,
  onSortDesc,
  onDeleteField,
}) {
  const [position, setPosition] = useState({ top: 0, left: 0, maxHeight: "none" });
  const panelRef = useRef(null);

  const updatePosition = () => {
    const rect = triggerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const top = rect.bottom + dropdownOffset;
    const left = rect.left;
    const maxLeft = window.innerWidth - dropdownWidth - viewportPadding;
    const availableHeight = window.innerHeight - top - viewportPadding;

    setPosition({
      top,
      left: Math.max(viewportPadding, Math.min(left, maxLeft)),
      maxHeight: Math.max(0, availableHeight),
    });
  };

  useLayoutEffect(() => {
    if (!isOpen) return;
    updatePosition();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handlePointerDown = (event) => {
      const target = event.target;
      if (triggerRef.current?.contains(target) || panelRef.current?.contains(target)) return;
      onClose();
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
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
  }, [isOpen]);

  if (!isOpen) return null;

  const handleAction = (actionFn) => {
    if (actionFn) actionFn(columnId, columnName);
    onClose();
  };

  const menuItems = [
    { label: "Edit Field", icon: LuPencil, onClick: () => handleAction(onEditField) },
    { label: "Rename Field", icon: LuType, onClick: () => handleAction(onRenameField) },
    { label: "Duplicate Field", icon: LuCopy, onClick: () => handleAction(onDuplicateField) },
    { isDivider: true },
    { label: "Move Left", icon: LuArrowLeft, onClick: () => handleAction(onMoveLeft) },
    { label: "Move Right", icon: LuArrowRight, onClick: () => handleAction(onMoveRight) },
    { isDivider: true },
    { label: "Sort Ascending", icon: LuArrowUpAZ, onClick: () => handleAction(onSortAsc) },
    { label: "Sort Descending", icon: LuArrowDownZA, onClick: () => handleAction(onSortDesc) },
    { isDivider: true },
    { label: "Delete Field", icon: LuTrash2, onClick: () => handleAction(onDeleteField), isDanger: true },
  ];

  return createPortal(
    <div
      ref={panelRef}
      role="menu"
      aria-label="Column actions"
      style={{
        position: "fixed",
        top: position.top,
        left: position.left,
        zIndex: overlayZIndex,
        width: dropdownWidth,
        maxHeight: position.maxHeight,
        overflowY: "auto",
        borderRadius: T.radius.md,
        border: `1px solid ${C.border}`,
        background: C.card,
        boxShadow: T.shadow.soft,
        padding: "4px 0",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "grid", gap: 1 }}>
        {menuItems.map((item, index) => {
          if (item.isDivider) {
            return (
              <div
                key={`divider-${index}`}
                style={{
                  height: 1,
                  background: C.borderLt,
                  margin: "4px 0",
                }}
              />
            );
          }

          const { label, icon: Icon, onClick, isDanger } = item;

          return (
            <button
              key={label}
              type="button"
              role="menuitem"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onClick?.();
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.background = C.surface;
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.background = "transparent";
              }}
              style={{
                width: "100%",
                height: 32,
                border: "none",
                background: "transparent",
                color: isDanger ? C.hot : C.text,
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "0 12px",
                cursor: "pointer",
                fontFamily: T.font.family,
                textAlign: "left",
                boxSizing: "border-box",
              }}
            >
              <Icon
                size={14}
                color={isDanger ? C.hot : C.muted}
                style={{ flexShrink: 0 }}
              />
              <Text variant="label" color={isDanger ? C.hot : C.text} style={{ fontSize: T.font.size.bodySmall }}>
                {label}
              </Text>
            </button>
          );
        })}
      </div>
    </div>,
    document.body
  );
}

ColumnActionsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  triggerRef: PropTypes.shape({ current: PropTypes.any }).isRequired,
  columnId: PropTypes.string,
  columnName: PropTypes.string,
  onEditField: PropTypes.func,
  onRenameField: PropTypes.func,
  onDuplicateField: PropTypes.func,
  onMoveLeft: PropTypes.func,
  onMoveRight: PropTypes.func,
  onSortAsc: PropTypes.func,
  onSortDesc: PropTypes.func,
  onDeleteField: PropTypes.func,
};
