import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import BreadCrumb from "./BreadCrumb";

const DashboardLayout = () => {
  return (
    <>
      <div className="dashboard__layout">
        <Sidebar />

        <div className="dashboard__content">
          <Header />

          <div className="main__content-area">
            <div className="breadcrumb__height">
              <BreadCrumb />
            </div>

            <main className="main__content">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
