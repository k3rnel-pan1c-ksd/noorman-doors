import { useContext, useState } from 'react';
import Title from '../../Title'
import Text from '../../Text'
import MakeOrBreakButton from '../../MakeOrBreakButton'
import Heading2 from '../../Heading2'
import styles from '../../../styles/Contrast.module.css'
import TakeToExploreButton from '../../TakeToExploreButton';
import { Crap, Prox} from '../../../localization';
import { ModeContext } from '../../../pages/_app';

const Proximity = () => {
    const [isBroken, setIsBroken] = useState(false)
    const modeContext = useContext(ModeContext)

    return (
        <div>
            <div className={styles.buttonContainer}>
                <TakeToExploreButton title={Crap.goBack(modeContext.langMode.isEng)}/>
                <MakeOrBreakButton title={isBroken ? Crap.fix(modeContext.langMode.isEng) : Crap.break(modeContext.langMode.isEng)} onClick={()=>setIsBroken(!isBroken)}/>
            </div>
            <Title title={Prox.proximity(modeContext.langMode.isEng)}/>
            <div style={{display: 'flex', flexDirection:'column', alignItems:'flex-start'}}>
                <ul>
                    <li><Text content={Prox.alignmentTextUpper1(modeContext.langMode.isEng)}/></li>
                    <li><Text content={Prox.alignmentTextUpper2(modeContext.langMode.isEng)}/></li>
                </ul>

            </div>
            {isBroken ? 
                <>
                    <Text content={Prox.brokenText(modeContext.langMode.isEng)}/>
                </> 
             : 
             <>
                <div style={{display:'flex', columnGap:'10%'}}>
                    <Text content={Prox.text1(modeContext.langMode.isEng)}/>
                    <Text content={Prox.text2(modeContext.langMode.isEng)}/>
                </div>
                <div style={{marginTop:'4em'}}>
                    <Heading2 content={Prox.h2_1(modeContext.langMode.isEng)}/>
                    <Text content={Prox.text3(modeContext.langMode.isEng)}/>
                    <Text content={Prox.text4(modeContext.langMode.isEng)}/>
                </div>
                <div style={{marginTop:'4em'}}>
                    <Heading2 content={Prox.h2_2(modeContext.langMode.isEng)}/>
                </div>
             </>}
        </div>
    );
}

export default Proximity;