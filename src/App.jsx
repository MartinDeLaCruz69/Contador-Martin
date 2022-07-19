import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar.jsx'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Navbar/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}
export default App
