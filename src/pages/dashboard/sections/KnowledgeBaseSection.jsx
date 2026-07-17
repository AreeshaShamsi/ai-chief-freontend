import { C, T } from "../../../components/utils";

function KnowledgeBaseSection() {
  return (
    <div style={{ minHeight: "100%", width: "100%", background: C.pageBg, padding: T.spacing.page, boxSizing: "border-box" }}>
      <h1 style={{ margin: 0, color: C.text, fontSize: T.font.size.pageTitle, fontWeight: T.font.weight.bold }}>
        Knowledge Base
      </h1>
    </div>
  );
}

export default KnowledgeBaseSection;
