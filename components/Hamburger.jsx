import { useState } from 'react';
import styles from '../styles/Hamburger.module.scss'
import Link from 'next/link'

const menuItems = [
    'Home',
    'About',
    'Explore'
]

const menuImages = [
    'moon.png',
    'language.png',
    'signInMe.png',
]

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className={`${styles.burger} ${isOpen ? styles.active : ""}`} onClick={()=>setIsOpen(!isOpen)}/>
            {isOpen && <div className={styles.sidebar}>
                <ul>
                    {menuItems.map(item =>
                        <Link key={item} href={item === 'Home' ?'/' : `/${item.toLowerCase()}`}>
                            <a className={styles.sidebarLi}>
                                <li key={item}>{item}</li>
                            </a>
                        </Link>
                    )}
                    <div className={styles.burgerImgContainer}>
                    {menuImages.map(item=>
                            <img key={item} src={`/${item}`}/>
                    )}
                    </div>
                </ul>
            </div>}
        </>
    );
}

export default Hamburger;