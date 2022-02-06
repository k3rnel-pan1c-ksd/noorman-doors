import styles from '../styles/Dude.module.css'

const Dude = () => {
    return (
        <div className={styles.circle}>
            <img className={styles.dude} src={'dude-light.webp'}/>
        </div>
    );
}

export default Dude;