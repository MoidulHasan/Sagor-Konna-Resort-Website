import React from 'react';
import MenuListToShow from '../../../components/Menu/MenuListToShow';

const Menu = ({ menuLists }) => {
  console.log(menuLists);
  return (
    <div className='mt-6'>
      <MenuListToShow menuLists={menuLists} />
    </div>
  );
};

export default Menu;

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/menuListData', {
    accept: 'application/json',
  });
  // console.log(res);
  const menuLists = await res.json();
  return {
    props: { menuLists: menuLists },
  };
}
