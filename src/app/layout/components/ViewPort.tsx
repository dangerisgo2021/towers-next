import React from "react";
import { Sider } from "app/layout/components/Sider";
import { SiderMenu } from "app/layout/components/SiderMenu";
import { Header } from "app/layout/components/Header";
import { Content } from "app/layout/components/Content";
import { Footer } from "app/layout/components/Footer";
import { Modals } from "app/layout/components/Modals";
import { Layout } from "app/layout/components/Layout";

import styles from "app/layout/styles/ViewPort.module.scss";

export const ViewPort = ({ children }) => (
  <Layout className={styles.ViewPort} hasSider={true}>
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
