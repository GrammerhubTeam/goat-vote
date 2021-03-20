import '../styles/global.scss'

import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import AppContext, { IAppContext } from '../state/AppContext';
import { useState } from 'react';

function App({ Component, pageProps }: AppProps) {

  const [openedMenu, setOpenedMenu] = useState<boolean>(true);
  const toggleMenu: () => void = () => setOpenedMenu(!openedMenu);
  const [currentRoute, setCurrentRoute] = useState<string>('');
  const getCurrentRoute = (route: string) => setCurrentRoute(route);

  const initialState: IAppContext = {
    openedMenu: openedMenu,
    toggleMenu: toggleMenu,
    currentRoute: currentRoute,
    getCurrentRoute: getCurrentRoute
  }

  return (
    <ChakraProvider>
      <AppContext.Provider value={initialState}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </ChakraProvider>
  )
}

export default App