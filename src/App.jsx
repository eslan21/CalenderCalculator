import { useState } from 'react'
import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from './componentes/Layout';
import AboutMe from './view/AboutMe';
import Home from './view/Home';
import NavBar from './componentes/NavBar'
import Reasult from './view/Result'
import {DataContextPrivider} from './context'
function App() {


  return (
    <>
     <DataContextPrivider>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="aboutme" element={<AboutMe />} />
              <Route path="result" element={<Reasult />} />
            </Route>
          </Routes>

        </BrowserRouter >
      </DataContextPrivider>
    </>
  )
};

export default App;
