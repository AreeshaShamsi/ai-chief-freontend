import PropTypes from "prop-types";
import { FiPhoneCall } from "react-icons/fi";
import { C, T, Text } from "../../../components/utils";

const logoGradient = `linear-gradient(135deg, ${C.accent} 0%, ${C.accentStrong} 100%)`;

export function LogoSection({ title = "VoiceIQ", subtitle = "AI Calling Platform - Real Estate" }) {
  return (
    <div style={{ textAlign: "center", marginBottom: T.spacing[6] + T.spacing[2] }}>
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: T.radius.xl,
          background: logoGradient,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          color: C.card,
          marginBottom: T.spacing[4] - 2,
          boxShadow: `0 8px 24px rgba(99, 102, 241, 0.4)`,
        }}
      >
        <FiPhoneCall size={24} />
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
