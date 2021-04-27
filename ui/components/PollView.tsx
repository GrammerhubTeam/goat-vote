import { useState, useEffect } from 'react'
import { Box, HStack } from '@chakra-ui/react'
import TimeDisplay from './TimeDisplay'

function PollView(item) {
  const [countdown, setCountdown] = useState(0)

  return (
    <Box key={item.id} bg='gray.300' w='100%'>
      <HStack>
        <div>{item.topic}</div>
        <div>{item.choices.map((choice) => choice + ' ')}</div>
        <TimeDisplay milliseconds={countdown} />
      </HStack>
    </Box>
  )
}

export default PollView
