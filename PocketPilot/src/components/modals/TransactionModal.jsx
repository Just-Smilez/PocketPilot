import { useState } from "react";

function TransactionModal({ onClose, onSave }) {
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = () => {
  const transaction = {
    type,
    amount,
    category,
    description,
  };

  onSave(transaction);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white w-full max-w-md rounded-xl p-6 shadow-xl">
        <h2 className="text-2xl font-bold text-gray-800">
          Add Transaction
        </h2>

        <p className="text-gray-500 mt-1">
          Record your income or expense.
        </p>

        <div className="mt-6">
         <label className="block text-sm font-medium text-gray-700 mb-2">
            Type
         </label>

         <select
           value={type}
           onChange={(e) => setType(e.target.value)}
           className="w-full border border-gray-300 rounded-lg px-3 py-2">
         <option value="income">Income</option>
         <option value="expense">Expense</option>
         </select>

        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Amount
          </label>

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2">
          <option value="">Select a category</option>
          <option value="salary">Salary</option>
          <option value="business">Business</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="shopping">Shopping</option>
          <option value="bills">Bills</option>
          <option value="other">Other</option>
          </select>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. July salary"
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800">
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Save Transaction
          </button>
        </div>

      </div>
    </div>
  );
}

export default TransactionModal;