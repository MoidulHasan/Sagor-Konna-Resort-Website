import RoomCard from '../../components/room/RoomCard';
const room = ({ roomData }) => {
    return (
        <div style={{ background: '#ECFAFB' }} className='p-container'>
            <RoomCard roomData={roomData} />
        </div>
    )
}
export default room

export async function getStaticProps() {
    // const roomdata = await import('./api/roomData.json');
    // return { props: { roomdata: roomdata.default } };
    const res = await fetch('http://localhost:3000/api/roomData')
    const roomData = await res.json();
    return {
        props: { roomData },
    }

}