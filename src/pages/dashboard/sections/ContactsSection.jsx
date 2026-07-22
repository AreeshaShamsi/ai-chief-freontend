import PropTypes from "prop-types";
import Workspace from "./Workspace";

export const contactColumns = [
  { id: "contactName", name: "Contact Name", type: "Single Line Text", value: "Contact Name" },
  { id: "email", name: "Email", type: "Email", value: "Email" },
  { id: "phone", name: "Phone Number", type: "Single Line Text", value: "Phone Number" },
  { id: "type", name: "Contact Type", type: "Single Select", value: "Contact Type", options: ["Seller", "Investor", "Buyer"] },
  { id: "agent", name: "Assigned Agent", type: "User / Assigned Agent", value: "Assigned Agent" },
  { id: "budget", name: "Budget", type: "Currency", value: "Budget" },
];

export const contactRows = [
  { id: "contact-1", contactName: "rakesh paul", email: "rakeshpaul234@gmail.com", phone: "0989876543", type: "seller", agent: "Vikash yadav", budget: "1.2 cr" },
  { id: "contact-2", contactName: "rakesh paul", email: "rakeshpaul234@gmail.com", phone: "0989876543", type: "investor", agent: "Vikash yadav", budget: "1.2 cr" },
  { id: "contact-3", contactName: "rakesh paul", email: "rakeshpaul234@gmail.com", phone: "0989876543", type: "buyer", agent: "Vikash yadav", budget: "1.2 cr" },
];

export const contactViews = ["All Contacts"];

function ContactsSection() {
  return (
    <Workspace
      workspaceId="contacts"
      workspaceType="contacts"
      columns={contactColumns}
      rowData={contactRows}
      views={contactViews}
    />
  );
}

export default ContactsSection;
