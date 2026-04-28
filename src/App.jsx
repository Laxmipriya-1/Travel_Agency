// import React from 'react'
// import Header from './sections/Header'
// import Hero from './sections/Hero'
// import About from './sections/About'
// import Services from './sections/Services'
// import CtaOne from './sections/CtaOne'
// import Packages from './sections/Packages'
// import Features from './sections/Features'
// import Footer from './sections/Footer'

// const App = () => {
//   return (
//     <>
//     <Header/>
//     <Hero/>
//     <About/>
//     <Services/>
//     <CtaOne/>
//     <Packages/>
//     <Features/>
//     <Footer/>
//     </>
//   )
// }

// export default App

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './sections/Header'
import Footer from './sections/Footer'

// Pages
import Home from './sections/Hero'
import About from './sections/About'
import Packages from './sections/Packages'
import BookNow from './sections/BookNow'
import Contact from './sections/CtaOne'

const App = () => {
  return (
    <BrowserRouter>

      {/* Navbar */}
      <Header />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/book" element={<BookNow />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <Footer />

    </BrowserRouter>
  )
}

export default App