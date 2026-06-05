import React, { useState } from "react";
import { initCampaigns } from "../utils";
import { Card, Btn, C } from "../../../components/utils";

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

function InventorySection({ inventory, setInventory, openEditProp, delProp }) {
  const [files, setFiles] = useState(initUploadedFiles);
  const [phase, setPhase] = useState("idle");
  const [dragOver, setDragOver] = useState(false);
  const [newFileName, setNewFileName] = useState("");
  const [newFileType, setNewFileType] = useState("pdf");
  const [progress, setProgress] = useState(0);
  const [progressLabel, setProgressLabel] = useState("");

  const triggerUpload = (fname, ftype) => {
    setNewFileName(fname); setNewFileType(ftype || "pdf"); setPhase("uploading"); setProgress(0);
    const labels = ["Reading file…", "Extracting property data…", "Parsing pricing & inventory…", "Mapping to knowledge base…"];
    let step = 0;
    const iv = setInterval(() => {
      step++; setProgress(Math.min(step * 26, 95)); setProgressLabel(labels[Math.min(step - 1, labels.length - 1)]);
      if (step >= 4) {
        clearInterval(iv); setPhase("processing");
        setTimeout(() => { setPhase("done"); setFiles(f => [{ id: Date.now(), name: fname, type: ftype || "pdf", size: "1.2 MB", uploaded: "Just now", status: "processed", properties: 2 }, ...f]); setTimeout(() => setPhase("idle"), 2200); }, 900);
      }
    }, 600);
  };
  const handleDrop = e => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files[0]; if (f) triggerUpload(f.name, f.name.split(".").pop()); };
  const handlePick = () => { const names = ["Sobha_Brochure_Q1.pdf", "Units_Jan25.xlsx", "Brigade_Inventory.docx"]; const n = names[Math.floor(Math.random() * names.length)]; triggerUpload(n, n.split(".").pop()); };
  const removeFile = id => setFiles(f => f.filter(x => x.id !== id));

  return (
    <div>
      <div onDrop={handleDrop} onDragOver={e => { e.preventDefault(); setDragOver(true); }} onDragLeave={() => setDragOver(false)}
        style={{ border: `2px dashed ${dragOver ? C.accent : C.border}`, borderRadius: 14, padding: "28px 24px", background: dragOver ? C.accentLt : C.card, transition: "all .15s", marginBottom: 18, textAlign: "center" }}>
        {phase === "idle" && (<>
          <div style={{ fontSize: 36, marginBottom: 10 }}>📂</div>
          <div style={{ fontWeight: 700, fontSize: 14, color: C.text, marginBottom: 4 }}>Drop your inventory file here</div>
          <div style={{ fontSize: 12, color: C.muted, marginBottom: 10 }}>The AI will extract all property details automatically</div>
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 16 }}>
            {[["📄", "PDF"], ["📊", "Excel"], ["📝", "Word Doc"]].map(([ic, l]) => (
              <span key={l} style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 6, padding: "3px 10px", fontSize: 11, color: C.muted, fontWeight: 500 }}>{ic} {l}</span>
            ))}
          </div>
          <button onClick={handlePick} style={{ background: C.accent, color: "#fff", border: "none", borderRadius: 8, padding: "9px 22px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>Browse & Upload</button>
        </>)}
        {(phase === "uploading" || phase === "processing") && (
          <div style={{ padding: "8px 0" }}>
            <div style={{ fontSize: 28, marginBottom: 10 }}>{FILE_ICONS[newFileType] || "📄"}</div>
            <div style={{ fontWeight: 600, fontSize: 13, color: C.text, marginBottom: 2 }}>{newFileName}</div>
            <div style={{ fontSize: 11, color: C.muted, marginBottom: 14 }}>{progressLabel}</div>
            <div style={{ maxWidth: 320, margin: "0 auto", background: C.border, borderRadius: 4, height: 5, overflow: "hidden" }}>
              <div style={{ height: "100%", background: C.accent, borderRadius: 4, width: `${progress}%`, transition: "width .5s ease" }} />
            </div>
            <div style={{ fontSize: 11, color: C.accent, fontWeight: 600, marginTop: 8 }}>{progress}%</div>
          </div>
        )}
        {phase === "done" && (<div style={{ padding: "8px 0" }}><div style={{ fontSize: 32, marginBottom: 8 }}>✅</div><div style={{ fontWeight: 700, fontSize: 14, color: C.green, marginBottom: 3 }}>Inventory updated!</div><div style={{ fontSize: 12, color: C.muted }}>AI agent's knowledge base has been refreshed.</div></div>)}
      </div>
      {files.length > 0 && (
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: ".5px", marginBottom: 9 }}>Uploaded files</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {files.map(f => (
              <div key={f.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", background: C.card, border: `1px solid ${C.border}`, borderRadius: 9 }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>{FILE_ICONS[f.type] || "📄"}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 12, color: C.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{f.name}</div>
                  <div style={{ fontSize: 10, color: C.muted, marginTop: 1 }}>{f.size} · Uploaded {f.uploaded} · {f.properties} {f.properties === 1 ? "property" : "properties"} extracted</div>
                </div>
                <span style={{ background: C.greenBg, color: C.green, border: `1px solid ${C.greenBdr}`, borderRadius: 7, padding: "2px 9px", fontSize: 10, fontWeight: 600, flexShrink: 0 }}>✓ Processed</span>
                <button onClick={() => removeFile(f.id)} style={{ background: "none", border: "none", cursor: "pointer", color: C.muted, fontSize: 13, padding: 2, flexShrink: 0 }}>✕</button>
              </div>
            ))}
          </div>
        </div>
      )}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
        <div style={{ flex: 1, height: 1, background: C.border }} /><span style={{ fontSize: 11, color: C.muted, fontWeight: 500 }}>Extracted inventory</span><div style={{ flex: 1, height: 1, background: C.border }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {inventory.map(p => (
          <Card key={p.id} style={{ padding: 0, overflow: "hidden" }}>
            <div style={{ padding: "13px 18px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 38, height: 38, borderRadius: 9, background: C.accentLt, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, flexShrink: 0 }}>🏢</div>
              <div style={{ flex: 1 }}><div style={{ fontWeight: 700, fontSize: 13, color: C.text }}>{p.name}</div><div style={{ fontSize: 11, color: C.muted, marginTop: 1 }}>📍 {p.location}</div></div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <span style={{ background: C.greenBg, color: C.green, border: `1px solid ${C.greenBdr}`, borderRadius: 7, padding: "2px 9px", fontSize: 10, fontWeight: 600 }}>● Active</span>
                <button onClick={() => openEditProp(p)} style={{ background: C.accentLt, color: C.accent, border: "none", borderRadius: 6, padding: "4px 11px", fontSize: 11, fontWeight: 600, cursor: "pointer" }}>Edit</button>
                <button onClick={() => delProp(p.id)} style={{ background: C.hotBg, color: C.hot, border: "none", borderRadius: 6, padding: "4px 11px", fontSize: 11, fontWeight: 600, cursor: "pointer" }}>Remove</button>
              </div>
            </div>
            <div style={{ padding: "13px 18px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 9, marginBottom: 10 }}>
                {[["BHK Types", p.bhk.join(", "), "🛏"], ["Price Range", p.priceRange, "💰"], ["Possession", p.possession, "📅"], ["Units Left", p.units, "🏗"]].map(([l, v, ic]) => (
                  <div key={l} style={{ background: C.bg, borderRadius: 7, padding: "8px 10px" }}>
                    <div style={{ fontSize: 9, color: C.muted, fontWeight: 600, marginBottom: 2 }}>{ic} {l.toUpperCase()}</div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: C.text }}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9 }}>
                <div style={{ background: C.bg, borderRadius: 7, padding: "8px 10px" }}><div style={{ fontSize: 9, color: C.muted, fontWeight: 600, marginBottom: 2 }}>🧭 FACING</div><div style={{ fontSize: 12, color: C.text }}>{p.facing.join(", ")}</div></div>
                <div style={{ background: C.bg, borderRadius: 7, padding: "8px 10px" }}><div style={{ fontSize: 9, color: C.muted, fontWeight: 600, marginBottom: 2 }}>🏊 AMENITIES</div><div style={{ fontSize: 12, color: C.text }}>{p.amenities}</div></div>
              </div>
              {p.highlight && <div style={{ marginTop: 9, background: "#FFFBEB", border: `1px solid ${C.warmBdr}`, borderRadius: 7, padding: "7px 11px", fontSize: 11, color: "#92400E" }}>💡 <span style={{ fontWeight: 600 }}>Agent highlight:</span> {p.highlight}</div>}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default InventorySection