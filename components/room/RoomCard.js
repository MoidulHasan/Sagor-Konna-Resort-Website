import Image from 'next/image';
import { Card } from 'primereact/card';
import roomCardStyles from '../../styles/room.module.css'
const RoomCard = ({ roomData }) => {
    return (
        <div>
            <div className="flex flex align-items-center justify-content-center flex-wrap overflow-hidden">
                {roomData.map((card) => (
                    <Card className={` m-2 ${roomCardStyles.room_card}`} key={card.id} >
                        <div className={`${roomCardStyles.img_box}`}>
                            <div style={{ backgroundImage: `url(${card.img})` }} className={`relative ${roomCardStyles.card_img}`}>
                                <p className='absolute top-0 text-xl'>{card.status}</p>
                            </div>

                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default RoomCard