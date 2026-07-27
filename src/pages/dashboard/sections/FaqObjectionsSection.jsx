import { useState } from "react";
import PropTypes from "prop-types";
import { LuPlus, LuPencil, LuTrash2 } from "react-icons/lu";
import {
  AppButton,
  AppCard,
  AppIconCircle,
  C,
  IconButton,
  T,
  Text,
} from "../../../components/utils";
import FaqModal from "../modals/FaqModal";
import { addFAQ, updateFAQ, deleteFAQ } from "../../../api/faq";

export const initialFaqItems = [
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

function FaqCardItem({ item, index, onEdit, onDelete }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AppCard
      variant="compact"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: T.spacing[4],
        borderRadius: T.radius.lg,
        border: `1px solid ${C.border}`,
        background: C.card,
        boxShadow: T.shadow.xs,
        display: "flex",
        flexDirection: "column",
        gap: T.spacing[3],
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: T.spacing[3],
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: T.spacing[3], flex: 1, minWidth: 0 }}>
          <AppIconCircle
            size={28}
            variant="primary"
            style={{
              fontSize: T.font.size.bodySmall,
              fontWeight: T.font.weight.bold,
            }}
          >
            {index + 1}
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
            display: "flex",
            alignItems: "center",
            gap: T.spacing[1],
            opacity: isHovered ? 1 : 0,
            transition: "opacity 180ms ease-in-out",
            pointerEvents: isHovered ? "auto" : "none",
          }}
        >
          <IconButton
            aria-label="Edit FAQ"
            onClick={(e) => {
              e.stopPropagation();
              onEdit(item);
            }}
            style={{ color: C.muted }}
          >
            <LuPencil size={15} />
          </IconButton>
          <IconButton
            aria-label="Delete FAQ"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(item);
            }}
            style={{ color: C.hot }}
          >
            <LuTrash2 size={15} />
          </IconButton>
        </div>
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
  );
}

FaqCardItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

function FaqObjectionsSection({ data, onAddFaq: externalOnAddFaq }) {
  const [faqs, setFaqs] = useState(data || []);
  const [modalState, setModalState] = useState({
    open: false,
    mode: "add",
    faq: null,
  });

  const handleOpenAddModal = () => {
    if (externalOnAddFaq) {
      externalOnAddFaq();
    }
    setModalState({ open: true, mode: "add", faq: null });
  };

  const handleOpenEditModal = (item) => {
    setModalState({ open: true, mode: "edit", faq: item });
  };

  const handleOpenDeleteModal = (item) => {
    setModalState({ open: true, mode: "delete", faq: item });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, open: false }));
  };

  const handleSaveFaq = async (faqData) => {
    if (modalState.mode === "add") {
      const nextId = faqs.length > 0 ? Math.max(...faqs.map((f) => f.id)) + 1 : 1;
      let qText = faqData.question;
      if (!qText.toLowerCase().startsWith("q:")) {
        qText = `Q: ${qText}`;
      }
      let aText = faqData.answer;
      if (aText && !aText.toLowerCase().startsWith("a:")) {
        aText = `A: ${aText}`;
      }
      const newFaq = {
        id: nextId,
        question: qText,
        answer: aText,
      };
      setFaqs((prev) => [...prev, newFaq]);
      const payload = { company_id: localStorage.getItem("company_id"), question: qText, answer: aText };
      await addFAQ(payload);
    } else if (modalState.mode === "edit" && faqData.id) {
      setFaqs((prev) =>
        prev.map((item) =>
          item.id === faqData.id
            ? { ...item, question: faqData.question, answer: faqData.answer }
            : item
        )
      );
      const payload = { company_id: localStorage.getItem("company_id"), question: faqData.question, answer: faqData.answer };

      await updateFAQ(faqData.id, payload);
    }
  };

  const handleDeleteFaq = async (faqId) => {
    setFaqs((prev) => prev.filter((item) => item.id !== faqId));
    await deleteFAQ(faqId);
  };

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
      <FaqModal
        open={modalState.open}
        mode={modalState.mode}
        faq={modalState.faq}
        onClose={handleCloseModal}
        onSubmit={handleSaveFaq}
        onDelete={handleDeleteFaq}
      />

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
          onClick={handleOpenAddModal}
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
        {faqs.map((item, index) => (
          <FaqCardItem
            key={item.id}
            item={item}
            index={index}
            onEdit={handleOpenEditModal}
            onDelete={handleOpenDeleteModal}
          />
        ))}
      </div>
    </div>
  );
}

FaqObjectionsSection.propTypes = {
  onAddFaq: PropTypes.func,
};

export default FaqObjectionsSection;
