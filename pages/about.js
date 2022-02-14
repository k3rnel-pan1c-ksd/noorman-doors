
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
                title={Abt.about.eng}
                text1={Abt.weMakeItARule.eng}
                text2={Abt.thisWebpageContains.eng}
                buttonTitle={Abt.exploreHow.eng} />
            <Footer />
        </div>
    );
}

export default About;