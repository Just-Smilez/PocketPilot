function TransactionList({ transactions, onDelete }) {
  return (
    <div className="mt-8 bg-white border border-gray-200 rounded-xl shadow-sm p-6">
      
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Recent Transactions
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            Your latest income and expenses
          </p>
        </div>

        <span className="text-sm text-gray-400">
          {transactions.length} transaction
          {transactions.length !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="mt-6">
        {transactions.length === 0 ? (
          <div className="py-10 text-center">
            <p className="text-gray-500">
              No transactions yet.
            </p>

            <p className="text-sm text-gray-400 mt-1">
              Add your first transaction to get started.
            </p>
          </div>
        ) : (
          transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between border-b border-gray-100 py-4 last:border-b-0"
            >
              <div>
                <p className="font-semibold text-gray-800 capitalize">
                  {transaction.category}
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  {transaction.description}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <p
                  className={`font-bold ${
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
                  className="text-sm text-gray-400 hover:text-red-600 transition-colors duration-200"
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