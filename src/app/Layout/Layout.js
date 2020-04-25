import React from "react";
import { Layout } from "antd";
import { Content } from "./Content/Content";
import { Footer } from "./Footer";
import { Header } from "./Header/Header";
import { Sider } from "./Sider/Sider";
import { SiderMenu } from "./Sider/SiderMenu";
import { Modals } from "./Modals";

export const AppLayout = ({ children }) => (
  <Layout hasSider={true}>
    <Sider>
      <SiderMenu />
    </Sider>
    <Layout>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Layout>
    <Modals />
  </Layout>
);
