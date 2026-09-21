import { useState } from "react";
import { FiMoon, FiSun, FiTrash2, FiUser } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

function Settings() {
  const { darkMode, toggleDarkMode } = useTheme();

  const [name, setName] = useState(
    localStorage.getItem("userName") || "Kamaldeen"
  );

  const [currency, setCurrency] = useState(
    localStorage.getItem("currency") || "NGN"
  );

  const [notifications, setNotifications] = useState(
    localStorage.getItem("notifications") !== "false"
  );

  const saveName = () => {
    const trimmedName = name.trim();

    if (!trimmedName) {
      return;
    }

    localStorage.setItem("userName", trimmedName);
    setName(trimmedName);
  };

  const handleCurrencyChange = (e) => {
    const value = e.target.value;

    setCurrency(value);
    localStorage.setItem("currency", value);
  };

  const handleNotificationsChange = () => {
    const newValue = !notifications;

    setNotifications(newValue);
    localStorage.setItem("notifications", String(newValue));
  };

  const handleClearTransactions = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all transactions? This action cannot be undone."
    );

    if (!confirmed) {
      return;
    }

    localStorage.removeItem("transactions");

    window.location.reload();
  };

  return (
    <div>
      {/* Header */}
      <div>
        <h2
          className={`text-3xl md:text-4xl font-bold ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Settings
        </h2>

        <p
          className={`mt-2 ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Manage your PocketPilot preferences.
        </p>
      </div>

      {/* Profile */}
      <div
        className={`mt-8 rounded-xl border shadow-sm p-5 sm:p-6 ${
          darkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200"
        }`}
      >
        <div className="flex items-center gap-3 mb-6">
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              darkMode
                ? "bg-blue-900/30 text-blue-400"
                : "bg-blue-50 text-blue-600"
            }`}
          >
            <FiUser />
          </div>

          <div>
            <h3
              className={`text-lg font-bold ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Profile
            </h3>

            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-400"
              }`}
            >
              Personalize your account.
            </p>
          </div>
        </div>

        <label
          className={`block text-sm font-medium mb-2 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Your name
        </label>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`flex-1 rounded-lg border px-4 py-2.5 outline-none transition-all ${
              darkMode
                ? "bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500"
                : "bg-white border-gray-300 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            }`}
            placeholder="Enter your name"
          />

          <button
            onClick={saveName}
            className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-all"
          >
            Save
          </button>
        </div>
      </div>

      {/* Appearance */}
      <div
        className={`mt-6 rounded-xl border shadow-sm p-5 sm:p-6 ${
          darkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200"
        }`}
      >
        <h3
          className={`text-lg font-bold ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Appearance
        </h3>

        <p
          className={`text-sm mt-1 ${
            darkMode ? "text-gray-400" : "text-gray-400"
          }`}
        >
          Choose how PocketPilot looks.
        </p>

        <button
          onClick={toggleDarkMode}
          className={`mt-5 w-full flex items-center justify-between p-4 rounded-lg border transition-all ${
            darkMode
              ? "border-gray-700 bg-gray-900 hover:bg-gray-700"
              : "border-gray-200 bg-gray-50 hover:bg-gray-100"
          }`}
        >
          <div className="flex items-center gap-3">
            {darkMode ? (
              <FiSun className="text-xl text-yellow-400" />
            ) : (
              <FiMoon className="text-xl text-gray-500" />
            )}

            <div className="text-left">
              <p
                className={`font-medium ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {darkMode ? "Dark Mode" : "Light Mode"}
              </p>

              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {darkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode"}
              </p>
            </div>
          </div>

          <div
            className={`w-11 h-6 rounded-full p-1 transition-colors ${
              darkMode ? "bg-blue-600" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full transition-transform ${
                darkMode ? "translate-x-5" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Preferences */}
      <div
        className={`mt-6 rounded-xl border shadow-sm p-5 sm:p-6 ${
          darkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200"
        }`}
      >
        <h3
          className={`text-lg font-bold ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Preferences
        </h3>

        <p
          className={`text-sm mt-1 ${
            darkMode ? "text-gray-400" : "text-gray-400"
          }`}
        >
          Customize how your financial information is displayed.
        </p>

        {/* Currency */}
        <div className="mt-6">
          <label
            className={`block text-sm font-medium mb-2 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Currency
          </label>

          <select
            value={currency}
            onChange={handleCurrencyChange}
            className={`w-full rounded-lg border px-4 py-2.5 outline-none ${
              darkMode
                ? "bg-gray-900 border-gray-700 text-white"
                : "bg-white border-gray-300 text-gray-800"
            }`}
          >
            <option value="NGN">₦ Nigerian Naira</option>
            <option value="USD">$ US Dollar</option>
            <option value="GBP">£ British Pound</option>
            <option value="EUR">€ Euro</option>
          </select>
        </div>

        {/* Notifications */}
        <div className="mt-6 flex items-center justify-between gap-4">
          <div>
            <p
              className={`font-medium ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Notifications
            </p>

            <p
              className={`text-sm mt-1 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Receive financial reminders and updates.
            </p>
          </div>

          <button
            onClick={handleNotificationsChange}
            className={`w-11 h-6 rounded-full p-1 transition-colors shrink-0 ${
              notifications ? "bg-blue-600" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full transition-transform ${
                notifications ? "translate-x-5" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Danger Zone */}
      <div
        className={`mt-6 rounded-xl border p-5 sm:p-6 ${
          darkMode
            ? "bg-red-950/20 border-red-900/50"
            : "bg-red-50 border-red-100"
        }`}
      >
        <div className="flex items-start gap-3">
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
              darkMode
                ? "bg-red-900/30 text-red-400"
                : "bg-red-100 text-red-600"
            }`}
          >
            <FiTrash2 />
          </div>

          <div className="flex-1">
            <h3
              className={`text-lg font-bold ${
                darkMode ? "text-red-400" : "text-red-700"
              }`}
            >
              Danger Zone
            </h3>

            <p
              className={`text-sm mt-1 ${
                darkMode ? "text-red-300/70" : "text-red-600"
              }`}
            >
              Permanently remove all your saved transactions.
            </p>

            <button
              onClick={handleClearTransactions}
              className="mt-4 px-4 py-2.5 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition-all"
            >
              Clear All Transactions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;