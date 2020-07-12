import React from "react";

const ticketContext = React.createContext({
  tickets: [],
  isLoggedIn: false,
  isAdmin: false
});

export default ticketContext;
