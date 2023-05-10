import Image from 'next/image'
import { navLinks } from '@/app/utils/constants'
import { NavLink } from '@/app/utils/interfaces'
import styles from './Footer.module.scss'
import Link from 'next/link'

interface SocialMedia {
  href: string,
  icon: string
}

const socialMedias: SocialMedia[] = [
  { href: 'https://ru.linkedin.com/', icon: '/icons/LinkedInIconWhite.svg' },
  { href: 'https://ru-ru.facebook.com/', icon: '/icons/FacebookIconWhite.svg' },
  { href: 'https://twitter.com/?lang=ru', icon: '/icons/TwitterIconWhite.svg' },
]

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__navigation}>
        <div className={styles.footer__navigation_logo}>
          <Image
            src='/images/LogoWhite.svg'
            alt='Logo'
            style={{objectFit: 'contain'}}
            fill
          />
        </div>
        <div className={styles.footer__navigation_links}>
          {navLinks.map((navLink: NavLink) => (
            <a
              key={navLink.id}
              href={`#${navLink.id}`}
            >
              {navLink.text}
            </a>
          ))}
        </div>
        <div className={styles.footer__navigation_social}>
          {socialMedias.map((media: SocialMedia, index: number) => (
            <Link key={index} href={media.href}>
              <div className={styles.footer__navigation_social__link}>
                <Image
                  src={media.icon}
                  alt='Social media icon'
                  style={{objectFit: 'contain'}}
                  fill
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.footer__feedback}>
        <div className={styles.footer__feedback_contacts}>
          <h5>Contact us:</h5>
          <p>Email: info@positivus.com</p>
          <p>Phone: 555-567-8901</p>
          <p>Address: 1234 Main St. Moonstone City, Stardust State 12345</p>
        </div>
        <div className={styles.footer__feedback_email}>
          <form className={styles.footer__feedback_email__form }>
            <input
              placeholder='Email'
            />
            <button type='submit'>
              Subscribe to news
            </button>
          </form>
        </div>
      </div>
      <div className={styles.footer__additional}>
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <Link href='/'>Privacy Policy</Link>
      </div>
    </footer>
  )
}

export default Footer