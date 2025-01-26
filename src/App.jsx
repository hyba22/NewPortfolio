import { useState } from 'react'
import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import Body from './components/Body/Body'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Project from './components/projects/Project'
import Contact from './components/contact/Contact'
import ParticlesComponent from './components/particles/ParticlesComponent'

function App() {

  return (
    <div className={styles.App}>
       <ParticlesComponent/>
       <Navbar/>
       <Body/>
       <About/>
       <Experience/>
       <Project/>
       <Contact/>
     </div>
  )
}

export default App
