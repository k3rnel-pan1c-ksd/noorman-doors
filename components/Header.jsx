import { useRouter } from 'next/router'
import { useContext } from 'react'
import { ModeContext } from '../pages/_app'
import styles from '../styles/Header.module.css'
import Link from 'next/link'
import Hamburger from './Hamburger'
import { Color } from '../constants'
import { Hdr } from '../localization'

const Header = () => {
    const router = useRouter()
    const modeContext = useContext(ModeContext)

    return (
        <div className={styles.header}>
            <Link href={'/'}>
                <div className={styles.logoContainer}>
                    <img className={styles.logo} src={modeContext.darkMode.isDark ?'/logoDark.png' : '/logoLight.png'}/>
                </div>
            </Link>
            {Hdr.menuItems(modeContext.langMode.isEng).map((item,index) =>
                <div key={item} className={styles.item}>
                    <Link href={item === Hdr.menuItems(modeContext.langMode.isEng)[0] ? '/' : `/${(Hdr.menuItems(true)[index]).toLowerCase()}`}>
                        <a style={{
                            backgroundColor: router.pathname.includes((Hdr.menuItems(true)[index]).toLowerCase()) || (router.pathname==='/' && item===Hdr.menuItems(modeContext.langMode.isEng)[0]) ? '#E6B31E66' : 'inherit'}} 
                            className={styles.menuItemBg}>
                            <h2 style={{color: modeContext.darkMode.isDark ? Color.whiteish : Color.dark}} className={styles.menuItemText}>{item}</h2>
                        </a>
                    </Link>
                </div>)}
                <div className={styles.item}>
                    <div className={styles.menuImageBg} onClick={modeContext.darkMode.toggleDark}>
                        <img className={styles.menuImage} src={modeContext.darkMode.isDark ? '/sun.png': '/moon.png'}/>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.menuImageBg} onClick={modeContext.langMode.toggleLang}>
                        <img className={styles.menuImage} src={modeContext.langMode.isEng ? '/languageCro.png' : '/languageEng.png'}/>
                    </div>
                </div>
                <div className={styles.item}>
                    <Link href='/login'>
                        <a className={styles.menuImageBg}>
                            <img className={styles.menuImage} src={modeContext.darkMode.isDark ? '/signInMeDark.png': '/signInMe.png'}/>
                        </a>
                    </Link>
                </div>
            <div className={styles.burger}>
                <Hamburger />
            </div>
        </div>
    );
}

export default Header;