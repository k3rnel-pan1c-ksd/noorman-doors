import { useState } from 'react';
import Title from '../../Title'
import Text from '../../Text'
import MakeOrBreakButton from '../../MakeOrBreakButton'
import FixedRepetition from './FixedRepetition';
import BrokenRepetition from './BrokenRepetition';
import styles from '../../../styles/Contrast.module.css'
import TakeToExploreButton from '../../TakeToExploreButton';

const Repetition = () => {
    const [isBroken, setIsBroken] = useState(false)

    return (
        <div>
            <div className={styles.buttonContainer}>
                <TakeToExploreButton title='Go back'/>
                <MakeOrBreakButton title={isBroken ? 'Fix' : 'Break'} onClick={()=>setIsBroken(!isBroken)}/>
            </div>
            <Title title='Repetition.'/>
            <Text content="Repetition is how you maintain consistency in a design. It helps users get familiarized with the way information is presented to them."/>
            {isBroken ? <BrokenRepetition /> : <FixedRepetition />}
        </div>
    );
}

export default Repetition;