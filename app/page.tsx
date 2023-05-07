import React from 'react'
import Navbar from './components/modules/Navbar/Navbar'
import styles from './page.module.scss'

export default function Home(): React.ReactNode {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Navbar />
      </div>
    </main>
  )
}
