import styles from '../styles/Start.module.css'
import Header from './Header';
import Footer from './Footer';
import MainContainer from './MainContainer';
import { useContext } from 'react';
import { DarkModeContext } from '../pages/_app';
import { Color } from '../constants';

const Start = () => {
    const darkModeContext = useContext(DarkModeContext)

    return (
        <div style={{backgroundColor:darkModeContext.isDark ? Color.dark : Color.whiteish}} className={styles.all}>
            <Header />
            <MainContainer
                title={'YOU SUCK AT DESIGN.'}
                text1={"Let's fix that"}
                buttonTitle={"I'm ready"} />
            <Footer />
        </div>
    );
}

export default Start;