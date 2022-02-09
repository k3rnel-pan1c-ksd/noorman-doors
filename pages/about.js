
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainContainer from '../components/MainContainer';
import styles from '../styles/Start.module.css'
import { useContext } from 'react';
import { DarkModeContext } from './_app';
import { Color } from '../constants';

const About = () => {
    const darkModeContext = useContext(DarkModeContext)

    return (
        <div style={{backgroundColor:darkModeContext.isDark ? Color.dark : Color.whiteish}} className={styles.all}>
            <Header />
            <MainContainer
                title={'About.'}
                text1={"We make it a rule never to criticize something unless we can offer a solution."}
                text2={"This webpage contains several important design principles, powerful tools for designers to ensure that their products are understandable and usable"}
                buttonTitle={"Explore how"} />
            <Footer />
        </div>
    );
}

export default About;