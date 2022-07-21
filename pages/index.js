import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://www.aadityashah.com">
            <Image src="/images/face.png" alt="my face" width='400' height='400'></Image>
          </a>
        </h1>

        <p className={styles.description}>
          {' '}
          <code className={styles.code}>developer.foodie.gadget freak.techie.enthusiast.</code>
        </p>
    </main>
  )}
