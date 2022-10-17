import Head from 'next/head';
import React from 'react';
import restaurantStyles from './Restaurant.module.css';

const Restaurant = () => {
  return (
    <div>
      <Head>
        <title>Restaurant Sagor Konna</title>
        <meta
          name='Restaurant description'
          content='Sagor Konna Resort is a fabulous resort  situated in Kuakata with a great restaurant, Bangladesh'
        />
        <link rel='icon' href='/favicon.ico' />
        {/* material icon of google  */}
      </Head>
      <main>
        <h2>Hello</h2>
      </main>
    </div>
  );
};

export default Restaurant;
