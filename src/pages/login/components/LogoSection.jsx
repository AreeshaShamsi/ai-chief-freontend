import PropTypes from "prop-types";
import { FiPhoneCall } from "react-icons/fi";
import { C, T, Text } from "../../../components/utils";

const logoGradient = `linear-gradient(135deg, ${C.accent} 0%, ${C.accentStrong} 100%)`;

export function LogoSection({ title = "AI Chief", subtitle = "AI Calling Platform - Real Estate" }) {
  return (
    <div style={{ textAlign: "center", marginBottom: T.spacing[6] + T.spacing[2] }}>
      <div
        style={{
          width: 52,
          height: 52,
          background: "#fff",
          borderRadius: T.radius.xl,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: T.spacing[4] - 2,
          overflow: "hidden",
          padding: 4,
          boxShadow: `0 8px 24px rgba(255, 255, 255, 0.1)`,
        }}
      >
        <img src="/ai-removebg-preview.png" alt="AI Chief Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </div>

      <Text
        as="div"
        style={{
          color: "#F8FAFC",
          fontSize: T.font.size.pageTitle + 2,
          fontWeight: T.font.weight.extraBold,
          lineHeight: "28px",
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </Text>
      <Text
        as="div"
        style={{
          marginTop: T.spacing[1],
          color: "rgba(255, 255, 255, 0.46)",
          fontSize: T.font.size.sm + 1,
          fontWeight: T.font.weight.medium,
          lineHeight: "18px",
        }}
      >
        {subtitle}
      </Text>
    </div>
  );
}

LogoSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default LogoSection;
