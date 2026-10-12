import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function Navbar() {

  return(
    <>
      <nav className='nav-bar'>
        <h1 className='menu1'>BlogPost</h1>
        <div className="menu2">
           <a href="" className='menu2'>Home</a>
           <a href="" className='menu3'>About</a>
        </div>
      </nav>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <h1>My Blog Platform</h1>
      <p>Share your thought with the world</p>
      <Navbar />
    </>
  )
}

export default App