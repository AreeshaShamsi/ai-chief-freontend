import {
  FiAlignLeft,
  FiCalendar,
  FiCheckCircle,
  FiCheckSquare,
  FiClock,
  FiDollarSign,
  FiHash,
  FiLink,
  FiList,
  FiMail,
  FiPaperclip,
  FiPhone,
  FiStar,
  FiType,
  FiUser,
} from "react-icons/fi";

export const fieldTypeOptions = [
  { label: "Single Line Text", icon: FiType, editorKind: "text" },
  { label: "Long Text", icon: FiAlignLeft, editorKind: "textarea" },
  { label: "Attachment", icon: FiPaperclip, editorKind: "attachment" },
  { label: "Checkbox", icon: FiCheckSquare, editorKind: "checkbox" },
  { label: "Multiple Select", icon: FiList, editorKind: "multiSelect" },
  { label: "Single Select", icon: FiCheckCircle, editorKind: "singleSelect" },
  { label: "User / Assigned Agent", icon: FiUser, editorKind: "user" },
  { label: "Date", icon: FiCalendar, editorKind: "date" },
  { label: "Date Time", icon: FiClock, editorKind: "datetime" },
  { label: "Email", icon: FiMail, editorKind: "email" },
  { label: "Phone Number", icon: FiPhone, editorKind: "phone" },
  { label: "URL", icon: FiLink, editorKind: "url" },
  { label: "Number", icon: FiHash, editorKind: "number" },
  { label: "Currency", icon: FiDollarSign, editorKind: "currency" },
  { label: "Rating", icon: FiStar, editorKind: "rating" },
];

const fieldTypeMeta = new Map(fieldTypeOptions.map((option) => [option.label, option]));

export function getFieldTypeMeta(type) {
  return fieldTypeMeta.get(type) || fieldTypeOptions[0];
}
