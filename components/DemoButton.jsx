import styles from '../styles/TakeToExploreButton.module.css'

const DemoButton = (props) => {
    return (
        props.isBroken ?   
            <div style={{backgroundColor:'green'}} className={styles.bg} onClick={props.onClick}>
                <h2 className={styles.h2}>{props.title}</h2>
            </div>
        :   <div className={styles.bg} onClick={props.onClick}>
                <h2 className={styles.h2}>{props.title}</h2>
            </div>
    );
}

export default DemoButton;