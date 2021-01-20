import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const UL = styled.ul`
  display: flex;
`;
const LI = styled.li`
  list-style-type: none;
  width: 100px;
  height: 30px;
  border-bottom: 5px solid ${(props) => (props.tf ? "red" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
  text-align: center;
  line-height: 30px;
`;
const LINK = styled.a`
  text-decoration: none;
`;

const Header = ({ location: { pathname } }) => {
  return (
    <UL>
      <LI tf={pathname === "/movie"}>
        <LINK href={"/movie"}>MOVIE</LINK>
      </LI>
      <LI tf={pathname === "/search"}>
        <LINK href={"/search"}>Search</LINK>
      </LI>
    </UL>
  );
};

export default withRouter(Header);
