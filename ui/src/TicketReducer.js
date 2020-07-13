import { LOCALSTORAGE_NAME } from "./AppConfig";
export default function ticketReducer(state, action) {
  switch (action.type) {
    case "APP_SIGNIN":
      const { role, token } = action.payload;
      let isAdmin = role === "admin" ? true : false;
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
          tickets: action.payload,
          filtered: action.payload
        })
      );
      return { ...state, tickets: action.payload, filtered: action.payload };
    case "FILTER_TICKETS":
      localStorage.setItem(
        LOCALSTORAGE_NAME,
        JSON.stringify({
          ...state,
          filtered: action.payload
        })
      );
      return { ...state, filtered: action.payload };
    case "REVIEW_STATUS":
      return { ...state };
    case "SHOW_LOADER":
      return { ...state, isLoading: action.payload };
    case "HIDE_LOADER":
      return { ...state, isLoading: action.payload };
    case "STORE_DATA":
      return { ...state, ...action.payload };
    case "SIGN_OUT":
      localStorage.clear();
      return { ...state, isLoggedIn: false, isAdmin: false, isLoading: false };
    default:
      return state;
  }
}
