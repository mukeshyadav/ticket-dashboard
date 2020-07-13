import React, { useContext } from "react";
import TicketContext from "./TicketContext";
import { Switch, Route } from "react-router-dom";

import SignIn from "./pages/signin/";
import CreateTicket from "./pages/createticket/";
import ListTickets from "./pages/listtitcket";
import ListReview from "./pages/listreview";

import Loader from "./components/Loader";

export default function AppRoute() {
  const { state } = useContext(TicketContext);

  return (
    <>
      <Switch>
        {!state.isLoggedIn && <Route path="/" component={SignIn} />}
        {state.isLoggedIn && state.role === "user" && (
          <>
            <Route exact path={["/", "/create"]} component={CreateTicket} />
            <Route path="/list" component={ListTickets} />
          </>
        )}
        {state.isLoggedIn && state.role === "admin" && (
          <>
            <Route exact path={["/", "/list"]} component={ListTickets} />
            <Route exact path="/review/:id?" component={ListReview} />
          </>
        )}
      </Switch>
      {state.isLoading && <Loader />}
    </>
  );
}
