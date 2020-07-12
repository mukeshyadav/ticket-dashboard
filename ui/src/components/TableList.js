import React from "react";

export default function TableList({ lists, isAdmin }) {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">ID</th>
          <th className="px-4 py-2">Summary</th>
          <th className="px-4 py-2">Description</th>
          <th className="px-4 py-2">Type</th>
          <th className="px-4 py-2">Complexity</th>
          <th className="px-4 py-2">Estimated time for completion</th>
          <th className="px-4 py-2">Cost</th>
        </tr>
      </thead>
      <tbody>
        {lists.map((list, i) => {
          const {
            id,
            summary,
            description,
            type,
            complexity,
            estimatedHrs,
            cost,
            status
          } = list;
          const statusColor =
            status === "accepted"
              ? "bg-green-100"
              : status === "rejected"
              ? "bg-red-100"
              : "bg-gray-400";

          return (
            <tr
              className={`${i % 2 === 0 && "bg-gray-200"} ${isAdmin &&
                statusColor}`}
            >
              <td className="border px-4 py-2">{id}</td>
              <td className="border px-4 py-2">{summary}</td>
              <td className="border px-4 py-2">{description}</td>
              <td className="border px-4 py-2">{type}</td>
              <td className="border px-4 py-2">{complexity}</td>
              <td className="border px-4 py-2">{estimatedHrs}</td>
              <td className="border px-4 py-2">{cost}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
