export const API_URL = "http://localhost:3000/api/v1";

export const LOCALSTORAGE_NAME = "ticket-dashboard";

export const ERROR_MESSAGE = {
  FAILED: "Something went wrong. Try again!!!"
};

export const appRoutes = {
  user: [
    {
      route: "create",
      title: "Create Ticket",
      component: "CreateTicket"
    },
    {
      route: "list",
      title: "Tickets",
      component: "ListTickets"
    }
  ],
  Admin: [
    {
      route: "list",
      title: "Tickets",
      component: "ListTickets"
    }
  ]
};
