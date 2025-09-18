import React from "react";

export default function ControlsPanel({ regex, setRegex, flags, toggleFlag }) {
  return (
    <div className="w-full lg:w-1/4 p-4 sm:p-6 mb-4 lg:mb-0 bg-gray-900 rounded-2xl shadow-xl transition-transform transform hover:scale-[1.01] duration-300">
      <label
        htmlFor="regex-input"
        className="block text-lg sm:text-xl font-semibold mb-2 text-indigo-400"
      >
        Regex
      </label>
      <div className="relative">
        <input
          id="regex-input"
          type="text"
          value={regex}
          onChange={(e) => setRegex(e.target.value)}
          className="w-full p-3 sm:p-4 rounded-xl bg-gray-800 border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
          placeholder="e.g., hello"
        />
      </div>
      <div className="mt-4 sm:mt-6">
        <h3 className="text-md sm:text-lg font-semibold mb-2 text-gray-400">
          Flags
        </h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => toggleFlag("g")}
            className={`py-2 px-3 sm:px-4 rounded-full text-sm font-bold transition-colors ${
              flags.includes("g")
                ? "bg-indigo-600 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            g (global)
          </button>
          <button
            onClick={() => toggleFlag("i")}
            className={`py-2 px-3 sm:px-4 rounded-full text-sm font-bold transition-colors ${
              flags.includes("i")
                ? "bg-indigo-600 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            i (case-insensitive)
          </button>
          <button
            onClick={() => toggleFlag("m")}
            className={`py-2 px-3 sm:px-4 rounded-full text-sm font-bold transition-colors ${
              flags.includes("m")
                ? "bg-indigo-600 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            m (multiline)
          </button>
        </div>
      </div>
    </div>
  );
}
