import { useState, useEffect } from 'react';
import { VStack } from '@chakra-ui/react';

import PollView from './PollView';
import { usePollContext } from '../context/polls';

function YourPolls() {
  const { state } = usePollContext();
  const user = 99;

  return (
    <>
      <h2>Your Polls</h2>
      <VStack>
        {state
          .filter((poll) => poll.user_id === user)
          .map((item) => (
            <PollView {...item} />
          ))}
      </VStack>
    </>
  );
}

export default YourPolls;
