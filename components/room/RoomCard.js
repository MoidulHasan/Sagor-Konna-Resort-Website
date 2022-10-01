import { Card } from 'primereact/card';
import roomCardStyles from '../../styles/room.module.css'
const RoomCard = ({ roomData }) => {
    return (
        <div>
            <div className={`${roomCardStyles.grid_container} grid`} >
                {roomData.map((card) => (
                    <div className={`${roomCardStyles.grid_column} col lg:col-4 md:col-6 py-3`}>
                        <div className="flex flex align-items-center justify-content-center flex-wrap overflow-hidden">
                            <Card className={` m-2 ${roomCardStyles.room_card}`} key={card.id} >
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
                                        <div className={roomCardStyles.bed}>
                                            <span class="material-icons-sharp">
                                                bed
                                            </span>
                                            <p>{card.count}
                                                <span>Guests</span>
                                            </p>
                                        </div>
                                        <div className={roomCardStyles.room_category}>
                                            <h2>{card.category}</h2>
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