import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import menuStyles from './RestaurantMenu.module.css';
import skGalleryStyles from '../../Home/SKGallery/SKGallery.module.css';

// swiper
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const RestaurantMenu = () => {
  const sliderRef = useRef(null);

  const sliderSettings = {
    210: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    440: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  };

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className='skr-p-0-80'>
      <div className='p-container'>
        <div className='grid'>
          <div className='col-12'>
            <div className='text-center skrTitleFrame'>
              <h2 className='skrHeading'>Our Luxurious Menu</h2>
              <p className='skrParagraph'>
                Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
                fugit ea delectus, sed voluptatem. Laborum accusantium libero
                commodi id officiis itaque esse adipisci, necessitatibus
                asperiores, illo odio.
              </p>
              <div>
                <Link href='/restaurant/menu'>
                  <a className='skrButton'>Full Menu</a>
                </Link>
              </div>
            </div>
          </div>
          <div className='col-12 lg:col-12'>
            <Swiper
              ref={sliderRef}
              // install Swiper modules
              breakpoints={sliderSettings}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={3}
              // navigation={true}
              loop={true}
              pagination={{ type: 'fraction' }}
              //   scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              <SwiperSlide>
                <div
                  className={`${menuStyles.skrRestaurantImageFrame} skrRestaurantFrame`}
                >
                  <a data-fancybox='gallery' href='/images/HomeGallery/1.jpg'>
                    <Image
                      src='/images/HomeGallery/1.jpg'
                      alt='Sagor Konna Resort'
                      layout='fill'
                      className={`${menuStyles.skrRestaurantImageRounded} restaurantPhoto`}
                    />
                    <div className={menuStyles.skrBadge}>View From Sea</div>
                    <span className={menuStyles.skrRestaurantZoom}>
                      <i class='fas fa-search-plus'></i>
                    </span>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={`${menuStyles.skrRestaurantImageFrame} skrRestaurantFrame`}
                >
                  <a data-fancybox='gallery' href='/images/restaurant/1.jpg'>
                    <Image
                      src='/images/restaurant/1.jpg'
                      alt='Sagor Konna Resort'
                      layout='fill'
                      className={`${menuStyles.skrRestaurantImageRounded} restaurantPhoto`}
                    />
                    <div className={menuStyles.skrBadge}>View From Sea</div>
                    <span className={menuStyles.skrRestaurantZoom}>
                      <i class='fas fa-search-plus'></i>
                    </span>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={`${menuStyles.skrRestaurantImageFrame} skrRestaurantFrame`}
                >
                  <a data-fancybox='gallery' href='/images/restaurant/2.jpg'>
                    <Image
                      src='/images/restaurant/2.jpg'
                      alt='Sagor Konna Resort'
                      layout='fill'
                      className={`${menuStyles.skrRestaurantImageRounded} restaurantPhoto`}
                    />
                    <div className={menuStyles.skrBadge}>View From Sea</div>
                    <span className={menuStyles.skrRestaurantZoom}>
                      <i class='fas fa-search-plus'></i>
                    </span>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={`${menuStyles.skrRestaurantImageFrame} skrRestaurantFrame`}
                >
                  <a data-fancybox='gallery' href='/images/restaurant/3.jpg'>
                    <Image
                      src='/images/restaurant/3.jpg'
                      alt='Sagor Konna Resort'
                      layout='fill'
                      className={`${menuStyles.skrRestaurantImageRounded} restaurantPhoto`}
                    />
                    <div className={menuStyles.skrBadge}>View From Sea</div>
                    <span className={menuStyles.skrRestaurantZoom}>
                      <i class='fas fa-search-plus'></i>
                    </span>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={`${menuStyles.skrRestaurantImageFrame} skrRestaurantFrame`}
                >
                  <a data-fancybox='gallery' href='/images/restaurant/4.jpg'>
                    <Image
                      src='/images/restaurant/4.jpg'
                      alt='Sagor Konna Resort'
                      layout='fill'
                      className={`${menuStyles.skrRestaurantImageRounded} restaurantPhoto`}
                    />
                    <div className={menuStyles.skrBadge}>View From Sea</div>
                    <span className={menuStyles.skrRestaurantZoom}>
                      <i class='fas fa-search-plus'></i>
                    </span>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={`${menuStyles.skrRestaurantImageFrame} skrRestaurantFrame`}
                >
                  <a data-fancybox='gallery' href='/images/restaurant/5.jpg'>
                    <Image
                      src='/images/restaurant/5.jpg'
                      alt='Sagor Konna Resort'
                      layout='fill'
                      className={`${menuStyles.skrRestaurantImageRounded} restaurantPhoto`}
                    />
                    <div className={menuStyles.skrBadge}>View From Sea</div>
                    <span className={menuStyles.skrRestaurantZoom}>
                      <i class='fas fa-search-plus'></i>
                    </span>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={`${menuStyles.skrRestaurantImageFrame} skrRestaurantFrame`}
                >
                  <a data-fancybox='gallery' href='/images/restaurant/6.jpg'>
                    <Image
                      src='/images/restaurant/6.jpg'
                      alt='Sagor Konna Resort'
                      layout='fill'
                      className={`${menuStyles.skrRestaurantImageRounded} restaurantPhoto`}
                    />
                    <div className={menuStyles.skrBadge}>View From Sea</div>
                    <span className={menuStyles.skrRestaurantZoom}>
                      <i class='fas fa-search-plus'></i>
                    </span>
                  </a>
                </div>
              </SwiperSlide>

              <div className='flex justify-content-end'>
                <div
                  className={`${menuStyles.navigators}  flex justify-content-center align-items-center mt-4`}
                >
                  <div
                    className={`${menuStyles.prevArrow} mr-3`}
                    onClick={handlePrev}
                  >
                    <span class='material-icons-sharp'>arrow_back</span>
                  </div>
                  <div
                    className={`${menuStyles.nextArrow}`}
                    onClick={handleNext}
                  >
                    <span class='material-icons-sharp'>arrow_forward</span>
                  </div>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
