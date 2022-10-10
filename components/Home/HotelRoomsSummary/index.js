import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import roomSummaryStyles from './HotelRoomsSummary.module.css';

const HotelRoomsSummary = () => {
  const animationRoomRef = useRef(null);

  //   for the view point animation

  const callBackFunc = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      animationRoomRef.current.classList.add('skrAnimationScrollActiveEl');
      return;
    }
    animationRoomRef.current &&
      animationRoomRef.current.classList.remove('skrAnimationScrollActiveEl');
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(callBackFunc, options);
    if (animationRoomRef.current) observer.observe(animationRoomRef.current);

    return () => {
      if (animationRoomRef.current)
        observer.unobserve(animationRoomRef.current);
    };
  }, [animationRoomRef]);

  return (
    <div className={`${roomSummaryStyles.roomSummarySection}`}>
      <div className='p-container'>
        <div className='grid align-items-center'>
          <div className='col-12 lg:col-12'>
            <div
              ref={animationRoomRef}
              className='skrAnimationScroll text-center'
            >
              <div className={`${roomSummaryStyles.skrTitleFrame} `}>
                <h2 className={`${roomSummaryStyles.skrHeading}`}>
                  Our Best Rooms
                </h2>
                <p className={`${roomSummaryStyles.skrParagraph}`}>
                  <span className={`${roomSummaryStyles.skrAccommodation}`}>
                    Accommodation{' '}
                  </span>
                  in the resort consists of 25 superior and premium type rooms
                  in the terraced main hotel. Then there are 14 deluxe rooms in
                  five two-storied terraced villas and 9 two-bedroom suites on
                  four separate two-storied terraced villas on the slopes of the
                  south-facing hills, a privately enclosed one bedroom Honeymoon
                  villa with private heated infinity pool and finally a
                  privately enclosed large Presidential villa with its own
                  heated infinity edged pool.
                </p>
                <div>
                  <Link href='/room'>
                    <a className='skrButton'>All Rooms</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 lg:col-12'>
            <h2>Hello</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelRoomsSummary;
