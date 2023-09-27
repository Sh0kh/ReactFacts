import React from 'react'
import "./reactFact.css"
import logo from "./reactjs-icon 1.png"
import { logRoles } from '@testing-library/react'
function ReactFact() {
  return (
    <div className="reactFact">
<div className="nav">
    <div className="logo">
        <img src={logo} alt="" />
        <span>ReactFacts</span>
    </div>
    <h4>React Course - Project 1</h4>
</div>
<div className="body">
    <h1>Fun facts about React</h1>
    <ul>
        
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
</div>
    </div>
  )
}

export default ReactFact