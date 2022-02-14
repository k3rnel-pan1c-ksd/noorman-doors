import { useState } from 'react';
import Title from '../../Title'
import Text from '../../Text'
import MakeOrBreakButton from '../../MakeOrBreakButton'
import FixedContrast from './FixedContrast';
import BrokenContrast from './BrokenContrast';
import styles from '../../../styles/Contrast.module.css'
import TakeToExploreButton from '../../TakeToExploreButton';
import { Contr, Crap } from '../../../localization';
const Contrast = () => {
    const [isBroken, setIsBroken] = useState(false)

    return (
        <div>
            <div className={styles.buttonContainer}>
                <TakeToExploreButton title={Crap.goBack.eng}/>
                <MakeOrBreakButton title={isBroken ? Crap.fix.eng : Crap.break.eng} onClick={()=>setIsBroken(!isBroken)}/>
            </div>
            <Title title={Contr.contrast.eng}/>
            <Text content={Contr.contrastTextUpper.eng}/>
            {isBroken ? <BrokenContrast /> : <FixedContrast />}
        </div>
    );
}

export default Contrast;