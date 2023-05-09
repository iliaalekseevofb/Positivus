import Image from 'next/image'
import { CardColor } from '@/app/utils/enums'
import { ServiceCardType } from '@/app/utils/types'
import styles from './ServicesCard.module.scss'

const ServiceCard = ({ text, image, color }: ServiceCardType): JSX.Element => {
  return (
    <div color={color} className={styles.servicesCard}>
      <div className={styles.servicesCard__text}>
        <h3 className={styles.servicesCard__text_title}>
          {text}
        </h3>
        <div id='servicesCard_image_mobile' className={styles.servicesCard__image}>
          <Image
            src={image}
            alt={text}
            style={{objectFit: 'contain'}}
            fill
          />
        </div>
        <button className={styles.servicesCard__text_button}>
          <div className={styles.servicesCard__text_button__image}>
            <Image
              src={color === CardColor.BLACK ? '/icons/ArrowIconWhite.svg' : '/icons/ArrowIconGreen.svg'}
              alt='Arrow icon'
              style={{objectFit: 'contain'}}
              fill
            />
          </div>
          <span className={styles.servicesCard__text_button__text}>
            Learn more
          </span>
        </button>
      </div>
      <div id='servicesCard_image_desktop' className={styles.servicesCard__image}>
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

export default ServiceCard