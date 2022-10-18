import React from 'react'

const Blog = ({ blog }) => {
    return (
        <div>
            {blog.map((b) => (
                <p>{b.title}</p>
            ))}
        </div>
    )
}

export default Blog