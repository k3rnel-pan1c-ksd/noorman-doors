import { useContext, useState } from 'react';
import Title from '../../Title'
import Text from '../../Text'
import MakeOrBreakButton from '../../MakeOrBreakButton'
import FixedContrast from './FixedContrast';
import BrokenContrast from './BrokenContrast';
import styles from '../../../styles/Contrast.module.css'
import TakeToExploreButton from '../../TakeToExploreButton';
import { Contr, Crap } from '../../../localization';
import { ModeContext } from '../../../pages/_app';

const Contrast = () => {
    const [isBroken, setIsBroken] = useState(false)
    const modeContext = useContext(ModeContext)

    return (
        <div>
            <div className={styles.buttonContainer}>
                <TakeToExploreButton title={Crap.goBack(modeContext.langMode.isEng)}/>
                <MakeOrBreakButton title={isBroken ? Crap.fix(modeContext.langMode.isEng) : Crap.break(modeContext.langMode.isEng)} onClick={()=>setIsBroken(!isBroken)}/>
            </div>
            <Title title={Contr.contrast(modeContext.langMode.isEng)}/>
            <Text content={Contr.contrastTextUpper(modeContext.langMode.isEng)}/>
            {isBroken ? <BrokenContrast /> : <FixedContrast />}
        </div>
    );
}

export default Contrast;