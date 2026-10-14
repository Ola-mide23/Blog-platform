import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function Navbar () {
  return (
    <nav className="nav-bar">
       <h1>BlogPost</h1>
       <button className="nav-button">+New Post</button>
    </nav>
  )
}

function Blogcomponent() {
  return(
    <div className="card-component">
      <div className="card-component-content">
        <p>Blog</p>
         <h2>My Journey into React</h2>
        <p>Starting React felt confusing at first, but breaking each concept into small pieces made everything easier</p>
        <button>Read More</button>
      </div>
      
      <div className="card-component-content">
           <p>Blog</p>
          <h2>What I learned about JavaScript</h2>
          <p>JavaScript becomes much easier when you understand its core concepts like closures and prototypes.</p>
          <button>Read More</button>
      </div>
      

    </div>
    
  )
}

function App() {

  return (
    <div className="App">
      <Navbar />
      <h1 className='simple'>Simple Blogging Platform</h1>
      <p className='simple-blog'>A small blog platform where users can read posts and publish their own thoughts. This is the reference design for your React project</p>
      <Blogcomponent />
    </div>
  )
}

export default App