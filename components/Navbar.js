import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react';
const Navbar = () => {
  const router = useRouter()
  const handleHome = () => {
    console.log('Chose your room');
    router.push('/')
  }
  const handleClick = () => {
    console.log('Chose your room');
    router.push('/room')
  }
  return (
    <div>
      <h2>This is the navbar</h2>
      <ul className="flex  list-none">
        <li> <Link href='/'>
          <button onClick={handleHome}>Home</button>
        </Link></li>
        <li> <Link href='/room'>
          <button onClick={handleClick}>Room</button>
        </Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
