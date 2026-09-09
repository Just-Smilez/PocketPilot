function TransactionList({ transactions, onDelete }) {
  return (
    <div className="mt-8 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

      <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Recent Transactions
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            Your latest income and expenses
          </p>
        </div>

        {transactions.length > 0 && (
          <span className="text-sm text-gray-400">
            {transactions.length} total
          </span>
        )}
      </div>

      <div className="px-6">
        {transactions.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-gray-500 font-medium">
              No transactions yet.
            </p>

            <p className="text-sm text-gray-400 mt-1">
              Add your first transaction to get started.
            </p>
          </div>
        ) : (
          transactions.slice(-5).reverse().map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between gap-4 py-5 border-b border-gray-100 last:border-b-0"
            >
              <div className="min-w-0">
                <p className="font-semibold text-gray-800 capitalize">
                  {transaction.category}
                </p>

                <p className="text-sm text-gray-500 mt-1 truncate">
                  {transaction.description || "No description"}
                </p>
              </div>

              <div className="flex items-center gap-5 shrink-0">
                <p
                  className={`font-semibold ${
                    transaction.type === "income"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {transaction.type === "income" ? "+" : "-"}₦
                  {Number(transaction.amount).toLocaleString()}
                </p>

                <button
                  onClick={() => onDelete(transaction.id)}
                  className="text-sm text-gray-400 transition-colors duration-200 hover:text-red-600"
                >
                  Delete
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