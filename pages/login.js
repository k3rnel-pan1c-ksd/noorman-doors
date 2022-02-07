import Footer from "../components/Footer";
import Header from "../components/Header";
import Textfield from "../components/Textfield";
import styles from '../styles/Login.module.css'

const login = () => {
    return (
        <div className={styles.all}>
            <Header />
            <form>
                <Textfield />
                <Textfield />
            </form>
            <Footer />
        </div>
    );
}

export default login;