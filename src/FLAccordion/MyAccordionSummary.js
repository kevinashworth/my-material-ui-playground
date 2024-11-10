import * as React from 'react';
// import PropTypes from "prop-types";
import clsx from 'clsx';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import makeStyles from '@mui/styles/makeStyles';
import withStyles from '@mui/styles/withStyles';
import AccordionSummary from './AccordionSummary';

// const useStylesA = makeStyles({
//   root: {
//     backgroundColor: "cyan",
//     border: 0,
//     boxShadow: "none",
//     marginTop: 4,
//     minHeight: 32,
//     "&$expanded": {
//       // flex: "1 0 auto",
//       margin: "4px 0",
//     },
//     "& .MuiCollapse-wrapper": {
//       marginTop: 0,
//     },
//   },
//   expanded: {
//     margin: "4px 0",
//     "& :first-child": {
//       marginTop: 4,
//     },
//   },
// });

// const useStylesAD = makeStyles((theme) => ({
//   root: {
//     backgroundColor: "yellow",
//     boxShadow: "inset 0px 15px 9px -10px rgba(0,0,0,0.25)", // box-shadow top side only
//     display: "block",
//     padding: theme.spacing(2),
//   },
// }));

const MyAccordionSummary = (props) => {
  const { children, classes, className, count, expanded, id, ...other } = props;
  return (
    <AccordionSummary count={count} id={id}>
      {children}
    </AccordionSummary>
  );
};

export default MyAccordionSummary;
