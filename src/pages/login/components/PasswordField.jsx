import PropTypes from "prop-types";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { C, T, TextField, IconButton } from "../../../components/utils";
import FormField from "./FormField";

const inputBorder = "rgba(255, 255, 255, 0.12)";
const inputBackground = "rgba(255, 255, 255, 0.07)";
const darkText = "#F8FAFC";

export function PasswordField({ value, showPassword, onChange, onToggleVisibility, onSubmit, onClearError }) {
  return (
    <FormField
      label="Password"
      action={
        <button
          type="button"
          className="login-link"
          style={{
            border: T.border.none,
            background: "transparent",
            color: C.accentTrack,
            padding: 0,
            fontSize: T.font.size.bodySmall,
            fontWeight: T.font.weight.medium,
            lineHeight: "14px",
            cursor: "pointer",
            transition: "color 150ms ease",
          }}
        >
          Forgot password?
        </button>
      }
    >
      <div style={{ position: "relative" }}>
        <TextField
          className="login-field"
          value={value}
          onChange={(event) => {
            onChange(event.target.value);
            if (onClearError) onClearError();
          }}
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          onKeyDown={(event) => {
            if (event.key === "Enter" && onSubmit) onSubmit();
          }}
          style={{
            height: 42,
            padding: "0 42px 0 14px",
            background: inputBackground,
            border: `1px solid ${inputBorder}`,
            borderRadius: T.radius.sm + 1,
            color: darkText,
            caretColor: C.accent,
            fontSize: T.font.size.sm + 1,
            fontWeight: T.font.weight.medium,
            transition: "border-color 160ms ease, box-shadow 160ms ease, background 160ms ease",
          }}
        />
        <IconButton
          aria-label={showPassword ? "Hide password" : "Show password"}
          onClick={onToggleVisibility}
          style={{
            position: "absolute",
            right: T.spacing[3],
            top: "50%",
            transform: "translateY(-50%)",
            width: 20,
            height: 20,
            color: "rgba(255, 255, 255, 0.4)",
            cursor: "pointer",
            background: "transparent",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {showPassword ? <FiEyeOff size={15} /> : <FiEye size={15} />}
        </IconButton>
      </div>
    </FormField>
  );
}

PasswordField.propTypes = {
  value: PropTypes.string.isRequired,
  showPassword: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onToggleVisibility: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClearError: PropTypes.func,
};

export default PasswordField;
