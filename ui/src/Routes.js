import React, { useContext, useEffect } from "react";
import TicketContext from "./TicketContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import SignIn from "./pages/signin/";
import CreateTicket from "./pages/createticket/";
import ListTickets from "./pages/listtitcket";

export default function AppRoute() {
  const { state } = useContext(TicketContext);

  useEffect(() => {}, []);

  return (
    <Router>
      <Switch>
        {!state.isLoggedIn ? (
          <Route exact path="/" component={SignIn} />
        ) : (
          <Route exact path="/create" component={CreateTicket} />
        )}
        {!state.isLoggedIn ? <Redirect to="/" /> : null}
      </Switch>
    </Router>
  );
}
