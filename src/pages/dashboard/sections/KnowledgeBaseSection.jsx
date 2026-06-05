import React, { useState }  from "react";
import { Btn, Card, C, Avatar } from "../../../components/utils";
import { HOT_LEADS, initCampaigns, CALLS, ScoreBadge } from "../utils";
import  InventorySection  from "../components/InventorySection";

const FILE_ICONS = { "pdf": "📄", "xlsx": "📊", "xls": "📊", "doc": "📝", "docx": "📝" };
const initInventory = [
  { id: 1, name: "Prestige Lakeside", location: "Sarjapur Road, Bengaluru", bhk: ["2BHK", "3BHK", "4BHK"], priceRange: "₹85L – ₹1.8 Cr", possession: "Ready to move", units: 24, facing: ["East", "North"], amenities: "Clubhouse, Pool, Gym, Jogging Track", highlight: "Last few units left. RERA approved.", status: "active" },
  { id: 2, name: "Sobha Hartland", location: "Whitefield, Bengaluru", bhk: ["2BHK", "3BHK"], priceRange: "₹72L – ₹1.2 Cr", possession: "Dec 2025", units: 58, facing: ["East", "West", "North"], amenities: "Rooftop Garden, EV Charging, Kids Play Area", highlight: "Pre-launch pricing available for limited period.", status: "active" },
  { id: 3, name: "Brigade Lakefront", location: "Mysuru Road, Bengaluru", bhk: ["1BHK", "2BHK", "3BHK"], priceRange: "₹45L – ₹95L", possession: "Jun 2026", units: 112, facing: ["East", "South"], amenities: "Lake View, Co-working Space, Gym", highlight: "Investment-friendly. Rental yield ~4.2% p.a.", status: "active" },
];
const initFaqs = [
  { id: 1, q: "What documents are required for booking?", a: "Aadhar, PAN, 3 months bank statement, and 2 passport photos. For loan cases, salary slips of last 3 months." },
  { id: 2, q: "Is home loan available?", a: "Yes, we have tie-ups with SBI, HDFC, ICICI, and Axis Bank. Our team can assist with pre-approval within 48 hours." },
  { id: 3, q: "What is the booking amount?", a: "Booking amount is ₹1 lakh for all projects. Fully adjustable against the final cost." },
  { id: 4, q: "Can NRIs invest?", a: "Yes, all projects are NRI-eligible. Payment via NRE/NRO account. POA assistance available." },
];
const initUploadedFiles = [
  { id: 1, name: "Prestige_Inventory_Dec24.pdf", type: "pdf", size: "2.4 MB", uploaded: "Dec 15", status: "processed", properties: 2 },
  { id: 2, name: "Brigade_Units_Nov24.xlsx", type: "xlsx", size: "540 KB", uploaded: "Nov 30", status: "processed", properties: 1 },
];


function KnowledgeBaseSection() {
  const [inventory, setInventory] = useState(initInventory);
  const [faqs, setFaqs] = useState(initFaqs);
  const [activeSection, setActiveSection] = useState("inventory");
  const [showAddProp, setShowAddProp] = useState(false);
  const [showAddFaq, setShowAddFaq] = useState(false);
  const [editProp, setEditProp] = useState(null);
  const [editFaq, setEditFaq] = useState(null);
  const emptyProp = { name: "", location: "", bhk: "2BHK, 3BHK", priceRange: "", possession: "", units: "", facing: "", amenities: "", highlight: "", status: "active" };
  const [propForm, setPropForm] = useState(emptyProp);
  const emptyFaq = { q: "", a: "" };
  const [faqForm, setFaqForm] = useState(emptyFaq);
  const openAddProp = () => { setPropForm(emptyProp); setEditProp(null); setShowAddProp(true); };
  const openEditProp = p => { setPropForm({ ...p, bhk: p.bhk.join(", "), facing: p.facing.join(", ") }); setEditProp(p.id); setShowAddProp(true); };
  const saveProp = () => { const parsed = { ...propForm, bhk: propForm.bhk.split(",").map(s => s.trim()).filter(Boolean), facing: propForm.facing.split(",").map(s => s.trim()).filter(Boolean), units: parseInt(propForm.units) || 0 }; if (editProp) setInventory(inv => inv.map(p => p.id === editProp ? { ...parsed, id: editProp } : p)); else setInventory(inv => [...inv, { ...parsed, id: Date.now() }]); setShowAddProp(false); };
  const delProp = id => setInventory(inv => inv.filter(p => p.id !== id));
  const openAddFaq = () => { setFaqForm(emptyFaq); setEditFaq(null); setShowAddFaq(true); };
  const openEditFaq = f => { setFaqForm({ q: f.q, a: f.a }); setEditFaq(f.id); setShowAddFaq(true); };
  const saveFaq = () => { if (editFaq) setFaqs(fs => fs.map(f => f.id === editFaq ? { ...faqForm, id: editFaq } : f)); else setFaqs(fs => [...fs, { ...faqForm, id: Date.now() }]); setShowAddFaq(false); };
  const delFaq = id => setFaqs(fs => fs.filter(f => f.id !== id));
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
      {activeSection === "inventory" && <InventorySection inventory={inventory} setInventory={setInventory} openEditProp={openEditProp} delProp={delProp} />}
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
                    <div style={{ fontWeight: 700, fontSize: 13, color: C.text, marginBottom: 5 }}>Q: {f.q}</div>
                    <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.6, background: C.bg, borderRadius: 7, padding: "8px 11px", borderLeft: `3px solid ${C.accent}` }}>A: {f.a}</div>
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
              {[["name", "Project Name", "e.g. Prestige Lakeside", "text"], ["location", "Location", "e.g. Sarjapur Road, Bengaluru", "text"], ["priceRange", "Price Range", "e.g. ₹85L – ₹1.8 Cr", "text"], ["possession", "Possession", "e.g. Ready to move / Dec 2025", "text"], ["units", "Units Available", "e.g. 24", "number"], ["bhk", "BHK Types (comma separated)", "e.g. 2BHK, 3BHK, 4BHK", "text"], ["facing", "Facing Options (comma separated)", "e.g. East, North, West", "text"], ["amenities", "Amenities", "e.g. Pool, Gym, Clubhouse", "text"], ["highlight", "Agent Highlight", "Key selling point the agent should mention on calls", "text"]].map(([k, l, ph, t]) => (
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
              <div><label style={labelStyle}>Question</label><input value={faqForm.q} onChange={e => setFaqForm(f => ({ ...f, q: e.target.value }))} placeholder="e.g. Is home loan available?" style={inputStyle} /></div>
              <div><label style={labelStyle}>Answer <span style={{ fontWeight: 400, color: C.muted }}>(the agent will speak this)</span></label><textarea value={faqForm.a} onChange={e => setFaqForm(f => ({ ...f, a: e.target.value }))} placeholder="Write the exact answer the AI agent should give..." rows={4} style={{ ...inputStyle, resize: "vertical" }} /></div>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 4 }}>
                <Btn onClick={() => setShowAddFaq(false)}>Cancel</Btn>
                <Btn primary disabled={!faqForm.q.trim() || !faqForm.a.trim()} onClick={saveFaq}>{editFaq ? "Save Changes" : "Add FAQ"}</Btn>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default KnowledgeBaseSection;