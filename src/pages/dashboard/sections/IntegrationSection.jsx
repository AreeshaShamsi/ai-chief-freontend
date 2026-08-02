import { useState } from "react";
import { FiLink, FiMoreVertical, FiSearch, FiSettings, FiXCircle } from "react-icons/fi";
import { AppCard, C, T } from "../../../components/utils";
import acres99Logo from "../../../assets/logos/99acres.webp";
import facebookLogo from "../../../assets/logos/facebook.avif";
import googleAdsLogo from "../../../assets/logos/google-ads.png";
import housingLogo from "/Housing.com_Logo.png";
import magicbricksLogo from "/MagicBricks.png";
import Acres99ConnectorModal from "../modals/Acres99ConnectorModal";
import HousingConnectorModal from "../modals/HousingConnectorModal";
import MagicBricksConnectorModal from "../modals/MagicBricksConnectorModal";

const integrations = [
  {
    title: "Meta Ads",
    text: "Auto-sync ad leads, manage DMs, and handle reviews and comments across all your Facebook Pages and Instagram.",
    action: "Manage",
    logoSrc: facebookLogo,
    iconBg: "transparent",
    logoWidth: 22,
  },
  {
    title: "Google Ads",
    text: "Connect your Google Ads account to track campaigns, sync leads automatically, and measure ROI directly from your CRM.",
    action: "Manage",
    logoSrc: googleAdsLogo,
    iconBg: "transparent",
    logoWidth: 22,
  },
  {
    title: "99acres",
    text: "Sync property inquiries and leads directly from 99acres into your CRM for faster follow-ups and management.",
    action: "Connect",
    logoSrc: acres99Logo,
    iconBg: "transparent",
    logoWidth: 28,
    logoHeight: 20,
  },
  {
    title: "Housing.com",
    text: "Automatically fetch leads and inquiries from your Housing.com listings directly into your sales pipeline.",
    action: "Connect",
    logoSrc: housingLogo,
    iconBg: "transparent",
    logoWidth: 90,
    logoHeight: 22,
  },
  {
    title: "MagicBricks",
    text: "Centralize your property leads by integrating MagicBricks inquiries directly into your real estate CRM.",
    action: "Connect",
    logoSrc: magicbricksLogo,
    iconBg: "transparent",
    logoWidth: 90,
    logoHeight: 22,
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

function IntegrationActionButton({ action, onClick }) {
  const tone = actionStyles[action] || actionStyles.Connect;
  const Icon = tone.icon;

  return (
    <button
      type="button"
      onClick={onClick}
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

function IntegrationCard({ integration, onConnect }) {
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

      <IntegrationActionButton
        action={integration.action}
        onClick={onConnect}
      />

    </AppCard>
  );
}

function IntegrationSection() {
  const [show99acres,     setShow99acres]     = useState(false);
  const [showHousing,     setShowHousing]     = useState(false);
  const [showMagicBricks, setShowMagicBricks] = useState(false);

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
          <IntegrationCard
            key={integration.title}
            integration={integration}
            onConnect={
              integration.title === "99acres"     ? () => setShow99acres(true)
            : integration.title === "Housing.com" ? () => setShowHousing(true)
            : integration.title === "MagicBricks" ? () => setShowMagicBricks(true)
            : undefined
            }
          />
        ))}
      </div>

      {show99acres     && <Acres99ConnectorModal     onClose={() => setShow99acres(false)}     />}
      {showHousing     && <HousingConnectorModal     onClose={() => setShowHousing(false)}     />}
      {showMagicBricks && <MagicBricksConnectorModal onClose={() => setShowMagicBricks(false)} />}
    </div>
  );
}

export default IntegrationSection;

