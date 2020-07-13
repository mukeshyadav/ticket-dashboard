import React, { useContext, useReducer, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TicketContext from "./TicketContext";
import TicketReducer from "./TicketReducer";
import AppRoute from "./Routes";
import Header from "./components/Header";

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
        <Header />
        <div className="w-full max-w-screen-xl relative mx-auto px-6">
          <div className="pt-20 pl-6">
            <AppRoute />
          </div>
        </div>
      </TicketContext.Provider>
    </Router>
  );
}
