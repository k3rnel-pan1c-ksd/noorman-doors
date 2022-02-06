import Footer from '../components/Footer';
import Header from '../components/Header';
import MainExploreContainer from '../components/MainExploreContainer';
import styles from '../styles/Explore.module.css'

const Explore = () => {
    return (
        <div className={styles.all}>
            <Header />
            <MainExploreContainer />
            <Footer />
        </div>
    );
}

export default Explore;