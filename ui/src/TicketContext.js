import React from "react";

const ticketContext = React.createContext({
  tickets: [],
  isLoggedIn: false,
  isAdmin: false,
  isLoading: false
});

export default ticketContext;
