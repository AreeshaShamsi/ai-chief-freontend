import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import {
  LuFileText,
  LuFileSpreadsheet,
  LuChevronRight,
  LuDownload,
  LuPencil,
  LuCopy,
  LuSlidersHorizontal,
  LuTrash2,
  LuX,
} from "react-icons/lu";
import { C, T, Text } from "../../../components/utils";

const dropdownWidth = 220;
const dropdownOffset = 4;
const viewportPadding = 8;
const overlayZIndex = 1000;
const submenuWidth = 180;
const submenuGap = 10;

export default function DealDropdown({
  isOpen,
  onClose,
  triggerRef,
  onImportData,
  onRenameTab,
  onDuplicateTab,
  onManageTab,
  onClearData,
  onDeleteField,
}) {
  const [position, setPosition] = useState({ top: 0, left: 0, maxHeight: "none" });
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const panelRef = useRef(null);
  const submenuRef = useRef(null);
  const closeTimeoutRef = useRef(null);

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
    if (!isOpen) {
      setIsSubmenuOpen(false);
      return undefined;
    }

    const handlePointerDown = (event) => {
      const target = event.target;
      if (
        triggerRef.current?.contains(target) ||
        panelRef.current?.contains(target) ||
        submenuRef.current?.contains(target)
      ) {
        return;
      }
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
    if (actionFn) actionFn();
    onClose();
  };

  const handleImportSelect = (type) => {
    if (onImportData) {
      onImportData(type);
    }
    setIsSubmenuOpen(false);
    onClose();
  };

  const handleImportMouseEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setIsSubmenuOpen(true);
  };

  const handleImportMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsSubmenuOpen(false);
    }, 150);
  };

  const handleSubmenuMouseEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setIsSubmenuOpen(true);
  };

  const handleSubmenuMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsSubmenuOpen(false);
    }, 150);
  };

  let submenuLeft = position.left + dropdownWidth + submenuGap;
  if (submenuLeft + submenuWidth > window.innerWidth - viewportPadding) {
    submenuLeft = position.left - submenuWidth - submenuGap;
  }
  const submenuTop = position.top;

  const menuItems = [
    {
      label: "Import Data",
      icon: LuDownload,
      hasArrow: true,
      onMouseEnter: handleImportMouseEnter,
      onMouseLeave: handleImportMouseLeave,
      onClick: (e) => {
        e.stopPropagation();
        setIsSubmenuOpen((prev) => !prev);
      },
    },
    { isDivider: true },
    { label: "Rename Tab", icon: LuPencil, onClick: () => handleAction(onRenameTab) },
    { label: "Duplicate With All Info", icon: LuCopy, onClick: () => handleAction(onDuplicateTab) },
    { label: "Manage Tab", icon: LuSlidersHorizontal, onClick: () => handleAction(onManageTab) },
    { isDivider: true },
    { label: "Clear Data", icon: LuX, onClick: () => handleAction(onClearData) },
    { label: "Delete Field", icon: LuTrash2, onClick: () => handleAction(onDeleteField), isDanger: true },
  ];

  return createPortal(
    <>
      <div
        ref={panelRef}
        role="menu"
        aria-label="Workspace actions"
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
          transition: "opacity 180ms ease, transform 180ms ease",
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

            const { label, icon: Icon, hasArrow, onClick, onMouseEnter, onMouseLeave, isDanger } = item;

            return (
              <button
                key={label}
                type="button"
                role="menuitem"
                onClick={onClick}
                onMouseEnter={(event) => {
                  event.currentTarget.style.background = C.surface;
                  if (onMouseEnter) onMouseEnter(event);
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.background = "transparent";
                  if (onMouseLeave) onMouseLeave(event);
                }}
                style={{
                  width: "100%",
                  height: 32,
                  border: "none",
                  background: isSubmenuOpen && label === "Import Data" ? C.surface : "transparent",
                  color: isDanger ? C.hot : C.text,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 12px",
                  cursor: "pointer",
                  fontFamily: T.font.family,
                  textAlign: "left",
                  boxSizing: "border-box",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Icon
                    size={14}
                    color={isDanger ? C.hot : C.muted}
                    style={{ flexShrink: 0 }}
                  />
                  <Text variant="label" color={isDanger ? C.hot : C.text} style={{ fontSize: T.font.size.bodySmall }}>
                    {label}
                  </Text>
                </div>
                {hasArrow && (
                  <LuChevronRight size={14} color={C.muted} style={{ flexShrink: 0 }} />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {isSubmenuOpen && (
        <div
          ref={submenuRef}
          role="menu"
          aria-label="Import options"
          onMouseEnter={handleSubmenuMouseEnter}
          onMouseLeave={handleSubmenuMouseLeave}
          style={{
            position: "fixed",
            top: submenuTop,
            left: submenuLeft,
            zIndex: overlayZIndex + 1,
            width: submenuWidth,
            borderRadius: T.radius.md,
            border: `1px solid ${C.border}`,
            background: C.card,
            boxShadow: T.shadow.soft,
            padding: "4px 0",
            boxSizing: "border-box",
          }}
        >
          <div style={{ display: "grid", gap: 1 }}>
            <button
              type="button"
              role="menuitem"
              onClick={() => handleImportSelect("csv")}
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
                color: C.text,
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
              <LuFileText size={14} color={C.muted} style={{ flexShrink: 0 }} />
              <Text variant="label" color={C.text} style={{ fontSize: T.font.size.bodySmall }}>
                CSV File
              </Text>
            </button>

            <button
              type="button"
              role="menuitem"
              onClick={() => handleImportSelect("excel")}
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
                color: C.text,
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
              <LuFileSpreadsheet size={14} color={C.muted} style={{ flexShrink: 0 }} />
              <Text variant="label" color={C.text} style={{ fontSize: T.font.size.bodySmall }}>
                Microsoft Excel
              </Text>
            </button>
          </div>
        </div>
      )}
    </>,
    document.body
  );
}

DealDropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  triggerRef: PropTypes.shape({ current: PropTypes.any }).isRequired,
  onImportData: PropTypes.func,
  onRenameTab: PropTypes.func,
  onDuplicateTab: PropTypes.func,
  onManageTab: PropTypes.func,
  onClearData: PropTypes.func,
  onDeleteField: PropTypes.func,
};
