import Text from "../../Text"
import styles from '../../../styles/Alignment.module.css'
import { Align } from "../../../localization";

const BrokenAlignment = () => {
    return (
        <>
        <div className={styles.brokenMain}>
            <Text content={Align.text1.eng}/>
            <Text content={Align.text2.eng}/>
        </div>
        <div style={{display:'flex', justifyContent:'center', maxWidth: '40%'}}>
            <Text content={Align.text3.eng}/>
        </div>
        </>
    );
}

export default BrokenAlignment;