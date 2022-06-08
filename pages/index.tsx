import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import styled from 'styled-components'

const TestStyled = styled.div`
  border:1px solid #000000;
  display:block;
  width:150px;
  margin:10px auto;
  align-items: center;
  color:#ff00ff;
  height: 100px;
`
const Home: NextPage = () => {
  return (
    <>
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
        <TestStyled>Test Styled</TestStyled>
        <Image src="/favicon.png" alt="Vercel Logo" width={50} height={52} />
        </div>
      </main>

      <footer className={styles.footer}>
        footer
      </footer>
    </div>
    </>
  )
}

export default Home
