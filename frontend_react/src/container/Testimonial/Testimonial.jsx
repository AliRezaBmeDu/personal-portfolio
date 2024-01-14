import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const query = '*[_type=="credentials"]';
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

  const test = testimonials[currentIndex];

  const handleClick = (index) => {
    setCurrentIndex(index);
  }
  return (
    <React.Fragment>
      <h2 className='head-text'>
        Certificates and <span>Testimonials</span>
      </h2>
      {testimonials.length && (
        <React.Fragment>
          <div className='app__testimonial-item app__flex'>
            <img src={urlFor(test.imgurl)} alt="testimonals" />
            <div className='app__testimonial-content'>
              <p className='p-text'>{test.feedback}</p>
              <div>
                <h4 className='bold-text'>{test.name}</h4>
                <h5 className='p-text'>{test.company}</h5>
                <a href={test.credentialurl} target='_blank' rel='noreferrer'>View Source</a>
              </div>
            </div>
          </div>
          <div className='app__testimonial-btns app__flex'>
              <div className='app__flex' onClick={()=> handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                <HiChevronLeft />
              </div>
              <div className='app__flex' onClick={()=> handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                <HiChevronRight />
              </div>
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