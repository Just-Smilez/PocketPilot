import {
  FiTrendingUp,
  FiTrendingDown,
  FiDollarSign,
  FiPieChart,
} from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

function Analytics({ transactions }) {
  const { darkMode } = useTheme();

  const income = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce(
      (total, transaction) =>
        total + Number(transaction.amount),
      0
    );

  const expenses = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce(
      (total, transaction) =>
        total + Number(transaction.amount),
      0
    );

  const balance = income - expenses;

  const expenseByCategory = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((categories, transaction) => {
      const category = transaction.category;
      const amount = Number(transaction.amount);

      categories[category] =
        (categories[category] || 0) + amount;

      return categories;
    }, {});

  // Sort categories from highest expense to lowest
  const sortedCategories = Object.entries(
    expenseByCategory
  ).sort((a, b) => b[1] - a[1]);

  const expensePercentage =
    income > 0 ? Math.min((expenses / income) * 100, 100) : 0;

  return (
    <div>
      {/* Header */}
      <div>
        <h2
          className={`text-3xl md:text-4xl font-bold ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Analytics
        </h2>

        <p
          className={`mt-2 ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Understand where your money is going.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {/* Income */}
        <div
          className={`rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
            darkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="flex items-start justify-between">
            <div>
              <p
                className={`text-sm font-medium ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Total Income
              </p>

              <p
                className={`text-2xl md:text-3xl font-bold mt-2 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                ₦{income.toLocaleString()}
              </p>

              <p
                className={`text-xs mt-3 ${
                  darkMode ? "text-gray-500" : "text-gray-400"
                }`}
              >
                Total money received
              </p>
            </div>

            <div
              className={`p-3 rounded-xl ${
                darkMode
                  ? "bg-green-900/30 text-green-400"
                  : "bg-green-50 text-green-600"
              }`}
            >
              <FiTrendingUp className="text-xl" />
            </div>
          </div>
        </div>

        {/* Expenses */}
        <div
          className={`rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
            darkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="flex items-start justify-between">
            <div>
              <p
                className={`text-sm font-medium ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Total Expenses
              </p>

              <p
                className={`text-2xl md:text-3xl font-bold mt-2 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                ₦{expenses.toLocaleString()}
              </p>

              <p
                className={`text-xs mt-3 ${
                  darkMode ? "text-gray-500" : "text-gray-400"
                }`}
              >
                Total money spent
              </p>
            </div>

            <div
              className={`p-3 rounded-xl ${
                darkMode
                  ? "bg-red-900/30 text-red-400"
                  : "bg-red-50 text-red-600"
              }`}
            >
              <FiTrendingDown className="text-xl" />
            </div>
          </div>
        </div>

        {/* Balance */}
        <div
          className={`rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:col-span-2 lg:col-span-1 ${
            darkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="flex items-start justify-between">
            <div>
              <p
                className={`text-sm font-medium ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Net Balance
              </p>

              <p
                className={`text-2xl md:text-3xl font-bold mt-2 ${
                  balance < 0
                    ? "text-red-500"
                    : darkMode
                    ? "text-white"
                    : "text-gray-800"
                }`}
              >
                ₦{balance.toLocaleString()}
              </p>

              <p
                className={`text-xs mt-3 ${
                  balance < 0
                    ? "text-red-400"
                    : darkMode
                    ? "text-gray-500"
                    : "text-gray-400"
                }`}
              >
                {balance < 0
                  ? "Expenses exceed income"
                  : "Available after expenses"}
              </p>
            </div>

            <div
              className={`p-3 rounded-xl ${
                balance < 0
                  ? darkMode
                    ? "bg-red-900/30 text-red-400"
                    : "bg-red-50 text-red-600"
                  : darkMode
                  ? "bg-blue-900/30 text-blue-400"
                  : "bg-blue-50 text-blue-600"
              }`}
            >
              <FiDollarSign className="text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Income vs Expenses */}
      <div
        className={`mt-6 rounded-2xl border p-6 shadow-sm ${
          darkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200"
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`p-3 rounded-xl ${
              darkMode
                ? "bg-blue-900/30 text-blue-400"
                : "bg-blue-50 text-blue-600"
            }`}
          >
            <FiPieChart />
          </div>

          <div>
            <h3
              className={`text-lg font-bold ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Income vs Expenses
            </h3>

            <p
              className={`text-sm mt-1 ${
                darkMode ? "text-gray-400" : "text-gray-400"
              }`}
            >
              How much of your income has been spent.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between text-sm mb-2">
            <span
              className={
                darkMode ? "text-gray-300" : "text-gray-600"
              }
            >
              Expenses
            </span>

            <span
              className={`font-semibold ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              {expensePercentage.toFixed(1)}%
            </span>
          </div>

          <div
            className={`w-full h-3 rounded-full overflow-hidden ${
              darkMode ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-700"
              style={{
                width: `${expensePercentage}%`,
              }}
            />
          </div>

          <div className="flex justify-between mt-3 text-xs">
            <span
              className={
                darkMode ? "text-gray-500" : "text-gray-400"
              }
            >
              Income: ₦{income.toLocaleString()}
            </span>

            <span
              className={
                darkMode ? "text-gray-500" : "text-gray-400"
              }
            >
              Expenses: ₦{expenses.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Spending Breakdown */}
      <div
        className={`mt-6 rounded-2xl border shadow-sm p-5 sm:p-6 ${
          darkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200"
        }`}
      >
        <div>
          <h3
            className={`text-xl font-bold ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Spending Breakdown
          </h3>

          <p
            className={`text-sm mt-1 ${
              darkMode ? "text-gray-400" : "text-gray-400"
            }`}
          >
            See how your expenses are distributed.
          </p>
        </div>

        {expenses === 0 ? (
          <div className="py-14 text-center">
            <div
              className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                darkMode
                  ? "bg-gray-700 text-gray-400"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              <FiDollarSign className="text-xl" />
            </div>

            <p
              className={`font-medium ${
                darkMode ? "text-gray-300" : "text-gray-500"
              }`}
            >
              No expense data yet.
            </p>

            <p
              className={`text-sm mt-1 ${
                darkMode ? "text-gray-500" : "text-gray-400"
              }`}
            >
              Add an expense to see your spending breakdown.
            </p>
          </div>
        ) : (
          <div className="mt-6 space-y-6">
            {sortedCategories.map(([category, amount]) => {
              const percentage = (amount / expenses) * 100;

              return (
                <div key={category}>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span
                      className={`text-sm font-medium capitalize ${
                        darkMode
                          ? "text-gray-300"
                          : "text-gray-700"
                      }`}
                    >
                      {category}
                    </span>

                    <span
                      className={`text-sm font-semibold ${
                        darkMode
                          ? "text-gray-200"
                          : "text-gray-800"
                      }`}
                    >
                      ₦{amount.toLocaleString()}
                    </span>
                  </div>

                  <div
                    className={`w-full h-2.5 rounded-full overflow-hidden ${
                      darkMode ? "bg-gray-700" : "bg-gray-100"
                    }`}
                  >
                    <div
                      className="h-full bg-blue-600 rounded-full transition-all duration-700"
                      style={{
                        width: `${percentage}%`,
                      }}
                    />
                  </div>

                  <p
                    className={`text-xs mt-1.5 ${
                      darkMode
                        ? "text-gray-500"
                        : "text-gray-400"
                    }`}
                  >
                    {percentage.toFixed(1)}% of total expenses
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Analytics;