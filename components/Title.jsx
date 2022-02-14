import styles from '../styles/Title.module.css'
import { useContext } from 'react';
import { ModeContext } from '../pages/_app';
import { Color } from '../constants';

const Title = ({title}) => {
    const modeContext = useContext(ModeContext)

    return (
        <h1 style={{color: modeContext.darkMode.isDark ? Color.gold : Color.dark}} className={styles.title}>
            {title}
        </h1>
    );
}

export default Title;