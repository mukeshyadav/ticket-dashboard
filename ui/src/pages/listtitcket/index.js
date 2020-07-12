import React, { useContext, useEffect } from "react";
import useFetch from "use-http";

import Error from "../../components/Error";
import TableList from "../../components/TableList";
import { API_URL, ERROR_MESSAGE } from "../../AppConfig";
import TicketContext from "../../TicketContext";

export default function ListTickets() {
  const { state, dispatch } = useContext(TicketContext);
  const { get, response, loading, error } = useFetch(API_URL, {
    headers: {
      authorization: state.token
    }
  });

  useEffect(() => {
    loadResults();
  }, []);

  const loadResults = async () => {
    dispatch({ type: "SHOW_LOADER", payload: loading });
    const result = await get("/stories");
    if (response.ok) {
      dispatch({ type: "LIST_TICKETS", payload: result });
      dispatch({ type: "HIDE_LOADER", payload: loading });
    }
  };
  return (
    <>
      <h2 className="text-xl font-semibold pb-2 pt-2">Tickets</h2>
      {error && <Error message={ERROR_MESSAGE.FAILED} />}
      {!error && <TableList lists={state.tickets} isAdmin={state.isAdmin} />}
    </>
  );
}
