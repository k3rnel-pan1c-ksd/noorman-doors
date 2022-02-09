import '../styles/globals.css'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import useDarkMode from 'use-dark-mode'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../theme' 

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false)
  const darkMode = useDarkMode(true)
  const theme = darkMode.value ? darkTheme : lightTheme

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Norman Doors</title>
        <meta name="description" content="Design" />
        <link rel="icon" href="/logoLight.png" />
      </Head>
      <button onClick={darkMode.enable}>DARK MODE</button>
      <button onClick={darkMode.disable}>LIGHT MODE</button>
      {isMounted && <Component {...pageProps} />}
    </ThemeProvider>)
}

export default MyApp