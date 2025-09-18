import React from "react";

export default function TextEditorPanel({ text, setText }) {
  return (
    <div className="w-full lg:flex-1 p-4 sm:p-6 mb-4 lg:mb-0 bg-gray-900 rounded-2xl shadow-xl font-mono">
      <label
        htmlFor="text-input"
        className="block text-lg sm:text-xl font-semibold mb-2 text-indigo-400"
      >
        Text
      </label>
      <div className="h-48 p-3 sm:p-4 rounded-xl bg-gray-800 border-2 border-gray-700 focus:outline-none focus-within:ring-2 focus-within:ring-indigo-500 transition-colors cursor-text">
        <textarea
          id="text-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-full bg-transparent resize-none text-gray-200 outline-none"
          placeholder="Enter text to test your regex against..."
        />
      </div>
    </div>
  );
}
