import React from 'react'
import './Navbar.scss';

import { images } from '../../constants';

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={images.logo} alt="logo" />
      </div>
      <ul>
        {
          ['home', 'about', 'contact', 'work', 'skills'].map((item) => (
            <li key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ) )
        }
      </ul>
    </nav>
  )
}

export default Navbar