import React, { useEffect, useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import './Work.scss';

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  
  const handleWorkFilter = (item) => {

  }

  return (
    <React.Fragment>
      <h2 className='head-text'>
        My Creative <span>Portfolio</span> Section
      </h2>
      <div className='app__work-filter'>
        {['UI/UX', 'Web App', 'React JS', 'All'].map((item,index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : "" }`}
          >
            {item}
          </div>
        ))}
      </div>
      
      <motion.div>
          
      </motion.div>

    </React.Fragment>
  )
}

export default Work