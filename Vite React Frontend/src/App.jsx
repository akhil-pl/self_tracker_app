import { useState } from 'react'

import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Mainbar from './components/mainbar/Mainbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Sidebar />
      <Mainbar />
    </div>
  )
}

export default App
