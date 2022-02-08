import Text from "../../Text"
import styles from '../../../styles/Alignment.module.css'

const FixedAlignment = () => {
    return (
        <div className={styles.main}>
            <Text content='Nothing should be placed on the page arbitrarily'/>
            <Text content='Every item should have a visual connection with something else on the page'/>
        </div>
    );
}

export default FixedAlignment;