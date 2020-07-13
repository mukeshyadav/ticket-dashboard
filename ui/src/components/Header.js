import React, { useContext } from "react";
import { Link } from "react-router-dom";
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
          <div className="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
            {appRoutes[state.role].map((route, i) => (
              <Link to={`/${route.route}`} key={route.route}>
                {route.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
