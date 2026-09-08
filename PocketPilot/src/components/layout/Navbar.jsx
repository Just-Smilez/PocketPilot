import { GiTakeMyMoney } from "react-icons/gi";

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="px-6 py-4 flex items-center justify-between">

        {/* Brand */}
        <h1 className="flex items-center gap-2 text-2xl font-bold text-blue-600">
          PocketPilot

          <GiTakeMyMoney className="text-blue-600 text-3xl" />
        </h1>

        {/* Right side */}
        <div className="flex items-center gap-3">

          {/* Theme button */}
          <button
            className="p-2 rounded-lg text-gray-500 transition-all duration-200 hover:bg-gray-100 hover:text-gray-800"
            title="Toggle theme"
          >
            🌙
          </button>

          {/* Profile */}
          <button
            className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold transition-all duration-200 hover:bg-blue-700"
            title="Profile"
          >
            K
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;