import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sagor Konna Resort</title>
        <meta
          name='description'
          content='Sagor Konna Resort is a fabulous resort  situated in Kuakata'
        />
        <link rel='icon' href='/favicon.ico' />
        {/* material icon of google  */}
      </Head>
      <main className={styles.main}>
        <h2>Sagor Konna Website</h2>
      </main>
    </div>
  );
}
