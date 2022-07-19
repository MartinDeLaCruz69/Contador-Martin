import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar.jsx'
import { useTranslation } from 'react-i18next';
function App() {
  const [count, setCount] = useState(0)
  const { i } = useTranslation();
  return (
    <div className="App">
      <Navbar/>
      <div className='foto'>
        <img className='image' src='./image.jpg' alt='perfil'></img>
      </div>
      <div className='name'>
        <h1>{i("name")}</h1>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}
export default App
