import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../config/main";
import { C, T, Text } from "../../components/utils";
import LoginCard from "./components/LoginCard";
import LogoSection from "./components/LogoSection";
import LoginForm from "./components/LoginForm";

const authGradient = `linear-gradient(135deg, ${T.colors.sidebar} 0%, ${T.colors.sidebarActive} 54%, #0F2042 100%)`;
const faintDarkText = "rgba(255, 255, 255, 0.27)";

function AuthStyles() {
  return (
    <style>
      {`
        @keyframes loginDotBounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
        }

        @keyframes loginFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .login-field:focus {
          border-color: ${C.accent} !important;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15) !important;
        }

        .login-primary:hover:not(:disabled) {
          filter: brightness(0.98);
          box-shadow: 0 8px 24px rgba(99, 102, 241, 0.42);
          transform: translateY(-1px);
        }

        .login-link:hover {
          color: ${C.accentTrack} !important;
        }
      `}
    </style>
  );
}

export function LoginPage() {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handle = async () => {
    if (!username.trim() || !pass.trim()) {
      setErr("Please enter both username and password.");
      return;
    }

    setErr("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/user/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_name: username,
          password: pass,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("first_name", data.data.first_name);
      localStorage.setItem("user_name", data.data.user_name);
      localStorage.setItem("company_id", data.data.company_id);
      localStorage.setItem("company_name", data.data.company_name);

      localStorage.setItem("user_id", data.data.id);
      localStorage.setItem("role", data.data.role);
      localStorage.setItem("access", data.data.access);

      navigate("/dashboard");
    } catch (error) {
      setErr(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100vw",
        padding: T.spacing[4],
        background: authGradient,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: T.font.family,
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <AuthStyles />
      <LoginCard>
        <LogoSection />
        <LoginForm
          username={username}
          password={pass}
          showPassword={showPass}
          loading={loading}
          error={err}
          onUsernameChange={setUsername}
          onPasswordChange={setPass}
          onTogglePassword={() => setShowPass((value) => !value)}
          onSubmit={handle}
          onClearError={() => setErr("")}
        />
        <Text
          as="div"
          style={{
            marginTop: T.spacing[6] + 2,
            color: faintDarkText,
            textAlign: "center",
            fontSize: T.font.size.bodySmall,
            fontWeight: T.font.weight.medium,
            lineHeight: "16px",
          }}
        >
          Don&apos;t have an account?{" "}
          <button
            type="button"
            className="login-link"
            style={{
              border: T.border.none,
              background: "transparent",
              color: C.accentTrack,
              padding: 0,
              fontSize: T.font.size.bodySmall,
              fontWeight: T.font.weight.semibold,
              cursor: "pointer",
              transition: "color 150ms ease",
            }}
          >
            Contact sales
          </button>
        </Text>
      </LoginCard>
    </main>
  );
}

export default LoginPage;
