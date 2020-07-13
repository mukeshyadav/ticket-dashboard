import { LOCALSTORAGE_NAME } from "./AppConfig";
export default function ticketReducer(state, action) {
  switch (action.type) {
    case "APP_SIGNIN":
      const { role, token } = action.payload;
      let isAdmin = role === "Admin" ? true : false;
      localStorage.setItem(
        `${LOCALSTORAGE_NAME}`,
        JSON.stringify({
          ...state,
          isLoggedIn: true,
          isAdmin: isAdmin,
          role: role,
          token: token
        })
      );
      return {
        ...state,
        isLoggedIn: true,
        isAdmin: isAdmin,
        role: role,
        token: token
      };
    case "CREATE_TICKET":
      return state;
    case "LIST_TICKETS":
      localStorage.setItem(
        LOCALSTORAGE_NAME,
        JSON.stringify({
          ...state,
          tickets: action.payload
        })
      );
      return { ...state, tickets: action.payload };
    case "SHOW_LOADER":
      return { ...state, isLoading: action.payload };
    case "HIDE_LOADER":
      return { ...state, isLoading: action.payload };
    case "STORE_DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
