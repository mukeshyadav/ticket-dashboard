import React, { useContext, useEffect, useState } from "react";
import useFetch from "use-http";

import Error from "../../components/Error";
import TableList from "../../components/TableList";
import { API_URL, ERROR_MESSAGE } from "../../AppConfig";
import TicketContext from "../../TicketContext";
import { sortBy } from "../../Utils";

export default function ListTickets() {
  const { state, dispatch } = useContext(TicketContext);
  const [isRecords, setRecordsAvailable] = useState(false);
  const { get, response, loading, error } = useFetch(API_URL, {
    headers: {
      authorization: state.token
    }
  });

  useEffect(() => {
    if (!state.tickets.length) {
      loadResults();
    }
  }, []);

  const loadResults = async () => {
    dispatch({ type: "SHOW_LOADER", payload: loading });
    const result = await get("/stories");
    if (response.ok) {
      dispatch({ type: "LIST_TICKETS", payload: result });
      dispatch({ type: "HIDE_LOADER", payload: loading });
    }
  };

  const sortTicketBy = key => {
    let filtered = state.tickets.sort(sortBy(key, true));
    dispatch({ type: "FILTER_TICKETS", payload: filtered });
  };

  const filterTicketBy = (key, val) => {
    if (!val) return;
    let filtered = state.tickets.filter(tkt => tkt[key] === val);
    if (filtered.length) {
      dispatch({ type: "FILTER_TICKETS", payload: filtered });
    } else {
      setRecordsAvailable(true);
    }
  };

  return (
    <>
      <h2 className="text-xl font-semibold pb-2 pt-2">Tickets</h2>
      {error && <Error message={ERROR_MESSAGE.FAILED} />}
      {isRecords && <Error message={ERROR_MESSAGE.NORESULT} />}
      {!error && state.tickets.length ? (
        <TableList
          lists={state.filtered}
          isAdmin={state.isAdmin}
          onSortTicketBy={sortTicketBy}
          onFilterTicketBy={filterTicketBy}
        />
      ) : (
        <Error message={ERROR_MESSAGE.NOTICKET} />
      )}
    </>
  );
}
