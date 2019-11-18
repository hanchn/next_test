import React from "react";
import { Button, Layout, Icon } from "antd";

const { Header, Content, Footer } = Layout;

export default ({ children }) => (
  <>
    <Header>
      <Icon type="git" />
    </Header>
    <Content> </Content>
    <Footer> </Footer>
    <style jsx>
      {`
        i: {
          color: white;
        }
      `}
    </style>
  </>
);
