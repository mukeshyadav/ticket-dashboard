export const API_URL = "http://localhost:3000/api/v1";

export const LOCALSTORAGE_NAME = "ticket-dashboard";

export const ERROR_MESSAGE = {
  FAILED: "Something went wrong. Try again!!!",
  NOTICKET:
    'No ticket, <a href="/create" class="text-blue-700">click here</a> to create new'
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
  admin: [
    {
      route: "list",
      title: "Tickets",
      component: "ListTickets"
    }
  ]
};
