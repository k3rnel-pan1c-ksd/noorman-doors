import '../styles/globals.css'
import { createContext, useReducer, useEffect, useState } from 'react'
import Head from 'next/head'
import useDarkMode from 'use-dark-mode'

export const ModeContext = createContext()
const combineReducers = (slices) => (prevState, action) =>
  Object.keys(slices).reduce(
    (nextState, nextProp) => ({
      ...nextState,
      [nextProp]: slices[nextProp](prevState[nextProp], action)
    }),
    prevState
  );

const dMode = (state, action) =>
  action.type === "TOGGLE_DARK" ? !state : state;
const lMode = (state, action) =>
  action.type === "TOGGLE_LANG" ? !state : state;

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false)
  const customDarkMode = useDarkMode(false)

  const [state, dispatch] = useReducer(combineReducers({ dMode, lMode }), {
    dMode: customDarkMode,
    lMode: false
  });

  useEffect(() => {
    setIsMounted(true)
  }, []);

  const toggleDark = () => dispatch({ type: "TOGGLE_DARK" });
  const toggleLang = () => dispatch({ type: "TOGGLE_LANG" });
  const contextValue = {
    darkMode: {
      isDark: state.dMode,
      toggleDark: toggleDark
    },
    langMode: {
      isEng: state.lMode,
      toggleLang: toggleLang
    }
  };

  return (
    <ModeContext.Provider value={contextValue}>
      {isMounted && 
      <>
          <Head>
            <title>Norman Doors</title>
            <meta name="description" content="Design" />
            <link rel="icon" href={state.dMode ? "/logoDark.png" : "/logoLight.png"} />
          </Head>
          <Component {...pageProps} />
      </>}
    </ModeContext.Provider>)
}

export default MyApp