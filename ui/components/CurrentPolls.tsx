import { useState, useEffect } from 'react'
import { Container, VStack } from '@chakra-ui/react'
import PollView from './PollView'
import { usePollContext } from '../context/polls'

function CurrentPolls() {
  const {state} = usePollContext()

  return (
    <Container>
      <h2>Current Polls</h2>
      <VStack>
        {state && state.map((item) => (
          <PollView {...item} />
        ))}
      </VStack>
    </Container>
  )
}

export default CurrentPolls
