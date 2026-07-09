import React from "react";
import { FiLink, FiMoreVertical, FiSearch, FiSettings, FiXCircle } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaWhatsapp } from "react-icons/fa";
import {
  SiGooglemaps,
  SiMeta,
} from "react-icons/si";
import { AppCard, C, T } from "../../../components/utils";
import acres99Logo from "../../../assets/logos/99acres.webp";
import adobeLogo from "../../../assets/logos/adobe.webp";
import facebookLogo from "../../../assets/logos/facebook.avif";
import googleAdsLogo from "../../../assets/logos/google-ads.png";
import googleCalendarLogo from "../../../assets/logos/google-calender.png";
import slackLogo from "../../../assets/logos/slack.jpg";
import stripeLogo from "../../../assets/logos/stripe.jpg";

const integrations = [
  {
    title: "Google",
    text: "Connect your Google account to access features such as Drive, Sheets, Gmail, Analytics, and AdWords.",
    action: "Connect",
    icon: FcGoogle,
    iconColor: null,
    iconBg: "transparent",
    iconSize: 20,
  },
  {
    title: "Google Calendar",
    text: "Google Calendar setup has moved! Connect it from My Profile or Calendar Settings > Connections to start syncing your events.",
    action: "Manage",
    logoSrc: googleCalendarLogo,
    iconBg: "transparent",
    logoWidth: 22,
  },
  {
    title: "Facebook",
    text: "Auto-sync ad leads, manage DMs, and handle reviews and comments across all your Facebook Pages and Instagram.",
    action: "Disconnect",
    logoSrc: facebookLogo,
    iconBg: "transparent",
    logoWidth: 22,
  },
  {
    title: "99acres",
    text: "Auto-sync ad leads, manage DMs, and handle reviews and comments across all your Facebook Pages and Instagram.",
    action: "Disconnect",
    logoSrc: acres99Logo,
    iconBg: "transparent",
    logoWidth: 28,
    logoHeight: 20,
  },
  {
    title: "Whatsapp",
    text: "Integrate WhatsApp to connect with over 2 billion customers on their favorite messaging app, and accelerate your business growth.",
    action: "Connect",
    icon: FaWhatsapp,
    iconColor: "#16A34A",
    iconBg: "transparent",
    iconSize: 20,
  },
  {
    title: "Slack",
    text: "Integrate WhatsApp to connect with over 2 billion customers on their favorite messaging app, and accelerate your business growth.",
    action: "Connect",
    logoSrc: slackLogo,
    iconBg: "transparent",
    logoWidth: 22,
  },
  {
    title: "Google maps",
    text: "Integrate WhatsApp to connect with over 2 billion customers on their favorite messaging app, and accelerate your business growth.",
    action: "Connect",
    icon: SiGooglemaps,
    iconColor: "#34A853",
    iconBg: "transparent",
    iconSize: 20,
  },
  {
    title: "Adobe",
    text: "Integrate WhatsApp to connect with over 2 billion customers on their favorite messaging app, and accelerate your business growth.",
    action: "Connect",
    logoSrc: adobeLogo,
    iconBg: "transparent",
    logoWidth: 22,
  },
  {
    title: "Payments and Checkout",
    text: "Integrate WhatsApp to connect with over 2 billion customers on their favorite messaging app, and accelerate your business growth.",
    action: "Connect",
    logoSrc: stripeLogo,
    iconBg: "transparent",
    logoWidth: 24,
    logoHeight: 18,
  },
  {
    title: "Google ads",
    text: "Google Calendar setup has moved! Connect it from My Profile or Calendar Settings > Connections to start syncing your events.",
    action: "Manage",
    logoSrc: googleAdsLogo,
    iconBg: "transparent",
    logoWidth: 22,
  },
  {
    title: "meta",
    text: "Google Calendar setup has moved! Connect it from My Profile or Calendar Settings > Connections to start syncing your events.",
    action: "Manage",
    icon: SiMeta,
    iconColor: "#2563EB",
    iconBg: "transparent",
    iconSize: 21,
  },
];

const actionStyles = {
  Connect: {
    background: C.accentLt,
    color: C.accent,
    border: C.accentTrack,
    icon: FiLink,
  },
  Manage: {
    background: C.greenSoft,
    color: C.greenText,
    border: C.greenBdr,
    icon: FiSettings,
  },
  Disconnect: {
    background: C.hotBg,
    color: C.hot,
    border: C.hotBdr,
    icon: FiXCircle,
  },
};

