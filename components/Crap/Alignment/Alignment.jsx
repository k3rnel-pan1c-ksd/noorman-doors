import { useContext, useState } from 'react';
import Title from '../../Title'
import Text from '../../Text'
import MakeOrBreakButton from '../../MakeOrBreakButton'
import FixedAlignment from './FixedAlignment';
import BrokenAlignment from './BrokenAlignment';
import styles from '../../../styles/Contrast.module.css'
import TakeToExploreButton from '../../TakeToExploreButton';
import { Crap, Align } from '../../../localization';
import { ModeContext } from '../../../pages/_app';

const Alignment = () => {
    const [isBroken, setIsBroken] = useState(false)
    const modeContext = useContext(ModeContext)

    return (
        <div>
            <div className={styles.buttonContainer}>
                <TakeToExploreButton title={Crap.goBack(modeContext.langMode.isEng)}/>
                <MakeOrBreakButton title={isBroken ? Crap.fix(modeContext.langMode.isEng) : Crap.break(modeContext.langMode.isEng)} onClick={()=>setIsBroken(!isBroken)}/>
            </div>
            <Title title={Align.alignment(modeContext.langMode.isEng)}/>
            <div style={{display: 'flex', flexDirection:'column', alignItems:'flex-start'}}>
                <Text content={Align.alignmentTextUpper1(modeContext.langMode.isEng)}/>
                <Text content={Align.alignmentTextUpper2(modeContext.langMode.isEng)}/>
            </div>
            {isBroken ? <BrokenAlignment /> : <FixedAlignment />}
        </div>
    );
}

export default Alignment;