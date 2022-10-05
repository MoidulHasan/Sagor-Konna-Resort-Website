import aroundhotel from '../../styles/aroundhotel.module.css'
const AroundHotel = () => {
    return (
        <div>
            <div className={aroundhotel.title}>
                <h2>Around The Hotel</h2>
            </div>
            <div className='grid'>
                <div className={aroundhotel.aroundhotel_container}>
                    <div className={aroundhotel.aroundhotel_card}>
                        <div className={aroundhotel.aroundhotel_bg_img_container}>
                            <div className={aroundhotel.aroundhotel_bg_img_box}>
                                <div className={aroundhotel.aroundhotel_background} style={{
                                    backgroundImage: `url(" /images/Room/play_ground.jpg")`
                                }}></div>
                            </div>
                            <div className={`${aroundhotel.status}`}>
                                Play Ground
                            </div>
                        </div>
                    </div>
                </div>
                <div className={aroundhotel.aroundhotel_container}>
                    <div className={aroundhotel.aroundhotel_card}>
                        <div className={aroundhotel.aroundhotel_bg_img_container}>
                            <div className={aroundhotel.aroundhotel_bg_img_box}>
                                <div className={aroundhotel.aroundhotel_background} style={{
                                    backgroundImage: `url(" /images/Room/restaurant.jpg")`
                                }}></div>
                            </div>
                            <div className={`${aroundhotel.status}`}>
                                Restaurant
                            </div>
                        </div>
                    </div>
                </div>
                <div className={aroundhotel.aroundhotel_container}>
                    <div className={aroundhotel.aroundhotel_card}>
                        <div className={aroundhotel.aroundhotel_bg_img_container}>
                            <div className={aroundhotel.aroundhotel_bg_img_box}>
                                <div className={aroundhotel.aroundhotel_background} style={{
                                    backgroundImage: `url(" /images/Room/swiming_pool.jpg")`
                                }}></div>
                            </div>
                            <div className={`${aroundhotel.status}`}>
                                Pool
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AroundHotel