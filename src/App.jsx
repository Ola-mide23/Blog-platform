import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function Navbar () {
  return (
    <>
       <h1>BlogPost</h1>
       <div className="menu">
          <a href="">Home</a>
          <a href="">About</a>
       </div>
    </>
  )
}

function Blogcomponent() {
  return(
    <div className="card-component">
      <h2>My Journey into React</h2>
      <p>Learn about my experience with React development.</p>
      <button>Read More</button>

    </div>
  )
}

function App() {

  return (
    <>
      <Navbar />
      <h1>My Blog Platform</h1>
      <p>Share your thought with the world</p>
      <Blogcomponent />
    </>
  )
}

export default App