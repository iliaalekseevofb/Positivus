import { ServiceCardType } from '@/app/utils/types';
import { CardColor } from '@/app/utils/enums';
import SectionHeader from '../../elements/SectionHeader/SectionHeader';
import ServiceCard from '../../elements/ServicesCard/ServicesCard';
import ServicesBanner from '../../elements/ServicesBanner/ServicesBanner';
import styles from './Services.module.scss';

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
      <SectionHeader
        title='Services'
        description='At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:'
      />
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
      <ServicesBanner />
    </section>
  )
}

export default Services