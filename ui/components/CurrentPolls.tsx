import { useState, useEffect } from 'react'
import { Container, VStack } from '@chakra-ui/react'
import PollView from './PollView'

function CurrentPolls() {
  const [data, setData] = useState([])

  useEffect(async () => {
    const result = await fetch('data.json').then((res) => res.json())
    setData(result)
  }, [])

  useEffect(() => {})

  return (
    <Container>
      <h2>Current Polls</h2>
      <VStack>
        {data.map((item) => (
          <PollView {...item} />
        ))}
      </VStack>
    </Container>
  )
}

export default CurrentPolls
