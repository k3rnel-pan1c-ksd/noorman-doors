import '../styles/globals.css'
import { createContext, useReducer, useMemo, useEffect, useState } from 'react'
import Head from 'next/head'
import useDarkMode from 'use-dark-mode'

export const DarkModeContext = createContext()

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false)
  const darkMode = useDarkMode(false)

  useEffect(() => {
    setIsMounted(true)
  }, []);

  const reducer = (state, action) => {
    switch(action) {
      case 'toggle':
        state ? darkMode.disable : darkMode.enable 
        return !state
      default: return state
    }
  }

  const [dmode, dispatch] = useReducer(reducer, darkMode)

  const contextValue = useMemo(() => {
    return { isDark: dmode, darkModeDispatch: dispatch };
    }, [dmode, dispatch]);

  return (
    <DarkModeContext.Provider value={contextValue}>
      {isMounted && 
      <>
          <Head>
            <title>Norman Doors</title>
            <meta name="description" content="Design" />
            <link rel="icon" href={dmode ? "/logoDark.png" : "/logoLight.png"} />
          </Head>
          <Component {...pageProps} />
      </>}
    </DarkModeContext.Provider>)
}

export default MyApp