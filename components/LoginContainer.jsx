import { useState } from 'react';
import Textfield from './Textfield';
import Dude from './Dude'
import styles from '../styles/LoginContainer.module.css'
import DemoButton from '../components/DemoButton'

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
                        <DemoButton title='Login' onClick={()=>alert('One day I will log you in on correct credentials :)')}/>
                    </div> : <></>}
                </form>
            </div>
            <div className={styles.images}>
                <img className={styles.image} src='/google.png' onClick={()=>alert('One day I will be a Google signup popup :]')}/>
                <img className={styles.image} src='/fb.png' onClick={()=>alert('One day I will be a Facebook signup popup :]')}/>
                <img className={styles.image} src='/apple.png' onClick={()=>alert('One day I will be an Apple signup popup :]')}/>
            </div>
            <Dude />
        </div>
    );
}

export default LoginContainer;