import React from "react";
import { createUser } from "@/utils/actions";

const formStyle = "max-w-lg flex flex-col gap-y-4  shadow rounded p-8";
const inputStyle = "border shadow rounded py-2 px-3 text-gray-700";
const btnStyle =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize";

function Form() {
  return (
    <form className={formStyle} action={createUser}>
      <h2 className="text-2xl capitalize mb-4">Create User</h2>
      {/* <label htmlFor="first-name">Firstname: </label> */}
      <input
        className={inputStyle}
        id="first-name"
        type="text"
        name="firstname"
        required
        placeholder="Firstname"
      />
      {/* <label htmlFor="last-name">Lastname: </label> */}
      <input
        className={inputStyle}
        type="text"
        name="lastname"
        id="last-name"
        required
        placeholder="Lastname"
      />
      <button className={btnStyle} type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
