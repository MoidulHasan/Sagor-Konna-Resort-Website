const data = [
    {
        "id": 1,
        "title": "See View",
        "img": "/image/Room/demo_room_04.jpg",
        "status": "Popular",
        "type": "Guest",
        "time": "night",
        "category": "Economic Room",
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente qui esse pariatur fugit animi dolorum...",
        "price": "4200.0",
        "count": "5",
        "roomImages": [
            "/image/Room/demo_room_04.jpg",
            "/image/Room/room_one_01.jpg"
            ,
            "/image/Room/room_one_02.jpg",
            "/image/Room/room_one_03.jpg",
            "/image/Room/room_one_04.jpg",
            "/image/Room/room_one_05.jpg",
            "/image/Room/room_one_06.jpg",
            "/image/Room/room_one_07.jpg",
        ],
    },
    {
        "id": 2,
        "title": "See View",
        "img": "/image/Room/demo_room_03.jpg",
        "status": "Popular",
        "type": "Guest",
        "category": "Standard Room",
        "time": "night",
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente qui esse pariatur fugit animi dolorum...",
        "price": "1600.0",
        "count": "3",
        "roomImages": [
            "/image/Room/demo_room_03.jpg",
            "/image/Room/room_one_01.jpg"
            ,
            "/image/Room/room_one_02.jpg",
            "/image/Room/room_one_03.jpg",
            "/image/Room/room_one_04.jpg",
            "/image/Room/room_one_05.jpg",
            "/image/Room/room_one_06.jpg",
            "/image/Room/room_one_07.jpg",
        ],
    },
    {
        "id": 3,
        "title": "Nature view",
        "img": "/image/Room/demo_room_02.jpg",
        "type": "Guest",
        "time": "night",
        "category": "Economic Room",
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente qui esse pariatur fugit animi dolorum...",
        "price": "2200.0",
        "count": "4",
        "roomImages": [
            "/image/Room/demo_room_02.jpg",
            "/image/Room/room_one_01.jpg"
            ,
            "/image/Room/room_one_02.jpg",
            "/image/Room/room_one_03.jpg",
            "/image/Room/room_one_04.jpg",
            "/image/Room/room_one_05.jpg",
            "/image/Room/room_one_06.jpg",
            "/image/Room/room_one_07.jpg",
        ],
    },
    {
        "id": 4,
        "title": "See View",
        "img": "/image/Room/demo_room_01.jpg",
        "type": "Guest",
        "time": "night",
        "category": "Standard Room",
        "status": "Popular",
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente qui esse pariatur fugit animi dolorum...",
        "price": "3500.0",
        "count": "2",
        "roomImages": [
            "/image/Room/demo_room_01.jpg",
            "/image/Room/room_one_01.jpg"
            ,
            "/image/Room/room_one_02.jpg",
            "/image/Room/room_one_03.jpg",
            "/image/Room/room_one_04.jpg",
            "/image/Room/room_one_05.jpg",
            "/image/Room/room_one_06.jpg",
            "/image/Room/room_one_07.jpg",
        ],
    }
]

export default function handler(req, res) {
    res.status(200).json(data)
}