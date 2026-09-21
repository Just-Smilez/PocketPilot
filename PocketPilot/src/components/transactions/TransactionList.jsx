import { FiTrash2 } from "react-icons/fi";

function TransactionList({ transactions, onDelete, darkMode }) {
  return (
    <div
      className={`mt-8 rounded-xl border shadow-sm overflow-hidden transition-colors duration-200 ${
        darkMode
          ? "bg-gray-800 border-gray-700"
          : "bg-white border-gray-200"
      }`}
    >
      {/* Header */}
      <div
        className={`px-6 py-5 border-b flex items-center justify-between ${
          darkMode
            ? "border-gray-700"
            : "border-gray-100"
        }`}
      >
        <div>
          <h2
            className={`text-xl font-bold ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Recent Transactions
          </h2>

          <p
            className={`text-sm mt-1 ${
              darkMode ? "text-gray-400" : "text-gray-400"
            }`}
          >
            Your latest income and expenses
          </p>
        </div>

        {transactions.length > 0 && (
          <span
            className={`text-sm ${
              darkMode ? "text-gray-400" : "text-gray-400"
            }`}
          >
            {transactions.length} total
          </span>
        )}
      </div>

      {/* Transactions */}
      <div className="px-6">
        {transactions.length === 0 ? (
          <div className="py-12 text-center">
            <p
              className={`font-medium ${
                darkMode ? "text-gray-300" : "text-gray-500"
              }`}
            >
              No transactions yet.
            </p>

            <p
              className={`text-sm mt-1 ${
                darkMode ? "text-gray-500" : "text-gray-400"
              }`}
            >
              Add your first transaction to get started.
            </p>
          </div>
        ) : (
          transactions
            .slice(-5)
            .reverse()
            .map((transaction) => (
              <div
                key={transaction.id}
                className={`flex items-center justify-between gap-4 py-5 border-b last:border-b-0 transition-colors duration-200 ${
                  darkMode
                    ? "border-gray-700 hover:bg-gray-750"
                    : "border-gray-100 hover:bg-gray-50"
                }`}
              >
                {/* Transaction info */}
                <div className="min-w-0">
                  <p
                    className={`font-semibold capitalize ${
                      darkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {transaction.category}
                  </p>

                  <p
                    className={`text-sm mt-1 truncate ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {transaction.description || "No description"}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
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

                {/* Amount + Delete */}
                <div className="flex items-center gap-3 shrink-0">
                  <p
                    className={`font-semibold ${
                      transaction.type === "income"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {transaction.type === "income"
                      ? "+"
                      : "-"}
                    ₦
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
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  );
}

export default TransactionList;