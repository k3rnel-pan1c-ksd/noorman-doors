import { useState } from 'react';
import Title from '../../Title'
import Text from '../../Text'
import MakeOrBreakButton from '../../MakeOrBreakButton'
import FixedRepetition from './FixedRepetition';
import BrokenRepetition from './BrokenRepetition';
import styles from '../../../styles/Contrast.module.css'
import TakeToExploreButton from '../../TakeToExploreButton';
import { Repet, Crap } from '../../../localization';

const Repetition = () => {
    const [isBroken, setIsBroken] = useState(false)

    return (
        <div>
            <div className={styles.buttonContainer}>
                <TakeToExploreButton title={Crap.goBack.eng}/>
                <MakeOrBreakButton title={isBroken ? Crap.fix.eng : Crap.break.eng} onClick={()=>setIsBroken(!isBroken)}/>
            </div>
            <Title title={Repet.repetition.eng}/>
            <Text content={Repet.repetitionTextUpper.eng}/>
            {isBroken ? <BrokenRepetition /> : <FixedRepetition />}
        </div>
    );
}

export default Repetition;