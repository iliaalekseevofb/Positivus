import React from 'react'
import Navbar from './components/modules/Navbar/Navbar'
import Hero from './components/modules/Hero/Hero'
import styles from './page.module.scss'
import Brands from './components/modules/Brands/Brands'
import Services from './components/modules/Services/Services'
import CaseStudies from './components/modules/CaseStudies/CaseStudies'
import WorkingProcesses from './components/modules/WorkingProcesses/WorkingProcesses'
import Team from './components/modules/Team/Team'
import Footer from './components/modules/Footer/Footer'

export default function Home(): React.ReactNode {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Navbar />
        <Hero />
        <Brands />
        <Services />
        <CaseStudies />
        <WorkingProcesses />
        <Team />
        <Footer />
      </div>
    </main>
  )
}
