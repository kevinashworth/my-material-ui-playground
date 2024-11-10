import React from 'react';
import { styled } from '@mui/material/styles';
const PREFIX = 'DivExample';

const classes = {
  hoverTest: `${PREFIX}-hoverTest`
};

const Root = styled('div')((
  {
    theme
  }
) => ({
  [`&.${classes.hoverTest}`]: {
    backgroundColor: 'cyan',
    '& :hover': {
      backgroundColor: 'pink'
    }
  }
}));

const DivExample = () => {
  const handleClick = () => {
    console.log('click');
  };
  return (
    (
      <Root onClick={handleClick} role='gridcell' className={classes.hoverTest}>
        <a href='void 0'>This is a test</a>
      </Root>
    )
  );
};

export default DivExample;
