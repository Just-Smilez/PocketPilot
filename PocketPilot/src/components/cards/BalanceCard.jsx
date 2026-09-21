import {
  FiDollarSign,
  FiTrendingUp,
  FiTrendingDown,
} from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

function BalanceCard({ title, amount }) {
  const { darkMode } = useTheme();

  const isIncome = title === "Income";
  const isExpense = title === "Expenses";

  const Icon = isIncome
    ? FiTrendingUp
    : isExpense
    ? FiTrendingDown
    : FiDollarSign;

  const iconStyle = isIncome
    ? darkMode
      ? "bg-green-900/40 text-green-400"
      : "bg-green-50 text-green-600"
    : isExpense
    ? darkMode
      ? "bg-red-900/40 text-red-400"
      : "bg-red-50 text-red-600"
    : darkMode
    ? "bg-blue-900/40 text-blue-400"
    : "bg-blue-50 text-blue-600";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        darkMode
          ? "bg-gray-800 border-gray-700"
          : "bg-white border-gray-200"
      }`}
    >
      {/* Decorative background */}
      <div
        className={`absolute -right-8 -top-8 w-24 h-24 rounded-full opacity-30 ${
          isIncome
            ? "bg-green-400"
            : isExpense
            ? "bg-red-400"
            : "bg-blue-400"
        }`}
      />

      <div className="relative flex items-start justify-between">
        {/* Text */}
        <div className="min-w-0">
          <p
            className={`text-sm font-medium ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {title}
          </p>

          <p
            className={`text-2xl md:text-3xl font-bold mt-2 break-all ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            {amount}
          </p>

          <p
            className={`text-xs mt-3 ${
              darkMode ? "text-gray-500" : "text-gray-400"
            }`}
          >
            {isIncome
              ? "Money coming in"
              : isExpense
              ? "Money going out"
              : "Available funds"}
          </p>
        </div>

        {/* Icon */}
        <div
          className={`p-3 rounded-xl shrink-0 ${iconStyle}`}
        >
          <Icon className="text-xl" />
        </div>
      </div>
    </div>
  );
}

export default BalanceCard;