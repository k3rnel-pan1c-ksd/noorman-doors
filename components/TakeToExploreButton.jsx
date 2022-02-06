import styles from '../styles/TakeToExploreButton.module.css'
import Link from 'next/link'

const TakeToExploreButton = (props) => {
    return (
        <Link href="/explore" >
            <a className={styles.bg}>
                <h2 className={styles.h2}>{props.title}</h2>
            </a>
        </Link>
    );
}

export default TakeToExploreButton;