import React from 'react';

import Accordion from './Accordion';
import AccordionDetails from './AccordionDetails';
import MyAccordionSummary from './MyAccordionSummary';

const MyAccordion = (props) => {
  const { children, count, expanded, id, summary } = props;

  return (
    <Accordion>
      <MyAccordionSummary count={count} expanded={expanded} id={id}>
        {summary}
      </MyAccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default MyAccordion;
