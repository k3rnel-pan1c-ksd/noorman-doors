import Start from '../components/Start';
import { useContext } from 'react';
import { DarkModeContext } from './_app';

const Home = () => {
  const darkModeContext = useContext(DarkModeContext)

  return (
    <Start />
  )
}
export default Home;