import React from 'react';
import Box from '@mui/material/Box';
import MyAccordion from './table_accordion';

const Partial = () => {
  return (
    <Box display='flex' flexDirection='column'>
      <Box flexGrow={1}>
        <MyAccordion
          expanded
          id='accordion-ratings'
          count={1}
          summary='Reviews/Ratings'
          display='flex'
        >
          Reviews go here
          <Box flexGrow={1} />
        </MyAccordion>
      </Box>

      <Box flexGrow={0}>
        <MyAccordion
          expanded
          id='accordion-invoices'
          count={2}
          summary='Invoices'
        >
          Invoices go here
          <Box flexGrow={1} />
        </MyAccordion>
      </Box>

      <Box flexGrow={0}>
        <MyAccordion
          expanded={false}
          id='accordion-notes'
          count={3}
          summary='Notes'
        >
          Notes go here
          <Box flexGrow={1} />
        </MyAccordion>
      </Box>
    </Box>
  );
};

export default Partial;
