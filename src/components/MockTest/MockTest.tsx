import React, { FC, useState } from "react";
import { getMessage } from "./message";

interface Props {}

/**
 * MockTest
 *
 * @param {Props} { }
 */
export const MockTest: FC<Props> = ({}) => {
  const [, reload] = useState({});
  return (
    <div>
      <button onClick={() => reload({})}>{getMessage()}</button>
    </div>
  );
};
