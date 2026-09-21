import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

function App() {
  // ONE transaction state for the whole application
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");

    return savedTransactions
      ? JSON.parse(savedTransactions)
      : [];
  });

  // Save transactions whenever they change
  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);

  // Add transaction
  const handleSaveTransaction = (transaction) => {
    const newTransaction = {
      ...transaction,
      id: Date.now(),
    };

    setTransactions((prevTransactions) => [
      ...prevTransactions,
      newTransaction,
    ]);
  };

  // Delete transaction
  const handleDeleteTransaction = (id) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter(
        (transaction) => transaction.id !== id
      )
    );
  };

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Dashboard */}
          <Route
            path="/"
            element={
              <Dashboard
                transactions={transactions}
                onSaveTransaction={handleSaveTransaction}
                onDeleteTransaction={handleDeleteTransaction}
              />
            }
          />

          {/* Transactions */}
          <Route
            path="/transactions"
            element={
              <Transactions
                transactions={transactions}
                onDelete={handleDeleteTransaction}
              />
            }
          />

          {/* Analytics */}
          <Route
            path="/analytics"
            element={
              <Analytics
                transactions={transactions}
              />
            }
          />

          {/* Settings */}
          <Route
            path="/settings"
            element={
              <Settings />
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;