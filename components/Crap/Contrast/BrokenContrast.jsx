import Heading2 from "../../Heading2";
import Text from "../../Text"
import styles from '../../../styles/Contrast.module.css'
import { Contr } from "../../../localization";
const BrokenContrast = () => {
    return (
        <div>
            <div style={{color:'#E6B31E26'}} className={styles.element}>
                <Heading2  content={Contr.color.title.eng}/>
                <div className={styles.colorText}>
                    <div>
                        <Text isBroken={true} content={Contr.color.text1.eng}/>
                        <Text isBroken={true} content={Contr.color.text2.eng}/>
                    </div>
                    <img className={styles.colorImg} src='/colorsBroken.png'/>
                </div>
                <Text isBroken={true} content={Contr.color.text3.eng}/>
            </div>
            <div className={styles.element}>
                <Heading2 content={Contr.size.title.eng}/>
                <div className={styles.colorText}>
                    <div>
                        <Text content={Contr.size.text1.eng}/>
                        <Text content={Contr.size.text2.eng}/>
                    </div>
                    <div className={styles.sizeText}>
                        {Contr.size.examples.eng.map(el=><Text key={el} content={el}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrokenContrast;