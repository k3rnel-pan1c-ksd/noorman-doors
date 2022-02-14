import Text from "../../Text"
import styles from '../../../styles/Alignment.module.css'
import { Align } from "../../../localization";
import { ModeContext } from "../../../pages/_app";
import { useContext } from "react";

const FixedAlignment = () => {
    const modeContext = useContext(ModeContext)
    return (
        <div className={styles.main}>
            <Text content={Align.text1(modeContext.langMode.isEng)}/>
            <Text content={Align.text2(modeContext.langMode.isEng)}/>
            <Text content={Align.text3(modeContext.langMode.isEng)}/>
        </div>
    );
}

export default FixedAlignment;