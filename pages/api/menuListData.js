const menuListData = [
  {
    id: 1,
    title: 'Peyalla with Sea Food',
    img: '/images/restaurant/menu/1.jpg',
    description: 'Salmon, Crab, Selfish, Shrimps, Oyster, Rice, Noodles',
    price: 420,
  },
  {
    id: 2,
    title: 'Peyalla with Sea Food',
    img: '/images/restaurant/menu/2.jpg',
    description: 'Salmon, Crab, Selfish, Shrimps, Oyster, Rice, Noodles',
    price: 420,
  },
  {
    id: 3,
    title: 'Peyalla with Sea Food',
    img: '/images/restaurant/menu/3.jpg',
    description: 'Salmon, Crab, Selfish, Shrimps, Oyster, Rice, Noodles',
    price: 420,
  },
  {
    id: 4,
    title: 'Peyalla with Sea Food',
    img: '/images/restaurant/menu/4.jpg',
    description: 'Salmon, Crab, Selfish, Shrimps, Oyster, Rice, Noodles',
    price: 420,
  },
  {
    id: 5,
    title: 'Peyalla with Sea Food',
    img: '/images/restaurant/menu/5.jpg',
    description: 'Salmon, Crab, Selfish, Shrimps, Oyster, Rice, Noodles',
    price: 420,
  },
  {
    id: 6,
    title: 'Peyalla with Sea Food',
    img: '/images/restaurant/menu/1.jpg',
    description: 'Salmon, Crab, Selfish, Shrimps, Oyster, Rice, Noodles',
    price: 450,
  },
];
export default function handler(req, res) {
  res.status(200).json(menuListData);
}
