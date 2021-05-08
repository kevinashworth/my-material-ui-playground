import React from "react";

import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Accordion from "./Accordion";
import AccordionDetails from "./AccordionDetails";
import AccordionSummary from "./AccordionSummary";

const MyAccordion = () => {
  return (
    <>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Accordion the First
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            This is the detailed contents of Accordion the First.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Accordion the Second
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            This is the detailed contents of Accordion the Second.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default MyAccordion;
