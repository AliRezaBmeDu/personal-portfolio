import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const query = '*[_type=="testimonials"]';
    const brandsQuery = '*[_type=="brands"]';
    client.fetch(query)
      .then((data) => {
        setTestimonials(data);
      })

    client.fetch(brandsQuery)
    .then((data) => {
      setBrands(data);
    })
  }, [])
  return (
    <React.Fragment>
      {testimonials.length && (
        <React.Fragment>
          <div className='app__testimonial-item app__flex'>
          {console.log('testimonials', testimonials)}
          <img src={urlFor(testimonials[currentIndex].imgurl)} alt="testimonals" />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'), 
  'testimonials',
  "app__primarybg"
  );