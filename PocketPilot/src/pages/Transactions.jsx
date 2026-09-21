import { useState } from "react";
import {
  FiTrash2,
  FiArrowUpRight,
  FiArrowDownLeft,
  FiPlus,
} from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import TransactionModal from "../components/modals/TransactionModal";

function Transactions({
  transactions,
  onDelete,
  onSaveTransaction,
}) {
  const { darkMode } = useTheme();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2
            className={`text-3xl md:text-4xl font-bold ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Transactions
          </h2>

          <p
            className={`mt-2 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Keep track of your income and expenses.
          </p>
        </div>

        {/* Add Transaction Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-lg bg-blue-600 text-white font-medium shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
        >
          <FiPlus />
          Add Transaction
        </button>
      </div>

      {/* Transaction Count */}
      <div
        className={`mt-4 text-sm sm:hidden ${
          darkMode ? "text-gray-400" : "text-gray-400"
        }`}
      >
        {transactions.length} transaction
        {transactions.length !== 1 ? "s" : ""}
      </div>

      {/* Transaction Card */}
      <div
        className={`mt-6 sm:mt-8 rounded-xl border shadow-sm overflow-hidden transition-colors duration-200 ${
          darkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200"
        }`}
      >
        {/* Card Header */}
        <div
          className={`px-6 py-5 border-b ${
            darkMode
              ? "border-gray-700"
              : "border-gray-100"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3
                className={`text-lg font-semibold ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                All Transactions
              </h3>

              <p
                className={`text-sm mt-1 ${
                  darkMode
                    ? "text-gray-400"
                    : "text-gray-400"
                }`}
              >
                Your complete transaction history
              </p>
            </div>

            {/* Desktop count */}
            <span
              className={`hidden sm:block text-sm ${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-400"
              }`}
            >
              {transactions.length} transaction
              {transactions.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>

        {/* Transactions */}
        <div className="px-4 sm:px-6">
          {transactions.length === 0 ? (
            <div className="py-16 text-center">
              <div
                className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                  darkMode
                    ? "bg-gray-700 text-gray-400"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                <FiArrowUpRight className="text-xl" />
              </div>

              <p
                className={`font-medium ${
                  darkMode
                    ? "text-gray-300"
                    : "text-gray-500"
                }`}
              >
                No transactions yet.
              </p>

              <p
                className={`text-sm mt-1 ${
                  darkMode
                    ? "text-gray-500"
                    : "text-gray-400"
                }`}
              >
                Add your first transaction to get started.
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium transition-all duration-200 hover:bg-blue-700 hover:shadow-md"
              >
                <FiPlus />
                Add Transaction
              </button>
            </div>
          ) : (
            transactions.map((transaction) => {
              const isIncome =
                transaction.type === "income";

              return (
                <div
                  key={transaction.id}
                  className={`flex items-center justify-between gap-3 py-5 border-b last:border-b-0 transition-colors duration-200 ${
                    darkMode
                      ? "border-gray-700 hover:bg-gray-700/50"
                      : "border-gray-100 hover:bg-gray-50"
                  }`}
                >
                  {/* Left */}
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Transaction Icon */}
                    <div
                      className={`hidden sm:flex w-10 h-10 rounded-lg items-center justify-center shrink-0 ${
                        isIncome
                          ? darkMode
                            ? "bg-green-900/30 text-green-400"
                            : "bg-green-50 text-green-600"
                          : darkMode
                          ? "bg-red-900/30 text-red-400"
                          : "bg-red-50 text-red-600"
                      }`}
                    >
                      {isIncome ? (
                        <FiArrowDownLeft />
                      ) : (
                        <FiArrowUpRight />
                      )}
                    </div>

                    {/* Details */}
                    <div className="min-w-0">
                      <p
                        className={`font-semibold capitalize truncate ${
                          darkMode
                            ? "text-white"
                            : "text-gray-800"
                        }`}
                      >
                        {transaction.category}
                      </p>

                      <p
                        className={`text-sm mt-1 truncate ${
                          darkMode
                            ? "text-gray-400"
                            : "text-gray-500"
                        }`}
                      >
                        {transaction.description ||
                          "No description"}
                      </p>

                      <div className="flex items-center gap-2 mt-1">
                      <p
                        className={`text-xs capitalize ${
                          darkMode
                            ? "text-gray-500"
                            : "text-gray-400"
                        }`}
                      >
                        {transaction.type}
                      </p>

                      <span
                        className={`text-xs ${
                          darkMode
                            ? "text-gray-600"
                            : "text-gray-300"
                        }`}
                      >
                        •
                      </span>

                      <p
                        className={`text-xs ${
                          darkMode
                            ? "text-gray-500"
                            : "text-gray-400"
                        }`}
                      >
                        {transaction.date
                          ? new Date(
                              `${transaction.date}T00:00:00`
                            ).toLocaleDateString("en-NG", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })
                          : "No date"}
                      </p>
                      </div>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                    <p
                      className={`font-semibold text-sm sm:text-base ${
                        isIncome
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {isIncome ? "+" : "-"}₦
                      {Number(
                        transaction.amount
                      ).toLocaleString()}
                    </p>

                    <button
                      onClick={() =>
                        onDelete(transaction.id)
                      }
                      className={`p-2 rounded-lg transition-all duration-200 ${
                        darkMode
                          ? "text-gray-400 hover:text-red-400 hover:bg-red-900/30"
                          : "text-gray-400 hover:text-red-600 hover:bg-red-50"
                      }`}
                      title="Delete transaction"
                      aria-label="Delete transaction"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Transaction Modal */}
      {isModalOpen && (
        <TransactionModal
          onClose={() => setIsModalOpen(false)}
          onSave={(transaction) => {
            onSaveTransaction(transaction);
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
}

export default Transactions;