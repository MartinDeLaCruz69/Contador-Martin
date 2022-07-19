import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar.jsx'
import { useTranslation } from 'react-i18next';
function App() {
  const [count, setCount] = useState(0)
  const { t } = useTranslation();
  return (
    <div className="App">
      <Navbar/>
      <div className='foto'>
        <img className='image' src='./image.jpg' alt='perfil'></img>
      </div>
      <div className='name'>
        <h1>{t("name")}</h1>
      </div>
      <div className='information'>
        <p>{t("information")}</p>
        <p>{t("information1")}</p>
        <p>{t("information2")}</p>
      </div>
      <div className='button'>
        <button onClick={() => setCount((count) => count + 1)}>
          {t("button")} {count}
        </button>
      </div>
      <div className='tecnology'>
        <p>{t("tecno")}</p>
      </div>
    </div>
    
  )
}
export default App
