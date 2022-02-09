import styles from '../styles/Text.module.css'
import { useContext } from 'react';
import { DarkModeContext } from '../pages/_app';
import { Color } from '../constants';

const Text = ({color, isBroken, content}) => {
    const darkModeContext = useContext(DarkModeContext)

    return (
        isBroken ?
        <p style={{color: color}} className={styles.brokenText}>
            {content}
        </p>
        :
        <p style={{color: darkModeContext.isDark ? Color.whiteish : Color.dark}} className={styles.text}>
            {content}
        </p>
    );
}

export default Text;