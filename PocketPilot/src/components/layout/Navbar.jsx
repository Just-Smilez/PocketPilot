import { GiTakeMyMoney } from "react-icons/gi";

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="flex gap-4 text-3xl font-bold text-blue-600">
          PocketPilot
          <GiTakeMyMoney className="text-blue text-4xl" />
        </h1>

        <div className="flex items-center gap-4">
          <button className="text-xl">
            🌙
          </button>

          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
            K
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;