function IntegrationActionButton({ action }) {
  const tone = actionStyles[action] || actionStyles.Connect;
  const Icon = tone.icon;

  return (
    <button
      type="button"
      style={{
        width: "100%",
        height: 34,
        borderRadius: T.radius.sm,
        border: `1px solid ${tone.border}`,
        background: tone.background,
        color: tone.color,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 7,
        fontFamily: T.font.family,
        fontSize: T.font.size.bodySmall,
        fontWeight: T.font.weight.semibold,
        cursor: "pointer",
      }}
    >
      <Icon size={13} />
      {action}
    </button>
  );
}

function IntegrationCard({ integration }) {
  const BrandIcon = integration.icon;

  return (
    <AppCard
      variant="compact"
      style={{
        minHeight: 210,
        padding: 16,
        borderRadius: T.radius.card,
        border: `1px solid ${C.border}`,
        boxShadow: T.shadow.none,
        background: C.card,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {integration.logoSrc || BrandIcon ? (
          <span
            style={{
              width: 34,
              height: 34,
              borderRadius: integration.iconShape === "circle" ? T.radius.circle : T.radius.md,
              background: integration.iconBg,
              color: integration.iconColor,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {integration.logoSrc ? (
              <img
                src={integration.logoSrc}
                alt={`${integration.title} logo`}
                style={{
                  width: integration.logoWidth || 20,
                  height: integration.logoHeight || integration.logoWidth || 20,
                  objectFit: "contain",
                  display: "block",
                }}
              />
            ) : (
              <BrandIcon size={integration.iconSize || 18} />
            )}
          </span>
        ) : null}
        <div
          style={{
            flex: 1,
            minWidth: 0,
            color: C.text,
            fontSize: T.font.size.cardTitle,
            fontWeight: T.font.weight.bold,
            lineHeight: "18px",
          }}
        >
          {integration.title}
        </div>
        <button
          type="button"
          aria-label={`More options for ${integration.title}`}
          style={{
            width: 26,
            height: 26,
            border: T.border.none,
            background: "transparent",
            color: C.muted,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <FiMoreVertical size={15} />
        </button>
      </div>

      <p
        style={{
          margin: "14px 0 16px",
          color: C.muted,
          fontSize: T.font.size.bodySmall,
          fontWeight: T.font.weight.medium,
          lineHeight: 1.55,
          flex: 1,
        }}
      >
        {integration.text}
      </p>

      <IntegrationActionButton action={integration.action} />
    </AppCard>
  );
}

function IntegrationSection() {
  return (
    <div
      style={{
        minHeight: "100%",
        width: "100%",
        minWidth: 0,
        background: C.card,
        padding: T.spacing.page,
        boxSizing: "border-box",
        color: C.text,
      }}
    >
      <header style={{ marginBottom: 18 }}>
        <h1
          style={{
            margin: 0,
            color: C.text,
            fontSize: T.font.size.pageTitle,
            fontWeight: T.font.weight.extraBold,
            lineHeight: 1.1,
          }}
        >
          Integrations
        </h1>
        <div style={{ marginTop: 4, color: C.muted, fontSize: T.font.size.caption, fontWeight: T.font.weight.medium }}>
          connect and manage your integrations
        </div>
      </header>

      <div
        style={{
          width: 300,
          flex: "0 0 300px",
          height: 34,
          border: `1px solid ${C.border}`,
          borderRadius: T.radius.sm,
          background: C.card,
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "0 11px",
          boxSizing: "border-box",
          marginBottom: 18,
        }}
      >
        <FiSearch size={14} color={C.muted} />
        <input
          aria-label="Search integrations"
          placeholder="Search in integration"
          style={{
            flex: 1,
            minWidth: 0,
            border: "none",
            outline: "none",
            background: "transparent",
            color: C.text,
            fontFamily: T.font.family,
            fontSize: T.font.size.bodySmall,
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
          alignItems: "stretch",
        }}
      >
        {integrations.map((integration) => (
          <IntegrationCard key={integration.title} integration={integration} />
        ))}
      </div>
    </div>
  );
}

export default IntegrationSection;
