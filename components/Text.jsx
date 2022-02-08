import styles from '../styles/Text.module.css'

const Text = ({color, isBroken, content}) => {
    return (
        isBroken ?
        <p style={{color: color}} className={styles.brokenText}>
            {content}
        </p>
        :
        <p className={styles.text}>
            {content}
        </p>
    );
}

export default Text;