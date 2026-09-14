function Analytics({ transactions }) {
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

  // Group expenses by category
  const expenseByCategory = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((categories, transaction) => {
      const category = transaction.category;
      const amount = Number(transaction.amount);

      categories[category] =
        (categories[category] || 0) + amount;

      return categories;
    }, {});

  return (
    <div>
      {/* Header */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Analytics
        </h2>

        <p className="text-gray-500 mt-2">
          Understand where your money is going.
        </p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 transition-all duration-200 hover:shadow-md">
          <p className="text-sm font-medium text-gray-500">
            Total Income
          </p>

          <p className="text-2xl font-bold text-gray-800 mt-2">
            ₦{income.toLocaleString()}
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 transition-all duration-200 hover:shadow-md">
          <p className="text-sm font-medium text-gray-500">
            Total Expenses
          </p>

          <p className="text-2xl font-bold text-gray-800 mt-2">
            ₦{expenses.toLocaleString()}
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 transition-all duration-200 hover:shadow-md">
          <p className="text-sm font-medium text-gray-500">
            Net Balance
          </p>

          <p className="text-2xl font-bold text-gray-800 mt-2">
            ₦{balance.toLocaleString()}
          </p>
        </div>

      </div>

      {/* Spending Breakdown */}
      <div className="mt-8 bg-white border border-gray-200 rounded-xl shadow-sm p-6">

        <div>
          <h3 className="text-xl font-bold text-gray-800">
            Spending Breakdown
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            See how your expenses are distributed.
          </p>
        </div>

        {expenses === 0 ? (
          <div className="py-12 text-center">
            <p className="text-gray-500">
              No expense data yet.
            </p>

            <p className="text-sm text-gray-400 mt-1">
              Add an expense to see your spending breakdown.
            </p>
          </div>
        ) : (
          <div className="mt-6 space-y-5">
            {Object.entries(expenseByCategory).map(
              ([category, amount]) => {
                const percentage =
                  (amount / expenses) * 100;

                return (
                  <div key={category}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 capitalize">
                        {category}
                      </span>

                      <span className="text-sm font-semibold text-gray-800">
                        ₦{amount.toLocaleString()}
                      </span>
                    </div>

                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 rounded-full transition-all duration-500"
                        style={{
                          width: `${percentage}%`,
                        }}
                      />
                    </div>

                    <p className="text-xs text-gray-400 mt-1">
                      {percentage.toFixed(1)}%
                    </p>
                  </div>
                );
              }
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Analytics;