function BalanceCard({ title, amount }) {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1">
      <h3 className="text-sm font-medium text-gray-500">
        {title}
      </h3>

      <p className="text-3xl font-bold text-gray-800 mt-3">
        {amount}
      </p>
    </div>
  );
}

export default BalanceCard;