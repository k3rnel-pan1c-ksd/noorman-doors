import styles from '../styles/TakeToExploreButton.module.css'

const MakeOrBreakButton = (props) => {
    return (
        <div className={styles.bg}>
            <h2 className={styles.h2}>{props.title}</h2>
        </div>
    );
}

export default MakeOrBreakButton;