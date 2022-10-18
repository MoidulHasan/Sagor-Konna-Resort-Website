const blog = [
    {
        "id": 1,
        "title": "The Best Travel Insurance Companies for Seniors",
        "img": "/images/blogs/blog-01.jpg",
        "profile": "/images/blogs/blog_profile_female.jpg",
        "description": "Libero non aut dignissimos optio hic laudantium.",
    },
    {
        "id": 2,
        "title": "18 Easy Steps for Planning Your Next Trip",
        "img": "/images/blogs/blog-02.jpg",
        "profile": "/images/blogs/blog_profile_men.jpg",
        "description": "Libero non aut dignissimos optio hic laudantium.",
    },
    {
        "id": 3,
        "title": "The Best Travel Insurance Companies for Seniors",
        "img": "/images/blogs/blog-03.jpg",
        "profile": "/images/blogs/blog_profile_female.jpg",
        "description": "Libero non aut dignissimos optio hic laudantium.",
    },
    {
        "id": 4,
        "title": "18 Easy Steps for Planning Your Next Trip",
        "img": "/images/blogs/blog-04.jpg",
        "profile": "/images/blogs/blog_profile_men.jpg",
        "description": "Libero non aut dignissimos optio hic laudantium.",
    },
    {
        "id": 5,
        "title": "The Best Travel Insurance Companies for Seniors",
        "img": "/images/blogs/blog-05.jpg",
        "profile": "/images/blogs/blog_profile_female.jpg",
        "description": "Libero non aut dignissimos optio hic laudantium.",
    },
    {
        "id": 6,
        "title": "18 Easy Steps for Planning Your Next Trip",
        "img": "/images/blogs/blog-06.jpg",
        "profile": "/images/blogs/blog_profile_men.jpg",
        "description": "Libero non aut dignissimos optio hic laudantium.",
    },
    {
        "id": 7,
        "title": "The Best Travel Insurance Companies for Seniors",
        "img": "/images/blogs/blog-07.jpg",
        "profile": "/images/blogs/blog_profile_female.jpg",
        "description": "Libero non aut dignissimos optio hic laudantium.",
    },
    {
        "id": 8,
        "title": "18 Easy Steps for Planning Your Next Trip",
        "img": "/images/blogs/blog-08.jpg",
        "profile": "/images/blogs/blog_profile_men.jpg",
        "description": "Libero non aut dignissimos optio hic laudantium.",
    },
]
export default function handler(req, res) {
    res.status(200).json(blog)
}