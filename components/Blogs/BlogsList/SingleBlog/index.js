import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import time from '../../../../public/images/blogs/time.svg';

const singleBlog = ({ singleBlog }) => {
  return (
    <div class='skrBlogCard'>
      <div class='skrCoverFrame'>
        <Image
          src={singleBlog?.img}
          alt='cover'
          className='blogImage'
          width='100%'
          height='100%'
          layout='responsive'
        />
      </div>
      <div class='skrDescriptionFrame'>
        <div class='skrRoomFeature'>
          <div class='skrFeature'>
            <div class='skrIconFrame skrIconAuthor'>
              <Image
                src={singleBlog?.profile}
                alt='Profile Picture'
                className='blogAuthor'
                // layout='fill'
                width={100}
                height={100}
              />
            </div>
            <span>{singleBlog?.authorName}</span>
          </div>
          <div class='skrFeature'>
            <div class='skrIconFrame'>
              <Image src={time} alt='time' />
            </div>
            <span>12.08.21 23:13</span>
          </div>
        </div>
        <Link href='/blog'>
          <a className='linkKajkam'>
            <h4 class='skrMb20'>{singleBlog?.title}</h4>
          </a>
        </Link>

        <div class='skrTextLight'>{singleBlog?.description}</div>
      </div>
    </div>
  );
};

export default singleBlog;
