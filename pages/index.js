import Head from 'next/head';
import AboutSK from '../components/Home/AboutSK';
import TopBannerBooking from '../components/Home/TopBannerBooking';
import SKGallery from '../components/Home/SKGallery';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sagor Konna Resort</title>
        <meta
          name='description'
          content='Sagor Konna Resort is a fabulous resort  situated in Kuakata, Bangladesh'
        />
        <link rel='icon' href='/favicon.ico' />
        {/* material icon of google  */}
      </Head>
      <main className={`${styles.main}`}>
        <TopBannerBooking />
        <AboutSK />
        <SKGallery />
      </main>
    </div>
  );
}
