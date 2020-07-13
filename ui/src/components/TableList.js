import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function TableList({
  lists,
  isAdmin,
  onSortTicketBy,
  onFilterTicketBy
}) {
  const [selectedDropDownValue, setSelectedDropwDownValue] = useState();
  const history = useHistory();

  useEffect(() => {
    onFilterTicketBy("type", selectedDropDownValue);
  }, [selectedDropDownValue]);

  const moveToReview = id => {
    if (!isAdmin) return;
    history.push(`/review/${id}`);
  };

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">
            <span
              className="flex cursor-pointer"
              onClick={() => onSortTicketBy("id")}
            >
              ID <i className="ico-down"></i>
            </span>
          </th>
          <th className="px-4 py-2">Summary</th>
          <th className="px-4 py-2">Description</th>
          <th className="px-4 py-2">
            Type{" "}
            <div className="relative">
              <select
                className={`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                id="type"
                name="type"
                onChange={e => setSelectedDropwDownValue(e.currentTarget.value)}
              >
                <option>Filter By:</option>
                <option value="enhancement">Enhancement</option>
                <option value="bugfix">Bugfix</option>
                <option value="development">Development</option>
                <option value="qa">QA</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <i className="ico-down"></i>
              </div>
            </div>
          </th>
          <th className="px-4 py-2">
            <span
              className="flex cursor-pointer"
              onClick={() => onSortTicketBy("complexity")}
            >
              Complexity <i className="ico-down"></i>
            </span>
          </th>
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
                statusColor} ${isAdmin && "cursor-pointer"}`}
              key={id}
              onClick={e => moveToReview(id)}
            >
              <td className="border px-4 py-2">{id} </td>
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
