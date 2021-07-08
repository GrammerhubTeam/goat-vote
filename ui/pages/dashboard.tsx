import { Divider } from '@chakra-ui/react';

import { Main } from '../components/Main';
import { Container } from '../components/Container';
import { DarkModeSwitch } from '../components/DarkModeSwitch';

import CurrentPolls from '../components/CurrentPolls';
import YourPolls from '../components/YourPolls';

export default function Dashboard() {
  return (
    <Container>
      <Main>
        <CurrentPolls />
        <Divider py="3vh" />
        <YourPolls />
      </Main>
      <DarkModeSwitch />
    </Container>
  );
}
