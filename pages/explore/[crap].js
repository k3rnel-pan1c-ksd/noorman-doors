import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import TakeToExploreButton from "../../components/TakeToExploreButton";
import styles from '../../styles/Crap.module.css'

const Explore = () => {
  const router = useRouter();

  
  return (
    <div className={styles.all}>
      <div className={styles.buttonContainer}>
        <TakeToExploreButton title='Go back'/>
      </div>
      <div className={styles.content}>
        <h1>HI! {router.query.crap} </h1>
      </div>
      <Footer />
    </div>
  );
};

export default Explore;