export default function ticketReducer(state, action) {
  switch (action.type) {
    case "APP_SIGNIN":
      return state;
    case "CREATE_TICKET":
      return state;
    case "LIST_TICKETS":
      return state;
      break;
    default:
      return state;
  }
}
