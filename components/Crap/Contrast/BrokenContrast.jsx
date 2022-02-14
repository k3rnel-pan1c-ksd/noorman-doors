import Heading2 from "../../Heading2";
import Text from "../../Text"
import styles from '../../../styles/Contrast.module.css'
import { Contr } from "../../../localization";
import { ModeContext } from "../../../pages/_app";
import { useContext } from "react";

const BrokenContrast = () => {
    const modeContext = useContext(ModeContext)

    return (
        <div>
            <div style={{color:'#E6B31E26'}} className={styles.element}>
                <Heading2  content={Contr.colorTitle(modeContext.langMode.isEng)}/>
                <div className={styles.colorText}>
                    <div>
                        <Text isBroken={true} content={Contr.colorText1(modeContext.langMode.isEng)}/>
                        <Text isBroken={true} content={Contr.colorText2(modeContext.langMode.isEng)}/>
                    </div>
                    <img className={styles.colorImg} src='/colorsBroken.png'/>
                </div>
                <Text isBroken={true} content={Contr.colorText3(modeContext.langMode.isEng)}/>
            </div>
            <div className={styles.element}>
                <Heading2 content={Contr.sizeTitle(modeContext.langMode.isEng)}/>
                <div className={styles.colorText}>
                    <div>
                        <Text content={Contr.sizeText1(modeContext.langMode.isEng)}/>
                        <Text content={Contr.sizeText2(modeContext.langMode.isEng)}/>
                    </div>
                    <div className={styles.sizeText}>
                        {Contr.sizeExamples(modeContext.langMode.isEng).map(el=><Text key={el} content={el}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrokenContrast;