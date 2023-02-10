import React from 'react'
import styled from 'styled-components'
import {MdOutlineEmail, MdPhone} from "react-icons/md";
import {BsGithub} from "react-icons/bs";
import {SlSocialFacebook, SlSocialLinkedin, SlSocialSkype} from "react-icons/sl";


function Contact() {
  return (
    <Contacts>
        <div>
            <MdOutlineEmail/>
            <h3>akhilplx@gmail.com</h3>
            <h3>21f1006584@ds.study.iitm.ac.in</h3>
        </div>
        <div>
            <MdPhone/>
            <h3>+91 9995 743 556</h3>
        </div>
        <div>
            <BsGithub/>
            <h3>https://github.com/akhil-pl</h3>
        </div>
        <div>
            <SlSocialSkype/>
            <SlSocialLinkedin/>
            <SlSocialFacebook/>
        </div>
    </Contacts>
  )
}

const Contacts = styled.div`
    margin: 5rem 0rem;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    font-family: fantasy;
    justify-content: center;
    h3{
        font-family: fantasy;
    }
`;

export default Contact