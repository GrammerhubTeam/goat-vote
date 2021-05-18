import { useState, useEffect } from 'react'
import TimeDisplay from '../components/TimeDisplay'

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
} from "@chakra-ui/react";
import { AddIcon, MinusIcon, DeleteIcon, } from '@chakra-ui/icons'

export default function Create() {
  const [topic, setTopic] = useState('')
  const [timerLength, setTimerLength] = useState(10000)
  const [choices, setChoices] = useState([])

  // useEffect(() => {
  //   console.log(topic)
  // }, [topic])

  // Handle timer
  const handleTimerInput = (amount) => {
    if (timerLength + amount < 0) {
      setTimerLength(0)
    } else {
      setTimerLength(timerLength + amount)
    }
  }

  //Handle input choice
  const handleChoiceInput = (event) => {
    if (event.key === 'Enter') {
      setChoices([...choices, event.target.value])
      event.target.value = ''
    }
  }

  const deleteChoice = (choiceIndex) => {
    const newChoices = choices.filter((target, index) => index!==choiceIndex);
    setChoices(newChoices);
  }

  const handleSubmit = () => {
    // send state to database and redirect to dashboard page
  }

  return (
    <>
      <Container>
        <FormControl id="what">
          <FormLabel>What is this poll about?</FormLabel>
          <Input
            value={topic}
            type="text"
            onKeyUp={(e) => setTopic(e.target.value)}
          />
        </FormControl>
        <FormLabel>Set timer for poll</FormLabel>
        <Stack spacing={4} direction="column" align="center">
          <ButtonGroup size="md" isAttached>
            <Button>1 Day</Button>
            <IconButton
              aria-label="Add days"
              onClick={() => handleTimerInput(1000 * 60 * 60 * 24)}
              icon={<AddIcon />}
            />
            <IconButton
              aria-label="Subtract days"
              onClick={() => handleTimerInput(-1000 * 60 * 60 * 24)}
              icon={<MinusIcon />}
            />
          </ButtonGroup>
          <ButtonGroup size="md" isAttached>
            <Button>1 Hour</Button>
            <IconButton
              aria-label="Add hours"
              onClick={() => handleTimerInput(1000 * 60 * 60)}
              icon={<AddIcon />}
            />
            <IconButton
              aria-label="Subtract hours"
              onClick={() => handleTimerInput(-1000 * 60 * 60)}
              icon={<MinusIcon />}
            />
          </ButtonGroup>
          <ButtonGroup size="md" isAttached>
            <Button>1 Minute</Button>
            <IconButton
              aria-label="Add minutes"
              onClick={() => handleTimerInput(1000 * 60)}
              icon={<AddIcon />}
            />
            <IconButton
              aria-label="Subtract minutes"
              onClick={() => handleTimerInput(-1000 * 60)}
              icon={<MinusIcon />}
            />
          </ButtonGroup>
          <ButtonGroup size="md" isAttached>
            <Button>1 Second</Button>
            <IconButton
              aria-label="Add seconds"
              onClick={() => handleTimerInput(1000)}
              icon={<AddIcon />}
            />
            <IconButton
              aria-label="Subtract seconds"
              onClick={() => handleTimerInput(-1000)}
              icon={<MinusIcon />}
            />
          </ButtonGroup>
        </Stack>
        <Box bg="yellow">
          <TimeDisplay milliseconds={timerLength} />
        </Box>
        <FormControl id="choices">
          <FormLabel>What are the choices?</FormLabel>
          <Input type="text" onKeyDown={handleChoiceInput} />
          <ol>
            {choices.map((choice, index) => (
              <li key={index}>
                {choice}
                <IconButton
                  aria-label="Search database"
                  icon={<DeleteIcon />}
                  onClick={() => deleteChoice(index)}
                />
              </li>
            ))}
          </ol>
          {/* Add remove functionality to choices */}
        </FormControl>

        <Button colorScheme="red" onClick={handleSubmit}>
          Submit
        </Button>

        {/* Get link to share */}
      </Container>
    </>
  );
}
