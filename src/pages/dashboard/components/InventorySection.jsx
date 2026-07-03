import React, { useState, useEffect, useRef } from "react";
import { Card, Btn, C } from "../../../components/utils";
import { API_URL } from "../../../config/main";
const FILE_ICONS = { "pdf": "📄", "xlsx": "📊", "xls": "📊", "doc": "📝", "docx": "📝" };

function InventorySection({ inventory, setInventory, openEditProp, delProp, uploadedFiles }) {
  const [files, setFiles] = useState(uploadedFiles);
  const [phase, setPhase] = useState("idle");
  const [dragOver, setDragOver] = useState(false);
  const [newFileName, setNewFileName] = useState("");
  const [newFileType, setNewFileType] = useState("pdf");
  const [progress, setProgress] = useState(0);
  const [progressLabel, setProgressLabel] = useState("");
  const fileInputRef = useRef(null);



  const removeFile = async (id) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this file? This will also delete all related inventory."
      );

      if (!confirmDelete) return;
      const response = await fetch(`${API_URL}/import-batch/${id}`, {
        method: 'DELETE',
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Delete failed');
      }

      // update UI
      setFiles((f) => f.filter((x) => x.id !== id));

      setInventory((inv) =>
        inv.filter((item) => item.import_batch_id !== id)
      );

    } catch (error) {
      console.error('Delete batch error:', error);
    }
  };

  const triggerUpload = async (file) => {
    const formData = new FormData();

    // MUST match: req.file
    formData.append("file", file);

    const company_id = localStorage.getItem("company_id");
    // MUST match: req.body
    formData.append("company_id", company_id);
    formData.append("type", "inventory");
    formData.append("campaign_name", "-1");

    try {
      const res = await fetch("http://localhost:3000/api/upload", {
        method: "POST",
        body: formData, // IMPORTANT: do NOT set Content-Type
      });
      console.log(res);

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      console.log("Success:", data);
    } catch (err) {
      console.error(err);
    }
  };


  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);

    const file = e.dataTransfer.files?.[0];
    if (file) triggerUpload(file);
  };

  const handlePick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) triggerUpload(file);
    e.target.value = "";
  };

  return (
    <div>
      <div>
        {/* hidden input */}
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />

        {/* DROP AREA */}
        <div
          onDrop={handleDrop}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            setDragOver(false);
          }}
          style={{
            border: `2px dashed ${dragOver ? "#4f46e5" : "#d1d5db"}`,
            borderRadius: 14,
            padding: "28px 24px",
            background: dragOver ? "#eef2ff" : "#fff",
            transition: "all .15s",
            marginBottom: 18,
            textAlign: "center",
          }}
        >
          {/* IDLE STATE */}
          {phase === "idle" && (
            <>
              <div style={{ fontSize: 36, marginBottom: 10 }}>📂</div>

              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>
                Drop your inventory file here
              </div>

              <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 10 }}>
                The AI will extract all property details automatically
              </div>

              <button
                onClick={handlePick}
                style={{
                  background: "#4f46e5",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "9px 22px",
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Browse & Upload
              </button>
            </>
          )}

          {/* UPLOADING / PROCESSING */}
          {(phase === "uploading" || phase === "processing") && (
            <div>
              <div style={{ fontSize: 28, marginBottom: 10 }}>📄</div>

              <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 2 }}>
                {newFileName}
              </div>

              <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 14 }}>
                {progressLabel}
              </div>

              <div
                style={{
                  maxWidth: 320,
                  margin: "0 auto",
                  background: "#e5e7eb",
                  borderRadius: 4,
                  height: 5,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    background: "#4f46e5",
                    width: `${progress}%`,
                    transition: "width .5s ease",
                  }}
                />
              </div>

              <div
                style={{
                  fontSize: 11,
                  color: "#4f46e5",
                  fontWeight: 600,
                  marginTop: 8,
                }}
              >
                {progress}%
              </div>
            </div>
          )}

          {/* DONE */}
          {phase === "done" && (
            <div>
              <div style={{ fontSize: 32, marginBottom: 8 }}>✅</div>
              <div style={{ fontWeight: 700, fontSize: 14, color: "green" }}>
                Inventory updated!
              </div>
              <div style={{ fontSize: 12, color: "#6b7280" }}>
                AI agent's knowledge base has been refreshed.
              </div>
            </div>
          )}
        </div>


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
                  <div style={{ fontSize: 10, color: C.muted, marginTop: 1 }}>Uploaded {f.date} · {f.count_inventory_extracted} {f.count_inventory_extracted === 1 ? "property" : "properties"} extracted</div>
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
                {[["BHK Types", p.bhk || "", "🛏"], ["Price Range", p.price_range, "💰"], ["Possession", p.possession, "📅"], ["Units Left", p.units, "🏗"]].map(([l, v, ic]) => (
                  <div key={l} style={{ background: C.bg, borderRadius: 7, padding: "8px 10px" }}>
                    <div style={{ fontSize: 9, color: C.muted, fontWeight: 600, marginBottom: 2 }}>{ic} {l.toUpperCase()}</div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: C.text }}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 9 }}>
                <div style={{ background: C.bg, borderRadius: 7, padding: "8px 10px" }}><div style={{ fontSize: 9, color: C.muted, fontWeight: 600, marginBottom: 2 }}>📐 CARPET AREA</div><div style={{ fontSize: 12, color: C.text }}>{p.carpet_area || ""}</div></div>

                <div style={{ background: C.bg, borderRadius: 7, padding: "8px 10px" }}><div style={{ fontSize: 9, color: C.muted, fontWeight: 600, marginBottom: 2 }}>🧭 FACING</div><div style={{ fontSize: 12, color: C.text }}>{p.facing || ""}</div></div>
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