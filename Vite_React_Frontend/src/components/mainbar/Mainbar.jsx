import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from './Navbar';
import Dashboard from './Dashboard';
import About from './About';
import Contact from './Contact';

const Mainbar = () => {
    return (
        <MainbarDiv>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Contact' element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </MainbarDiv>
    )
}

const MainbarDiv = styled.div`
    background-color: lightgray;
    font-family: Impact, Helvetica, sans-serif;
`

export default Mainbar