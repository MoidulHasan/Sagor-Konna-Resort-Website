import Image from 'next/image';
import { Card } from 'primereact/card';
const RoomCard = ({ roomData }) => {
    return (
        <div>
            {roomData.map((card, i) => (
                <Card className='room-card' key={i}  >
                    <p>{card.title}</p>
                </Card>
            ))}
        </div>
    )
}

export default RoomCard