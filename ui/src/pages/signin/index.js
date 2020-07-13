import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import useFetch from "use-http";

import Error from "../../components/Error";
import TicketContext from "../../TicketContext";
import { API_URL, ERROR_MESSAGE } from "../../AppConfig";
import { useHistory } from "react-router-dom";

export default function SignInForm() {
  let history = useHistory();
  const { register, watch, errors, handleSubmit } = useForm();
  const watchUserType = watch("isAdmin");
  const { dispatch } = useContext(TicketContext);
  const { post, response, loading, error } = useFetch(API_URL);

  const onSubmit = async data => {
    dispatch({ type: "SHOW_LOADER", payload: loading });
    const result = await post("/signin", data);
    if (response.ok) {
      dispatch({ type: "APP_SIGNIN", payload: result });
      if (result.role === "admin") {
        history.push("/list");
      }
      if (result.role === "user") {
        history.push("/create");
      }
      dispatch({ type: "HIDE_LOADER", payload: loading });
    }
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <h2 className="text-xl font-semibold pb-2 pt-2">Login</h2>
      {error && <Error message={ERROR_MESSAGE.FAILED} />}
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email &&
              "border-red-500"}`}
            id="email"
            type="email"
            name="email"
            placeholder="enter email"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className={`shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password &&
              "border-red-500"}`}
            id="password"
            type="password"
            name="password"
            placeholder="enter password"
            ref={register({ required: true })}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="isAdmin"
          >
            Login as
          </label>
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
              type="checkbox"
              name="isAdmin"
              id="isAdmin"
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              ref={register}
            />
            <label
              htmlFor="isAdmin"
              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
            ></label>
          </div>
          <label htmlFor="isAdmin" className="text-xs text-gray-700">
            {`${watchUserType ? "Admin" : "Normal"} User`}
          </label>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
