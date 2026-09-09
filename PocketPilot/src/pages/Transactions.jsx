function Transactions({ transactions, onDelete }) {
  return (
    <div>
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Transactions
          </h2>

          <p className="text-gray-500 mt-2">
            Keep track of your income and expenses.
          </p>
        </div>

        <div className="hidden sm:block text-sm text-gray-400">
          {transactions.length} transaction
          {transactions.length !== 1 ? "s" : ""}
        </div>
      </div>

      {/* Transaction Card */}
      <div className="mt-8 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

        {/* Card Header */}
        <div className="px-6 py-5 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800">
            All Transactions
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            Your complete transaction history
          </p>
        </div>

        {/* Transactions */}
        <div className="px-6">
          {transactions.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-gray-500 font-medium">
                No transactions yet.
              </p>

              <p className="text-sm text-gray-400 mt-1">
                Your transactions will appear here once you add one.
              </p>
            </div>
          ) : (
            transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between gap-4 py-5 border-b border-gray-100 last:border-b-0"
              >
                {/* Left */}
                <div className="min-w-0">
                  <p className="font-semibold text-gray-800 capitalize">
                    {transaction.category}
                  </p>

                  <p className="text-sm text-gray-500 mt-1 truncate">
                    {transaction.description || "No description"}
                  </p>

                  <p className="text-xs text-gray-400 mt-1 capitalize">
                    {transaction.type}
                  </p>
                </div>

                {/* Right */}
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
    </div>
  );
}

export default Transactions;