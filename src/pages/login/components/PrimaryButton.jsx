import PropTypes from "prop-types";
import { FiArrowRight } from "react-icons/fi";
import { AppButton, C, T } from "../../../components/utils";

const primaryGradient = `linear-gradient(135deg, ${C.accent} 0%, ${C.accentStrong} 100%)`;

function LoadingDots() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: T.spacing[2] - 2 }}>
      {[0, 1, 2].map((index) => (
        <span
          key={index}
          style={{
            width: 7,
            height: 7,
            borderRadius: T.radius.circle,
            background: "rgba(255, 255, 255, 0.86)",
            animation: `loginDotBounce 1.2s ease-in-out ${index * 0.18}s infinite`,
          }}
        />
      ))}
    </span>
  );
}

export function PrimaryButton({ loading, onClick, children }) {
  return (
    <AppButton
      type="button"
      className="login-primary"
      disabled={loading}
      onClick={onClick}
      style={{
        width: "100%",
        height: 44,
        padding: "0 16px",
        border: T.border.none,
        borderRadius: T.radius.sm + 1,
        background: primaryGradient,
        color: C.card,
        boxShadow: `0 4px 18px rgba(99, 102, 241, 0.45)`,
        fontSize: T.font.size.cardTitle,
        fontWeight: T.font.weight.bold,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: T.spacing[2],
        cursor: loading ? "wait" : "pointer",
        transition: "filter 160ms ease, box-shadow 160ms ease, transform 160ms ease",
      }}
    >
      {loading ? (
        <LoadingDots />
      ) : (
        <>
          <span>{children || "Sign in"}</span>
          <FiArrowRight size={15} />
        </>
      )}
    </AppButton>
  );
}

PrimaryButton.propTypes = {
  loading: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default PrimaryButton;
