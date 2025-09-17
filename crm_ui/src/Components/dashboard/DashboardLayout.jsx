import { Outlet } from "react-router-dom";
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";

const DashboardLayout = () => (
  <div style={{ display: "flex" }}>
    <Sidebar />
    <div style={{ flex: 1 }}>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  </div>
);

export default DashboardLayout;