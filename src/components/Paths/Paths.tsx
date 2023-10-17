import React, { FC } from "react";
// "@/*": ["./src/*"]
import { getMessage } from "@/components/Paths/message";

interface Props {}

/**
 * ReRender
 *
 * @param {Props} { }
 */
export const ReRender: FC<Props> = ({}) => {
  const value = getMessage();
  return <div>{value}</div>;
};
