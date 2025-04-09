import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Background from './components/Background'


import Home from './pages/Home'
import Service from './pages/Service'
import Actors from './pages/Actors'
import Vision from './pages/Vision'
import Philosophy from './pages/Philosophy'
import Gallery from './pages/Gallery'
import NewCustomer from './pages/customerroute'




export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
        <Background />
          <Navbar />
        
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Service' element={<Service />} />
            <Route path='/Actors' element={<Actors />} />
            <Route path='/Gallery' element={<Gallery />} />
            <Route path='/customer' element={<NewCustomer />} />
            <Route path='/Vision' element={<Vision />} />
            <Route path='/Vision/Philosophy' element={<Philosophy />} />
            
          </Routes>
          
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}
