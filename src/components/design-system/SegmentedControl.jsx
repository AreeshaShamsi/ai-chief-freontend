import React from "react";
import PropTypes from "prop-types";
import { C, T } from "../utils";

function SegmentedControl({ options, value, onChange, ariaLabel = "Stage selector" }) {
  const handleKeyDown = (e, index) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (index + 1) % options.length;
      onChange(options[nextIndex].id);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = (index - 1 + options.length) % options.length;
      onChange(options[prevIndex].id);
    }
  };

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        padding: 3,
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: 9999,
        boxSizing: "border-box",
      }}
    >
      {options.map((option, index) => {
        const isActive = value === option.id;

        return (
          <button
            key={option.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(option.id)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            style={{
              height: 32,
              padding: "0 16px",
              borderRadius: 9999,
              border: "none",
              background: isActive ? C.accent : "transparent",
              color: isActive ? C.card : C.muted,
              fontSize: T.font.size.bodySmall,
              fontWeight: isActive ? T.font.weight.bold : T.font.weight.medium,
              fontFamily: T.font.family,
              cursor: "pointer",
              transition: "all 180ms cubic-bezier(0.4, 0, 0.2, 1)",
              outline: "none",
              boxShadow: isActive ? T.shadow.soft : "none",
              whiteSpace: "nowrap",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

SegmentedControl.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string,
};

export default SegmentedControl;
