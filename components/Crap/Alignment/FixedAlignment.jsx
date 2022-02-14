import Text from "../../Text"
import styles from '../../../styles/Alignment.module.css'
import { Align } from "../../../localization";

const FixedAlignment = () => {
    return (
        <div className={styles.main}>
            <Text content={Align.text1.eng}/>
            <Text content={Align.text2.eng}/>
            <Text content={Align.text3.eng}/>
        </div>
    );
}

export default FixedAlignment;