import React from "react";

export default function Loader() {
  return (
    <div className="w-full  mx-auto flex items-center fixed z-50 top-0 inset-x-0 inset-y-0 bg-gray-100 bg-opacity-75 justify-center">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-16 w-16"></div>
    </div>
  );
}
