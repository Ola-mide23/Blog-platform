import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function Navbar () {
  return (
    <>
       <h1>BlogPost</h1>
       <button>+New Post</button>
    </>
  )
}

function Blogcomponent() {
  return(
    <div className="card-component">
      <p>Blog</p>
      <h2>My Journey into React</h2>
      <p>Starting React felt confusing at first, but breaking each concept into small pieces made everything easier</p>
      <button>Read More</button>

      <p>Blog</p>
      <h2>What I learned about JavaScript</h2>
      <p>JavaScript becomes much easier when you understand its core concepts like closures and prototypes.</p>
      <button>Read More</button>

    </div>
    
  )
}

function App() {

  return (
    <>
      <Navbar />
      <h1>Simple Blogging Platform</h1>
      <p>A small blog platform where users can read posts and publish their own thoughts. This is the reference design for your React project</p>
      <Blogcomponent />
    </>
  )
}

export default App