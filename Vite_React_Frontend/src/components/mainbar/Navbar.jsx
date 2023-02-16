import { FcAbout, FcBusinessContact} from "react-icons/fc";
import {RxDashboard} from "react-icons/rx";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

import React from "react";

function Navbar() {
  return (
    <List>
        <NavLink to={'/'} className={({ isActive }) => (isActive ? "link-active" : "link")}>
            <h1><RxDashboard />Dashboard</h1>
        </NavLink>
        <NavLink to={'/About'} className={({ isActive }) => (isActive ? "link-active" : "link")}>
            <h1><FcAbout />About</h1>
        </NavLink>
        <NavLink to={'/Contact'} className={({ isActive }) => (isActive ? "link-active" : "link")}>
            <h1><FcBusinessContact />Contact Us</h1>
        </NavLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: left;
    column-gap: 70px;
    background-color: black;
    height: 10%;
    // align-items: center;
    h1 {
        display: inline;
    }
    .link {
        color: white;
    }
      
    /* Specific styles for active links */
    .link-active {
        color: black;
        background: lightgray;
    }
      
    .content {
        margin-top: 50px;
        text-align: center;
    }
`;

export default Navbar;