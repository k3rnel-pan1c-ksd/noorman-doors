import styles from '../styles/MainContainer.module.css'
import Title from './Title';
import Text from './Text'
import TakeToExploreButton from './TakeToExploreButton';
import Dude from './Dude'

const MainContainer = (props) => {
    return (
        <div className={styles.parent}>
            <div className={styles.left}>
                <Title title={'Lorem ipsum dolor sit.'} />
                <Text content={'lorre. lorre. lorre. lorre. '} />
                <TakeToExploreButton title={'title'}/>
            </div>
            <div className={styles.right}>
                <Dude />
            </div>
        </div>
    );
}

export default MainContainer;