import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimotials, setTestimonials] = useState([]);
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
    <div>Testimonial</div>
  )
}

export default Testimonial;