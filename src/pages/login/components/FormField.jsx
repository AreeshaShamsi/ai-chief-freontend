import PropTypes from "prop-types";
import { T, Text } from "../../../components/utils";

export function FormField({ label, children, action }) {
  return (
    <label style={{ display: "block" }}>
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: T.spacing[2],
          marginBottom: T.spacing[2] - 2,
        }}
      >
        <Text
          as="span"
          style={{
            color: "rgba(255, 255, 255, 0.57)",
            fontSize: T.font.size.bodySmall,
            fontWeight: T.font.weight.semibold,
            lineHeight: "14px",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
          }}
        >
          {label}
        </Text>
        {action}
      </span>
      {children}
    </label>
  );
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  action: PropTypes.node,
};

export default FormField;
