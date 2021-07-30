import * as React from "react";
// import { isFragment } from "react-is";
// import PropTypes from "prop-types";
import clsx from "clsx";
// import { chainPropTypes } from "@material-ui/utils";
import Collapse from "@material-ui/core/Collapse";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import AccordionContext from "./AccordionContext";
import useControlled from "./utils/useControlled";

export const styles = (theme) => {
  const transition = {
    duration: theme.transitions.duration.shortest,
  };

  return {
    /* Styles applied to the root element. */
    root: {
      position: "relative",
      transition: theme.transitions.create(["margin"], transition),
    },
    /* Styles applied to the root element if `expanded={true}`. */
    expanded: {
      margin: "16px 0",
      "&:first-child": {
        marginTop: 0,
      },
      "&:last-child": {
        marginBottom: 0,
      },
    },
    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {
      backgroundColor: theme.palette.action.disabledBackground,
    },
  };
};

const Accordion = (props) => {
  const {
    children: childrenProp,
    classes,
    className,
    defaultExpanded = false,
    disabled = false,
    expanded: expandedProp,
    onChange,
    TransitionProps,
    ...other
  } = props;

  const [expanded, setExpandedState] = useControlled({
    controlled: expandedProp,
    default: defaultExpanded,
    name: "Accordion",
    state: "expanded",
  });

  const handleChange = React.useCallback(
    (event) => {
      setExpandedState(!expanded);

      if (onChange) {
        onChange(event, !expanded);
      }
    },
    [expanded, onChange, setExpandedState]
  );

  const [summary, ...children] = React.Children.toArray(childrenProp);
  const contextValue = React.useMemo(
    () => ({ expanded, disabled, toggle: handleChange }),
    [expanded, disabled, handleChange]
  );

  return (
    <Paper
      className={clsx(
        classes.root,
        {
          [classes.expanded]: expanded,
          [classes.disabled]: disabled,
        },
        className
      )}
      square
      {...other}
    >
      <AccordionContext.Provider value={contextValue}>
        {summary}
      </AccordionContext.Provider>
      <Collapse in={expanded} timeout="auto" {...TransitionProps}>
        <div
          aria-labelledby={summary.props.id}
          id={summary.props["aria-controls"]}
          role="region"
        >
          {children}
        </div>
      </Collapse>
    </Paper>
  );
};

export default withStyles(styles)(Accordion);
