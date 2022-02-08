import { useState } from 'react';
import Title from '../../Title'
import Text from '../../Text'
import MakeOrBreakButton from '../../MakeOrBreakButton'
import FixedContrast from './FixedContrast';
import BrokenContrast from './BrokenContrast';
import styles from '../../../styles/Contrast.module.css'

const Contrast = () => {
    const [isBroken, setIsBroken] = useState(false)

    return (
        <div>
            <Title title='Contrast.'/>
            <Text content="Contrast is all about making distinct elements stand out and is used to drive a user’s attention to specific elements in a design."/>
            <div className={styles.buttonContainer}>
                <MakeOrBreakButton title={isBroken ? 'Fix' : 'Break'} onClick={()=>setIsBroken(!isBroken)}/>
            </div>
            {isBroken ? <BrokenContrast /> : <FixedContrast />}
        </div>
    );
}

export default Contrast;