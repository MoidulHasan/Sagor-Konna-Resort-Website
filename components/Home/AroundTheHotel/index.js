import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import aroundTheHotelStyles from './AroundTheHotel.module.css';

const AroundTheHotel = () => {
  const animationAroundRef = useRef(null);

  //   for the view point animation

  const callBackFunc = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      animationAroundRef.current.classList.add('skrAnimationScrollActiveEl');
      return;
    }
    animationAroundRef.current.classList.remove('skrAnimationScrollActiveEl');
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(callBackFunc, options);
    if (animationAroundRef.current)
      observer.observe(animationAroundRef.current);

    return () => {
      if (animationAroundRef.current)
        observer.unobserve(animationAroundRef.current);
    };
  }, [animationAroundRef]);

  return (
    <div className={aroundTheHotelStyles.aroundTheHotelSection}>
      <div className='p-container'>
        <div className='grid'>
          <div className='col-12 lg:col-12'>
            <div
              ref={animationAroundRef}
              className='skrAnimationScroll text-center mb-6'
            >
              <h2 className={`${aroundTheHotelStyles.aroundHeadingText}`}>
                Around The Hotel!{' '}
              </h2>
              <p className={`${aroundTheHotelStyles.aroundParagraph}`}>
                Sagor Konna Resort lets you enjoy breathtaking Sea view,
                beaches, surfing & water sports, fabulous views, fabulous
                dining, and exceptional event venue. There’s so much to discover
                and it’s all steps away.
              </p>
              <div>
                <Link href='/about'>
                  <a className='skrButton'>Services</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AroundTheHotel;
