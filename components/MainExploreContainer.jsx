import styles from '../styles/MainExploreContainer.module.css'
import Link from 'next/link'

const craps = [
    'Contrast',
    'Repetition',
    'Alignment',
    'Proximity'
]
const MainExploreContainer = () => {
    return (
        <div className={styles.cards}>
            {craps.map(crap => 
                <Link href={`/explore/${crap.toLowerCase()}`} >
                    <div key={crap} className={styles.card}>
                        <h1>{crap}</h1>
                        <div className={styles.cardImageContainer}>
                            <img className={styles.cardImage} src={`/${crap}.png`}/>
                        </div>
                    </div>
                </Link>)}
        </div>
    );
}

export default MainExploreContainer;