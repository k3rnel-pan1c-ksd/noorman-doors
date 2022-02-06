import styles from '../styles/Text.module.css'

const Text = ({content}) => {
    return (
        <p className={styles.text}>
            {content}
        </p>
    );
}

export default Text;