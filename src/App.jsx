import { useState } from 'react'
import React from 'react'
import { dataContextPrivider } from './Context';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from './componentes/Layout';
import AboutMe from './view/AboutMe';
import Home from './view/Home';
import NavBar from './componentes/NavBar'

function App() {


  return (
    <>
      <dataContextPrivider>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="aboutme" element={<AboutMe />} />
            </Route>
          </Routes>

        </BrowserRouter >
      </dataContextPrivider>
    </>
  )
};

export default App;
