import React from "react";

import SignInForm from "./pages/signin/";
import CreateTicket from "./pages/createticket/";

function App() {
  return (
    <>
      <div className="flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center">
        <div className="w-full max-w-screen-xl relative mx-auto px-6">
          <div className="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
            Ticket Dashboard
          </div>
        </div>
      </div>
      <div className="w-full max-w-screen-xl relative mx-auto px-6">
        <div className="pt-20 pl-6">
          <SignInForm />
          <CreateTicket />
        </div>
      </div>
    </>
  );
}

export default App;
