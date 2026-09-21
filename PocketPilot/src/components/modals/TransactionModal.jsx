import { useState } from "react";
import { FiX } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

function TransactionModal({ onClose, onSave }) {
  const { darkMode } = useTheme();

  const [type, setType] = useState("income");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(
  new Date().toISOString().split("T")[0] );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || !category ) {
      return;
    }

    onSave({
      type,
      amount,
      category,
      description,
      date,
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">

      <div
        className={`w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${
          darkMode
            ? "bg-gray-800 text-white"
            : "bg-white text-gray-800"
        }`}
      >

        {/* Header */}
        <div
          className={`flex items-start justify-between p-6 border-b ${
            darkMode
              ? "border-gray-700"
              : "border-gray-100"
          }`}
        >
          <div>
            <h2
              className={`text-2xl font-bold ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Add Transaction
            </h2>

            <p
              className={`text-sm mt-1 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Record your income or expense.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className={`p-2 rounded-lg transition-all duration-200 ${
              darkMode
                ? "text-gray-400 hover:bg-gray-700 hover:text-white"
                : "text-gray-400 hover:bg-gray-100 hover:text-gray-700"
            }`}
            aria-label="Close modal"
          >
            <FiX className="text-xl" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">

          {/* Type */}
          <div>
            <label
              className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Type
            </label>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className={`w-full rounded-lg px-3 py-2.5 outline-none border transition-all duration-200 ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-900"
                  : "bg-white border-gray-300 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              }`}
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>

          {/* Amount */}
          <div className="mt-4">
            <label
              className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Amount
            </label>

            <div className="relative">
              <span
                className={`absolute left-3 top-1/2 -translate-y-1/2 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                ₦
              </span>

              <input
                type="number"
                min="0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className={`w-full rounded-lg pl-8 pr-3 py-2.5 outline-none border transition-all duration-200 ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-900"
                    : "bg-white border-gray-300 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                }`}
              />
            </div>
          </div>

          {/* Category */}
          <div className="mt-4">
            <label
              className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={`w-full rounded-lg px-3 py-2.5 outline-none border transition-all duration-200 ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-900"
                  : "bg-white border-gray-300 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              }`}
            >
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

          {/* Description */}
          <div className="mt-4">
            <label
              className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Description
            </label>

            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. July salary"
              className={`w-full rounded-lg px-3 py-2.5 outline-none border transition-all duration-200 ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-900"
                  : "bg-white border-gray-300 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              }`}
            />
          </div>

          {/* Date */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date
            </label>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Buttons */}
          <div
            className={`flex flex-col-reverse sm:flex-row sm:justify-end gap-3 mt-6 pt-4 border-t ${
              darkMode
                ? "border-gray-700"
                : "border-gray-100"
            }`}
          >
            <button
              type="button"
              onClick={onClose}
              className={`px-4 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                darkMode
                  ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md hover:-translate-y-0.5"
            >
              Save Transaction
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default TransactionModal;