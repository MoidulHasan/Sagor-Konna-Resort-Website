import React from 'react';
import topBookingStyles from './TopBannerBooking.module.css';

import topBannerImg from '../../public/images/topBanner.jpg';
import search from '../../public/images/TopBanner/search.svg';
import car from '../../public/images/TopBanner/car.svg';
import dineIn from '../../public/images/TopBanner/dine.svg';
import ac from '../../public/images/TopBanner/ac.svg';
import cctv from '../../public/images/TopBanner/cctv.svg';
import Image from 'next/image';

const TopBannerBooking = () => {
  return (
    <>
      <section className={topBookingStyles.skrBanner}>
        <div className={topBookingStyles.skrCoverFrame}>
          <Image
            src={topBannerImg}
            alt='top Banner of Sagor Konna'
            className={topBookingStyles.imgCOverFrame}
            style={{ position: 'relative', top: '0px' }}
          />
        </div>
        <div className={topBookingStyles.skrOverlay}></div>
        <div className={topBookingStyles.bannerContainer}>
          <div className='p-container'>
            <div class={topBookingStyles.skrMainTitle}>
              <div class={topBookingStyles.skrWhite}>
                <ul class={topBookingStyles.skrStars}>
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

                <h1 class={`${topBookingStyles.skrBannerHeader} text-center`}>
                  Welcome to Sagor Konna Resort
                </h1>
                <div
                  class={`${topBookingStyles.skrBannerHeaderSupportText} text-center`}
                >
                  LUXURY REDEFINED, UNWIND INDULGE! International standard with
                  local flavours
                </div>
              </div>
            </div>
            <div class={topBookingStyles.bookingForm}>
              <form>
                <div class='grid align-items-center'>
                  <div class='col-12 lg:col-3'>
                    <div class={topBookingStyles.skrInputFrame}>
                      <label for='check-in'>Check in</label>
                      <input
                        id='check-in'
                        type='text'
                        class='datepicker-here'
                        data-position='bottom left'
                        placeholder='Select date'
                        autocomplete='off'
                        readonly='readonly'
                      />
                    </div>
                  </div>
                  <div class='col-12 lg:col-3'>
                    <div class={topBookingStyles.skrInputFrame}>
                      <label for='check-out' class='knsl-add-icon'>
                        Check out
                      </label>
                      <input
                        id='check-out'
                        type='text'
                        class='datepicker-here'
                        data-position='bottom left'
                        placeholder='Select date'
                        autocomplete='off'
                        readonly='readonly'
                      />
                    </div>
                  </div>
                  <div class='col-6 lg:col-3'>
                    {/* <div class={topBookingStyles.skrInputFrame}>
                    <label for='person'>Person</label>
                    <select id='person' style={{ display: 'none' }}>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4' disabled=''>
                        4
                      </option>
                    </select>
                    <div class='nice-select' tabindex='0'>
                      <span class='current'>1</span>
                      <ul class='list'>
                        <li data-value='1' class='option selected'>
                          1
                        </li>
                        <li data-value='2' class='option'>
                          2
                        </li>
                        <li data-value='3' class='option'>
                          3
                        </li>
                        <li data-value='4' class='option disabled'>
                          4
                        </li>
                      </ul>
                    </div>
                  </div> */}
                  </div>
                  <div class='col-6 lg:col-2'>
                    {/* <div class='knsl-select-frame'>
                    <label for='children'>Childrens</label>
                    <select id='children' style={{ display: 'none' }}>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4' disabled=''>
                        4
                      </option>
                    </select>
                    <div class='nice-select' tabindex='0'>
                      <span class='current'>1</span>
                      <ul class='list'>
                        <li data-value='1' class='option selected'>
                          1
                        </li>
                        <li data-value='2' class='option'>
                          2
                        </li>
                        <li data-value='3' class='option'>
                          3
                        </li>
                        <li data-value='4' class='option disabled'>
                          4
                        </li>
                      </ul>
                    </div>
                  </div> */}
                  </div>
                  <div class='col-12 lg:col-1 text-center'>
                    {/* <button type='submit' class={topBookingStyles.skrButton}>
                    <Image
                      src={search}
                      alt='search sagor konna resort'
                      className={topBookingStyles.searchImg}
                      layout='fill'
                    />
                    <span>Serch room</span>
                  </button> */}
                  </div>
                </div>
              </form>
            </div>
            <div class={topBookingStyles.scrollHintFrame}>
              <div class={topBookingStyles.scrollWhiteText}>Scroll down</div>
              <a
                href='#knsl-triger-1'
                className={`${topBookingStyles.skrSS} ${topBookingStyles.scrollHint}`}
              ></a>
            </div>
          </div>
        </div>
      </section>
      <section className={`${topBookingStyles.highlightedFeaturedContainer}`}>
        <div className='p-container'>
          <div
            className={topBookingStyles.highlightedFeaturedCard}
            style={{ marginTop: '-80px' }}
          >
            <div className='grid'>
              <div className='col-6 lg:col-3'>
                <div className={topBookingStyles.iconBox}>
                  <Image
                    alt='Easy Transport'
                    src={car}
                    height={45}
                    width={45}
                    style={{ marginBottom: '10px' }}
                  />
                  <h5 className={topBookingStyles.featuredText}>
                    Easy Transport
                  </h5>
                </div>
              </div>
              <div className='col-6 lg:col-3'>
                <div className={topBookingStyles.iconBox}>
                  <Image
                    alt='Sagor Konna Restaurant'
                    src={dineIn}
                    height={45}
                    width={45}
                    style={{ marginBottom: '10px' }}
                  />
                  <h5 className={topBookingStyles.featuredText}>
                    In House Restaurant
                  </h5>
                </div>
              </div>
              <div className='col-6 lg:col-3'>
                <div className={topBookingStyles.iconBox}>
                  <Image
                    alt='Air-Conditioned'
                    src={ac}
                    height={45}
                    width={45}
                    style={{ marginBottom: '10px' }}
                  />
                  <h5 className={topBookingStyles.featuredText}>
                    Air-Conditioned
                  </h5>
                </div>
              </div>
              <div className='col-6 lg:col-3'>
                <div className={topBookingStyles.iconBox}>
                  <Image
                    alt='Under Protection'
                    src={cctv}
                    height={45}
                    width={45}
                    style={{ marginBottom: '10px' }}
                  />
                  <h5 className={topBookingStyles.featuredText}>
                    Under Protection
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopBannerBooking;
