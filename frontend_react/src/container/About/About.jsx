import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './About.scss';

import { images } from '../../constants';

const abouts = [
  {title: 'Front end Web Development', description: 'I am a good front end web developer', imgUrl: images.about01},
  {title: 'Web Design', description: 'I design the web professionally', imgUrl: images.about02},
  {title: 'UI/UX', description: 'I am a good web developer', imgUrl: images.about03},
  {title: 'Back end Web Development', description: 'I am a good  backend web developer', imgUrl: images.about04},
]

const About = () => {
  return (
    <React.Fragment>
      <h2 className='haed-text'>
        I Know that <span>Good Design</span>
        <br/>
        means <span>Good Business</span>
      </h2>

      <div className='app__profiles'>
        {
          abouts.map((about,index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 , type: 'tween'}}
              className='app__profile-item'
              key={about.title + index}
            >
              <img src={about.imgUrl} alt={about.title} />
              <h2 className='bold-text' style={{marginTop: 20 }}>{about.title}</h2>
              <p className='p-text' style={{ marginTop: 10}}>{about.description}</p>
            </motion.div>
          ))
        }
      </div>
    </React.Fragment>
  )
}

export default About