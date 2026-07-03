import React, { useState } from "react";
import { Btn, Card, C, Avatar } from "../../../components/utils";
import { HOT_LEADS, initCampaigns, CALLS, ScoreBadge } from "../utils";
import InventorySection from "../components/InventorySection";
import { API_URL } from "../../../config/main";

const FILE_ICONS = { "pdf": "📄", "xlsx": "📊", "xls": "📊", "doc": "📝", "docx": "📝" };

function KnowledgeBaseSection({ data }) {
  const [inventory, setInventory] = useState(data?.inventory ?? []);
  const [faqs, setFaqs] = useState(data?.faqs ?? []);
  const [activeSection, setActiveSection] = useState("inventory");
  const [showAddProp, setShowAddProp] = useState(false);
  const [showAddFaq, setShowAddFaq] = useState(false);
  const [editProp, setEditProp] = useState(null);
  const [editFaq, setEditFaq] = useState(null);
  const emptyProp = { name: "", location: "", bhk: "2BHK, 3BHK", price_range: "", possession: "", units: "", carpet_area: "", facing: "", amenities: "", highlight: "", status: "active" };
  const [propForm, setPropForm] = useState(emptyProp);
  const emptyFaq = { question: "", answer: "", id: "" };
  const [faqForm, setFaqForm] = useState(emptyFaq);
  const openAddProp = () => { setPropForm(emptyProp); setEditProp(null); setShowAddProp(true); };
  const openEditProp = p => { setPropForm({ ...p, bhk: p.bhk, facing: p.facing }); setEditProp(p.id); setShowAddProp(true); };
  const saveProp = async () => {
    try {
      const companyId = localStorage.getItem("company_id");
      const parsed = {
        company_id: companyId,
        code: propForm.code,
        name: propForm.name,
        location: propForm.location,
        bhk: propForm.bhk,
        carpet_area: propForm.carpet_area,
        price_range: propForm.price_range,
        possession: propForm.possession,
        units: parseInt(propForm.units) || null,
        facing: propForm.facing,
        amenities: propForm.amenities,
        highlight: propForm.highlight,
        status: propForm.status || "active",
      };

      const response = await fetch(`${API_URL}/inventory/${editProp}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsed),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to update property');
      }

      setInventory((inv) =>
        inv.map((p) =>
          p.id === editProp ? result.data : p
        )
      );

      setShowAddProp(false);
      setEditProp(null);

    } catch (error) {
      console.error("Update property error:", error);
    }
  };
  const delProp = async (id) => {
    try {
      const response = await fetch(`${API_URL}/inventory/${id}`, {
        method: 'DELETE',
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Delete failed');
      }

      // remove from UI after successful delete
      setInventory((inv) => inv.filter((p) => p.id !== id));

    } catch (error) {
      console.error('Delete inventory error:', error);
    }
  };
  const openAddFaq = () => { setFaqForm(emptyFaq); setEditFaq(null); setShowAddFaq(true); };
  const openEditFaq = f => { setFaqForm({ question: f.question, answer: f.answer }); setEditFaq(f.id); setShowAddFaq(true); };
  const saveFaq = async () => {
    try {
      const companyId = localStorage.getItem("company_id");
      const payload = {
        company_id: companyId,
        question: faqForm.question,
        answer: faqForm.answer,
      };
      let response;
      if (editFaq != null && editFaq !== "") {

        response = await fetch(`${API_URL}/faq/${editFaq}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
      } else {
        response = await fetch(`${API_URL}/faq/create`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
      }


      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to create FAQ');
      }

      if (editFaq != null && editFaq !== "") {
        setFaqs(fs => fs.map(f => f.id === editFaq ? { ...f, question: faqForm.question, answer: faqForm.answer } : f));

      } else {
        setFaqs((fs) => [...fs, result.data]);
      }
      setShowAddFaq(false);

      setFaqForm({
        question: '',
        answer: '',
      });
    } catch (error) {
      console.error('Error creating FAQ:', error);
    }
  };


  const delFaq = async (id) => {
    try {
      const response = await fetch(`${API_URL}/faq/${id}`, {
        method: 'DELETE',
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to delete FAQ');
      }

      // update UI after successful delete
      setFaqs((fs) => fs.filter((f) => f.id !== id));

    } catch (error) {
      console.error('Delete FAQ error:', error);
    }
  };
  const inputStyle = { width: "100%", padding: "9px 11px", border: `1px solid ${C.border}`, borderRadius: 8, fontSize: 12, outline: "none", boxSizing: "border-box", background: "#FAFBFC", color: C.text };
  const labelStyle = { display: "block", fontSize: 11, fontWeight: 600, color: C.text, marginBottom: 5 };
  return (
    <div style={{ padding: 26, background: C.bg, minHeight: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 700, color: C.text, letterSpacing: "-.4px" }}>Knowledge Base</div>
          <div style={{ fontSize: 12, color: C.muted, marginTop: 3 }}>Everything the AI agent knows before picking up a call</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, background: C.greenBg, border: `1px solid ${C.greenBdr}`, borderRadius: 8, padding: "7px 13px" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.green, display: "inline-block" }} />
          <span style={{ fontSize: 11, fontWeight: 600, color: C.green }}>Agent is using this knowledge</span>
        </div>
      </div>
      <div style={{ display: "flex", gap: 6, margin: "18px 0 20px" }}>
        {[["inventory", "🏢", "Property Inventory", inventory.length], ["faqs", "❓", "FAQs & Objections", faqs.length]].map(([id, ic, l, count]) => (
          <button key={id} onClick={() => setActiveSection(id)}
            style={{ display: "flex", alignItems: "center", gap: 7, padding: "8px 16px", borderRadius: 8, border: `1.5px solid ${activeSection === id ? C.accent : C.border}`, background: activeSection === id ? C.accentLt : C.card, color: activeSection === id ? C.accent : C.muted, fontSize: 12, fontWeight: 600, cursor: "pointer", transition: "all .12s" }}>
            <span>{ic}</span>{l}
            <span style={{ background: activeSection === id ? C.accent : "#E2E8F0", color: activeSection === id ? "#fff" : C.muted, borderRadius: 9, padding: "1px 7px", fontSize: 10, fontWeight: 700 }}>{count}</span>
          </button>
        ))}
      </div>
      {activeSection === "inventory" && <InventorySection inventory={inventory} setInventory={setInventory} openEditProp={openEditProp} delProp={delProp} uploadedFiles={data?.files ?? []} />}
      {activeSection === "faqs" && (
        <>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <div style={{ fontSize: 12, color: C.muted }}>The agent uses these to handle objections and answer questions on calls.</div>
            <button onClick={openAddFaq} style={{ display: "flex", alignItems: "center", gap: 6, background: C.accent, color: "#fff", border: "none", borderRadius: 8, padding: "8px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>+ Add FAQ</button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {faqs.map((f, i) => (
              <Card key={f.id} style={{ padding: "14px 18px" }}>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: C.accentLt, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: C.accent, flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 13, color: C.text, marginBottom: 5 }}>Q: {f.question}</div>
                    <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.6, background: C.bg, borderRadius: 7, padding: "8px 11px", borderLeft: `3px solid ${C.accent}` }}>A: {f.answer}</div>
                  </div>
                  <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                    <button onClick={() => openEditFaq(f)} style={{ background: C.accentLt, color: C.accent, border: "none", borderRadius: 6, padding: "4px 10px", fontSize: 11, fontWeight: 600, cursor: "pointer" }}>Edit</button>
                    <button onClick={() => delFaq(f.id)} style={{ background: C.hotBg, color: C.hot, border: "none", borderRadius: 6, padding: "4px 10px", fontSize: 11, fontWeight: 600, cursor: "pointer" }}>Delete</button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </>
      )}
      {showAddProp && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(10,14,26,.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 999, padding: 16 }}>
          <div style={{ background: C.card, borderRadius: 16, width: "100%", maxWidth: 540, border: `1px solid ${C.border}`, maxHeight: "90vh", overflow: "auto" }}>
            <div style={{ padding: "18px 24px", borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, background: C.card, zIndex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: C.text }}>{editProp ? "Edit Property" : "Add Property"}</div>
              <button onClick={() => setShowAddProp(false)} style={{ background: "none", border: "none", cursor: "pointer", color: C.muted, fontSize: 18 }}>✕</button>
            </div>
            <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
              {[["name", "Project Name", "e.g. Prestige Lakeside", "text"], ["location", "Location", "e.g. Sarjapur Road, Bengaluru", "text"], ["price_range", "Price Range", "e.g. ₹85L – ₹1.8 Cr", "text"], ["possession", "Possession", "e.g. Ready to move / Dec 2025", "text"], ["units", "Units Available", "e.g. 24", "number"], ["carpet_area", "Carpet Area", "e.g. 500 sqft", "text"], ["bhk", "BHK Types", "e.g. 2BHK, 3BHK, 4BHK", "text"], ["facing", "Facing Options", "e.g. East, North, West", "text"], ["amenities", "Amenities", "e.g. Pool, Gym, Clubhouse", "text"], ["highlight", "Agent Highlight", "Key selling point the agent should mention on calls", "text"]].map(([k, l, ph, t]) => (
                <div key={k}><label style={labelStyle}>{l}</label>
                  {k === "highlight" ? <textarea value={propForm[k]} onChange={e => setPropForm(f => ({ ...f, [k]: e.target.value }))} placeholder={ph} rows={2} style={{ ...inputStyle, resize: "vertical" }} />
                    : <input type={t} value={propForm[k]} onChange={e => setPropForm(f => ({ ...f, [k]: e.target.value }))} placeholder={ph} style={inputStyle} />}
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 4 }}>
                <Btn onClick={() => setShowAddProp(false)}>Cancel</Btn>
                <Btn primary disabled={!propForm.name.trim() || !propForm.location.trim()} onClick={saveProp}>{editProp ? "Save Changes" : "Add Property"}</Btn>
              </div>
            </div>
          </div>
        </div>
      )}
      {showAddFaq && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(10,14,26,.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 999, padding: 16 }}>
          <div style={{ background: C.card, borderRadius: 16, width: "100%", maxWidth: 480, border: `1px solid ${C.border}` }}>
            <div style={{ padding: "18px 24px", borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: C.text }}>{editFaq ? "Edit FAQ" : "Add FAQ"}</div>
              <button onClick={() => setShowAddFaq(false)} style={{ background: "none", border: "none", cursor: "pointer", color: C.muted, fontSize: 18 }}>✕</button>
            </div>
            <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
              <div><label style={labelStyle}>Question</label><input value={faqForm.question} onChange={e => setFaqForm(f => ({ ...f, question: e.target.value }))} placeholder="e.g. Is home loan available?" style={inputStyle} /></div>
              <div><label style={labelStyle}>Answer <span style={{ fontWeight: 400, color: C.muted }}>(the agent will speak this)</span></label><textarea value={faqForm.answer} onChange={e => setFaqForm(f => ({ ...f, answer: e.target.value }))} placeholder="Write the exact answer the AI agent should give..." rows={4} style={{ ...inputStyle, resize: "vertical" }} /></div>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 4 }}>
                <Btn onClick={() => setShowAddFaq(false)}>Cancel</Btn>
                <Btn primary disabled={!faqForm.question.trim() || !faqForm.answer.trim()} onClick={saveFaq}>{editFaq ? "Save Changes" : "Add FAQ"}</Btn>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default KnowledgeBaseSection;