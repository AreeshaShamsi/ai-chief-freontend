import PropTypes from "prop-types";
import { FiAlertTriangle } from "react-icons/fi";
import { C, T, Text, TextField } from "../../../components/utils";
import FormField from "./FormField";
import PasswordField from "./PasswordField";
import PrimaryButton from "./PrimaryButton";

const inputBorder = "rgba(255, 255, 255, 0.12)";
const inputBackground = "rgba(255, 255, 255, 0.07)";
const darkText = "#F8FAFC";

function ErrorMessage({ message }) {
  if (!message) return null;

  return (
    <div
      role="alert"
      style={{
        minHeight: 36,
        marginBottom: T.spacing[4],
        padding: `0 ${T.spacing[3]}px`,
        borderRadius: T.radius.sm,
        border: `1px solid rgba(239, 68, 68, 0.3)`,
        background: "rgba(239, 68, 68, 0.12)",
        color: "#FCA5A5",
        display: "flex",
        alignItems: "center",
        gap: T.spacing[2],
        fontSize: T.font.size.sm,
        fontWeight: T.font.weight.medium,
        boxSizing: "border-box",
      }}
    >
      <FiAlertTriangle size={14} />
      <span>{message}</span>
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export function LoginForm({
  username,
  password,
  showPassword,
  loading,
  error,
  onUsernameChange,
  onPasswordChange,
  onTogglePassword,
  onSubmit,
  onBypass,
  onClearError,
}) {
  return (
    <div>
      <div style={{ marginBottom: T.spacing[6], textAlign: "center" }}>
        <Text
          as="h1"
          style={{
            margin: 0,
            color: "#F1F5F9",
            fontSize: T.font.size.cardTitle + 3,
            fontWeight: T.font.weight.bold,
            lineHeight: "22px",
          }}
        >
          Welcome back
        </Text>
        <Text
          as="div"
          style={{
            marginTop: T.spacing[1],
            color: "rgba(255, 255, 255, 0.42)",
            fontSize: T.font.size.sm,
            fontWeight: T.font.weight.medium,
            lineHeight: "17px",
          }}
        >
          Sign in to your account to continue
        </Text>
      </div>

      <ErrorMessage message={error} />

      <div style={{ display: "grid", gap: T.spacing[4] - 2 }}>
        <FormField label="Username">
          <TextField
            className="login-field"
            value={username}
            onChange={(event) => {
              onUsernameChange(event.target.value);
              if (onClearError) onClearError();
            }}
            placeholder="Username"
            type="text"
            autoComplete="username"
            onKeyDown={(event) => {
              if (event.key === "Enter" && onSubmit) onSubmit();
            }}
            style={{
              height: 42,
              padding: "0 14px",
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
        </FormField>

        <PasswordField
          value={password}
          showPassword={showPassword}
          onChange={onPasswordChange}
          onToggleVisibility={onTogglePassword}
          onSubmit={onSubmit}
          onClearError={onClearError}
        />
      </div>

      <div style={{ marginTop: T.spacing[6] - 2, display: "flex", flexDirection: "column", gap: 10 }}>
        <PrimaryButton loading={loading} onClick={onSubmit}>
          Sign in
        </PrimaryButton>

        <button
          type="button"
          onClick={onBypass}
          style={{
            width: "100%",
            height: 40,
            borderRadius: T.radius.sm + 1,
            background: "rgba(99, 102, 241, 0.15)",
            border: `1px solid rgba(129, 140, 248, 0.35)`,
            color: "#C7D2FE",
            fontSize: T.font.size.sm,
            fontWeight: T.font.weight.semibold,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            transition: "all 150ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(99, 102, 241, 0.28)";
            e.currentTarget.style.borderColor = "rgba(165, 180, 252, 0.6)";
            e.currentTarget.style.color = "#FFFFFF";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(99, 102, 241, 0.15)";
            e.currentTarget.style.borderColor = "rgba(129, 140, 248, 0.35)";
            e.currentTarget.style.color = "#C7D2FE";
          }}
        >
          <span>⚡ Bypass Login (Instant Access)</span>
        </button>
      </div>
    </div>
  );
}

LoginForm.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  showPassword: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  onUsernameChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onTogglePassword: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onBypass: PropTypes.func,
  onClearError: PropTypes.func,
};

export default LoginForm;
