import styles from './SectionHeader.module.scss'

type SectionHeaderProps = {
  title: string,
  description: string
}

const SectionHeader = ({ title, description }: SectionHeaderProps): JSX.Element => {
  return (
    <header className={styles.sectionHeader}>
      <h2 className={styles.sectionHeader__title}>
        { title }
      </h2>
      <p className={styles.sectionHeader__description}>
        { description }
      </p>
    </header>
  )
}

export default SectionHeader