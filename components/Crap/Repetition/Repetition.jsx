import { useContext, useState } from 'react';
import Title from '../../Title'
import Text from '../../Text'
import MakeOrBreakButton from '../../MakeOrBreakButton'
import FixedRepetition from './FixedRepetition';
import BrokenRepetition from './BrokenRepetition';
import styles from '../../../styles/Contrast.module.css'
import TakeToExploreButton from '../../TakeToExploreButton';
import { Repet, Crap } from '../../../localization';
import { ModeContext } from '../../../pages/_app';

const Repetition = () => {
    const [isBroken, setIsBroken] = useState(false)
    const modeContext = useContext(ModeContext)

    return (
        <div>
            <div className={styles.buttonContainer}>
                <TakeToExploreButton title={Crap.goBack(modeContext.langMode.isEng)}/>
                <MakeOrBreakButton title={isBroken ? Crap.fix(modeContext.langMode.isEng) : Crap.break(modeContext.langMode.isEng)} onClick={()=>setIsBroken(!isBroken)}/>
            </div>
            <Title title={Repet.repetition(modeContext.langMode.isEng)}/>
            <Text content={Repet.repetitionTextUpper(modeContext.langMode.isEng)}/>
            {isBroken ? <BrokenRepetition /> : <FixedRepetition />}
        </div>
    );
}

export default Repetition;