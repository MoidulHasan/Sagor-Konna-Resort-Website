import { Card } from 'primereact/card';
import roomCardStyles from '../../styles/room.module.css'
const RoomCard = ({ roomData }) => {
    return (
        <div>
            <div className={`${roomCardStyles.grid_container} grid`} >
                {roomData.map((card) => (
                    <div className={`${roomCardStyles.grid_column} col lg:col-4 md:col-6 `}>
                        <div className={`flex flex align-items-center justify-content-center flex-wrap overflow-hidden ${roomCardStyles.grid_column_flex}`}>
                            <Card className={` ${roomCardStyles.room_card}`} key={card.id} >
                                <div className="flex flex align-items-center justify-content-center flex-wrap overflow-hidden">
                                    <div className={roomCardStyles.grid_column_bg}>
                                        <div className={roomCardStyles.img_container}>
                                            <div className={`${roomCardStyles.img_box}`}>
                                                <div style={{ backgroundImage: `url(${card.img})` }} className={`relative ${roomCardStyles.card_img}`}>
                                                </div>
                                            </div>
                                            {card.status &&
                                                <span className={`${roomCardStyles.status}`}>{card.status}</span>
                                            }
                                        </div>
                                        <div className={roomCardStyles.room_text}>
                                            <div className={roomCardStyles.bed}>
                                                <span class="material-icons-sharp">
                                                    bed
                                                </span>
                                                <p>{card.count}
                                                    <span> Guests</span>
                                                </p>
                                            </div>
                                            <div className={roomCardStyles.room_category}>
                                                <h3>{card.category}</h3>
                                                <p>{card.description}</p>
                                            </div>
                                            <div className={roomCardStyles.booking_details}>
                                                <div className={roomCardStyles.booing_price}>
                                                    <h1>TK {card.price}</h1>
                                                    <span>/night</span>
                                                </div>
                                                <div className={roomCardStyles.bookingBtn}>
                                                    <button>
                                                        <span class="material-icons-sharp">
                                                            bookmark_border
                                                        </span>
                                                        <h4>Book Now</h4>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RoomCard