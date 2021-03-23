import { FormControl, FormLabel, Container, Input } from '@chakra-ui/react'

export default function Create() {
  return (
    <>
      <Container>
        <FormControl id='what'>
          <FormLabel>What is this about?</FormLabel>
          <Input type='text' />
        </FormControl>
        // Set deadline // Add options // Get link to share
      </Container>
    </>
  )
}
