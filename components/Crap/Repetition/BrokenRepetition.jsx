import styles from '../../../styles/Repetition.module.css'
import DemoButton from '../../DemoButton'
import Text from '../../Text';
import Heading2 from '../../Heading2'
import { Repet } from '../../../localization'

const BrokenRepetition = () => {
    return (
        <div>
            <div className={styles.element}>
                <div className={styles.colorText}>
                    <div>
                        <Text color='red' isBroken={true} content={Repet.text1.eng}/>
                        <Text color='purple' isBroken={true} content={Repet.text2.eng}/>
                    </div>
                    <div className={styles.right}>
                        <DemoButton isBroken={true} title={Repet.buttonTitle.eng} onClick={()=>alert(Repet.alert.eng)}/>
                        <Heading2 isBroken={true} content='FONT'/>
                    </div>
                </div>
                <Text color='blue' isBroken={true} content={Repet.text3.eng}/>
            </div>
        </div>
    );
}

export default BrokenRepetition;