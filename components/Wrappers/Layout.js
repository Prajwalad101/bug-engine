import { useState } from "react";

import Navbar from "../Navigation/Navbar";
import Sidebar from "../Navigation/Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Layout({ children, admin, isNavbar }) {
  const isAdmin = admin.current;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <ToastContainer
        autoClose={2000}
        pauseOnFocusLoss={false}
        bodyClassName="font-inter text-sm"
      />
      {isNavbar !== false && (
        <Navbar setSidebarOpen={setSidebarOpen} isAdmin={isAdmin} />
      )}

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        isAdmin={isAdmin}
      />
      <div className="lg:ml-[285px] side-transition font-inter">{children}</div>
    </>
  );
}

export default Layout;
