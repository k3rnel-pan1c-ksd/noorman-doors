import styles from '../../../styles/Repetition.module.css'
import DemoButton from '../../DemoButton'
import Text from '../../Text';
import Heading2 from '../../Heading2'
import { Repet } from '../../../localization'
import { ModeContext } from '../../../pages/_app';
import { useContext } from 'react';

const BrokenRepetition = () => {
    const modeContext = useContext(ModeContext)

    return (
        <div>
            <div className={styles.element}>
                <div className={styles.colorText}>
                    <div>
                        <Text color='red' isBroken={true} content={Repet.text1(modeContext.langMode.isEng)}/>
                        <Text color='purple' isBroken={true} content={Repet.text2(modeContext.langMode.isEng)}/>
                    </div>
                    <div className={styles.right}>
                        <DemoButton isBroken={true} title={Repet.buttonTitle(modeContext.langMode.isEng)} onClick={()=>alert(Repet.alert(modeContext.langMode.isEng))}/>
                        <Heading2 isBroken={true} content='FONT'/>
                    </div>
                </div>
                <Text color='blue' isBroken={true} content={Repet.text3(modeContext.langMode.isEng)}/>
            </div>
        </div>
    );
}

export default BrokenRepetition;