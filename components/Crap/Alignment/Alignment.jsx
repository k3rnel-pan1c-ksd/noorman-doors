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
            <Text content="Contrast is all about making distinct elements stand out and is used to drive a user’s attention to specific elements in a design."/>
            {isBroken ? <BrokenAlignment /> : <FixedAlignment />}
        </div>
    );
}

export default Alignment;