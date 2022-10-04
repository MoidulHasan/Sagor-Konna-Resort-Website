import RoomCard from '../../components/room/RoomCard';
const room = ({ data }) => {
    return (
        <div style={{ background: '#ECFAFB' }} className='p-container'>
            <RoomCard data={data} />
        </div>
    )
}

export async function getStaticProps() {
    // const roomdata = await import('./api/roomData.json');
    // return { props: { roomdata: roomdata.default } };
    const res = await fetch('http://localhost:3000/api/roomData')
    // console.log((res));
    const data = await res.json();
    return {
        props: { data: data },
    };
}
export default room
