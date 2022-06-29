import React from 'react'
import './App.css'
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog'

import { Route, Routes } from 'react-router-dom';


const App = () => (
  <div className='container'>
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/blog/:id' element={<Blog />} />
    </Routes>
  </div>

)


export default App