export default function ticketReducer(state, action) {
  switch (action.type) {
    case "APP_SIGNIN":
      const { role, token } = action.payload;
      let isAdmin = role === "Admin" ? true : false;
      return {
        ...state,
        isLoggedIn: true,
        isAdmin: isAdmin
      };
    case "CREATE_TICKET":
      return state;
    case "LIST_TICKETS":
      return state;
    case "SHOW_LOADER":
      return { ...state, isLoading: action.payload };
    case "HIDE_LOADER":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}
