import '../styles/globals.css'
import { createContext, useReducer, useMemo, useEffect, useState } from 'react'
import Head from 'next/head'

export const DarkModeContext = createContext()

const reducer = (state, action) => {
  switch(action) {
    case 'toggle':
      localStorage.setItem('prefers-dark', !state)
      return !state
    default: return state
  }
}

function MyApp({ Component, pageProps }) {
  const [item, setItem] = useState()
  const [darkMode, dispatch] = useReducer(reducer, item)

  useEffect(() => {
    const initialState = typeof window !== 'undefined' ? localStorage.getItem('prefers-dark') ?? false : false
    setItem(initialState)
  }, []);

  const contextValue = useMemo(() => {
    return { isDark: darkMode, darkModeDispatch: dispatch };
    }, [darkMode, dispatch]);

  return (
    <DarkModeContext.Provider value={contextValue}>
      <Head>
        <title>Norman Doors</title>
        <meta name="description" content="Design" />
        <link rel="icon" href={darkMode ? "/normanLogoDark.png" : "/normanLogo.png"} />
      </Head>
      <Component {...pageProps} />
    </DarkModeContext.Provider>)
}

export default MyApp
