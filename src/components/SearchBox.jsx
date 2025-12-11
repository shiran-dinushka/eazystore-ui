import React from "react";

export default function SearchBox({ label, placeholder, value, handleSearch }) {
  return (
    <div>
      <label className="text-lg font-semibold text-primary">{label}</label>
      <input
        type="text"
        className="px-4 py-2 text-base border rounded-md transition border-primary focus:ring focus:ring-dark focus:outline-none text-gray-800"
        placeholder={placeholder}
        value={value}
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  );
}
