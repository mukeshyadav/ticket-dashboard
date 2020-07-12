import React, { useContext } from "react";
import TicketContext from "./TicketContext";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

import SignIn from "./pages/signin/";
import CreateTicket from "./pages/createticket/";
import ListTickets from "./pages/listtitcket";

import Loader from "./components/Loader";

export default function AppRoute() {
  const { state } = useContext(TicketContext);
  let history = useHistory();

  if (!state.isLoggedIn) {
    history.push("/");
  }
  if (state.isLoggedIn && state.isAdmin) {
    history.push("/list");
  }
  if (state.isLoggedIn && !state.isAdmin) {
    history.push("/create");
  }

  return (
    <>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/create" component={CreateTicket} />
        <Route exact path="/list" component={ListTickets} />
        {!state.isLoggedIn && <Redirect to="/" />}
      </Switch>
      {state.isLoading && <Loader />}
    </>
  );
}
