import React from "react";
import { Layout as AntLayout } from "antd";
import classnames from "classnames";

export const Layout = ({ className = undefined, hasSider = undefined,  children }) => (
    <AntLayout className={classnames(className, "Layout")} hasSider={hasSider}>
        {children}
    </AntLayout>
);



