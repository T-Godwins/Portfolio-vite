import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header'
import './App.css'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Experience from './Components/Experience'
import { motion } from 'framer-motion'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="navbar"><Navbar/></div>
      <div className="header"><Header/></div>


      <motion.div 
        initial={{opacity:0, y: 50}}
        whileInView={{opacity: 1, y: 0, transition: {delay: 0.2 , duration: 0.5}}}
        viewport={{once: false, amount: .5}} 
        className="About"><About/></motion.div>

      {/* <motion.div 
        initial={{opacity:0, y: 50}}
        whileInView={{opacity: 1, y: 0, transition: {delay: 0.2 , duration: 0.5}}}
        viewport={{once: false, amount: .5}}  className='title'>Experience</motion.div> 
         */}

      <div className="experience"><Experience/></div>


      


      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>


      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
