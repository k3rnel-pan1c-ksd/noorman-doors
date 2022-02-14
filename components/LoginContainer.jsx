import { useState } from 'react';
import Textfield from './Textfield';
import Dude from './Dude'
import styles from '../styles/LoginContainer.module.css'
import DemoButton from '../components/DemoButton'
import { Log } from '../localization'

function LoginContainer() {
    const [isEmailEmpty, setIsEmailEmpty] = useState(true)
    const [isPassEmpty, setIsPassEmpty] = useState(true)

    return (
        <div className={styles.container}>
            <div>
                <form>
                    <Textfield id='email' setIsEmpty={setIsEmailEmpty}/>
                    <Textfield id='password' setIsEmpty={setIsPassEmpty}/>
                    { !(isEmailEmpty || isPassEmpty) ?
                    <div className={styles.submit}>
                        <DemoButton title={Log.login.eng} onClick={()=>alert(Log.loginAlert)}/>
                    </div> : <></>}
                </form>
            </div>
            <div className={styles.images}>
                <img className={styles.image} src='/google.png' onClick={()=>alert(Log.google.eng)}/>
                <img className={styles.image} src='/fb.png' onClick={()=>alert(Log.facebook.eng)}/>
                <img className={styles.image} src='/apple.png' onClick={()=>alert(Log.apple.eng)}/>
            </div>
            <Dude />
        </div>
    );
}

export default LoginContainer;