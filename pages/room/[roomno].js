import SingleroomDetails from '../../components/room/SingleroomDetails';

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/roomData');
  const data = await res.json();
  const paths = data.map((curElem) => {
    return {
      params: {
        roomno: curElem.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.roomno;
  const res = await fetch(`http://localhost:3000/api/roomData`);
  const data = await res.json();
  const singleCard = data.find((singleData) => singleData.id.toString() === id);
  console.log(singleCard);
  return {
    props: {
      singleCard,
    },
  };
};
const myData = ({ singleCard }) => {
  // console.log(singleCard)
  return (
    <div style={{ background: '#ECFAFB' }} className='p-container'>
      <SingleroomDetails singleCard={singleCard} />
    </div>
  );
};

export default myData;
