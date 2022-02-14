import { useState, useContext } from 'react';
import { DarkModeContext } from '../pages/_app'
import { Color } from '../constants'
import styles from '../styles/Hamburger.module.scss'
import Link from 'next/link'
import Text from '../components/Text'
const menuItems = [
    'Home',
    'About',
    'Explore'
]

const menuImages = [
    'moon.png',
    'languageEng.png',
    'signInMe.png',
]

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false)
    const darkModeContext = useContext(DarkModeContext)

    return (
        <>
            <div className={`${styles.burger} ${isOpen ? styles.active : ""}`} onClick={()=>setIsOpen(!isOpen)}/>
            {isOpen && <div style={{backgroundColor:darkModeContext.isDark ? Color.dark:Color.whiteish}} className={styles.sidebar}>
                <ul>
                    {menuItems.map(item =>
                        <Link key={item} href={item === 'Home' ?'/' : `/${item.toLowerCase()}`}>
                            <a className={styles.sidebarLi}>
                                <li key={item}><Text content={item} /></li>
                            </a>
                        </Link>
                    )}
                    <div className={styles.burgerImgContainer}>
                        <img src={darkModeContext.isDark ? '/sun.png': '/moon.png'} onClick={()=>darkModeContext.darkModeDispatch('toggle')}/>
                        <img src='/languageEng.png'/>
                        <img src={darkModeContext.isDark ? '/signInMeDark.png': '/signInMe.png'}/>
                    </div>
                </ul>
            </div>}
        </>
    );
}

export default Hamburger;