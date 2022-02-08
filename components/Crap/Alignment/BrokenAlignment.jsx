import Text from "../../Text"
import styles from '../../../styles/Alignment.module.css'

const BrokenAlignment = () => {
    return (
        <>
        <div className={styles.brokenMain}>
            <Text content='Nothing should be placed on the page arbitrarily'/>
            <Text content='Every item should have a visual connection with something else on the page'/>
        </div>
        
        </>
    );
}

export default BrokenAlignment;