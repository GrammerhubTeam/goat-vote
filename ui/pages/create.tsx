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
  const [timerLength, setTimerLength] = useState(0)
  const [pollChoices, setPollChoices] = useState([])

  // Handle timer
  const handleTimerInput = (amount) => {
    if (timerLength + amount < 0) {
      setTimerLength(0)
    } else {
      setTimerLength(timerLength + amount)
    }
  }

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
            <IconButton
              aria-label='Add days'
              onClick={() => handleTimerInput(1000 * 60 * 60 * 24)}
              icon={<AddIcon />}
            />
            <IconButton
              aria-label='Subtract days'
              onClick={() => handleTimerInput(-1000 * 60 * 60 * 24)}
              icon={<MinusIcon />}
            />
          </ButtonGroup>
          <ButtonGroup size='md' isAttached>
            <Button>1 Hour</Button>
            <IconButton aria-label='Add hours' onClick={() => handleTimerInput(1000 * 60 * 60)} icon={<AddIcon />} />
            <IconButton
              aria-label='Subtract hours'
              onClick={() => handleTimerInput(-1000 * 60 * 60)}
              icon={<MinusIcon />}
            />
          </ButtonGroup>
          <ButtonGroup size='md' isAttached>
            <Button>1 Minute</Button>
            <IconButton aria-label='Add minutes' onClick={() => handleTimerInput(1000 * 60)} icon={<AddIcon />} />
            <IconButton
              aria-label='Subtract minutes'
              onClick={() => handleTimerInput(-1000 * 60)}
              icon={<MinusIcon />}
            />
          </ButtonGroup>
          <ButtonGroup size='md' isAttached>
            <Button>1 Second</Button>
            <IconButton aria-label='Add seconds' onClick={() => handleTimerInput(1000)} icon={<AddIcon />} />
            <IconButton aria-label='Subtract seconds' onClick={() => handleTimerInput(-1000)} icon={<MinusIcon />} />
          </ButtonGroup>
        </Stack>
        <Box bg='yellow'>{timerLength / 1000}</Box>
        {/* ADD a timer display */}
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
