import Head from "next/head";
import Image from "next/image";
const RoomSection = ({ roomData }) => {
    return (
        <div>
            {roomData.map((p) => (
                <div>
                    <p >{p.title}</p>
                    <Image src={p.img} alt="" width='300' height='300' />
                </div>
            ))}
            <span class="material-icons-sharp">
                bed
            </span>
        </div>
    )
}
export default RoomSection;

