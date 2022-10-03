export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:3000/api/roomData")
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
}
export const getStaticProps = async (context) => {
    const id = context.params.roomno;
    const res = await fetch(`http://localhost:3000/api/roomData`);
    const data = await res.json();
    const singleCard = data.find(singleData => singleData.id.toString() === id);
    return {
        props: {
            singleCard,
        },
    };
};
const myData = ({ singleCard }) => {
    console.log(singleCard)
    return (
        <div>
            <h3>{singleCard.title}</h3>
            <p>{singleCard.category}</p>
            <h3>{singleCard.status}</h3>
        </div>
    )
};

export default myData