import styles from '../styles/Start.module.css'
import Header from './Header';
import Footer from './Footer';
import MainContainer from './MainContainer';

const Start = () => {
    return (
        <div className={styles.all}>
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