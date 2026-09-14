import {
  FiHome,
  FiList,
  FiBarChart2,
  FiSettings,
} from "react-icons/fi";

import { NavLink } from "react-router-dom";

function Sidebar({ onNavigate }) {
  return (
    <aside className="w-64 h-full min-h-screen bg-white border-r border-gray-200 p-4">
      <nav className="space-y-2">

        <NavLink
          onClick={onNavigate}
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
              isActive
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
            }`
          }
        >
          <FiHome />
            Dashboard
        </NavLink>

        <NavLink
          onClick={onNavigate}
          to="/transactions"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
              isActive
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
            }`
          }
        >
          <FiList />
            Transactions
        </NavLink>

        <NavLink
          onClick={onNavigate}
          to="/analytics"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
              isActive
                ?  "bg-blue-50 text-blue-600"
                : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
            }`
          }
        >
          <FiBarChart2 />
            Analytics
        </NavLink>

        <NavLink
          onClick={onNavigate}
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
              isActive
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
            }`
          }
        >
          <FiSettings />
            Settings
        </NavLink>

      </nav>
    </aside>
  );
}

export default Sidebar;