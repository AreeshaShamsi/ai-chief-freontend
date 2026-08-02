import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";

function AppLayout() {
  return (
    <div
      className="text-left"
      style={{
        width: "100vw",
        height: "100dvh",
        display: "flex",
        overflow: "hidden",
        background: "#F7F8FC",
      }}
    >
      <Sidebar />
      <main
        style={{
          flex: 1,
          minWidth: 0,
          height: "100dvh",
          overflowY: "auto",
          overflowX: "hidden",
          background: "#F7F8FC",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
