import styles from '../../../styles/Repetition.module.css'
import DemoButton from '../../DemoButton'
import Text from '../../Text';
import Heading2 from '../../Heading2'
import { Repet } from '../../../localization';

const FixedRepetition = () => {
    return (
        <div>
            <div className={styles.element}>
                <div className={styles.colorText}>
                    <div>
                        <Text content={Repet.text1.eng}/>
                        <Text content={Repet.text2.eng}/>
                    </div>
                    <div className={styles.right}>
                        <DemoButton title={Repet.buttonTitle.eng} onClick={()=>alert(Repet.alert.eng)}/>
                        <Heading2 content='FONT'/>
                    </div>
                </div>
                <Text content={Repet.text3.eng}/>
            </div>
        </div>
    );
}

export default FixedRepetition;