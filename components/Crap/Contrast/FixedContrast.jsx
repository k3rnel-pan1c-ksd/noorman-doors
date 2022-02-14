import Heading2 from "../../Heading2";
import Text from "../../Text"
import styles from '../../../styles/Contrast.module.css'
import Title from "../../Title";
import { Contr } from "../../../localization";
import { ModeContext } from "../../../pages/_app";
import { useContext } from "react";

const FixedContrast = () => {
    const modeContext = useContext(ModeContext)

    return (
        <div>
            <div className={styles.element}>
                <Heading2  content={Contr.colorTitle(modeContext.langMode.isEng)}/>
                <div className={styles.colorText}>
                    <div>
                        <Text content={Contr.colorText1(modeContext.langMode.isEng)}/>
                        <Text content={Contr.colorText2(modeContext.langMode.isEng)}/>
                    </div>
                    <img className={styles.colorImg} src='/colorsFixed.png'/>
                </div>
                <Text content={Contr.colorText3(modeContext.langMode.isEng)}/>
            </div>
            <div className={styles.element}>
                <Heading2  content={Contr.sizeTitle(modeContext.langMode.isEng)}/>
                <div className={styles.colorText}>
                    <div>
                        <Text content={Contr.sizeText1(modeContext.langMode.isEng)}/>
                        <Text content={Contr.sizeText2(modeContext.langMode.isEng)}/>
                    </div>
                    <div className={styles.sizeText}>
                        <Title title={Contr.sizeExamples(modeContext.langMode.isEng)[0]}/>
                        <Heading2 content={Contr.sizeExamples(modeContext.langMode.isEng)[1]}/>
                        <Text content={Contr.sizeExamples(modeContext.langMode.isEng)[2]}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FixedContrast;