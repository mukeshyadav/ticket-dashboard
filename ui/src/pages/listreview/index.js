import React, { useState, useContext, useEffect } from "react";
import useFetch from "use-http";
import { useParams } from "react-router-dom";

import { API_URL, ERROR_MESSAGE } from "../../AppConfig";
import TableContext from "../../TicketContext";

export default function ListReview() {
  const { state, dispatch } = useContext(TableContext);
  const { get, response, loading, error } = useFetch(API_URL, {
    headers: {
      authorization: state.token
    }
  });
  const [ticketInfo, setTicketIfo] = useState({});
  let { id } = useParams();

  useEffect(() => {
    loadResults();
  }, [id]);

  const loadResults = async () => {
    dispatch({ type: "SHOW_LOADER", payload: loading });
    const result = await get(`/stories/${id}`);
    if (response.ok) {
      setTicketIfo(result);
      dispatch({ type: "HIDE_LOADER", payload: loading });
    }
  };

  const reviewStatus = status => {
    console.log(status);
  };

  const {
    summary,
    description,
    type,
    complexity,
    estimatedHrs,
    cost
  } = ticketInfo;

  return (
    <div className="max-w-xlg rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="flex mb-4">
          <div className="w-1/6 h-12 font-semibold">Summary</div>
          <div className="w-1/2 h-12">{summary}</div>
        </div>
        <div className="flex mb-4">
          <div className="w-1/6 h-12 font-semibold">Description</div>
          <div className="w-1/2 h-12">{description}</div>
        </div>
        <div className="flex mb-4">
          <div className="w-1/6 h-12 font-semibold">Type</div>
          <div className="w-1/4 h-12">{type}</div>
          <div className="w-1/6 h-12 font-semibold">Complexity</div>
          <div className="w-1/4 h-12">{complexity}</div>
        </div>
        <div className="flex mb-4">
          <div className="w-1/6 h-12 font-semibold">Estimated Time</div>
          <div className="w-1/4 h-12">{estimatedHrs}</div>
          <div className="w-1/6 h-12 font-semibold">Cost</div>
          <div className="w-1/4 h-12">{cost}</div>
        </div>
      </div>
      <div className="px-6 py-4">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={e => reviewStatus("accept")}
        >
          Accept
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
          onClick={e => reviewStatus("reject")}
        >
          Reject
        </button>
      </div>
    </div>
  );
}
