import React from 'react';

import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

const MuiAccordion = () => {
  return (
    <>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Accordion the First
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body1'>
            This is the detailed contents of Accordion the First.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Accordion the Second
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body1'>
            This is the detailed contents of Accordion the Second.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Accordion the Third
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body1'>
            This is the detailed contents of Accordion the Third.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Accordion the Fourth
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body1'>
            This is the detailed contents of Accordion the Fourth.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default MuiAccordion;
