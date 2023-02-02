import React from 'react'

import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Mainbar from './components/mainbar/Mainbar'

function App() {

  return (
    <div className="App" id='App'>
      <Sidebar />
      <Mainbar />
    </div>
  )
}

export default App
