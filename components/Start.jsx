import styles from '../styles/Start.module.css'
import Header from './Header';
import Footer from './Footer';
import MainContainer from './MainContainer';
import { useContext } from 'react';
import { DarkModeContext } from '../pages/_app';
import { Color } from '../constants';
import { Home } from '../localization';
const Start = () => {
    const darkModeContext = useContext(DarkModeContext)

    return (
        <div style={{backgroundColor:darkModeContext.isDark ? Color.dark : Color.whiteish}} className={styles.all}>
            <Header />
            <MainContainer
                title={Home.youSuck.eng}
                text1={Home.letsFixThat.eng}
                buttonTitle={Home.imReady.eng} />
            <Footer />
        </div>
    );
}

export default Start;