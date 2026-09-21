import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

import BalanceCard from "../components/cards/BalanceCard";
import TransactionModal from "../components/modals/TransactionModal";
import TransactionList from "../components/transactions/TransactionList";

function Dashboard({
  transactions,
  onSaveTransaction,
  onDeleteTransaction,
}) {
  const { darkMode } = useTheme();

  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleSave = (transaction) => {
    onSaveTransaction(transaction);
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Header */}
      <div>
        <h2
          className={`text-3xl md:text-4xl font-bold ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Good Evening 👋
        </h2>

        <p
          className={`mt-2 ${
            darkMode ? "text-gray-300" : "text-gray-500"
          }`}
        >
          Welcome back, Kamaldeen.
        </p>

        <p
          className={`text-sm mt-1 ${
            darkMode ? "text-gray-400" : "text-gray-400"
          }`}
        >
          Manage your money with confidence.
        </p>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <BalanceCard
          title="Current Balance"
          amount={`₦${balance.toLocaleString()}`}
          darkMode={darkMode}
        />

        <BalanceCard
          title="Income"
          amount={`₦${income.toLocaleString()}`}
          darkMode={darkMode}
        />

        <BalanceCard
          title="Expenses"
          amount={`₦${expenses.toLocaleString()}`}
          darkMode={darkMode}
        />
      </div>

      {/* Recent Transactions */}
      <TransactionList
        transactions={transactions}
        onDelete={onDeleteTransaction}
        darkMode={darkMode}
      />

      {/* Add Transaction */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-6 bg-blue-600 text-white px-5 py-3 rounded-lg font-medium shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md hover:-translate-y-0.5"
      >
        + Add Transaction
      </button>

      {/* Modal */}
      {isModalOpen && (
        <TransactionModal
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}

export default Dashboard;