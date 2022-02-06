import styles from '../styles/MainContainer.module.css'
import Title from './Title';
import Text from './Text'
import TakeToExploreButton from './TakeToExploreButton';
import Dude from './Dude'

const MainContainer = (props) => {
    return (
        <div className={styles.parent}>
            <div className={styles.left}>
                <Title title={props.title} />
                <Text content={props.text1} />
                {props.text2 ? <Text content={props.text2}></Text> : <></>}
                <TakeToExploreButton title={props.buttonTitle}/>
            </div>
            <div className={styles.right}>
                <Dude />
            </div>
        </div>
    );
}

export default MainContainer;