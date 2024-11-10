import React from "react";
import { styled } from '@mui/material/styles';
import PropTypes from "prop-types";

// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "./MyAccordion/Accordion";
import AccordionSummary from "./MyAccordion/AccordionSummary";
import AccordionDetails from "./MyAccordion/AccordionDetails";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const PREFIX = 'MyAccordion';

const classes = {
  root: `${PREFIX}-root`,
  expanded: `${PREFIX}-expanded`
};

const StyledAccordion = styled(Accordion)({
  [`& .${classes.root}`]: {
    // backgroundColor: "cyan",
    // border: 0,
    // boxShadow: "none",
    // marginTop: 4,
    // minHeight: 32,
    "& .MuiCollapse-wrapper": {
      // marginTop: 0,
    },
  },
  [`& .${classes.expanded}`]: {
    // margin: "4px 0",
    "& :first-child": {
      // marginTop: 4,
    },
  },
});

/*
Styles here are tricky and perhaps inconsistent even within Material-UI
Seems "expanded" is needed twice, regardless of its setting in A. Usually. Ugh.
In AS, it makes more sense because "Pseudo-class applied to the root element, children wrapper element"
See https://material-ui.com/api/accordion-summary/#css
*/


  [`& .${classes.root}`]: {
    // backgroundColor: "cyan",
    // border: 0,
    // boxShadow: "none",
    // marginTop: 4,
    // minHeight: 32,
    "& .MuiCollapse-wrapper": {
      // marginTop: 0,
    },
  },
  [`& .${classes.expanded}`]: {
    // margin: "4px 0",
    "& :first-child": {
      // marginTop: 4,
    },
  },
});


  root: {
    // backgroundColor: "yellow",
    // boxShadow: "inset 0px 15px 9px -10px rgba(0,0,0,0.25)", // box-shadow top side only
    // display: "block",
    // padding: theme.spacing(2),
  },
}));


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




  return (
    (<StyledAccordion
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
    </StyledAccordion>)
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
