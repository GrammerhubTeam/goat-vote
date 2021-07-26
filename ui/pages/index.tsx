import { Link as ChakraLink, List, ListItem } from '@chakra-ui/react';
import { Main } from '../components/Main';
import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { DarkModeSwitch } from '../components/DarkModeSwitch';

const Index = () => (
  <Container height="100vh">
    <Main>
      <Hero as="h1" size="3xl">
        Goat-Vote!
      </Hero>
      <List spacing={3} my={0}>
        <ListItem>
          <ChakraLink href="/dashboard" flexGrow={1} mr={2}>
            Dashboard
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ChakraLink href="/login" flexGrow={1} mr={2}>
            Login
          </ChakraLink>
        </ListItem>
      </List>
    </Main>
    <DarkModeSwitch />
  </Container>
);

export default Index;
