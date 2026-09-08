function TransactionList({ transactions, onDelete }) {
  return (
    <div className="mt-8 bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-bold text-gray-800">
        Recent Transactions
      </h2>

      <div className="mt-4">
        {transactions.length === 0 ? (
          <p className="text-gray-500">
            No transactions yet.
          </p>
        ) : (
          transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between border-b py-4"
            >
              <div>
                <p className="font-semibold text-gray-800">
                  {transaction.category}
                </p>

                <p className="text-sm text-gray-500">
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
                  className="text-sm text-red-500 hover:text-red-700"
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