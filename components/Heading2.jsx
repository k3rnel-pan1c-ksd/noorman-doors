import styles from '../styles/Heading2.module.css'

const Heading2 = ({ isBroken, content }) => {
    return (
        isBroken ?
        <h2 className={styles.brokenH2}>{content}</h2>
        :
        <h2 className={styles.h2}>{content}</h2>
    );
}

export default Heading2;