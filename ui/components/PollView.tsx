import { useState, useEffect } from 'react';
import { Box, Grid } from '@chakra-ui/react';

import TimeDisplay from './TimeDisplay';
import Link from 'next/link';

function PollView(item) {
  const [countdown, setCountdown] = useState(0);

  let createdTime = new Date(item.createdAt);
  let pollDeadline = new Date(createdTime.getTime() + item.timerLength);

  useEffect(() => {
    const countDownInterval = setInterval(() => {
      let now = new Date().getTime();
      let remainingTime = pollDeadline - now;
      if (remainingTime > 0) {
        setCountdown(remainingTime);
      }
    }, 1000);

    return () => clearInterval(countDownInterval);
  }, [countdown]);

  return (
    <Link href={`/create?id=${item.id}`} w="100%">
      <Grid
        templateColumns="1fr 6fr 3fr"
        bg="gray.300"
        w="100%"
        borderRadius="5"
      >
        <Box p="2">{item.topic}</Box>
        <Box py="2">{item.choices.map((choice) => choice + ' ')}</Box>
        <TimeDisplay milliseconds={countdown} />
      </Grid>
    </Link>
  );
}

export default PollView;
