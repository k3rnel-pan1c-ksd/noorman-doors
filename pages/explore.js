import Footer from '../components/Footer';
import Header from '../components/Header';
import MainExploreContainer from '../components/MainExploreContainer';
import styles from '../styles/Explore.module.css'
import { useContext } from 'react';
import { ModeContext } from './_app'
import { Color } from '../constants';

const Explore = () => {
    const modeContext = useContext(ModeContext)

    return (
        <div style={{backgroundColor:modeContext.darkMode.isDark ? Color.dark : Color.whiteish}} className={styles.all}>
            <Header />
            <MainExploreContainer />
            <Footer />
        </div>
    );
}

export default Explore;