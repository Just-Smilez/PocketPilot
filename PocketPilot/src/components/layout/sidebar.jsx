import {
  FiHome,
  FiList,
  FiBarChart2,
  FiSettings,
} from "react-icons/fi";

function Sidebar() {
  return (
    <aside className="w-64 min-h-[calc(100vh-73px)] bg-white border-r border-gray-200 p-4">
      <nav className="space-y-2">

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-50 text-blue-600 font-medium transition-all duration-200 hover:bg-blue-100"
        >
          <FiHome />
          Dashboard
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 font-medium transition-all duration-200 hover:bg-gray-100 hover:text-blue-600"
        >
          <FiList />
          Transactions
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 font-medium transition-all duration-200 hover:bg-gray-100 hover:text-blue-600"
        >
          <FiBarChart2 />
          Analytics
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 font-medium transition-all duration-200 hover:bg-gray-100 hover:text-blue-600"
        >
          <FiSettings />
          Settings
        </a>

      </nav>
    </aside>
  );
}

export default Sidebar;