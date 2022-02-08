import styles from '../../../styles/Repetition.module.css'
import DemoButton from '../../DemoButton'
import Text from '../../Text';
import Heading2 from '../../Heading2'

const BrokenRepetition = () => {
    return (
        <div>
            <div className={styles.element}>
                <div className={styles.colorText}>
                    <div>
                        <Text color='red' isBroken={true} content='Repetition of elements is what gives an identity to a design.'/>
                        <Text color='purple' isBroken={true} content='It can be practiced with the colors, shapes, textures, sizes, and other attributes of the elements in a design.'/>
                    </div>
                    <div className={styles.right}>
                        <DemoButton isBroken={true} title='Button' onClick={()=>alert("I'm here just for demonstration purposes :)")}/>
                        <Heading2 isBroken={true} content='FONT'/>
                    </div>
                </div>
                <Text color='blue' isBroken={true} content='Your website should use same font types and sizes. The images used should be of same styles. With too many different-looking things on a web page, it will not look like everything belongs on the same page - it will not look cohesive.'/>
            </div>
        </div>
    );
}

export default BrokenRepetition;