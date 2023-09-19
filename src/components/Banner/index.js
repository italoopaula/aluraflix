import styles from './Banner.module.css';
import BannerImage from './banner.jpeg'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <img src={BannerImage} alt='Banner' />
        </div>
    )
}