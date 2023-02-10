import React from 'react'

function About() {
  return (
    <div>
        <h2> <u>This Self Tracking App is meant as a learning project</u></h2>
        <p>
        This app is done to enhance my coding skills. I am currently building different versions of the same app. Like different
        versions of the same app using different frameworks for frontend and backend. This is the <i><b>React.js</b></i> frontend version.
        This can be used with any suitable backend versions of the same app.<br/><br/>
        The aim of the project is to build a Self Tracking app, in which user is able to track any type of parameters <i> (Numeric, Text, 
        Multiple choice, Rating etc) </i> at any frequency <i>(Hourly, Daily, Weekly, Monthly etc)</i> according to their choice. The goal is to 
        reduce the load on server by doing rendering of UI & UX on the client frontend. Meanwhile server should be able to do scheduled 
        jobs or other jobs like sending user triggered emails, caching etc.<br/><br/>
        </p>
        <b>Technologies used:</b><br/>
        <ul>
            <li><b>ReactJS </b>: React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.</li>
            <li><b>Vite </b>: A JavaScript development environment built on top of the V8 engine.</li>
            <li><b>React Router </b>: As router for makeing it a single page application.</li>
            <li><b>Auth Token</b> : Is used for token based authentication of user and to provide a basic security of data.</li>
            <li><b>ChartJS </b>: Is used for generating charts.</li>
        </ul>
    </div>
  )
}

export default About