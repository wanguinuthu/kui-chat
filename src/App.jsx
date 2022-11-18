import { useState } from 'react'
import Navbar from './components/navbar'
import Card from './components/card'
import './styles/main.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return(
    <div className="App">
      <Navbar>Chat-App</Navbar>
      <Card/>
    </div>
  )
}

export default App;
