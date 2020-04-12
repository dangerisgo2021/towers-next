import React from "react";
import { Layout } from "antd";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header/Header";
import { Sider } from "./Sider/Sider";
import { SiderMenu } from "./Sider/SiderMenu";

export const AppLayout = ({ children }) => (
  <Layout>
    <Sider>
      <SiderMenu />
    </Sider>
    <Layout>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  </Layout>
);
