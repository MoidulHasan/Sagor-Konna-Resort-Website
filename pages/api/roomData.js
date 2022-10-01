const data = [
    {
        "id": 1,
        "title": "See View",
        "img": "/image/Room/demo_room_01.jpg",
        "status": "Popular",
        "type": "Guest",
        "time": "night",
        "category": "Economic Room",
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente qui esse pariatur fugit animi dolorum...",
        "price": "160.0",
        "count": "5"
    },
    {
        "id": 2,
        "title": "See View",
        "img": "/image/Room/demo_room_03.jpg",
        "status": "Popular",
        "type": "Guest",
        "category": "Standard Room",
        "time": "night",
        "description": "      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente qui esse pariatur fugit animi dolorum...",
        "price": "160.0",
        "count": "3"
    },
    {
        "id": 3,
        "title": "Nature view",
        "img": "/image/Room/demo_room_02.jpg",
        "type": "Guest",
        "time": "night",
        "category": "Economic Room",
        "description": "      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente qui esse pariatur fugit animi dolorum...",
        "price": "120.0",
        "count": "4"
    },
    {
        "id": 4,
        "title": "See View",
        "img": "/image/Room/demo_room_01.jpg",
        "type": "Guest",
        "time": "night",
        "category": "Standard Room",
        "status": "Popular",
        "description": "      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente qui esse pariatur fugit animi dolorum...",
        "price": "150.0",
        "count": "2"
    }
]

export default function handler(req, res) {
    res.status(200).json(data)
}