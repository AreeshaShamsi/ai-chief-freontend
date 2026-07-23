import React from "react";
import PropTypes from "prop-types";
import { LuPlus } from "react-icons/lu";
import {
  AppButton,
  AppCard,
  AppIconCircle,
  C,
  T,
  Text,
} from "../../../components/utils";

export const faqItems = [
  {
    id: 1,
    question: "Q: What documents are required for booking?",
    answer:
      "A: Aadhaar, PAN, 3 Months Bank Statement, And 2 Passport Photos. For Loan Cases, Salary Slips Of Last 3 Months.",
  },
  {
    id: 2,
    question: "Q: Is home loan available?",
    answer:
      "A: Yes, We Have Tie-Ups With SBI, HDFC, ICICI, And Axis Bank. Our Team Can Assist With Pre-Approval Within 48 Hours.",
  },
  {
    id: 3,
    question: "Q: What is the booking amount?",
    answer:
      "A: Booking Amount Is ₹1 Lakh For All Projects. Fully Adjustable Against The Final Cost.",
  },
  {
    id: 4,
    question: "Q: Can NRIs invest?",
    answer:
      "A: Yes, All Projects Are NRI-Eligible. Payment Via NRE/NRO Account. POA Assistance Available.",
  },
];

function FaqObjectionsSection({ onAddFaq }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: T.spacing[4],
        width: "100%",
        boxSizing: "border-box",
        marginTop: T.spacing[3],
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: T.spacing[3],
          flexWrap: "wrap",
          paddingBottom: T.spacing[1],
        }}
      >
        <Text variant="subtitle" color={C.muted}>
          The Agent Uses These To Handle Objections And Answer Questions On Calls.
        </Text>
        <AppButton
          variant="primary"
          onClick={onAddFaq}
          style={{
            height: 36,
            borderRadius: T.radius.md,
            padding: "0 16px",
            fontSize: T.font.size.bodySmall,
            fontWeight: T.font.weight.semibold,
            boxShadow: T.shadow.xs,
          }}
        >
          <LuPlus size={16} />
          <span>Add FAQ</span>
        </AppButton>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: T.spacing[3] }}>
        {faqItems.map((item) => (
          <AppCard
            key={item.id}
            variant="compact"
            style={{
              padding: T.spacing[4],
              borderRadius: T.radius.lg,
              border: `1px solid ${C.border}`,
              background: C.card,
              boxShadow: T.shadow.xs,
              display: "flex",
              flexDirection: "column",
              gap: T.spacing[3],
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: T.spacing[3] }}>
              <AppIconCircle
                size={28}
                variant="primary"
                style={{
                  fontSize: T.font.size.bodySmall,
                  fontWeight: T.font.weight.bold,
                }}
              >
                {item.id}
              </AppIconCircle>
              <Text
                variant="label"
                style={{
                  fontSize: T.font.size.cardTitle,
                  fontWeight: T.font.weight.semibold,
                  color: C.text,
                }}
              >
                {item.question}
              </Text>
            </div>

            <div
              style={{
                background: C.surface,
                border: `1px solid ${C.borderLt}`,
                borderRadius: T.radius.md,
                padding: `${T.spacing[3]}px ${T.spacing[4]}px`,
                marginLeft: 40,
              }}
            >
              <Text
                variant="body"
                style={{
                  color: C.muted,
                  lineHeight: 1.5,
                  fontSize: T.font.size.bodySmall,
                  fontWeight: T.font.weight.medium,
                }}
              >
                {item.answer}
              </Text>
            </div>
          </AppCard>
        ))}
      </div>
    </div>
  );
}

FaqObjectionsSection.propTypes = {
  onAddFaq: PropTypes.func,
};

export default FaqObjectionsSection;
