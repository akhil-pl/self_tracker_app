import { FcAbout, FcBusinessContact} from "react-icons/fc";
import {RxDashboard} from "react-icons/rx";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

import React from "react";

function Navbar() {
  return (
    <List>
        <NavLink to={'/'}>
            <h1><RxDashboard />Dashboard</h1>
        </NavLink>
        <NavLink to={'/About'}>
            <h1><FcAbout />About</h1>
        </NavLink>
        <NavLink to={'/Contact'}>
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
`;

export default Navbar;