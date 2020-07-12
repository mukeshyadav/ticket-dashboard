import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import useFetch from "use-http";
import { useHistory } from "react-router-dom";

import Error from "../../components/Error";
import TicketContext from "../../TicketContext";
import { API_URL, ERROR_MESSAGE } from "../../AppConfig";

export default function CreateTicket() {
  const { state, dispatch } = useContext(TicketContext);
  const { register, errors, handleSubmit } = useForm();
  const { post, response, loading, error } = useFetch(API_URL, {
    headers: {
      authorization: state.token
    }
  });
  const history = useHistory();

  const onSubmit = async data => {
    dispatch({ type: "SHOW_LOADER", payload: loading });
    const result = await post("/stories", data);
    if (response.ok) {
      dispatch({ type: "HIDE_LOADER", payload: loading });
      history.push("/list");
    }
  };
  return (
    <div className="w-full max-w-lg mx-auto">
      <h2 className="text-xl font-semibold pb-2 pt-2">Create Ticket</h2>
      {error && <Error message={ERROR_MESSAGE.FAILED} />}
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="summary"
          >
            Summary
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.summary &&
              "border-red-500"}`}
            id="summary"
            name="summary"
            type="text"
            placeholder="enter summary"
            ref={register({ required: true })}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.description &&
              "border-red-500"}`}
            id="description"
            name="description"
            placeholder="enter description"
            ref={register({ required: true })}
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="type"
          >
            Type
          </label>
          <div className="relative">
            <select
              className={`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${errors.type &&
                "border-red-500"}`}
              id="type"
              name="type"
              ref={register({ required: true })}
            >
              <option value="enhancement">Enhancement</option>
              <option value="bugfix">Bugfix</option>
              <option value="development">Development</option>
              <option value="qa">QA</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="complexity"
          >
            Complexity
          </label>
          <div className="relative">
            <select
              className={`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${errors.complexity &&
                "border-red-500"}`}
              id="complexity"
              name="complexity"
              ref={register({ required: true })}
            >
              <option value="low">Low</option>
              <option value="mid">Medium</option>
              <option value="high">High</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="summary"
          >
            Estimated time
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.estimatedHrs &&
              "border-red-500"}`}
            id="estimatedHrs"
            name="estimatedHrs"
            type="number"
            placeholder="enter estimated hours"
            ref={register({ required: true, min: 1, max: 100 })}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="summary"
          >
            Cost associated
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.cost &&
              "border-red-500"}`}
            id="cost"
            type="number"
            name="cost"
            placeholder="enter cost"
            ref={register({ required: true, min: 1, max: 9999 })}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create Ticket
          </button>
        </div>
      </form>
    </div>
  );
}
