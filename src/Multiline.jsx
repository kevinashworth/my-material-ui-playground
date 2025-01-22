import React from 'react';
import { styled } from '@mui/material/styles';
import { lighten } from '@mui/material';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

const PREFIX = 'MultilineFilledInput';

const classes = {
  root: `${PREFIX}-root`,
  input: `${PREFIX}-input`,
  inputMultiline: `${PREFIX}-inputMultiline`,
  multiline: `${PREFIX}-multiline`,
  filledInput: `${PREFIX}-filledInput`,
  div: `${PREFIX}-div`,
  formControl: `${PREFIX}-formControl`,
  button: `${PREFIX}-button`,
  iconButton: `${PREFIX}-iconButton`
};

const Root = styled('div')((
  {
    theme
  }
) => ({
  [`& .${classes.root}`]: {
    // backgroundColor: "yellow",
    // borderRadius: 8,
  },

  [`& .${classes.input}`]: {
    // backgroundColor: "green",
  },

  [`& .${classes.inputMultiline}`]: {
    // backgroundColor: "pink",
    fontSize: 14
  },

  [`& .${classes.multiline}`]: {
    backgroundColor: lighten('#2D3C51', 0.9),
    // borderRadius: 8,
    borderRadius: 4,
    fontSize: 14,
    paddingTop: 14,
    paddingBottom: 12
  },

  [`& .${classes.filledInput}`]: {
    // backgroundColor: "lightgrey",
    // borderRadius: 4,
    boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.25)'
    // clipPath: "inset(0px 0px -9px 0px)",
  },

  [`&.${classes.div}`]: {
    padding: 16
  },

  [`& .${classes.formControl}`]: {
    // borderRadius: 4,
    // boxShadow: "0px 0px 9px 0px rgba(0,0,0,0.250)",
    // clipPath: "inset(0px 0px -9px 0px)",
    // padding: 16,
  },

  [`& .${classes.button}`]: {
    margin: 16
  },

  [`& .${classes.iconButton}`]: {
    color: lighten('#2D3C51', 0.5)
  }
}));

const MultilineFilledInput = () => {
  return (
    (
      <Root className={classes.div}>
        <FormControl fullWidth variant='filled' className={classes.formControl}>
          <Button variant='contained' color='success' className={classes.button}>
            Dummy
          </Button>
          <FilledInput
            classes={{
              // root: classes.root,
              // input: classes.input,
              multiline: classes.multiline
              // inputMultiline: classes.inputMultiline,
            }}
            className={classes.filledInput}
            disableUnderline
            maxRows={4}
            multiline
            placeholder='Type a response...'
            endAdornment={
              <InputAdornment position='end'>
                <IconButton aria-label='Send message' className={classes.iconButton} size='large'>
                  <SendIcon />
                </IconButton>
              </InputAdornment>
          }
          />
        </FormControl>
      </Root>
    )
  );
};

export default MultilineFilledInput;
