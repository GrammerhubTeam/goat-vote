import { Divider } from '@chakra-ui/react';

import { Main } from '../components/Main';
import { Container } from '../components/Container';
import { DarkModeSwitch } from '../components/DarkModeSwitch';

import CurrentPolls from '../components/CurrentPolls';
import YourPolls from '../components/YourPolls';
import Auth from '../components/Auth';

export default function Login() {
  return (
    <Container h="100vh">
      <Main>
        <Auth />
      </Main>
      <DarkModeSwitch />
    </Container>
  );
}
