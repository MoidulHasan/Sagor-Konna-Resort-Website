import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import testimonialStyles from './CustomerTestimonials.module.css';

import palmTree from '../../../public/images/palm.svg';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';

import testimonialPeopleImg from '../../../public/images/testimonilaPeople1.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import {
  Autoplay,
  Pagination,
  Navigation,
  FreeMode,
  EffectCoverflow,
} from 'swiper';

const CustomerTestimonials = () => {
  const animationFeedBackRef = useRef(null);

  //   for the view point animation

  const callBackFunc = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      animationFeedBackRef.current.classList.add('skrAnimationScrollActiveEl');
      return;
    }
    animationFeedBackRef.current.classList.remove('skrAnimationScrollActiveEl');
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(callBackFunc, options);
    if (animationFeedBackRef.current)
      observer.observe(animationFeedBackRef.current);

    return () => {
      if (animationFeedBackRef.current)
        observer.unobserve(animationFeedBackRef.current);
    };
  }, [animationFeedBackRef]);

  const testimonialRef = useRef(null);

  return (
    <div
      className={`${testimonialStyles.testimonialContainer} skrTransitionTop`}
    >
      <Image src={palmTree} className='skrDecoLeft' alt='Palm Tree' />
      <div class='p-container relative'>
        <div class='grid justify-content-center'>
          <div class='col-12 lg:col-12'>
            <div
              ref={animationFeedBackRef}
              className='skrAnimationScroll text-center mb-6'
            >
              <div class='skrTitleFrame'>
                <h2 class='skrMb20 skrHeading'>Feedback from our Guests</h2>
                <p className='skrParagraph mt-6'>
                  Consectetur adipisicing elit. Nihil, illum voluptate eveniet
                  ex fugit ea delectus, sed voluptatem. Laborum accusantium
                  libero commodi id officiis itaque esse adipisci,
                  necessitatibus asperiores, illo odio.
                </p>
                <div>
                  <Link href='/about'>
                    <a className='skrButton mt-4'> Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class='col-12 lg:col-12'>
            {/* swiper slider  */}
            <Swiper
              // watchSlidesProgress={true}
              // freeMode={true}
              loop={true}
              spaceBetween={30}
              centeredSlides={true}
              // autoplay={{
              //   delay: 2500,
              //   disableOnInteraction: false,
              // }}
              effect={'coverflow'}
              grabCursor={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: true,
              }}
              speed={800}
              slidesPerView={'auto'}
              navigation={true}
              modules={[Autoplay, Navigation, EffectCoverflow]}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 2,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              className='mySwiper skrTestimonialSlider'
            >
              <SwiperSlide style={{ width: '700px', marginRight: '20px' }}>
                <div className='skrTestimonialCard'>
                  <div className='skrAvatarFrame'>
                    <Image
                      src={testimonialPeopleImg}
                      alt='Testimonial People'
                    />
                  </div>
                  <div className='skrNameNText text-center'>
                    <h3 className='mb-2'>Paul Oldman</h3>
                    <div>From Poland</div>
                    <blockquote className='skrBlockQuote'>
                      <ul class='skrStars'>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                      </ul>
                      Dequi folores dolor sit amet, consectetur adipisicing
                      elit. Nesciunt illo, delectus totam! Delectus illo magnam
                      voluptatem a tempora id vitae dolor, quis natus iusto
                      molestiae ab nam error vero possimus ullam facilis porro
                      veritatis?
                    </blockquote>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ width: '700px', marginRight: '20px' }}>
                <div className='skrTestimonialCard'>
                  <div className='skrAvatarFrame'>
                    <Image
                      src={testimonialPeopleImg}
                      alt='Testimonial People'
                    />
                  </div>
                  <div className='skrNameNText text-center'>
                    <h3 className='mb-2'>Turban Man</h3>
                    <div>From Poland</div>
                    <blockquote className='skrBlockQuote'>
                      <ul class='skrStars'>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                      </ul>
                      Dequi folores dolor sit amet, consectetur adipisicing
                      elit. Nesciunt illo, delectus totam! Delectus illo magnam
                      voluptatem a tempora id vitae dolor, quis natus iusto
                      molestiae ab nam error vero possimus ullam facilis porro
                      veritatis?
                    </blockquote>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ width: '700px', marginRight: '20px' }}>
                <div className='skrTestimonialCard'>
                  <div className='skrAvatarFrame'>
                    <Image
                      src={testimonialPeopleImg}
                      alt='Testimonial People'
                    />
                  </div>
                  <div className='skrNameNText text-center'>
                    <h3 className='mb-2'>Emma Trueman</h3>
                    <div>From Poland</div>
                    <blockquote className='skrBlockQuote'>
                      <ul class='skrStars'>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                        <li>
                          <i class='fas fa-star'></i>
                        </li>
                      </ul>
                      Dequi folores dolor sit amet, consectetur adipisicing
                      elit. Nesciunt illo, delectus totam! Delectus illo magnam
                      voluptatem a tempora id vitae dolor, quis natus iusto
                      molestiae ab nam error vero possimus ullam facilis porro
                      veritatis?
                    </blockquote>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonials;
