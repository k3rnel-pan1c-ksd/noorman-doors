import styles from '../styles/Header.module.css'
import Link from 'next/link'
import Hamburger from './Hamburger'

const menuItems = [
    'Home',
    'About',
    'Explore'
]

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src={'/logoLight.png'}/>
            </div>
            {menuItems.map(item =>
                <div key={item} className={styles.item}>
                    <Link href={item === 'Home' ?'/' : `/${item.toLowerCase()}`}>
                        <a className={styles.menuItemBg}>
                            <h2 className={styles.menuItemText}>{item}</h2>
                        </a>
                    </Link>
                </div>)}
                <div className={styles.item}>
                    <div className={styles.menuImageBg}>
                        <img className={styles.menuImage} src='/moon.png'/>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.menuImageBg}>
                        <img className={styles.menuImage} src='/language.png'/>
                    </div>
                </div>
                <div className={styles.item}>
                    <Link href='/login'>
                        <a className={styles.menuImageBg}>
                            <img className={styles.menuImage} src='/signInMe.png'/>
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