import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useTheme } from "../../context/ThemeContext";

function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { darkMode } = useTheme();

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-gray-900 text-white"
          : "min-h-screen bg-gray-100"
      }
    >
      <Navbar
        onMenuClick={() => setIsSidebarOpen(true)}
      />

      <div className="flex">

        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* Mobile Sidebar */}
        {isSidebarOpen && (
          <>
            <div
              onClick={closeSidebar}
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
            />

            <div className="fixed top-0 left-0 z-50 h-screen md:hidden">
              <Sidebar onNavigate={closeSidebar} />
            </div>
          </>
        )}

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