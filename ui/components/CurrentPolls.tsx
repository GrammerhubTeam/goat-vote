import { useState, useEffect } from 'react';
import { VStack } from '@chakra-ui/react';

import PollView from './PollView';
import { usePollContext } from '../context/polls';

function CurrentPolls() {
  const { state } = usePollContext();

  return (
    <>
      <h2>Current Polls</h2>
      <VStack>{state && state.map((item) => <PollView {...item} />)}</VStack>
    </>
  );
}

export default CurrentPolls;
