import styles from '../styles/Title.module.css'

const Title = ({title}) => {
    return (
        <h1 className={styles.title}>
            {title}
        </h1>
    );
}

export default Title;