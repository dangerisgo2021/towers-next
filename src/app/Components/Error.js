import React from "react";
import { Alert } from "antd";

export const Error = ({error}) => {
  return  <Alert message={JSON.stringify(error)} type="error" />
};
