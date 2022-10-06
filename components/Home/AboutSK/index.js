import Image from 'next/image';
import React from 'react';
import aboutSKStyles from './AboutSK.module.css';

import experience from '../../../public/images/aboutSKR/sagor konna.jpg';
import rooms from '../../../public/images/aboutSKR/about2.jpg';

const AboutSK = () => {
  return (
    <section className={aboutSKStyles.aboutSKSection}>
      <div className='p-container'>
        <div className={aboutSKStyles.skAbout}>
          <div className='grid'>
            <div className='col-12 col-lg-6'>
              <div className={aboutSKStyles.skrAboutImg}>
                <Image src={experience} alt='Sagor Konna Resort' />
              </div>
            </div>
            <div className='col-12 col-lg-6'></div>
            <div className='col-12 col-lg-6'></div>
            <div className='col-12 col-lg-6'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSK;
