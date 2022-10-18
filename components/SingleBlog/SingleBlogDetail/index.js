import Image from 'next/image';
import React from 'react';

import singleBlogStyles from './SingleBlogDetail.module.css';

import time from '../../../public/images/blogs/time.svg';

import basicImg1 from '../../../public/images/blogs/beachBlog1.jpg';
import basicImg2 from '../../../public/images/blogs/beachBlog2.jpg';

const SingleBlogDetail = ({ blog }) => {
  return (
    <div className='skr-p-50-80'>
      <div className='p-container'>
        <div className='grid justify-content-center'>
          <div className='col-12 lg:col-9'>
            <Image
              src={blog?.img}
              alt='Sagor Konna Blog Image'
              width='100%'
              height='100%'
              layout='responsive'
              className={singleBlogStyles.blogImage}
            />
            <div className={`${singleBlogStyles.blogFeatures} skrMb30 skrMt30`}>
              <div
                className={`${singleBlogStyles.blogFeature} flex align-items-center`}
              >
                <div
                  className={`${singleBlogStyles.skrIconAuthor} flex justify-content-center align-items-center`}
                >
                  <Image
                    src={blog?.profile}
                    alt='Profile Picture'
                    width={20}
                    height={20}
                  />
                </div>
                <span className={singleBlogStyles.featureTexts}>
                  {blog?.authorName}
                </span>
              </div>
              <div
                className={`${singleBlogStyles.blogFeature} flex align-items-center`}
              >
                <div
                  className={`${singleBlogStyles.skrIconAuthor} flex justify-content-center align-items-center`}
                >
                  <Image src={time} alt='time' width={20} height={20} />
                </div>
                <span className={singleBlogStyles.featureTexts}>
                  12.08.21 23:13
                </span>
              </div>
            </div>
            <div className={singleBlogStyles.blogPost}>
              <p class={`${singleBlogStyles.featureTexts} skrMb40`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi soluta minima nemo, earum et minus iste amet molestias
                sequi eum dolore laudantium iusto, quia praesentium eius, est?
                Eligendi unde, ab cumque iure fugit, veritatis dolor fugiat ad
                ex! Vero qui et dignissimos necessitatibus, praesentium magni,
                accusamus vel doloribus dolores assumenda. Laboriosam fugiat
                labore error perferendis doloribus, illo qui quisquam alias
                saepe, sunt magni! Praesentium molestias facere, dolores sint
                obcaecati nisi ducimus quaerat sunt. Ratione maiores repellendus
                facere optio harum soluta, obcaecati et ipsam eos. Doloribus,
                fugiat.
              </p>
              <blockquote className={`${singleBlogStyles.blockquote} skrMb40`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate eveniet modi voluptatem ut nemo, porro debitis,
                recusandae saepe, aspernatur obcaecati cum excepturi similique
                sed ex praesentium distinctio quas assumenda et.
              </blockquote>
              <p className={singleBlogStyles.featureTexts}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate amet natus dicta ipsum, aut autem sunt, tenetur
                sapiente et repudiandae id expedita recusandae vitae doloribus
                necessitatibus, accusamus sequi debitis reiciendis vel corporis
                cum fuga dolorem voluptatem. Dolores maxime, architecto quia?
              </p>
              <p className={`${singleBlogStyles.featureTexts} skrMb40`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia provident, distinctio ea!
              </p>
              <div className='grid'>
                <div className='col-12 lg:col-6'>
                  <Image
                    src={basicImg1}
                    width='100%'
                    height='80%'
                    layout='responsive'
                    alt='alternative'
                    className={singleBlogStyles.blogSideImage}
                  />
                </div>
                <div className='col-12 lg:col-6'>
                  <Image
                    src={basicImg2}
                    width='100%'
                    height='80%'
                    layout='responsive'
                    alt='alternative'
                    className={singleBlogStyles.blogSideImage}
                  />
                </div>
              </div>
              <p className={`${singleBlogStyles.featureTexts} skrMb30`}>
                Consectetur adipisicing elit. Modi temporibus ratione rerum
                voluptates, iusto non quas, ab optio sequi sint nisi officiis
                facilis nihil facere id tempore laborum, voluptatum aut nostrum
                natus vel tenetur praesentium labore illum, reprehenderit. Omnis
                sunt autem, odit vero. Facilis accusamus totam quidem,
                repudiandae. Modi saepe, expedita itaque laborum dolore
                accusantium?
              </p>

              <p className={`${singleBlogStyles.featureTexts} skrMb10`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                quisquam nam consectetur voluptate fuga facere ad quis magni
                laboriosam blanditiis!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogDetail;
