import * as React from "react";
import { isFragment } from "react-is";
import PropTypes from "prop-types";
import clsx from "clsx";
import { chainPropTypes } from "@material-ui/utils";
import Collapse from "@material-ui/core/Collapse";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import AccordionContext from "./AccordionContext";
import useControlled from "../utils/useControlled";

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

const Accordion = React.forwardRef(function Accordion(props, ref) {
  const {
    children: childrenProp,
    classes,
    className,
    defaultExpanded = false,
    disabled = false,
    expanded: expandedProp,
    onChange,
    TransitionComponent = Collapse,
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
      ref={ref}
      square
      {...other}
    >
      <AccordionContext.Provider value={contextValue}>
        {summary}
      </AccordionContext.Provider>
      <TransitionComponent in={expanded} timeout="auto" {...TransitionProps}>
        <div
          aria-labelledby={summary.props.id}
          id={summary.props["aria-controls"]}
          role="region"
        >
          {children}
        </div>
      </TransitionComponent>
    </Paper>
  );
});

Accordion.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the accordion.
   */
  children: chainPropTypes(PropTypes.node.isRequired, (props) => {
    const summary = React.Children.toArray(props.children)[0];
    if (isFragment(summary)) {
      return new Error(
        "Material-UI: The Accordion doesn't accept a Fragment as a child. " +
          "Consider providing an array instead."
      );
    }

    if (!React.isValidElement(summary)) {
      return new Error(
        "Material-UI: Expected the first child of Accordion to be a valid element."
      );
    }

    return null;
  }),
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, expands the accordion by default.
   */
  defaultExpanded: PropTypes.bool,
  /**
   * If `true`, the accordion will be displayed in a disabled state.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, expands the accordion, otherwise collapse it.
   * Setting this prop enables control over the accordion.
   */
  expanded: PropTypes.bool,
  /**
   * Callback fired when the expand/collapse state is changed.
   *
   * @param {object} event The event source of the callback.
   * @param {boolean} expanded The `expanded` state of the accordion.
   */
  onChange: PropTypes.func,
  /**
   * The component used for the collapse effect.
   * [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   */
  TransitionComponent: PropTypes.elementType,
  /**
   * Props applied to the [`Transition`](http://reactcommunity.org/react-transition-group/transition#Transition-props) element.
   */
  TransitionProps: PropTypes.object,
};

export default withStyles(styles, { name: "MuiAccordion" })(Accordion);
