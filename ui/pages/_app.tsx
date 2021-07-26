import { ChakraProvider } from '@chakra-ui/react';
import theme from '@chakra-ui/theme';
import { AppProps } from 'next/app';

import { PollWrapper } from '../context/polls';

import '../styles/global.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <PollWrapper>
        <Component {...pageProps} />
      </PollWrapper>
    </ChakraProvider>
  );
}

export default App;
