import { useState } from 'react';
import Title from '../../Title'
import Text from '../../Text'
import MakeOrBreakButton from '../../MakeOrBreakButton'
import FixedRepetition from './FixedRepetition';
import BrokenRepetition from './BrokenRepetition';
import styles from '../../../styles/Contrast.module.css'

const Repetition = () => {
    const [isBroken, setIsBroken] = useState(false)

    return (
        <div>
            <Title title='Repetition.'/>
            <Text content="Repetition is how you maintain consistency in a design. It helps users get familiarized with the way information is presented to them."/>
            <div className={styles.buttonContainer}>
                <MakeOrBreakButton title={isBroken ? 'Fix' : 'Break'} onClick={()=>setIsBroken(!isBroken)}/>
            </div>
            {isBroken ? <BrokenRepetition /> : <FixedRepetition />}
        </div>
    );
}

export default Repetition;