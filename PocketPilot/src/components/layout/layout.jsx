import Navbar from "./Navbar";
import Sidebar from "./sidebar";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 max-w-7xl p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;