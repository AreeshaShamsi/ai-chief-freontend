import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { FiEdit3, FiFileText, FiGrid } from "react-icons/fi";
import { C, T, Text } from "../../../components/utils";

const actionBaseStyle = {
  width: "100%",
  height: 34,
  border: T.border.none,
  borderRadius: T.radius.sm,
  background: "transparent",
  color: C.text,
  display: "flex",
  alignItems: "center",
  gap: 10,
  padding: "0 8px",
  textAlign: "left",
  cursor: "pointer",
};

const popupWidth = 264;
const preferredOffsetLeft = 56;
const viewportGutter = 12;

function MenuAction({ icon: Icon, label, ariaLabel, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      role="menuitem"
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...actionBaseStyle,
        background: hovered ? C.surface : "transparent",
      }}
    >
      <Icon size={15} color={C.muted} />
      <Text variant="label">{label}</Text>
    </button>
  );
}

MenuAction.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

function CreateDealSourceModal({
  isOpen,
  onClose,
  onStartFromScratch,
  onCsvImport,
  onExcelImport,
  triggerRef,
}) {
  const popupRef = useRef(null);
  const [offsetLeft, setOffsetLeft] = useState(preferredOffsetLeft);

  useEffect(() => {
    if (!isOpen) return undefined;

    const updatePosition = () => {
      const trigger = triggerRef?.current;
      if (!trigger) return;

      const containerRect = trigger.parentElement?.getBoundingClientRect();
      if (!containerRect) return;

      const preferredRight = containerRect.left + preferredOffsetLeft + popupWidth;
      const maxRight = window.innerWidth - viewportGutter;
      const overflow = preferredRight - maxRight;
      setOffsetLeft(Math.max(0, preferredOffsetLeft - Math.max(0, overflow)));
    };

    updatePosition();

    const handlePointerDown = (event) => {
      if (popupRef.current?.contains(event.target)) return;
      if (triggerRef?.current?.contains(event.target)) return;
      onClose();
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("resize", updatePosition);
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("resize", updatePosition);
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  const runAction = (handler) => {
    handler();
    onClose();
  };

  return (
    <div
      ref={popupRef}
      role="menu"
      aria-label="Create deal source"
      style={{
        position: "absolute",
        top: "calc(100% + 8px)",
        left: offsetLeft,
        zIndex: 80,
        width: popupWidth,
        borderRadius: T.radius.md,
        border: `1px solid ${C.border}`,
        background: C.card,
        boxShadow: T.shadow.soft,
        padding: 8,
        boxSizing: "border-box",
      }}
    >
      <Text as="div" variant="mutedLabel" style={{ padding: "4px 8px 6px" }}>
        Add A Blank Table
      </Text>
      <MenuAction
        icon={FiEdit3}
        label="Start From Scratch"
        ariaLabel="Start from scratch"
        onClick={() => runAction(onStartFromScratch)}
      />
      <div style={{ height: 1, background: C.borderLt, margin: "8px 0" }} />
      <Text as="div" variant="mutedLabel" style={{ padding: "2px 8px 6px" }}>
        Add From Other Sources
      </Text>
      <MenuAction icon={FiFileText} label="CSV File" ariaLabel="Import CSV file" onClick={() => runAction(onCsvImport)} />
      <MenuAction
        icon={FiGrid}
        label="Microsoft Excel"
        ariaLabel="Import Microsoft Excel file"
        onClick={() => runAction(onExcelImport)}
      />
    </div>
  );
}

CreateDealSourceModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onStartFromScratch: PropTypes.func.isRequired,
  onCsvImport: PropTypes.func.isRequired,
  onExcelImport: PropTypes.func.isRequired,
  triggerRef: PropTypes.shape({ current: PropTypes.object }),
};

export default CreateDealSourceModal;
