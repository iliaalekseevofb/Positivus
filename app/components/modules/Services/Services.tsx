import Image from 'next/image';
import styles from './Services.module.scss';

enum CardColor {
  GREEN = 'green',
  BLACK = 'black',
  GRAY = 'gray'
}

type ServiceCardType = {
  text: string,
  image: string,
  color: CardColor
}

const ServiceCard = ({ text, image, color }: ServiceCardType): JSX.Element => {
  return (
    <div color={color} className={styles.services__card}>
      <div className={styles.services__card_content}>
        <h3 className={styles.services__card_content__title}>
          {text}
        </h3>
        <div id='service_card_image_mobile' className={styles.services__card_image}>
          <Image
            src={image}
            alt={text}
            style={{objectFit: 'contain'}}
            fill
          />
        </div>
        <button className={styles.services__card_content__button}>
          <div className={styles.services__card_content__button_image}>
            <Image
              src={color === CardColor.BLACK ? '/icons/ArrowIconWhite.svg' : '/icons/ArrowIconGreen.svg'}
              alt='Arrow icon'
              style={{objectFit: 'contain'}}
              fill
            />
          </div>
          <span className={styles.services__card_content__button_text}>
            Learn more
          </span>
        </button>
      </div>
      <div id='service_card_image_desktop' className={styles.services__card_image}>
        <Image
          src={image}
          alt={text}
          style={{objectFit: 'contain'}}
          fill
        />
      </div>
    </div>
  )
}

const services: ServiceCardType[] = [
  {text: 'Search engine optimization', image: '/images/SEOImage.svg', color: CardColor.GRAY},
  {text: 'Pay-per-click advertising', image: '/images/PPCImage.svg', color: CardColor.GREEN},
  {text: 'Social Media Marketing', image: '/images/SMMImage.svg', color: CardColor.BLACK},
  {text: 'Email Marketing', image: '/images/EmailImage.svg', color: CardColor.GRAY},
  {text: 'Content Creation', image: '/images/ContentImage.svg', color: CardColor.GREEN},
  {text: 'Analytics and Tracking', image: '/images/AnalyticsImage.svg', color: CardColor.BLACK}
]

const Services = () => {
  return (
    <section id='Services' className={styles.services}>
      <header className={styles.services__header}>
        <h2 className={styles.services__header_title}>
          Services
        </h2>
        <p className={styles.services__header_description}>
          At our digital marketing agency, we offer a range of services to<br />help businesses grow and succeed online. These services include:
        </p>
      </header>
      <div className={styles.services__cards}>
        {services.map((service: ServiceCardType) => (
          <ServiceCard
            key={service.text}
            text={service.text}
            image={service.image}
            color={service.color}
          />
        ))}
      </div>
      <div className={styles.services__banner}>
        <div className={styles.services__banner_text}>
          <h4>Let’s make things happen</h4>
          <div className={styles.services__banner_text__description}>
            <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
          </div>
          <button>
            Get your free proposal
          </button>
        </div>
        <div className={styles.services__banner_image}>
          <Image
            src='/images/ServicesBannerImage.svg'
            alt='Services banner image'
            style={{objectFit: 'contain'}}
            fill
          />
        </div>
      </div>
    </section>
  )
}

export default Services