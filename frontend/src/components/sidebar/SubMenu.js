import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
  list-style: none;
  height: 55px;
  text-decoration: none;
  font-size: 21px;
  transition-duration: 0.3s;

  &:hover {
    border-bottom: 1px solid rgba(240, 248, 255, 0.7);
    border-top: 1px solid rgba(240, 248, 255, 0.7);
    border-radius: 8px;
    background: #1b854a;
    color: #044000;
    font-size: 22px;
    border-left: 5px solid #044000;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 20px;
`;

const DropdownLink = styled(Link)`
  background: #252831;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: green;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  return (
    <>
      <SidebarLink to={item.path}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
      </SidebarLink>
    </>
  );
};

export default SubMenu;
