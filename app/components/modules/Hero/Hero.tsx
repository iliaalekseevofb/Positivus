import Button from '../../elements/Button/Button';
import styles from './Hero.module.scss';

const Hero = (): JSX.Element => {
  return (
    <section id='AboutUs' className={styles.hero}>
      <div className={styles.hero__text}>
        <h1 className={styles.hero__text_title}>
          Navigating the digital landscape for success
        </h1>
        <div id='banner_mobile' className={styles.hero__banner}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src='/images/HeroImage.svg' alt='Hero image' />
        </div>
        <p className={styles.hero__text_description}>
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>
        <Button text='Book a consultation' />
      </div>
      <div id='banner_desktop' className={styles.hero__banner}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src='/images/HeroImage.svg' alt='Hero image' />
      </div>
    </section>
  )
}

export default Hero