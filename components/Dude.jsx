import styles from '../styles/Dude.module.css'
import { useContext } from 'react';
import { DarkModeContext } from '../pages/_app';
const Dude = () => {
    const darkModeContext = useContext(DarkModeContext)

    return (
        <div className={styles.circle}>
            <img className={styles.dude} src={darkModeContext.isDark ? 'dude-dark.webp' : 'dude-light.webp'}/>
        </div>
    );
}

export default Dude;