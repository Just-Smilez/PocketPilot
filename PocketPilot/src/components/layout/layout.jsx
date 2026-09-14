import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar
        onMenuClick={() => setIsSidebarOpen(true)}
      />

      <div className="flex">

        {/* Desktop Sidebar */}
        <aside className="hidden md:block">
          <Sidebar />
        </aside>

        {/* Mobile Sidebar */}
        {isSidebarOpen && (
        <div className="md:hidden">

        {/* Dark Overlay */}
        <div
          className="fixed inset-0 z-40 bg-black/40"
        />

        {/* Sidebar */}
        <div className="fixed top-0 left-0 z-50 h-screen w-64">
          <Sidebar
          onNavigate={() => setIsSidebarOpen(false)}
        />
      </div>

    </div>
        )}

        {/* Main Content */}
        <main className="flex-1 min-w-0 p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>

      </div>
    </div>
  );
}

export default Layout;