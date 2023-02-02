import React from 'react'

import './Sidebar.css'
import Loginform from './Loginform'
import Logedin from './Logedin'

function Sidebar() {
  return (
    <div className='Sidebar'>
      Sidebar
      <Loginform />
      <Logedin />
    </div>
  )
}

export default Sidebar