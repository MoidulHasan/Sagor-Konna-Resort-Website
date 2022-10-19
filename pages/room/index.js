import RoomCard from '../../components/room/RoomCard';
const room = ({ data }) => {
  console.log();
  return (
    <div style={{ background: '#ECFAFB' }} className='p-container'>
      <RoomCard data={data} />
    </div>
  );
};
export default room;
export async function getStaticProps() {
  // const url = process.env.API_URL;
  // const roomdata = await import('./api/roomData.json');
  // return { props: { roomdata: roomdata.default } };
  const res = await fetch('https://sagor-konna.herokuapp.com/api/room/', {
    accept: 'application/json',
  });
  if (!res.ok) {
    const message = `An error occured: ${res.status}`;
    throw new Error(message);
  }
  const roomData = await res.json();
  const data = roomData?.data?.data;
  // console.log(data.data.data, 'data');
  return {
    props: { data },
  };
}
