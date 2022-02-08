import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import styles from '../../styles/Crap.module.css'
import Error404 from "../404";
import Contrast from '../../components/Crap/Contrast/Contrast'
import Repetition from '../../components/Crap/Repetition/Repetition'
import Alignment from '../../components/Crap/Alignment/Alignment'
import Proximity from '../../components/Crap/Proximity/Proximity'
 
const Explore = () => {
  const router = useRouter();
  const [crapComponent, setCrapComponent] = useState(null)

  useEffect(() => {
    switch(router.query.crap){
      case 'contrast':
        setCrapComponent(<Contrast />)
        break
      case 'repetition':
        setCrapComponent(<Repetition />)
        break
      case 'alignment':
        setCrapComponent(<Alignment />)
        break
      case 'proximity':
        setCrapComponent(<Proximity />)
        break
      default: setCrapComponent(null)
    }
  }, [router.query.crap]);
  

  
  return (crapComponent ? 
      <div className={styles.all}>
        <div className={styles.content}>
          {crapComponent}
        </div>
        <Footer />
      </div>
    : <Error404 />
  );
};

export default Explore;