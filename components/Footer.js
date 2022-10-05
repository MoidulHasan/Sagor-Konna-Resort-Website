import Image from 'next/image';
import React from 'react';
import utilStyles from '../styles/utils.module.css';
import skrLogo from '../public/images/SagorKonnaLogoBG.png';
import Link from 'next/link';

import footerImg1 from '../public/images/footerGallery/1.jpg';
import footerImg2 from '../public/images/footerGallery/2.jpg';
import footerImg3 from '../public/images/footerGallery/3.jpg';
import footerImg4 from '../public/images/footerGallery/4.jpg';
import footerImg5 from '../public/images/footerGallery/5.jpg';
import footerImg6 from '../public/images/footerGallery/6.jpg';

const Footer = () => {
  return (
    <footer className={utilStyles.footer}>
      <div className={utilStyles.skrFooter}>
        <div className={`${utilStyles.skrFooterPadding} p-container`}>
          <div className='grid'>
            <div className='md:col-6 lg:col-4 col-12'>
              <div className={utilStyles.skrFooterLogo}>
                <div className={`${utilStyles.footerLogo}`}>
                  <Image src={skrLogo} alt='Sagor Konna Resort' />
                </div>
              </div>
              <div className={utilStyles.skrFooterAbout}>
                Sagor Konna Resort offers a blend of eastern and western
                hospitality in an atmosphere of timeless elegance, beyond
                comfortable, stylish rooms and unmatched natural view.
              </div>
              <div className={utilStyles.skrFooterSocialLinks}>
                <a
                  href='https://www.facebook.com/sagorkonnaresortltd'
                  target='_blank'
                  rel='noreferrer'
                  className={`${utilStyles.fbLink} linkKajkam`}
                >
                  <i className='pi pi-facebook text-xl'></i>
                </a>
                <a
                  href='https://www.facebook.com/sagorkonnaresortltd'
                  target='_blank'
                  rel='noreferrer'
                  className={`${utilStyles.twitter}`}
                >
                  <i className='pi pi-twitter text-xl'></i>
                </a>
                <a
                  href='https://www.facebook.com/sagorkonnaresortltd'
                  target='_blank'
                  rel='noreferrer'
                  className={`${utilStyles.youtube}`}
                >
                  <i className='pi pi-youtube text-xl'></i>
                </a>
                <a
                  href='https://www.facebook.com/sagorkonnaresortltd'
                  target='_blank'
                  rel='noreferrer'
                  className={`${utilStyles.instagram}`}
                >
                  <i className='pi pi-instagram text-xl'></i>
                </a>
                <a
                  href='https://www.facebook.com/sagorkonnaresortltd'
                  target='_blank'
                  rel='noreferrer'
                  className={`${utilStyles.linkedin}`}
                >
                  <i className='pi pi-linkedin text-xl'></i>
                </a>
              </div>
            </div>
            <div className='col-12 md:col-6 lg:col-2'>
              <h4 className={utilStyles.menuList}>Menu</h4>
              <ul className={`${utilStyles.footerMenu}`}>
                <li>
                  <Link href='/'>
                    <a className={`${utilStyles.footerLinkPages} linkKajkam`}>
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/about'>
                    <a className={`${utilStyles.footerLinkPages} linkKajkam`}>
                      About Us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/room'>
                    <a className={`${utilStyles.footerLinkPages} linkKajkam`}>
                      Rooms
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/offers'>
                    <a className={`${utilStyles.footerLinkPages} linkKajkam`}>
                      Our Services
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/contact'>
                    <a className={`${utilStyles.footerLinkPages} linkKajkam`}>
                      Contact Info
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col-12 md:col-6 lg:col-3 my-5 md:my-3 lg:my-0'>
              <h4 className={utilStyles.menuList}>Sagor Konna Resort</h4>
              <ul className={`${utilStyles.footerMenu}`}>
                <li>
                  <Link href='/about'>
                    <a className={`${utilStyles.footerLinkPages} linkKajkam`}>
                      Terms and conditions
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/about'>
                    <a className={`${utilStyles.footerLinkPages} linkKajkam`}>
                      Privacy policy
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/about'>
                    <a className={`${utilStyles.footerLinkPages} linkKajkam`}>
                      Help center
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/about'>
                    <a className={`${utilStyles.footerLinkPages} linkKajkam`}>
                      Work with us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/contact'>
                    <a className={`${utilStyles.footerLinkPages} linkKajkam`}>
                      Sitemap
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col-12 md:col-6 lg:col-3'>
              <h4 className={utilStyles.menuList}>Gallery</h4>
              <div className={utilStyles.footerGallery}>
                <Link href='/gallery'>
                  <a className={`${utilStyles.galleryLink}`}>
                    <div className={utilStyles.footerImage}>
                      <Image src={footerImg1} alt='footer gallery' />
                    </div>
                  </a>
                </Link>
                <Link href='/gallery'>
                  <a className={`${utilStyles.galleryLink}`}>
                    <div className={utilStyles.footerImage}>
                      <Image src={footerImg2} alt='footer gallery' />
                    </div>
                  </a>
                </Link>
                <Link href='/gallery'>
                  <a className={`${utilStyles.galleryLink}`}>
                    <div className={utilStyles.footerImage}>
                      <Image src={footerImg3} alt='footer gallery' />
                    </div>
                  </a>
                </Link>
                <Link href='/gallery'>
                  <a className={`${utilStyles.galleryLink}`}>
                    <div className={utilStyles.footerImage}>
                      <Image src={footerImg4} alt='footer gallery' />
                    </div>
                  </a>
                </Link>
                <Link href='/gallery'>
                  <a className={`${utilStyles.galleryLink}`}>
                    <div className={utilStyles.footerImage}>
                      <Image src={footerImg5} alt='footer gallery' />
                    </div>
                  </a>
                </Link>
                <Link href='/gallery'>
                  <a className={`${utilStyles.galleryLink}`}>
                    <div className={utilStyles.footerImage}>
                      <Image src={footerImg6} alt='footer gallery' />
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
