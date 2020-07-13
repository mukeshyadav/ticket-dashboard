import React from "react";

const ticketContext = React.createContext({
  tickets: [],
  filtered: [],
  isLoggedIn: false,
  isAdmin: false,
  isLoading: false
});

export default ticketContext;
