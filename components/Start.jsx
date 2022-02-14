import styles from '../styles/Start.module.css'
import Header from './Header';
import Footer from './Footer';
import MainContainer from './MainContainer';
import { useContext } from 'react';
import { ModeContext } from '../pages/_app';
import { Color } from '../constants';
import { Home } from '../localization';
const Start = () => {
    const modeContext = useContext(ModeContext)

    return (
        <div style={{backgroundColor:modeContext.darkMode.isDark ? Color.dark : Color.whiteish}} className={styles.all}>
            <Header />
            <MainContainer
                title={Home.youSuck(modeContext.langMode.isEng)}
                text1={Home.letsFixThat(modeContext.langMode.isEng)}
                buttonTitle={Home.imReady(modeContext.langMode.isEng)} />
            <Footer />
        </div>
    );
}

export default Start;