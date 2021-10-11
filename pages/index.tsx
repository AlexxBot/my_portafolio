import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alex Portafolio</title>
        <meta name="description" content="this is my portafolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Hola mundo</h1>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

export default Home
