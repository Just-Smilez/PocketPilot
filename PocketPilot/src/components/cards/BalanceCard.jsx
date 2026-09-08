function BalanceCard({ title, amount }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold text-gray-800">
        {title}
      </h3>

      <p className="text-3xl font-bold text-blue-600 mt-2">
        {amount}
      </p>
    </div>
  );
}

export default BalanceCard;