import React from 'react';
import videoStyles from './VIdeoComponent.module.css';
import playBtn from '../../../public/images/play.svg';
import Image from 'next/image';
import videoFrameImg from '../../../public/images/videoFrame.jpg';

const VIdeoComponent = () => {
  return (
    <div className={videoStyles.videoCOomponentContainer}>
      <div className='p-container'>
        <div className={videoStyles.skrAboutCard}>
          <div className='grid'>
            <div className='col-12 lg:col-6'>
              <div
                className={`${videoStyles.skrAboutText} flex align-item-center justify-content-center`}
              >
                <div className='skrVideoTitleFrame text-left'>
                  <h2 className='skrHeading '>Start YOur Amazing Stay!</h2>
                  <p className='skrParagraph '>
                    Consectetur adipisicing elit. Nihil, illum voluptate eveniet
                    ex fugit ea delectus, sed voluptatem. Laborum accusantium
                    libero commodi id officiis itaque esse adipisci,
                    necessitatibus asperiores, illo odio.
                  </p>
                  <a
                    href='https://www.youtube.com/watch?v=wsq-r8lMMsk'
                    data-fancybox
                    className='skrButton skrButtonHref'
                  >
                    <Image
                      alt='icon'
                      className='playButtonImg skrZoom'
                      src={playBtn}
                      width={12}
                    />
                    <span>Watch Video</span>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-12 lg:col-6'>
              <div className={videoStyles.skrVideoFrame}>
                <Image
                  src={videoFrameImg}
                  alt='Video Frame Cover'
                  className={videoStyles.skrVideoFrameCoverImg}
                />
                <a
                  data-fancybox=''
                  href='https://www.youtube.com/watch?v=wsq-r8lMMsk'
                  class={`${videoStyles.skrPlayButton} flex align-items-center justify-content-center`}
                >
                  <i class='fas fa-play'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VIdeoComponent;
