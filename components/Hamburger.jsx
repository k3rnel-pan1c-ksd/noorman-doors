import { useState, useContext } from 'react';
import { ModeContext } from '../pages/_app'
import { Color } from '../constants'
import styles from '../styles/Hamburger.module.scss'
import Link from 'next/link'
import Text from '../components/Text'
import { Hdr } from '../localization';

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false)
    const modeContext = useContext(ModeContext)

    return (
        <>
            <div className={`${styles.burger} ${isOpen ? styles.active : ""}`} onClick={()=>setIsOpen(!isOpen)}/>
            {isOpen && <div style={{backgroundColor:modeContext.darkMode.isDark ? Color.dark:Color.whiteish}} className={styles.sidebar}>
                <ul>
                    {Hdr.menuItems(modeContext.langMode.isEng).map((item,index) =>
                        <Link key={item} href={item === Hdr.menuItems(modeContext.langMode.isEng)[0] ? '/' : `/${(Hdr.menuItems(true)[index]).toLowerCase()}`}>
                            <a className={styles.sidebarLi}>
                                <li key={item}><Text content={item} /></li>
                            </a>
                        </Link>
                    )}
                    <div className={styles.burgerImgContainer}>
                        <img src={modeContext.darkMode.isDark ? '/sun.png': '/moon.png'} onClick={modeContext.darkMode.toggleDark}/>
                        <img style={{maxWidth:'20%'}} src={modeContext.langMode.isEng ? '/languageCro.png' : '/languageEng.png'} onClick={modeContext.langMode.toggleLang}/>
                        <Link href='/login'>
                            <img src={modeContext.darkMode.isDark ? '/signInMeDark.png': '/signInMe.png'}/>
                        </Link>
                    </div>
                </ul>
            </div>}
        </>
    );
}

export default Hamburger;