import Text from "../../Text"
import styles from '../../../styles/Alignment.module.css'

const FixedAlignment = () => {
    return (
        <div className={styles.main}>
            <Text content='Straight lines give a more organized appearance'/>
            <Text content='Even when aligned elements are physically separated from  each other, there is an invisible line that connects them, both in your eye and in your mind'/>
            <Text content='As a general rule, left and right alignment work best – particularly for paragraphs of text. Center alignment is terrible for paragraphs, but can work for things other than text'/>
        </div>
    );
}

export default FixedAlignment;