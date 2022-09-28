import RoomSection from '../components/room/RoomSection';
const room = ({ roomData }) => {
    return (
        <div >
            <RoomSection roomData={roomData} />
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