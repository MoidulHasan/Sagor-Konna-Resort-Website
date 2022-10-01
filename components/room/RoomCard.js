import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import roomCardStyles from '../../styles/room.module.css'
const RoomCard = ({ roomData }) => {
    return (
        <div>
            <div className="flex flex align-items-center justify-content-center flex-wrap overflow-hidden">
                {roomData.slice(0, 1).map((card) => (
                    <Card className={` m-2 ${roomCardStyles.room_card}`} key={card.id} >
                        <div className={roomCardStyles.img_container}>
                            <div className={`${roomCardStyles.img_box}`}>
                                <div style={{ backgroundImage: `url(${card.img})` }} className={`relative ${roomCardStyles.card_img}`}>
                                </div>
                            </div>
                            <span className={`${roomCardStyles.status}`}>{card.status}</span>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default RoomCard