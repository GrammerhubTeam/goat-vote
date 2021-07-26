import { Box, Grid } from '@chakra-ui/react';

function TimeDisplay({ milliseconds }) {
  const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
  const hours = Math.floor(milliseconds / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(milliseconds / (1000 * 60)) % 60;
  const seconds = Math.trunc(milliseconds / 1000) % 60;

  return (
    <Grid templateColumns="1fr 1fr 1fr 1fr" py="2">
      <Box fontFamily="mono" fontWeight="thin">
        {days}D
      </Box>
      <Box fontFamily="mono" fontWeight="thin">
        {hours}H
      </Box>
      <Box fontFamily="mono" fontWeight="thin">
        {minutes}M
      </Box>
      <Box fontFamily="mono" fontWeight="thin">
        {seconds}S
      </Box>
    </Grid>
  );
}

export default TimeDisplay;
