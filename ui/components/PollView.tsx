import React from 'react'
import { Box, HStack } from '@chakra-ui/react'

function PollView({ topic, timerLength, choices, createdAt }) {
  return (
    <Box>
      <HStack>
        {topic}
        {choices}
        Timer
      </HStack>
    </Box>
  )
}

export default PollView
