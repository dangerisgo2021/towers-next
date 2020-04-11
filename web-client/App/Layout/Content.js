import React from "react";
import { Layout } from "antd";

const { Content: AntContent } = Layout;
export const Content = ({ children }) => <AntContent>{children}</AntContent>;
