import PropTypes from "prop-types";
import { T } from "../../../components/utils";

const cardBorder = "rgba(255, 255, 255, 0.1)";

export function LoginCard({ children }) {
  return (
    <section
      style={{
        width: "100%",
        maxWidth: T.layout.modalWidth,
        padding: "38px 36px",
        borderRadius: 20,
        border: `1px solid ${cardBorder}`,
        background: "rgba(255, 255, 255, 0.04)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: "0 24px 60px rgba(0, 0, 0, 0.4)",
        animation: "loginFadeUp 0.5s ease-out forwards",
        boxSizing: "border-box",
      }}
    >
      {children}
    </section>
  );
}

LoginCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginCard;
