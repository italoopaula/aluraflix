import styles from './Button.module.css';

export default function Button({ buttonText, buttonClass }) {
    return (
        <button className={styles[buttonClass]}>
            {buttonText}
        </button>
    )
}