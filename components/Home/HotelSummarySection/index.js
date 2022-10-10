import React, { useEffect, useRef } from 'react';
import hotelSummaryStyles from './HotelSummarySection.module.css';

const HotelSummarySection = () => {
  const roomDetailRef = useRef(null);

  const callBackFunc = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      roomDetailRef.current.classList.add('skrAnimationScrollActiveEl');
      return;
    }
    roomDetailRef.current.classList.remove('skrAnimationScrollActiveEl');
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(callBackFunc, options);
    if (roomDetailRef.current) observer.observe(roomDetailRef.current);

    return () => {
      if (roomDetailRef.current) observer.unobserve(roomDetailRef.current);
    };
  }, [roomDetailRef]);
  return (
    <div className={hotelSummaryStyles.hotelSummarySection}>
      <div className='p-container relative'>
        <div
          ref={roomDetailRef}
          className={`${hotelSummaryStyles.skrFeaturedCard} skrAnimationScroll relative`}
        >
          <div class={`${hotelSummaryStyles.skrFeaturedGrid} grid relative`}>
            <div class='col-6 lg:col-3'>
              <div class={`${hotelSummaryStyles.skrIconBox}`}>
                <div
                  class={`${hotelSummaryStyles.skrCounterNumber} skrMb10`}
                  data-count='4'
                >
                  4
                </div>
                <h5>Hotels</h5>
              </div>
            </div>
            <div class='col-6 lg:col-3'>
              <div class={`${hotelSummaryStyles.skrIconBox}`}>
                <div
                  class={`${hotelSummaryStyles.skrCounterNumber} skrMb10`}
                  data-count='127'
                >
                  127
                </div>
                <h5>Rooms</h5>
              </div>
            </div>
            <div class='col-6 lg:col-3'>
              <div class={`${hotelSummaryStyles.skrIconBox}`}>
                <div
                  class={`${hotelSummaryStyles.skrCounterNumber} skrMb10`}
                  data-count='6'
                >
                  6
                </div>
                <h5>Beaches</h5>
              </div>
            </div>
            <div class='col-6 lg:col-3'>
              <div class={`${hotelSummaryStyles.skrIconBox}`}>
                <div
                  class={`${hotelSummaryStyles.skrCounterNumber} skrMb10`}
                  data-count='4586'
                >
                  4586
                </div>
                <h5>Guests</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSummarySection;
