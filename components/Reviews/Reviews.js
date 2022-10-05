import Image from 'next/image';
import React from 'react'
import reviewStyles from '../../styles/reviews.module.css'
const Reviews = () => {
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    let newdate = year + "/" + month + "/" + day;
    console.log(newdate);
    return (
        <div className={`${reviewStyles.review_container} lg:col-8`}>
            <h2>Reviews</h2>
            <div className={`${reviewStyles.review}  `}>
                <div className={`${reviewStyles.review_profile_flex}  `}>
                    <div className={`${reviewStyles.review_img_date}`}>
                        <Image className={reviewStyles.review_image} src='/images/Room/review_female.jpg' width={55} height={55} />
                        <div className={reviewStyles.review_name_date}>
                            <h3>Rabeya Akter</h3>
                            <h5>{newdate}</h5>
                        </div>
                    </div>
                    <div className={reviewStyles.rating}>
                        <span class="material-icons-sharp">
                            star
                        </span><span class="material-icons-sharp">
                            star
                        </span><span class="material-icons-sharp">
                            star
                        </span><span class="material-icons-sharp">
                            star
                        </span><span class="material-icons-sharp">
                            star
                        </span>
                    </div>
                </div>
                <div className={reviewStyles.review_comment}>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus fugiat, dignissimos, repudiandae perferendis numquam iure quasi laboriosam vitae ullam veritatis iste dolore. Impedit, fuga dolorem voluptatum, tempora voluptates blanditiis ex, pariatur exercitationem reprehenderit laborum minima.</p>
                </div>
            </div>
            <div className={`${reviewStyles.review}  `}>
                <div className={`${reviewStyles.review_profile_flex}  `}>
                    <div className={`${reviewStyles.review_img_date}`}>
                        <Image className={reviewStyles.review_image} src='/images/Room/review_men.jpg' width={55} height={55} />
                        <div className={reviewStyles.review_name_date}>
                            <h3>Ratul Hasan</h3>
                            <h5>{newdate}</h5>
                        </div>
                    </div>
                    <div className={reviewStyles.rating}>
                        <span class="material-icons-sharp">
                            star
                        </span><span class="material-icons-sharp">
                            star
                        </span><span class="material-icons-sharp">
                            star
                        </span><span class="material-icons-sharp">
                            star
                        </span><span class="material-icons-sharp">
                            star
                        </span>
                    </div>
                </div>
                <div className={reviewStyles.review_comment}>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus fugiat, dignissimos, repudiandae perferendis numquam iure quasi laboriosam vitae ullam veritatis iste dolore. Impedit, fuga dolorem voluptatum, tempora voluptates blanditiis ex, pariatur exercitationem reprehenderit laborum minima.</p>
                </div>
            </div>
            <div className={reviewStyles.review_message}>
                <form>

                </form>
            </div>
        </div>
    )
}

export default Reviews