import { FcAbout, FcBusinessContact} from "react-icons/fc";
import {RxDashboard} from "react-icons/rx";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

import React from "react";

function Navbar() {
  return (
    <List>
        <NavLink to={'/'}>
            <RxDashboard />
            <h1>Dashboard</h1>
        </NavLink>
        <NavLink to={'/About'}>
            <FcAbout />
            <h1>About</h1>
        </NavLink>
        <NavLink to={'/Contact'}>
            <FcBusinessContact />
            <h1>Contact Us</h1>
        </NavLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

export default Navbar;