import React from "react";

export default function Error({ message }) {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-500 p-2 mb-2 rounded"
      role="alert"
    >
      <span className="block sm:inline text-sm">{`ERROR: ${message}`}</span>
    </div>
  );
}
