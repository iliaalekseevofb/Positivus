import Image from 'next/image';
import styles from './CaseStudies.module.scss';

const Case = ({ text }: { text: string }) => {
  return (
    <div className={styles.caseStudies__case}>
      <p className={styles.caseStudies__case_description}>
        {text}
      </p>
      <button className={styles.caseStudies__case_button}>
        <span>Learn more</span>
        <div className={styles.caseStudies__case_button__icon}>
          <Image
            src='/icons/ArrowGreen.svg'
            alt='Arrow green'
            style={{objectFit: 'contain'}}
            fill
          />
        </div>
      </button>
    </div>
  )
}

const casesDescriptions: string[] = [
  'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
  'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
  'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.'
]

const CaseStudies = (): JSX.Element => {
  return (
    <section className={styles.caseStudies}>
      <header className={styles.caseStudies__header}>
        <h2 className={styles.caseStudies__header_title}>
          Case Studies
        </h2>
        <p className={styles.caseStudies__header_description}>
          Explore Real-Life Examples of Our Proven Digital<br /> Marketing Success through Our Case Studies
        </p>
      </header>
      <div className={styles.caseStudies__cases}>
        {casesDescriptions.map((caseDescription: string, index: number) => (
          <Case
            key={index}
            text={caseDescription}
          />
        ))}
      </div>
    </section>
  )
}

export default CaseStudies