import styles from '../styles/Text.module.css'
import { useContext } from 'react';
import { ModeContext } from '../pages/_app';
import { Color } from '../constants';

const Text = ({color, isBroken, content}) => {
    const modeContext = useContext(ModeContext)

    return (
        isBroken ?
        <p style={{color: color}} className={styles.brokenText}>
            {content}
        </p>
        :
        <p style={{color: modeContext.darkMode.isDark ? Color.whiteish : Color.dark}} className={styles.text}>
            {content}
        </p>
    );
}

export default Text;