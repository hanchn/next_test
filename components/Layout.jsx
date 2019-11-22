import React, { useState, useCallback } from "react";
import { Input, Layout, Icon, Avatar } from "antd";
import Container from "./Container";
import "../css/public.css";

const { Header, Content, Footer } = Layout;

export default ({ children }) => {
  const [search, setSearch] = useState("");
  const [nickName, setNickName] = useState("HanChn");
  const handleSearch = useCallback(e => setSearch(e.target.value), [setSearch]);
  const handleOnSearch = () => console.log("点击了搜索图标");

  return (
    <>
      <Header>
        <div className="header-left">
          <div className="logo">
            <Icon type="github" />
          </div>
          <div className="search">
            <Input.Search
              value={search}
              onChange={handleSearch}
              onSearch={handleOnSearch}
              placeholder={search}
            />
          </div>
        </div>
        <div className="header-right">
          <div className="avatar">
            <Avatar width={40} icon="user" />
          </div>
          <div className="nickName">{nickName}</div>
        </div>
      </Header>
      <Content>
        <Container>{children}</Container>
      </Content>
      <Footer> Develop By HanChn </Footer>
      <style jsx>
        {`
          i: {
            color: white;
          }
        `}
      </style>
    </>
  );
};
