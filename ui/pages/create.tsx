import { useState } from 'react'
import {
  Heading,
  Stack,
  IconButton,
  FormControl,
  FormLabel,
  Container,
  Input,
  Button,
  ButtonGroup,
  Box,
} from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'

export default function Create() {
  const [timerDays, setTimerDays] = useState(0)
  const [timerHours, setTimerHours] = useState(0)
  const [timerMinutes, setTimerMinutes] = useState(0)
  const [timerSeconds, setTimerSeconds] = useState(0)

  const [timerLength, setTimerLength] = useState(0)

  // Handle timer

  return (
    <>
      <Container>
        <FormControl id='what'>
          <FormLabel>What is this poll about?</FormLabel>
          <Input type='text' />
        </FormControl>
        <FormLabel>Set timer for poll</FormLabel>
        <Stack spacing={4} direction='row' align='center'>
          <ButtonGroup size='md' isAttached>
            <Button>1 Day</Button>
            <IconButton aria-label='Add days' icon={<AddIcon />} />
            <IconButton aria-label='Subtract days' icon={<MinusIcon />} />
          </ButtonGroup>
          <ButtonGroup size='md' isAttached>
            <Button>1 Hour</Button>
            <IconButton aria-label='Add hours' icon={<AddIcon />} />
            <IconButton aria-label='Subtract hours' icon={<MinusIcon />} />
          </ButtonGroup>
          <ButtonGroup size='md' isAttached>
            <Button>1 Minute</Button>
            <IconButton aria-label='Add minutes' icon={<AddIcon />} />
            <IconButton aria-label='Subtract minutes' icon={<MinusIcon />} />
          </ButtonGroup>
          <ButtonGroup size='md' isAttached>
            <Button>1 Second</Button>
            <IconButton aria-label='Add seconds' icon={<AddIcon />} />
            <IconButton aria-label='Subtract seconds' icon={<MinusIcon />} />
          </ButtonGroup>
        </Stack>
        <Box bg='green'>{timerLength}</Box>
        <FormControl id='choices'>
          {/* How do we add choices dynamically? */}

          <FormLabel>What are the choices?</FormLabel>
          <Input type='text' />
          <Input type='text' />
          <Input type='text' />
          <Input type='text' />
        </FormControl>

        <Button colorScheme='red'>Submit</Button>

        {/* Get link to share */}
      </Container>
    </>
  )
}
