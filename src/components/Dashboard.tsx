import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="flex">
        <div className="sidebar-container border-r-[1px] h-screen hidden md:block">
          <Sidebar />
        </div>
        <div className="header-footer-content-wrapper w-full">
          <Header />
          <Outlet/>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
