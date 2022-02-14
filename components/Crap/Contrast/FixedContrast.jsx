import Heading2 from "../../Heading2";
import Text from "../../Text"
import styles from '../../../styles/Contrast.module.css'
import Title from "../../Title";
import { Contr } from "../../../localization";

const FixedContrast = () => {
    return (
        <div>
            <div className={styles.element}>
                <Heading2  content={Contr.color.title.eng}/>
                <div className={styles.colorText}>
                    <div>
                        <Text content={Contr.color.text1.eng}/>
                        <Text content={Contr.color.text2.eng}/>
                    </div>
                    <img className={styles.colorImg} src='/colorsFixed.png'/>
                </div>
                <Text content={Contr.color.text3.eng}/>
            </div>
            <div className={styles.element}>
                <Heading2  content={Contr.size.title.eng}/>
                <div className={styles.colorText}>
                    <div>
                        <Text content={Contr.size.text1.eng}/>
                        <Text content={Contr.size.text2.eng}/>
                    </div>
                    <div className={styles.sizeText}>
                        <Title title={Contr.size.examples.eng[0]}/>
                        <Heading2 content={Contr.size.examples.eng[1]}/>
                        <Text content={Contr.size.examples.eng[2]}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FixedContrast;