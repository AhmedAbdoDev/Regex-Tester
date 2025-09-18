import React from "react";

export default function ResultsPanel({ regex, matches, error }) {
  return (
    <div className="w-full lg:w-1/4 p-4 sm:p-6 bg-gray-900 rounded-2xl shadow-xl transition-transform transform hover:scale-[1.01] duration-300 flex flex-col">
      <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-indigo-400">
        {error ? "Error" : "Results"}
      </h2>
      {error && (
        <div className="p-3 sm:p-4 bg-red-900 bg-opacity-50 border border-red-800 rounded-xl text-red-300 text-center">
          <p className="font-semibold">{error}</p>
        </div>
      )}

      {!error && regex && (
        <>
          <div className="flex items-center space-x-2 text-lg">
            <span className="text-gray-400">Found:</span>
            <span className="font-bold text-indigo-400">
              {matches.length} matches
            </span>
          </div>
          <div className="max-h-[30vh] overflow-y-auto mt-4">
            <ul className="space-y-2">
              {matches.map((match, index) => (
                <li
                  key={index}
                  className="p-2 bg-gray-800 rounded-lg border border-gray-700 font-mono text-green-400"
                >
                  <span className="text-sm text-gray-500 mr-2">
                    {index + 1}.
                  </span>
                  {match[0]}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {!error && !regex && (
        <div className="text-center p-3 sm:p-4 text-gray-400 bg-gray-800 rounded-xl">
          <p>Enter a regex to see results</p>
        </div>
      )}
    </div>
  );
}
