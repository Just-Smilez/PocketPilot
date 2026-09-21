import {
  FiHome,
  FiList,
  FiBarChart2,
  FiSettings,
} from "react-icons/fi";

import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

function Sidebar({ onNavigate }) {
  const { darkMode } = useTheme();

  const navItems = [
    {
      to: "/",
      label: "Dashboard",
      icon: FiHome,
    },
    {
      to: "/transactions",
      label: "Transactions",
      icon: FiList,
    },
    {
      to: "/analytics",
      label: "Analytics",
      icon: FiBarChart2,
    },
    {
      to: "/settings",
      label: "Settings",
      icon: FiSettings,
    },
  ];

  return (
    <aside
      className={`w-64 min-h-screen p-4 border-r transition-colors duration-200 ${
        darkMode
          ? "bg-gray-800 border-gray-700"
          : "bg-white border-gray-200"
      }`}
    >
      <nav className="space-y-2">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            onClick={onNavigate}
            className={({ isActive }) =>
              `group flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                isActive
                  ? darkMode
                    ? "bg-blue-600/15 text-blue-400 shadow-sm"
                    : "bg-blue-50 text-blue-600 shadow-sm"
                  : darkMode
                  ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon
                  className={`text-xl transition-transform duration-200 ${
                    isActive
                      ? "scale-110"
                      : "group-hover:scale-110"
                  }`}
                />

                <span>{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;