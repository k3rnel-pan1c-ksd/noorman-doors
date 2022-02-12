import styles from '../styles/Textfield.module.scss'
import { useContext } from 'react';
import { DarkModeContext } from '../pages/_app';
import { Color } from '../constants';

const Textfield = ({setIsEmpty, id}) =>{
    const darkModeContext = useContext(DarkModeContext)

    const resolveImage = () => {
        switch(id) {
            case 'email':
                return darkModeContext.isDark ? '/signInMeDark.png' : '/signInMe.png'
            default:
                return darkModeContext.isDark ? '/passDark.png' : '/passLight.png'
        }
    }

    return (
            <div className={styles.textfieldContainer}>
                <img style={{maxWidth:'4em'}} src={resolveImage()}/>
                <input style={{color: darkModeContext.isDark ? Color.whiteish : Color.dark}} className={styles.formField} onChange={(e)=>setIsEmpty(e.target.value.length===0)}></input>
            </div>
        );
}

export default Textfield;