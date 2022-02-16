import '../styles/globals.css'
import { createContext, useReducer, useEffect, useState } from 'react'
import Head from 'next/head'
import useDarkMode from 'use-dark-mode'
import { useRouter } from 'next/router'
import { C } from '../constants'

export const ModeContext = createContext()

const combineReducers = (slices) => (prevState, action) =>
  Object.keys(slices).reduce(
    (nextState, nextProp) => ({
      ...nextState,
      [nextProp]: slices[nextProp](prevState[nextProp], action)
    }),
    prevState
  );



function MyApp({ Component, pageProps }) {
  const darkMode = useDarkMode(false);

  const lMode = (state, action) =>
    action.type === "TOGGLE_LANG" ? !state : state;
  const [isMounted, setIsMounted] = useState(false)

  const [state, dispatch] = useReducer(combineReducers({ lMode }), {
    lMode: false
  });

  useEffect(() => {
    setIsMounted(true)
  }, []);

  const toggleLang = () => dispatch({ type: "TOGGLE_LANG" });

  const contextValue = {
    darkMode: {
      isDark: darkMode.value,
      toggleDark: darkMode.toggle
    },
    langMode: {
      isEng: state.lMode,
      toggleLang: toggleLang
    }
  };

  const router = useRouter()

  return (
    <ModeContext.Provider value={contextValue}>
      {isMounted && 
      <>
          <Head>
            <title>{C.getTitle(router.pathname, state.lMode)}</title>
            <link rel="icon" href={darkMode.value ? "/logoDark.png" : "/logoLight.png"} />
          </Head>
          <Component {...pageProps} />
      </>}
    </ModeContext.Provider>)
}

export default MyApp