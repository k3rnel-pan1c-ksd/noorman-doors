import Footer from "../components/Footer";
import Header from "../components/Header";
import LoginContainer from "../components/LoginContainer";
import styles from '../styles/Login.module.css'
import { useContext } from "react";
import { ModeContext } from "./_app";
import { Color } from "../constants";

const Login = () => {
    const modeContext = useContext(ModeContext)

    return (
        <div  style={{backgroundColor:modeContext.darkMode.isDark ? Color.dark : Color.whiteish}} className={styles.all}>
            <Header />
            <LoginContainer />
            <Footer />
        </div>
    );
}

export default Login;