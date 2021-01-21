import React from 'react';
import './App.scss';

import Header from './components/Header'
import Tools from './components/Tools'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Writings from './components/Writings'
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div className="main-body">
      <NavBar />
      <Header />
      <Tools />
      <Projects />
      <Writings />
      <Contact />
    </div>
  )
}

export default App;
