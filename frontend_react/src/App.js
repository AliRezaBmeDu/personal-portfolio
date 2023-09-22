import React from 'react';

import { About, Footer, SKills, Testimonial, Header, Work, Skills } from './container';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App