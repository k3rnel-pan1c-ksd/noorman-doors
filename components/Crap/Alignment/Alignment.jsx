import { useState } from 'react';
import Title from '../../Title'
import Text from '../../Text'
import MakeOrBreakButton from '../../MakeOrBreakButton'
import FixedAlignment from './FixedAlignment';
import BrokenAlignment from './BrokenAlignment';
import styles from '../../../styles/Contrast.module.css'
import TakeToExploreButton from '../../TakeToExploreButton';
import { Crap, Align } from '../../../localization';

const Alignment = () => {
    const [isBroken, setIsBroken] = useState(false)

    return (
        <div>
            <div className={styles.buttonContainer}>
                <TakeToExploreButton title={Crap.goBack.eng}/>
                <MakeOrBreakButton title={isBroken ? Crap.fix.eng : Crap.break.eng} onClick={()=>setIsBroken(!isBroken)}/>
            </div>
            <Title title={Align.alignment.eng}/>
            <div style={{display: 'flex', flexDirection:'column', alignItems:'flex-start'}}>
                <Text content={Align.alignmentTextUpper1.eng}/>
                <Text content={Align.alignmentTextUpper2.eng}/>
            </div>
            {isBroken ? <BrokenAlignment /> : <FixedAlignment />}
        </div>
    );
}

export default Alignment;