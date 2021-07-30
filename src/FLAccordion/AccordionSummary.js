/* eslint-disable jsx-a11y/aria-role */
import * as React from "react";
// import PropTypes from "prop-types";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import ButtonBase from "@material-ui/core/ButtonBase";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { withStyles } from "@material-ui/core/styles";

import MyAccordionContext from "./AccordionContext";

export const styles = (theme) => {
  const transition = {
    duration: theme.transitions.duration.shortest,
  };

  return {
    /* Styles applied to the root element. */
    root: {
      backgroundColor: theme.palette.grey[100],
      display: "flex",
      minHeight: 8 * 6,
      transition: theme.transitions.create(
        ["min-height", "background-color"],
        transition
      ),
      padding: theme.spacing(0, 2),
      "&:hover:not($disabled)": {
        cursor: "pointer",
      },
      "&$expanded": {
        minHeight: 64,
      },
      "&$focused": {
        backgroundColor: theme.palette.action.focus,
      },
      "&$disabled": {
        opacity: theme.palette.action.disabledOpacity,
      },
      // backgroundColor: theme.palette.info.main,
      backgroundColor: "pink",
      height: 32,
      minHeight: 32,
      paddingTop: 0,
      "&$expanded": {
        height: 32,
        // margin: 0,
        // marginBottom: 12,
        minHeight: 32,
      },
    },
    /* Pseudo-class applied to the root element, children wrapper element and `IconButton` component if `expanded={true}`. */
    expanded: {
      height: 32,
      // margin: 0,
      // marginBottom: 12,
      minHeight: 32,
    },
    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the children wrapper element. */
    content: {
      display: "flex",
      flexGrow: 1,
      transition: theme.transitions.create(["margin"], transition),
      margin: "12px 0",
      "&$expanded": {
        margin: "20px 0",
      },
      color: theme.palette.text.inverse,
      textTransform: "uppercase",
      "&$expanded": {
        // margin: 0,
        // marginBottom: 12,
      },
    },
    /* Styles applied to the `IconButton` component. */
    expandIcon: {
      transform: "rotate(0deg)",
      transition: theme.transitions.create("transform", transition),
      "&:hover": {
        // Disable the hover effect for the IconButton,
        // because a hover effect should apply to the entire Expand button and
        // not only to the IconButton.
        backgroundColor: "transparent",
      },
      "&$expanded": {
        transform: "rotate(180deg)",
      },
    },
    expandedIcon: {
      "& svg": {
        fontSize: 12,
      },
    },
    count: {
      fontSize: "1rem",
      fontWeight: 700,
    },
  };
};

const FLAccordionSummary = (props) => {
  const {
    count,
    id,
    children,
    classes,
    className,
    expandIcon,
    IconButtonProps,
    onBlur,
    onClick,
    onFocusVisible,
    ...other
  } = props;

  const [focusedState, setFocusedState] = React.useState(false);
  const handleFocusVisible = (event) => {
    setFocusedState(true);

    if (onFocusVisible) {
      onFocusVisible(event);
    }
  };
  const handleBlur = (event) => {
    setFocusedState(false);

    if (onBlur) {
      onBlur(event);
    }
  };

  const { disabled = false, expanded, toggle } = React.useContext(
    MyAccordionContext
  );
  const handleChange = (event) => {
    if (toggle) {
      toggle(event);
    }
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <ButtonBase
      focusRipple={false}
      disableRipple
      disabled={disabled}
      component="div"
      aria-expanded={expanded}
      className={clsx(
        classes.root,
        {
          [classes.disabled]: disabled,
          [classes.expanded]: expanded,
          [classes.focused]: focusedState,
        },
        className
      )}
      onFocusVisible={handleFocusVisible}
      onBlur={handleBlur}
      onClick={handleChange}
      {...other}
    >
      <div className={clsx(classes.content, { [classes.expanded]: expanded })}>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          aria-controls={`${id}-content`}
          style={{ width: "100%" }}
        >
          <Box flexGrow={1}>{children}</Box>
          <Box>
            <Typography variant="button" className={classes.count}>
              {count}
            </Typography>
          </Box>
          <Box className={classes.expandedIcon}>
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Box>
        </Box>
      </div>
      <IconButton
        className={clsx(classes.expandIcon, {
          [classes.expanded]: expanded,
        })}
        edge="end"
        component="div"
        tabIndex={null}
        role={null}
        aria-hidden
        {...IconButtonProps}
      >
        <ExpandMoreIcon />
      </IconButton>
    </ButtonBase>
  );
};

export default withStyles(styles)(FLAccordionSummary);
