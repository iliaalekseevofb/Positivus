import Image from 'next/image'
import Button from '../Button/Button'
import styles from './ServicesBanner.module.scss'

const ServicesBanner = () => {
  return (
    <div className={styles.servicesBanner}>
      <div className={styles.servicesBanner__text}>
        <h4>Let’s make things happen</h4>
        <div className={styles.servicesBanner__text_description}>
          <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
        </div>
        <Button text='Get your free proposal' />
      </div>
      <div className={styles.servicesBanner__image}>
        <Image
          src='/images/ServicesBannerImage.svg'
          alt='Services banner image'
          style={{objectFit: 'contain'}}
          fill
        />
      </div>
    </div>
  )
}

export default ServicesBanner