import styles from './Button.module.scss'

type ButtonProps = {
  text: string
}

const Button = ({ text }: ButtonProps): JSX.Element => {
  return (
    <button className={styles.button}>
      { text }
    </button>
  )
}

export default Button