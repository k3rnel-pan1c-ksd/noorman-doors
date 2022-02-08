import { useState } from 'react';
import Title from '../../Title'
import Text from '../../Text'
import MakeOrBreakButton from '../../MakeOrBreakButton'
import FixedAlignment from './FixedAlignment';
import BrokenAlignment from './BrokenAlignment';
import styles from '../../../styles/Contrast.module.css'
import TakeToExploreButton from '../../TakeToExploreButton';

const Alignment = () => {
    const [isBroken, setIsBroken] = useState(false)

    return (
        <div>
            <div className={styles.buttonContainer}>
                <TakeToExploreButton title='Go back'/>
                <MakeOrBreakButton title={isBroken ? 'Fix' : 'Break'} onClick={()=>setIsBroken(!isBroken)}/>
            </div>
            <Title title='Alignment.'/>
            <div style={{display: 'flex', flexDirection:'column', alignItems:'flex-start'}}>
                <Text content="Nothing should be placed on the page arbitrarily."/>
                <Text content="Every item should have a visual connection with something else on the page."/>
            </div>
            {isBroken ? <BrokenAlignment /> : <FixedAlignment />}
        </div>
    );
}

export default Alignment;