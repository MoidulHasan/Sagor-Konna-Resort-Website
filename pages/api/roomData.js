const data = [
    {
        "id": 1,
        "title": "See View",
        "img": "/image/Room/room01.jpg",
        "status": "Popular",
        "type": "Guest",
        "description": "      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente qui esse pariatur fugit animi dolorum...",
        "price": "160.0"

    },
    {
        "id": 2,
        "title": "Nature view",
        "img": "/image/Room/room06.jpg",
        "type": "Guest",
        "description": "      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente qui esse pariatur fugit animi dolorum...",
        "price": "120.0"
    },
    {
        "id": 3,
        "title": "See View",
        "img": "/image/Room/room07.jpg",
        "type": "Guest",
        "status": "Popular",
        "description": "      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente qui esse pariatur fugit animi dolorum...",
        "price": "150.0"
    }
]

export default function handler(req, res) {
    res.status(200).json(data)
}