import styles from '../styles/MainExploreContainer.module.css'
import Link from 'next/link'
import { useContext } from 'react'
import { ModeContext } from '../pages/_app'
import { Color } from '../constants'
import { Exp } from '../localization'

const MainExploreContainer = () => {
    const modeContext = useContext(ModeContext)

    return (
        <div className={styles.cards}>
            {Exp.craps.eng.map(crap => 
                <Link key={crap} href={`/explore/${crap.toLowerCase()}`} >
                    <div style={{backgroundColor:ModeContext ? Color.gold : Color.whiteish}} className={styles.card}>
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