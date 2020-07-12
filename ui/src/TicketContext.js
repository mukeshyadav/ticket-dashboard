import React from "react";

const ticketContext = React.createContext({
  tickets: [],
  isLoggedIn: true,
  isAdmin: false
});

export default ticketContext;
