import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { IoMdArrowBack } from "react-icons/io";

const Nav = styled.div`
  background: #1b854a;
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  font-size: 2.7rem;
  height: 85px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: rgba(44, 163, 97, 0.96);
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition-duration: 0.6s;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = ({ logout }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const menuRef = useRef();
  const menuRef2 = useRef();

  // useEffect(() => {
  //   const hideSidebar = (e) => {
  //     if (
  //       menuRef.current.contains(e.target) ||
  //       !menuRef2.current.contains(e.target)
  //     ) {
  //       setSidebar(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", hideSidebar);
  // });
  return (
    <>
      <IconContext.Provider value={{ color: "rgb(2, 53, 2)" }}>
        <Nav>
          <NavIcon to="#">
            <GoThreeBars
              style={{
                border: "3px solid rgb(2, 53, 2)",
                borderRadius: "6px",
                marginLeft: "2rem",
              }}
              onClick={showSidebar}
            />
          </NavIcon>
          <h2
            style={{
              textAlign: "center",
              color: "rgb(2, 53, 2)",
            }}
          >
            EduAid
          </h2>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap ref={menuRef2}>
            <NavIcon to="#" style={{ textDecoration: "none" }}>
              <div
                style={{
                  alignText: "center",
                  textDecoration: "none",
                  color: "black",
                  height: "75px",
                  width: "300px",
                  borderBottom: "2px solid #044000",
                  display: "flex",
                  justifyContent: "flex-start",
                  background: "rgba(255, 255, 255, 0.85)",
                  marginTop: "-20px",
                }}
              >
                <IoMdArrowBack
                  style={{
                    border: "2px solid rgb(2, 53, 2)",
                    borderRadius: "6px",
                    fontSize: "2.3rem",
                    marginLeft: "25px",
                    marginTop: "20px",
                  }}
                  onClick={showSidebar}
                />

                <h2
                  style={{
                    fontSize: "30px",
                    marginTop: "20px",
                    color: "rgb(2, 53, 2)",
                  }}
                >
                  &nbsp;&nbsp;&nbsp;MENU
                </h2>
              </div>
            </NavIcon>
            <div ref={menuRef} style={{ height: "20" }}>
              {SidebarData.map((item, index) => {
                return item.title != "Logout" ? (
                  <SubMenu item={item} key={index} />
                ) : (
                  <SubMenu item={item} key={index} onClick={logout} />
                );
              })}
            </div>
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
