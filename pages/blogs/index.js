import Blog from '../../components/Blogs/Blogs'
const blogs = ({ blog }) => {
    return (
        <div>
            <Blog blog={blog} />
        </div>
    )
}

export default blogs
export async function getStaticProps() {
    // const roomdata = await import('./api/roomData.json');
    // return { props: { roomdata: roomdata.default } };
    const res = await fetch('http://localhost:3000/api/blogData', {
        accept: 'application/json',
    });
    // console.log((res));
    const blog = await res.json();
    return {
        props: { blog: blog },
    };
}