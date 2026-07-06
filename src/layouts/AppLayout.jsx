import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";

const dashboardItems = new Set(["dashboard", "campaigns", "leads", "calls", "kb"]);

function AppLayout() {
  const [activeItem, setActiveItem] = useState("dashboard");

  const handleNavigate = (item) => {
    if (dashboardItems.has(item)) {
      setActiveItem(item);
    }
  };

  return (
    <div
      className="text-left"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        overflow: "hidden",
        background: "#F7F8FC",
      }}
    >
      <Sidebar activeItem={activeItem} onNavigate={handleNavigate} />
      <main
        style={{
          flex: 1,
          minWidth: 0,
          height: "100vh",
          overflowY: "auto",
          overflowX: "hidden",
          background: "#F7F8FC",
        }}
      >
        <Outlet context={{ activeItem, setActiveItem }} />
      </main>
    </div>
  );
}

export default AppLayout;
