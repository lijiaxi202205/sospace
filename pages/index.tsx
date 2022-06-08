import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SomniLife - Sospace</title>
        <meta name="description" content="Sospace" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Sospace 
        </h1>

        

        <div className={styles.grid}>
        <Link href="/welcom">
          <a>welcom</a>
          
        </Link>
          
        <Image src="/favicon.png" alt="Vercel Logo" width={50} height={52} />
        </div>
      </main>

      <footer className={styles.footer}>
        footer
      </footer>
    </div>
  )
}

export default Home
