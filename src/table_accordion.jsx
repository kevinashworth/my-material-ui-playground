import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
// import Accordion from "@material-ui/core/Accordion";
// import AccordionSummary from "@material-ui/core/AccordionSummary";
// import AccordionDetails from "@material-ui/core/AccordionDetails";
import Accordion from "./MyAccordion/Accordion";
import AccordionSummary from "./MyAccordion/AccordionSummary";
import AccordionDetails from "./MyAccordion/AccordionDetails";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

/*
Styles here are tricky and perhaps inconsistent even within Material-UI
Seems "expanded" is needed twice, regardless of its setting in A. Usually. Ugh.
In AS, it makes more sense because "Pseudo-class applied to the root element, children wrapper element"
See https://material-ui.com/api/accordion-summary/#css
*/

const useStylesA = makeStyles({
  root: {
    // backgroundColor: "cyan",
    // border: 0,
    // boxShadow: "none",
    // marginTop: 4,
    // minHeight: 32,
    "& .MuiCollapse-wrapper": {
      // marginTop: 0,
    },
  },
  expanded: {
    // margin: "4px 0",
    "& :first-child": {
      // marginTop: 4,
    },
  },
});

const useStylesAD = makeStyles((theme) => ({
  root: {
    // backgroundColor: "yellow",
    // boxShadow: "inset 0px 15px 9px -10px rgba(0,0,0,0.25)", // box-shadow top side only
    // display: "block",
    // padding: theme.spacing(2),
  },
}));

const useStylesAS = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.info.main,
    height: 32,
    minHeight: 32,
    // paddingTop: 0,
    "&$expanded": {
      // backgroundColor: "pink",
      height: 32,
      // margin: 0,
      // marginBottom: 12,
      minHeight: 32,
    },
  },
  expanded: {
    // backgroundColor: "green",
    // height: 32,
    // margin: 0,
    // marginBottom: 12,
    // minHeight: 32,
  },
  content: {
    color: theme.palette.text.inverse,
    // textTransform: "uppercase",
    "&$expanded": {
      // margin: 0,
      // marginBottom: 12,
    },
  },
  count: {
    // fontSize: "1rem",
    // fontWeight: 700,
  },
}));

const MyAccordion = ({ children, count, expanded, id, summary, ...rest }) => {
  const classesA = useStylesA();
  const classesAD = useStylesAD();
  const classesAS = useStylesAS();

  return (
    <Accordion
      classes={{
        root: classesA.root,
        expanded: classesA.expanded,
      }}
      expanded={expanded}
      {...rest}
    >
      <AccordionSummary
        classes={{
          root: classesAS.root,
          expanded: classesAS.expanded,
          content: classesAS.content,
        }}
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          aria-controls={`${id}-content`}
          style={{ width: "100%" }}
        >
          <Box flexGrow={1}>{summary}</Box>
          <Box>
            <Typography variant="button" className={classesAS.count}>
              {count}
            </Typography>
          </Box>
          <Box>
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails
        classes={{
          root: classesAD.root,
        }}
      >
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

MyAccordion.propTypes = {
  children: PropTypes.node,
  count: PropTypes.number,
  expanded: PropTypes.bool.isRequired,
  id: PropTypes.any,
  summary: PropTypes.string,
};

MyAccordion.defaultProps = {};

export default MyAccordion;
