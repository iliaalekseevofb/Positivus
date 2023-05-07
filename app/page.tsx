import React from 'react'
import Navbar from './components/modules/Navbar/Navbar'
import Hero from './components/modules/Hero/Hero'
import styles from './page.module.scss'
import Brands from './components/modules/Brands/Brands'

export default function Home(): React.ReactNode {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Navbar />
        <Hero />
        <Brands />
      </div>
    </main>
  )
}
