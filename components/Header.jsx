import { useRouter } from 'next/router'
import styles from '../styles/Header.module.css'
import Link from 'next/link'
import Hamburger from './Hamburger'

const menuItems = [
    'Home',
    'About',
    'Explore'
]
const Header = () => {
    const router = useRouter()

    return (
        <div className={styles.header}>
            <Link href={'/'}>
                <div className={styles.logoContainer}>
                    <img className={styles.logo} src={'/logoLight.png'}/>
                </div>
            </Link>
            {menuItems.map(item =>
                <div key={item} className={styles.item}>
                    <Link href={item === 'Home' ?'/' : `/${item.toLowerCase()}`}>
                        <a style={{backgroundColor: router.pathname.includes(item.toLowerCase()) || (router.pathname==='/' && item==='Home') ? '#E6B31E66' : 'inherit'}} className={styles.menuItemBg}>
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

//style={{backgroundColor: location.pathname.split('/').slice(1) === {item} ? '#E6B31E66' : 'inherit'}}