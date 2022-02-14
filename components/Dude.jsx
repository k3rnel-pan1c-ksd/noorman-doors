import styles from '../styles/Dude.module.css'
import { useContext } from 'react';
import { ModeContext } from '../pages/_app';
const Dude = () => {
    const modeContext = useContext(ModeContext)

    return (
        <div className={styles.circle}>
            <img className={styles.dude} src={modeContext.darkMode.isDark ? 'dude-dark.webp' : 'dude-light.webp'}/>
        </div>
    );
}

export default Dude;