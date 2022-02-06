import { useState } from 'react';
import styles from '../styles/Hamburger.module.scss'

const menuItems = [
    'Home',
    'About',
    'Explore'
]

const menuImages = [
    'moon.png',
    'sun.png'
]

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className={`${styles.burger} ${isOpen ? styles.active : ""}`} onClick={()=>setIsOpen(!isOpen)}/>
            {isOpen && <div className={styles.sidebar}>
                <ul>
                    {menuItems.map(item =><li key={item}>{item}</li> )}
                    {menuImages.map(item=><img key={item} src={`/${item}`}/>)}
                </ul>
            </div>}
        </>
    );
}

export default Hamburger;