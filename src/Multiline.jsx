import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { lighten } from "@material-ui/core";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SendIcon from "@material-ui/icons/Send";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "yellow",
    // borderRadius: 8,
  },
  input: {
    // backgroundColor: "green",
  },
  inputMultiline: {
    // backgroundColor: "pink",
    fontSize: 14,
  },
  multiline: {
    backgroundColor: lighten("#2D3C51", 0.9),
    // borderRadius: 8,
    borderRadius: 4,
    fontSize: 14,
    paddingTop: 14,
    paddingBottom: 12,
  },
  filledInput: {
    // backgroundColor: "lightgrey",
    // borderRadius: 4,
    boxShadow: "0px 2px 4px 0px rgba(0,0,0,0.25)",
    // clipPath: "inset(0px 0px -9px 0px)",
  },
  div: {
    padding: 16,
  },
  formControl: {
    // borderRadius: 4,
    // boxShadow: "0px 0px 9px 0px rgba(0,0,0,0.250)",
    // clipPath: "inset(0px 0px -9px 0px)",
    // padding: 16,
  },
  button: {
    margin: 16,
  },
  iconButton: {
    color: lighten("#2D3C51", 0.5),
  },
}));

const MultilineFilledInput = () => {
  const classes = useStyles();
  return (
    <div className={classes.div}>
      <FormControl fullWidth variant="filled" className={classes.formControl}>
        <Button variant="outlined" color="primary" className={classes.button}>
          Dummy
        </Button>
        <FilledInput
          classes={{
            // root: classes.root,
            // input: classes.input,
            multiline: classes.multiline,
            // inputMultiline: classes.inputMultiline,
          }}
          className={classes.filledInput}
          disableUnderline
          maxRows={4}
          multiline
          placeholder="Type a response..."
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="Send message"
                className={classes.iconButton}
              >
                <SendIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
};

export default MultilineFilledInput;
