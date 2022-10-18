const blogs = [
  {
    id: 1,
    authorName: 'Salma Noushad',
    img: '/images/blogs/blog-01.jpg',
    profile: '/images/blogs/blog_profile_female.jpg',
    title: ' See the sight of Kuakata with Sagor Konna Resort',
    description:
      'View here, at Sagor Konna Resort is amazing. People will able to feel the Bay of Bengal in a different angle.',
  },
  {
    id: 2,
    img: '/images/blogs/blog-02.jpg',
    authorName: 'Tarek Masud',
    profile: '/images/blogs/blog_profile_men.jpg',
    title: ' Sagor Konna meets Sagor Konna in Kuakata',
    description:
      'Sagor Konna Resort is one of the best hotel to stay in Kuakata. Kuakata is very beautiful place in Bangladesh to visit.',
  },
  {
    id: 3,
    img: '/images/blogs/blog-03.jpg',
    authorName: 'Shamima Akter',
    profile: '/images/blogs/blog_profile_female.jpg',
    title: 'Sagor Konna Resort will Surprise You in Different Ways',
    description:
      'Kuakata is a amazing place. Here in Kuakata, there is a fabulous resort named Sagor Konna Resort where you will able to spend your time effectively.',
  },
  {
    id: 4,
    img: '/images/blogs/blog-04.jpg',
    authorName: 'Salman Noushad',
    profile: '/images/blogs/blog_profile_men.jpg',
    title: ' Sagor Konna meets Sagor Konna in Kuakata',
    description:
      'Sagor Konna Resort is one of the best hotel to stay in Kuakata. Kuakata is very beautiful place in Bangladesh to visit.',
  },
  {
    id: 5,
    img: '/images/blogs/blog-05.jpg',
    authorName: 'Nashra Fairuz',
    profile: '/images/blogs/blog_profile_female.jpg',
    title: ' See the sight of Kuakata with Sagor Konna Resort',
    description:
      'View here, at Sagor Konna Resort is amazing. People will able to feel the Bay of Bengal in a different angle.',
  },
  {
    id: 6,
    img: '/images/blogs/blog-06.jpg',
    authorName: 'Moidul Khan',
    profile: '/images/blogs/blog_profile_men.jpg',
    title: ' Sagor Konna meets Sagor Konna in Kuakata',
    description:
      'Sagor Konna Resort is one of the best hotel to stay in Kuakata. Kuakata is very beautiful place in Bangladesh to visit.',
  },
  {
    id: 7,
    img: '/images/blogs/blog-07.jpg',
    authorName: 'Moutushi Islam',
    profile: '/images/blogs/blog_profile_female.jpg',
    title: ' See the sight of Kuakata with Sagor Konna Resort',
    description:
      'View here, at Sagor Konna Resort is amazing. People will able to feel the Bay of Bengal in a different angle.',
  },
  {
    id: 8,
    img: '/images/blogs/blog-08.jpg',
    authorName: 'Najim Uddin',
    profile: '/images/blogs/blog_profile_men.jpg',
    title: ' Sagor Konna meets Sagor Konna in Kuakata',
    description:
      'Sagor Konna Resort is one of the best hotel to stay in Kuakata. Kuakata is very beautiful place in Bangladesh to visit.',
  },
];
export default function handler(req, res) {
  res.status(200).json(blogs);
}
