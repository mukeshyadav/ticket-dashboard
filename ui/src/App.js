import React, { useContext, useReducer, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TicketContext from "./TicketContext";
import TicketReducer from "./TicketReducer";
import AppRoute from "./Routes";

import { LOCALSTORAGE_NAME } from "./AppConfig";

export default function App() {
  const initialAppState = useContext(TicketContext);
  const [state, dispatch] = useReducer(TicketReducer, initialAppState);

  useEffect(() => {
    const storageData = localStorage.getItem(LOCALSTORAGE_NAME);
    if (storageData) {
      dispatch({ type: "STORE_DATA", payload: JSON.parse(storageData) });
    }
  }, []);
  return (
    <Router>
      <TicketContext.Provider value={{ state, dispatch }}>
        <div className="flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-10 h-16 items-center">
          <div className="w-full max-w-screen-xl relative mx-auto px-6">
            <div className="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
              Ticket Dashboard
            </div>
          </div>
        </div>
        <div className="w-full max-w-screen-xl relative mx-auto px-6">
          <div className="pt-20 pl-6">
            <AppRoute />
          </div>
        </div>
      </TicketContext.Provider>
    </Router>
  );
}
