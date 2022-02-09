import styles from '../styles/Title.module.css'
import { useContext } from 'react';
import { DarkModeContext } from '../pages/_app';
import { Color } from '../constants';

const Title = ({title}) => {
    const darkModeContext = useContext(DarkModeContext)

    return (
        <h1 style={{color: darkModeContext.isDark ? Color.gold : Color.dark}} className={styles.title}>
            {title}
        </h1>
    );
}

export default Title;