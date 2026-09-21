import { useState } from "react";
import {
  FiMenu,
  FiMoon,
  FiSun,
  FiSettings,
  FiUser,
  FiLogOut,
  FiChevronDown,
} from "react-icons/fi";
import { GiTakeMyMoney } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

function Navbar({ onMenuClick }) {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navigate = useNavigate();

  const handleSettings = () => {
    setIsProfileOpen(false);
    navigate("/settings");
  };

  return (
    <nav
      className={
        darkMode
          ? "bg-gray-800 border-b border-gray-700"
          : "bg-white border-b border-gray-200"
      }
    >
      <div className="px-4 md:px-6 py-4 flex items-center justify-between">

        {/* Left */}
        <div className="flex items-center gap-3">

          {/* Mobile Menu */}
          <button
            onClick={onMenuClick}
            className={`md:hidden p-2 rounded-lg transition-all duration-200 ${
              darkMode
                ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
            }`}
            aria-label="Open menu"
          >
            <FiMenu className="text-2xl" />
          </button>

          {/* Brand */}
          <h1 className="flex items-center gap-2 text-2xl font-bold text-blue-600">
            PocketPilot
            <GiTakeMyMoney className="text-blue-600 text-3xl" />
          </h1>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 md:gap-3">

          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg transition-all duration-200 ${
              darkMode
                ? "text-yellow-400 hover:bg-gray-700"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
            }`}
            title={
              darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
          >
            {darkMode ? (
              <FiSun className="text-xl" />
            ) : (
              <FiMoon className="text-xl" />
            )}
          </button>

          {/* Profile */}
          <div className="relative">

            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className={`flex items-center gap-2 p-1.5 rounded-lg transition-all duration-200 ${
                darkMode
                  ? "hover:bg-gray-700"
                  : "hover:bg-gray-100"
              }`}
            >
              <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                K
              </div>

              <span
                className={`hidden sm:block text-sm font-medium ${
                  darkMode
                    ? "text-gray-200"
                    : "text-gray-700"
                }`}
              >
                Kamaldeen
              </span>

              <FiChevronDown
                className={`hidden sm:block transition-transform duration-200 ${
                  isProfileOpen ? "rotate-180" : ""
                } ${
                  darkMode
                    ? "text-gray-400"
                    : "text-gray-500"
                }`}
              />
            </button>

            {/* Dropdown */}
            {isProfileOpen && (
              <div
                className={`absolute right-0 mt-3 w-64 rounded-xl border shadow-lg overflow-hidden z-50 ${
                  darkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >

                {/* User Info */}
                <div
                  className={`px-4 py-4 border-b ${
                    darkMode
                      ? "border-gray-700"
                      : "border-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                      K
                    </div>

                    <div className="min-w-0">
                      <p
                        className={`font-semibold truncate ${
                          darkMode
                            ? "text-white"
                            : "text-gray-800"
                        }`}
                      >
                        Kamaldeen
                      </p>

                      <p
                        className={`text-xs truncate ${
                          darkMode
                            ? "text-gray-400"
                            : "text-gray-500"
                        }`}
                      >
                        PocketPilot User
                      </p>
                    </div>
                  </div>
                </div>

                {/* Menu */}
                <div className="p-2">

                  <button
                    onClick={() => {
                      setIsProfileOpen(false);
                      navigate("/settings");
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      darkMode
                        ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                    }`}
                  >
                    <FiSettings />
                    Settings
                  </button>

                  <button
                    onClick={() => setIsProfileOpen(false)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      darkMode
                        ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                    }`}
                  >
                    <FiUser />
                    Profile
                  </button>

                </div>

                {/* Bottom */}
                <div
                  className={`p-2 border-t ${
                    darkMode
                      ? "border-gray-700"
                      : "border-gray-100"
                  }`}
                >
                  <button
                    onClick={() => setIsProfileOpen(false)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      darkMode
                        ? "text-red-400 hover:bg-red-900/30"
                        : "text-red-500 hover:bg-red-50"
                    }`}
                  >
                    <FiLogOut />
                    Logout
                  </button>
                </div>

              </div>
            )}

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;