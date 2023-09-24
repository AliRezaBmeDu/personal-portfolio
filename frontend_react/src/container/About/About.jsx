import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './About.scss';
import { AppWrap, MotionWrap } from '../../wrapper';

import { images } from '../../constants';
import { urlFor, client } from '../../client';

// const abouts = [
//   {title: 'Front end Web Development', description: 'I am a good front end web developer', imgUrl: images.about01},
//   {title: 'Web Design', description: 'I design the web professionally', imgUrl: images.about02},
//   {title: 'UI/UX', description: 'I am a good web developer', imgUrl: images.about03},
//   {title: 'Back end Web Development', description: 'I am a good  backend web developer', imgUrl: images.about04},
// ]

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query)
      .then((data) => {
        setAbouts(data);
      })
  }, [])
  return (
    <React.Fragment>
      <h2 className='head-text'>
        I Know that <span>Good Development</span>
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
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className='bold-text' style={{marginTop: 20 }}>{about.title}</h2>
              <p className='p-text' style={{ marginTop: 10}}>{about.description}</p>
            </motion.div>
          ))
        }
      </div>
    </React.Fragment>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'), 
  'about',
  "app__whitebg"
  );