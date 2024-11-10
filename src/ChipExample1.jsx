import React from 'react';
import { Box } from '@mui/material';
import ChipInput from 'material-ui-chip-input';

const ChipExample1 = () => {
  return (
    <Box>
      <ChipInput
        defaultValue={['clown fish', 'whale', 'shark']}
        fullWidth
        label='Fish and chips'
        placeholder='Type and press enter to add chips'
      />
    </Box>
  );
};

export default ChipExample1;
