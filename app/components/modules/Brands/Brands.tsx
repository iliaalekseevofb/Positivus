import styles from './Brands.module.scss'
import Link from 'next/link'
import Image from 'next/image'

interface Brand {
  url: string,
  href: string,
  name: string
}

const brands: Brand[] = [
  {url: 'https://www.notion.so/', href: '/images/NotionLogo.svg', name: 'Notion'},
  {url: 'https://www.amazon.com/', href: '/images/AmazonLogo.svg', name: 'Amazon'},
  {url: 'https://dribbble.com/', href: '/images/DribbbleLogo.svg', name: 'Dribbble'},
  {url: 'https://www.hubspot.com/', href: '/images/HubspotLogo.svg', name: 'Hubspot'},
  {url: 'https://www.netflix.com/', href: '/images/NetflixLogo.svg', name: 'Netflix'},
  {url: 'https://zoom.us/ru', href: '/images/ZoomLogo.svg', name: 'Zoom'},
]

const Brands = (): JSX.Element => {
  return (
    <section className={styles.brands}>
      {brands.map((brand) => (
        <Link
          key={brand.name}
          href={brand.url}
          target='_blank'
          className={styles.brands__logo}
        >
          <Image
            src={brand.href}
            alt={brand.name}
            style={{objectFit: 'contain'}}
            fill
          />
        </Link>
      ))}
    </section>
  )
}

export default Brands