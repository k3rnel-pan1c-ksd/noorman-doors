
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainContainer from '../components/MainContainer';
import styles from '../styles/Start.module.css'
import { useContext } from 'react';
import { ModeContext } from './_app';
import { Color } from '../constants';
import { Abt } from '../localization';

const About = () => {
    const modeContext = useContext(ModeContext)

    return (
        <div style={{backgroundColor:modeContext.darkMode.isDark ? Color.dark : Color.whiteish}} className={styles.all}>
            <Header />
            <MainContainer
                title={Abt.about(modeContext.langMode.isEng)}
                text1={Abt.weMakeItARule(modeContext.langMode.isEng)}
                text2={Abt.thisWebpageContains(modeContext.langMode.isEng)}
                buttonTitle={Abt.exploreHow(modeContext.langMode.isEng)} />
            <Footer />
        </div>
    );
}

export default About;