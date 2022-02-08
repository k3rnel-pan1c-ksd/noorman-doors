import { useState } from 'react';
import Title from '../../Title'
import Text from '../../Text'
import MakeOrBreakButton from '../../MakeOrBreakButton'
import Heading2 from '../../Heading2'
import BrokenProximity from './BrokenProximity';
import styles from '../../../styles/Contrast.module.css'
import TakeToExploreButton from '../../TakeToExploreButton';

const Proximity = () => {
    const [isBroken, setIsBroken] = useState(false)

    return (
        <div>
            <div className={styles.buttonContainer}>
                <TakeToExploreButton title='Go back'/>
                <MakeOrBreakButton title={isBroken ? 'Fix' : 'Break'} onClick={()=>setIsBroken(!isBroken)}/>
            </div>
            <Title title='Proximity.'/>
            <div style={{display: 'flex', flexDirection:'column', alignItems:'flex-start'}}>
                <ul>
                    <li><Text content="Things that are related should be grouped close together"/></li>
                    <li><Text content="Things that are not related should be separated"/></li>
                </ul>

            </div>
            {isBroken ? 
                <>
                    <Text content='When several items are in close proximity to each other, they become one visual unit rather than several separate units. This helps organize information, reduces clutter, and gives the content consumer a clear structure. How to get it? Count the number of visual elements (units) on the page by counting the number of times you eye stops. If more than some reasonable number, see which elements can be grouped toghether into closer proximity to become one visual unit. The basic purpose of proximity is to organize content'/>
                </> 
             : 
             <>
                <div style={{display:'flex', columnGap:'10%'}}>
                    <Text content='When several items are in close proximity to each other, they become one visual unit rather than several separate units'/>
                    <Text content='This helps organize information, reduces clutter, and gives the content consumer a clear structure'/>
                </div>
                <div style={{marginTop:'4em'}}>
                    <Heading2 content='How to get it?'/>
                    <Text content='Count the number of visual elements (units) on the page by counting the number of times you eye stops'/>
                    <Text content='If more than some reasonable number, see which elements can be grouped toghether into closer proximity to become one visual unit'/>
                </div>
                <div style={{marginTop:'4em'}}>
                    <Heading2 content='The basic purpose of proximity is to organize content'/>
                </div>
             </>}
        </div>
    );
}

export default Proximity;