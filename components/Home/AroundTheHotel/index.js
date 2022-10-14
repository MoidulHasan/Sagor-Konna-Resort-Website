import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import aroundTheHotelStyles from './AroundTheHotel.module.css';

import sagorKonnaService1 from '../../../public/images/services/service1bar.jpg';

import sagorKonnaService2 from '../../../public/images/services/service2pool.jpg';

import sagorKonnaService3 from '../../../public/images/services/service3restaurant.jpg';
import Image from 'next/image';

const AroundTheHotel = () => {
  const animationAroundRef = useRef(null);
  const serviceCardRef = useRef(null);

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

  const [skrServices, setskrService] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/serviceData')
      .then((res) => res.json())
      .then((data) => setskrService(data));
  }, []);

  // console.log(skrServices);

  return (
    <div className={aroundTheHotelStyles.aroundTheHotelSection}>
      <div className='p-container'>
        <div className='grid'>
          <div className='col-12 lg:col-12 skrMb100'>
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
          <div className='col-12 lg:col-4'>
            <div ref={serviceCardRef} className=''>
              <div className={aroundTheHotelStyles.skrAthCard}>
                <div className={aroundTheHotelStyles.skrCoverFrame}>
                  <Image
                    src={sagorKonnaService1}
                    alt='sagor konna resort'
                    className={aroundTheHotelStyles.skrCoverFrameImg}
                    layout='fill'
                  />
                </div>
                <div class={aroundTheHotelStyles.skrCardDescription}>
                  <h4 class='skrMb10'>Restaurant Lounge</h4>
                  <p>
                    Sagor Konna Resort has an in-house restaurant with all the
                    sea food available!
                  </p>
                  <div>
                    <Link href='/about'>
                      <a className='skrButton'> Read More</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 lg:col-4'>
            <div ref={serviceCardRef} className=''>
              <div className={aroundTheHotelStyles.skrAthCard}>
                <div className={aroundTheHotelStyles.skrCoverFrame}>
                  <Image
                    src={sagorKonnaService2}
                    alt='sagor konna resort'
                    className={aroundTheHotelStyles.skrCoverFrameImg}
                    layout='fill'
                  />
                </div>
                <div class={aroundTheHotelStyles.skrCardDescription}>
                  <h4 class='skrMb10'>Swimming Pools</h4>
                  <p>
                    A wonderful swimming pool inside the hotel compound with sea
                    view!
                  </p>
                  <div>
                    <Link href='/about'>
                      <a className='skrButton'> Read More</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 lg:col-4'>
            <div ref={serviceCardRef} className=''>
              <div className={aroundTheHotelStyles.skrAthCard}>
                <div className={aroundTheHotelStyles.skrCoverFrame}>
                  <Image
                    src={sagorKonnaService3}
                    alt='sagor konna resort'
                    className={aroundTheHotelStyles.skrCoverFrameImg}
                    layout='fill'
                  />
                </div>
                <div class={aroundTheHotelStyles.skrCardDescription}>
                  <h4 class='skrMb10'>Restaurant</h4>
                  <p>
                    Official Restaurant of Sagor Konna Resort with all the sea
                    foods available.
                  </p>
                  <div>
                    <Link href='/about'>
                      <a className='skrButton'> Read More</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AroundTheHotel;
