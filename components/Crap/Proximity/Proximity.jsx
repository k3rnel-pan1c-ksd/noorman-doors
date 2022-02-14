import { useState } from 'react';
import Title from '../../Title'
import Text from '../../Text'
import MakeOrBreakButton from '../../MakeOrBreakButton'
import Heading2 from '../../Heading2'
import styles from '../../../styles/Contrast.module.css'
import TakeToExploreButton from '../../TakeToExploreButton';
import { Crap, Prox} from '../../../localization';

const Proximity = () => {
    const [isBroken, setIsBroken] = useState(false)

    return (
        <div>
            <div className={styles.buttonContainer}>
                <TakeToExploreButton title={Crap.goBack.eng}/>
                <MakeOrBreakButton title={isBroken ? Crap.fix.eng : Crap.break.eng} onClick={()=>setIsBroken(!isBroken)}/>
            </div>
            <Title title={Prox.proximity.eng}/>
            <div style={{display: 'flex', flexDirection:'column', alignItems:'flex-start'}}>
                <ul>
                    <li><Text content={Prox.alignmentTextUpper1.eng}/></li>
                    <li><Text content={Prox.alignmentTextUpper2.eng}/></li>
                </ul>

            </div>
            {isBroken ? 
                <>
                    <Text content={Prox.brokenText.eng}/>
                </> 
             : 
             <>
                <div style={{display:'flex', columnGap:'10%'}}>
                    <Text content={Prox.text1.eng}/>
                    <Text content={Prox.text2.eng}/>
                </div>
                <div style={{marginTop:'4em'}}>
                    <Heading2 content={Prox.h2_1.eng}/>
                    <Text content={Prox.text3.eng}/>
                    <Text content={Prox.text4.eng}/>
                </div>
                <div style={{marginTop:'4em'}}>
                    <Heading2 content={Prox.h2_2.eng}/>
                </div>
             </>}
        </div>
    );
}

export default Proximity;