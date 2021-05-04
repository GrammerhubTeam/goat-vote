import { useState, useEffect } from 'react'
import { Container, VStack } from '@chakra-ui/react'
import PollView from './PollView'

function YourPolls() {
  const [data, setData] = useState([])
  const user = 99

  useEffect(() => {
    const getData = async()=>{

      const result = await fetch('data.json').then((res) => res.json())
      const yourResult = result.filter((poll)=>poll.user_id === user)
      setData(yourResult)
    }
    getData()
  }, [])

  return (
    <Container>
      <h2>Your Polls</h2>
      <VStack>
        {data.map((item) => (
          <PollView {...item} />
        ))}
      </VStack>
    </Container>
  )
}

export default YourPolls
