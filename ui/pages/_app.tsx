import '../styles/global.scss'

import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import AppContext from '../state/AppContext'
// import AppContext, { IAppContext } from '../state/AppContext'
// import { useState } from 'react'
// import Layout from '../components/Layout/layout'
import { PollWrapper } from '../context/polls'

function App({ Component, pageProps }: AppProps) {
  
  return (
    <ChakraProvider>
      {/* <AppContext.Provider value={initialState}> */}
        <PollWrapper>
        
          <Component {...pageProps} />
        
        </PollWrapper>
      {/* </AppContext.Provider> */}
    </ChakraProvider>
  )
}

export default App
