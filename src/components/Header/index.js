import styles from './Header.module.css';
import Button from '../Button';
import logo from '../../assets/LogoMain.png';

export default function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt='Logo do projeto'/>
            <Button buttonText={'Novo vídeo'} buttonClass={'outline'} />
        </header>
    )
}