import * as React from "react";
// import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";

export const styles = (theme) => ({
  /* Styles applied to the root element. */
  root: {
    display: "flex",
    padding: theme.spacing(1, 2, 2),
  },
});

const AccordionDetails = (props) => {
  const { classes, className, ...other } = props;

  return <div className={clsx(classes.root, className)} {...other} />;
};

export default withStyles(styles)(AccordionDetails);
