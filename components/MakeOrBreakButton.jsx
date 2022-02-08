import styles from '../styles/TakeToExploreButton.module.css'

const MakeOrBreakButton = (props) => {
    return (
        <div style={{position: 'fixed'}} className={styles.bg} onClick={props.onClick}>
            <h2 className={styles.h2}>{props.title}</h2>
        </div>
    );
}

export default MakeOrBreakButton;