import styles from './Footer.module.css';
import logo from '../../assets/LogoMain.png'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <img src={logo} alt='Logo do projeto' />
        </footer>
    )
}