'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.scss'

interface NavLink {
  id: string,
  text: string
}

const navLinks: NavLink[] = [
  { id: 'AboutUs', text: 'About Us' },
  { id: 'Services', text: 'Services' },
  { id: 'UseCases', text: 'Use Cases' },
  { id: 'Team', text: 'Team' },
  { id: 'Testimonials', text: 'Testimonials' },
]

const Navbar = (): JSX.Element => {
  const [isDropdownOpened, setIsDropdownOpened] = useState<boolean>(false);

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <Link href='/' className={styles.navbar__logo}>
        <Image
          src='/images/Logo.svg'
          alt='Positivus logo'
          style={{objectFit: 'contain'}}
          fill
        />
      </Link>

      {/* Desktop menu */}
      <div id='desktop_menu' className={styles.navbar__menu}>
        {navLinks.map((navLink: NavLink) => (
          <a
            className={styles.navbar__link}
            key={navLink.id}
            href={`#${navLink.id}`}
          >
            {navLink.text}
          </a>
        ))}
        <button type='button' className={styles.navbar__button}>
          Request a quote
        </button>
      </div>
      
      {/* Mobile menu */}
      <div id='mobile_menu' className={styles.navbar__menu}>
        <button type='button' className={styles.navbar__button}>
          Request a quote
        </button>
        <button
          type='button'
          className={styles.navbar__icon}
          onClick={() => setIsDropdownOpened(prev => !prev)}
        >
          <Image
            src='/icons/BurgerMenu.svg'
            alt='Burger menu'
            style={{objectFit: 'contain'}}
            fill
          />
        </button>
      </div>

      {/* Dropdown menu */}
      {isDropdownOpened && (
        <div className={styles.navbar__dropdown}>
          <div className={styles.navbar__dropdown_links}>
            {navLinks.map((navLink: NavLink) => (
              <a
                className={styles.navbar__link}
                key={navLink.id}
                href={`#${navLink.id}`}
                onClick={() => setIsDropdownOpened(prev => !prev)}
                >
                {navLink.text}
              </a>
            ))}
          </div>
          <button className={styles.navbar__button}>
            Request a quote
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar