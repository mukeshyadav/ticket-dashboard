import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import TicketContext from "../TicketContext";
import { appRoutes } from "../AppConfig";

const Header = () => {
  const { state } = useContext(TicketContext);
  return (
    <div className="flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-10 h-16 items-center">
      <div className="w-full max-w-screen-xl relative mx-auto px-6 flex">
        <div className="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
          Ticket Dashboard
        </div>
        {state.isLoggedIn && (
          <div className="lg:w-1/4 xl:w-1/7 pl-6 pr-6 lg:pr-8">
            {appRoutes[state.role].map((route, i) => (
              <NavLink
                to={`/${route.route}`}
                key={route.route}
                className="ml-10  border-blue-500"
                activeClassName="text-blue-500 border-b-2"
              >
                {route.title}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
