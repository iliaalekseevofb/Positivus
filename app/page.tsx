import React from 'react'
import Navbar from './components/modules/Navbar/Navbar'
import Hero from './components/modules/Hero/Hero'
import styles from './page.module.scss'
import Brands from './components/modules/Brands/Brands'
import Services from './components/modules/Services/Services'

export default function Home(): React.ReactNode {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Navbar />
        <Hero />
        <Brands />
        <Services />
      </div>
    </main>
  )
}
