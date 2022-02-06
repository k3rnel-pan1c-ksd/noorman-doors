import styles from '../styles/Header.module.css'
import Link from 'next/link'

const menuItems = [
    'Home',
    'About',
    'Explore'
]

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>Logo</div>
            {menuItems.map(item =>
                <Link href={item === 'Home' ?'/' : `/${item.toLowerCase()}`}>
                    <a key={item} className={styles.item}>
                        <div className={styles.menuItemBg}>
                            <h2 className={styles.menuItemText}>{item}</h2>
                        </div>
                    </a> 
                </Link>)}
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
                    <div className={styles.menuImageBg}>
                        <img className={styles.menuImage} src='/signInMe.png'/>
                    </div>
                </div>
            <div className={styles.burger}>B</div>
        </div>
    );
}

export default Header;