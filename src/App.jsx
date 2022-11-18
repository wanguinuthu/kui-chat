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
      <Card
      profile_img='src/assets/girl.jpeg'
      chat_name='Kui'
      chat_time='2:00pm'
      chat_content='Hello'
      chat_number='12'/>
      <Card
      profile_img='src/assets/girl.jpeg'
      chat_name='Kui'
      chat_time='2:00pm'
      chat_content='Hello'
      chat_number='12'/>
    </div>
  )
}

export default App;
