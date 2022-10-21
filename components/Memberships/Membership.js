import { useState } from 'react';
import Link from 'next/link'
import membershipStyle from '../../styles/memberships.module.css'
import Image from 'next/image';
import videoFrameImg from '../../public/images/videoFrame.jpg';
const Memberships = () => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className={`${membershipStyle.membership_container}`}>
            <div className={`${membershipStyle.membership_header}`}>
                <div className={`${membershipStyle.membership_header_txt
                    }`}>
                    <h3>Let's Collaborate together ot show the beauty of Kuakata</h3>
                    <p>Join 3000+ locals & 1400+ groups from Bangladesh</p>
                    <Link href="#">
                        <button>Register Now</button>
                    </Link>
                </div>
            </div>
            <h3 style={{ textAlign: 'center', padding: '50px 0' }}>How Membership process work?</h3>
            <div className={`${membershipStyle.membership_process}`}>
                <div className={`${membershipStyle.membership_guide}`}>
                    <span class="material-icons-sharp">
                        login
                    </span>
                    <div className={`${membershipStyle.membership_guide_text}`}>
                        <h4>Sign up</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, sunt.</p>
                    </div>
                </div>
                <div className={`${membershipStyle.membership_guide}`}>
                    <span class="material-icons-sharp">
                        diversity_3
                    </span>
                    <div className={`${membershipStyle.membership_guide_text}`}>
                        <h4>Add Your services</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, sunt.</p>
                    </div>
                </div>
                <div className={`${membershipStyle.membership_guide}`}>
                    <span class="material-icons-sharp">
                        diversity_3
                    </span>
                    <div className={`${membershipStyle.membership_guide_text}`}>
                        <h4>Get Booking</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, sunt.</p>
                    </div>
                </div>
            </div>
            <div className={`${membershipStyle.membership_video_container}`}>
                <div className={membershipStyle.membership_VideoFrame}>
                    <Image
                        src={videoFrameImg}
                        alt='Video Frame Cover'
                        className={membershipStyle.membership_VideoFrameCoverImg}
                    />
                    <a
                        data-fancybox=''
                        href='https://www.youtube.com/watch?v=wsq-r8lMMsk'
                        class={`${membershipStyle.membership_PlayButton} flex align-items-center justify-content-center`}
                    >
                        <i class='fas fa-play'></i>
                    </a>
                </div>
            </div>
            <div className={`${membershipStyle.steps_container}`}>
                <h3 style={{ textAlign: 'center', padding: '50px 0' }}>Why be a Member of Sagor Konna?</h3>
                <div className={`${membershipStyle.membership_steps}`}>
                    <div className={`${membershipStyle.membership_ifacilities}`}>
                        <span class="material-icons-sharp">
                            payments
                        </span>
                        <h4>Earn an additional income</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, sunt.</p>
                    </div>
                    <div className={`${membershipStyle.membership_ifacilities}`}>
                        <span class="material-icons-sharp">
                            diversity_3
                        </span>
                        <h4>Open your network</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, sunt.</p>
                    </div>
                    <div className={`${membershipStyle.membership_ifacilities}`}>
                        <span class="material-icons-sharp">
                            translate
                        </span>
                        <h4>Practice your language</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, sunt.</p>
                    </div>
                </div>
                <div className={`${membershipStyle.membership_registerBtn}`}>
                    <Link href="#">
                        <button>Register Now</button>
                    </Link>
                </div>
            </div>
            <div className={`${membershipStyle.collapsible}`}>
                {/* <div className={`${membershipStyle.membership_faq}`} onClick={() => setIsActive(!isActive)}> */}
                <div className={`${membershipStyle.toggle}`} onClick={() => setIsActive(!isActive)}>
                    <h3>How will I open a account</h3>
                </div>
                <div className={`${isActive} ? [${membershipStyle.content}, ${membershipStyle.show}.join(' ')] ${membershipStyle.content}`}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, beatae?</p>
                </div>
            </div>
        </div>
    )
}
export default Memberships