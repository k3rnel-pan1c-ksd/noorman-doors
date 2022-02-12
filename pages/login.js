import Footer from "../components/Footer";
import Header from "../components/Header";
import LoginContainer from "../components/LoginContainer";
import styles from '../styles/Login.module.css'
import { useContext } from "react";
import { DarkModeContext } from "./_app";
import { Color } from "../constants";

const login = () => {
    const darkModeContext = useContext(DarkModeContext)

    return (
        <div  style={{backgroundColor:darkModeContext.isDark ? Color.dark : Color.whiteish}} className={styles.all}>
            <Header />
            <LoginContainer />
            <Footer />
        </div>
    );
}

export default login;