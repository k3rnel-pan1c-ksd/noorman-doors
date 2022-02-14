import { useContext, useState } from 'react';
import Textfield from './Textfield';
import Dude from './Dude'
import styles from '../styles/LoginContainer.module.css'
import DemoButton from '../components/DemoButton'
import { Log } from '../localization'
import { ModeContext } from '../pages/_app'

function LoginContainer() {
    const [isEmailEmpty, setIsEmailEmpty] = useState(true)
    const [isPassEmpty, setIsPassEmpty] = useState(true)
    const modeContext = useContext(ModeContext)

    return (
        <div className={styles.container}>
            <div>
                <form>
                    <Textfield id='email' setIsEmpty={setIsEmailEmpty}/>
                    <Textfield id='password' setIsEmpty={setIsPassEmpty}/>
                    { !(isEmailEmpty || isPassEmpty) ?
                    <div className={styles.submit}>
                        <DemoButton title={Log.login(modeContext.langMode.isEng)} onClick={()=>alert(Log.loginAlert)}/>
                    </div> : <></>}
                </form>
            </div>
            <div className={styles.images}>
                <img className={styles.image} src='/google.png' onClick={()=>alert(Log.google(modeContext.langMode.isEng))}/>
                <img className={styles.image} src='/fb.png' onClick={()=>alert(Log.facebook(modeContext.langMode.isEng))}/>
                <img className={styles.image} src='/apple.png' onClick={()=>alert(Log.apple(modeContext.langMode.isEng))}/>
            </div>
            <Dude />
        </div>
    );
}

export default LoginContainer;