/* 
  James Carlson
  Coding Temple - SE FT-144
  Frontend, Module 11 Lesson 1 Assignment: React Fundamentals
  1. Building a Basic React Functional Component Portfolio
*/

import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';

function App() {

  return (
    <>
      <Header/>
      <About/>
      <Contact/>
    </>
  )
}

export default App
