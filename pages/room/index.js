import RoomCard from '../../components/room/RoomCard';
const room = ({ data }) => {
  return (
    <div style={{ background: '#ECFAFB' }} className='p-container'>
      <RoomCard data={data} />
    </div>
  );
};
export default room;
export async function getStaticProps() {
  // const roomdata = await import('./api/roomData.json');
  // return { props: { roomdata: roomdata.default } };
  const res = await fetch('https://sagor-konna.herokuapp.com/api/room', {
    accept: 'application/json',
  });
  const data = await res.json();
  console.log(data.data.Room_number)
  return {
    props: { data },
  };
}