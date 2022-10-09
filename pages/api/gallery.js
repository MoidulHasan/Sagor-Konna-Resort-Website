const gallary = [
    {
        id: 1,
        img: '/images/Gallary/img-01.jpg'
        // img: 'images/Gallary/Gallary/img-01.jpg'

    },
    {
        id: 2,
        img: '/images/Gallary/img-14.jpg'
    },
    {
        id: 3,
        img: '/images/Gallary/img-03.jpg'
    },
    {
        id: 4,
        img: '/images/Gallary/img-15.jpg'
    },
    {
        id: 5,
        img: '/images/Gallary/img-05.jpg'

    },
    {
        id: 6,
        img: '/images/Gallary/img-06.jpg'
    },
    {
        id: 7,
        img: '/images/Gallary/img-07.jpg'
    },
    {
        id: 8,
        img: '/images/Gallary/img-16.jpg'
    },
    {
        id: 9,
        img: '/images/Gallary/img-18.jpg'
    },
    {
        id: 10,
        img: '/images/Gallary/img-10.jpg'
    },
];
export default function handler(req, res) {
    res.status(200).json(gallary)
}