import React, { useEffect, useState } from 'react'
import { Container, VStack, Box } from '@chakra-ui/react'
import PollView from './PollView'

function CurrentPolls({ allPolls }) {
  // const [currentPolls, setCurrentPolls] = useState([])

  // const loadPolls = async () => {
  //   const res = await fetch('data.json')
  //   const fetchData = await res.json()
  //   setCurrentPolls(fetchData)
  // }

  // const fetchData = fetch('data.json')
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setCurrentPolls(data)
  //     // console.log(data)
  //   })

  // useEffect(() => {
  //   loadPolls()
  // }, [])
  const currentPolls = allPolls

  useEffect(() => {
    console.log(currentPolls)
  }, [currentPolls])

  return (
    <Container>
      <h2>Current Polls</h2>
      <VStack>
        {currentPolls &&
          currentPolls.map((poll, id) => {
            poll.topic // <PolView key={id} topic={poll.}
          })}
      </VStack>
    </Container>
  )
}

export async function getStaticProps() {
  const allPolls = (await fetch('/data.json').then((res) => res.json())) || []
  return {
    props: { allPolls },
  }
}

export default CurrentPolls
