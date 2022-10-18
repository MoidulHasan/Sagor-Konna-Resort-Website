import React from 'react';
import SingleBlogDetail from '../../../components/SingleBlog/SingleBlogDetail';
import SingleBlogHeader from '../../../components/SingleBlog/SingleBlogHeader';

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/blogData');
  const data = await res.json();
  const paths = data.map((curElem) => {
    return {
      params: {
        blogId: curElem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.blogId;
  const res = await fetch(`http://localhost:3000/api/blogData`);
  const data = await res.json();
  const singleBlog = data.find((singleData) => singleData.id.toString() === id);
  return {
    props: {
      singleBlog,
    },
  };
};

const BlogId = ({ singleBlog }) => {
  return (
    <div>
      <SingleBlogHeader blog={singleBlog} />
      <SingleBlogDetail blog={singleBlog} />
    </div>
  );
};

export default BlogId;
