import { LOCALSTORAGE_NAME } from "./AppConfig";
export default function ticketReducer(state, action) {
  switch (action.type) {
    case "APP_SIGNIN":
      const { role, token } = action.payload;
      let isAdmin = role === "Admin" ? true : false;
      localStorage.setItem(
        LOCALSTORAGE_NAME,
        JSON.stringify({
          ...state,
          isLoggedIn: true,
          isAdmin: isAdmin,
          token: token
        })
      );
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
    case "STORE_DATA":
      console.log(action);
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
