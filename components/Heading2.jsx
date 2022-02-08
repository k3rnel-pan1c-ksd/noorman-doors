import styles from '../styles/Heading2.module.css'

const Heading2 = (props) => {
    return (
        <h2 className={styles.h2}>{props.content}</h2>
    );
}

export default Heading2;