import styles from '../styles/Start.module.css'
import Header from './Header';
import Footer from './Footer';
import MainContainer from './MainContainer';

const Start = () => {
    return (
        <div className={styles.all}>
            <Header />
            <MainContainer />
            <Footer />
        </div>
    );
}

export default Start;