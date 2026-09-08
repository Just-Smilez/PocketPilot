import { useEffect, useState } from "react";
import BalanceCard from "../components/cards/BalanceCard";
import TransactionModal from "../components/modals/TransactionModal";
import TransactionList from "../components/transactions/TransactionList";

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");

    return savedTransactions
      ? JSON.parse(savedTransactions)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);

  // Income calculation
  const income = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce(
      (total, transaction) =>
        total + Number(transaction.amount),
      0
    );

  // Expenses calculation
  const expenses = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce(
      (total, transaction) =>
        total + Number(transaction.amount),
      0
    );

  // Balance calculation
  const balance = income - expenses;

  // Save transaction
  const handleSaveTransaction = (transaction) => {
  const newTransaction = {
    ...transaction,
    id: Date.now(),
  };

  setTransactions((prevTransactions) => [
    ...prevTransactions,
    newTransaction,
  ]);

  setIsModalOpen(false);
};

const handleDeleteTransaction = (id) => {
  setTransactions((prevTransactions) =>
    prevTransactions.filter(
      (transaction) => transaction.id !== id
    )
  );
};

return (
  <>
    <h2 className="text-4xl font-bold text-gray-800">
      Good Evening 👋
    </h2>

    <p className="text-gray-500 mt-2">
      Welcome back, Kamaldeen.
    </p>

    <p className="text-gray-500">
      Manage your money with confidence.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      <BalanceCard
        title="Current Balance"
        amount={`₦${balance.toLocaleString()}`}
      />

      <BalanceCard
        title="Income"
        amount={`₦${income.toLocaleString()}`}
      />

      <BalanceCard
        title="Expenses"
        amount={`₦${expenses.toLocaleString()}`}
      />
    </div>

    <TransactionList
      transactions={transactions}
      onDelete={handleDeleteTransaction}
    />

    <button
      onClick={() => setIsModalOpen(true)}
      className="mt-6 bg-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700"
    >
      + Add Transaction
    </button>

    {isModalOpen && (
      <TransactionModal
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveTransaction}
      />
    )}
  </>
);
}

export default Dashboard;
