import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import useDarkMode from 'use-dark-mode';

import GlobalStyle from '../styles/global';
import { lightTheme, darkTheme } from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);
  const darkMode = useDarkMode(false);
  const theme = darkMode.value ? darkTheme : lightTheme;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {isMounted && <Component {...pageProps} />}
      </ThemeProvider>
    </>
  );
}
