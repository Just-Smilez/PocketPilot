import {
  FiDollarSign,
  FiTrendingUp,
  FiTrendingDown,
} from "react-icons/fi";

function BalanceCard({ title, amount }) {
  const isIncome = title === "Income";
  const isExpense = title === "Expenses";

  const Icon = isIncome
    ? FiTrendingUp
    : isExpense
    ? FiTrendingDown
    : FiDollarSign;

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>

          <p className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
            {amount}
          </p>
        </div>

        <div
          className={`p-3 rounded-lg ${
            isIncome
              ? "bg-green-50 text-green-600"
              : isExpense
              ? "bg-red-50 text-red-600"
              : "bg-blue-50 text-blue-600"
          }`}
        >
          <Icon className="text-xl" />
        </div>

      </div>
    </div>
  );
}

export default BalanceCard;