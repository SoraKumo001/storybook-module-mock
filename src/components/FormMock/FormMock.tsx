import React, { FC } from "react";
import login from "./login";

interface Props {}

/**
 * FormMock
 *
 * @param {Props} { }
 */
export const FormMock: FC<Props> = ({}) => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    login(e.currentTarget["user"].value, e.currentTarget["password"].value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          User:
          <input type="text" name="user" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
