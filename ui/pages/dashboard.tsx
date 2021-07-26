import { Link as ChakraLink, Divider } from '@chakra-ui/react';

import { Main } from '../components/Main';
import { Container } from '../components/Container';
import { DarkModeSwitch } from '../components/DarkModeSwitch';

import CurrentPolls from '../components/CurrentPolls';
import YourPolls from '../components/YourPolls';

export default function Dashboard() {
  return (
    <Container h="100vh">
      <Main>
        <CurrentPolls />
        <Divider py="3vh" />
          <ChakraLink href="/create" flexGrow={1} mr={2}>
            Create a New Poll
          </ChakraLink>
        <YourPolls />
      </Main>
      <DarkModeSwitch />
    </Container>
  );
}
