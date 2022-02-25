import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

const handleClick = (index) =>{
  setCurrentIndex(index);
}

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  const test = testimonials[currentIndex-1];

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(test.imgurl)} alt={testimonials[currentIndex].name} />
            <div className='app__testimonial-content'>
            <p className='p-text'>{test.feedback}</p>
            <div>
              <h4 className='bold-text'>{test.name}</h4>
              <h4 className='p-text'>{test.company}</h4>
            </div>
            </div>
          </div>
          <div className='app__testimonial-btns app__flex'>
          <div className='app__flex' onClick={()=> handleClick(currentIndex ===0 ? testimonials.lenght-1 : currentIndex-1)}>
            <HiChevronLeft />
          </div>

{/* If we are on the last index, we want to go the start which is 0 */}
          <div className='app__flex' onClick={()=> handleClick(currentIndex ===  testimonials.lenght-1 ? 0 : currentIndex+1)}>
            <HiChevronLeft />
          </div>
          </div>
        </>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);