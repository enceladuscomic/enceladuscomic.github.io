import React from 'react';
import './App.css'

import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Head from './pages/Head';
import Main from './pages/Main'
import Portfolio from './pages/Portfolio'
import Read from './pages/Read';


export default function App() {
  return (
    <div className="App">
      {/* <BrowserRouter basename='/enceladuscomic'> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Head />}></Route>
          <Route path="/" element={<Layout />}>
            <Route path="main" element={<Main />} />
            {/* <Route path="about" element={<About />} /> */}
            <Route path="read" element={<Read />} />
            <Route path="portfolio" element={<Portfolio />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))