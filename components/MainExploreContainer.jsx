import styles from '../styles/MainExploreContainer.module.css'
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
                <div key={crap} className={styles.card}>
                    <h1>{crap}</h1>
                    <div className={styles.cardImageContainer}>
                        <img className={styles.cardImage} src={`/${crap}.png`}/>
                    </div>
                </div>)}
        </div>
    );
}

export default MainExploreContainer;