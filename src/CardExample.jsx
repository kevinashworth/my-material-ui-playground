import React from 'react';
import { styled } from '@mui/material/styles';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';

const PREFIX = 'CardExample';

const classes = {
  media: `${PREFIX}-media`
};

const StyledCard = styled(Card)((
  {
    theme
  }
) => ({
  [`& .${classes.media}`]: {
    height: 240
  }
}));

const CardExample = () => {
  return (
    (
      <StyledCard>
        <CardMedia className={classes.media} image='http://placekitten.com/320/240' />
        <CardHeader title='Card Title' />
        <CardContent>
          <Typography component='p'>
            Eum neque placeat et cumque voluptates? Ad deleniti dolorem <em>et dolor</em> nam consectetur Quis. Eum galisum esse <strong>nam odit non tempora explicabo id optio tempora</strong> qui vero ducimus et consequatur iste qui laudantium voluptatem.
          </Typography>
        </CardContent>
        <CardActions>
          <Button href='https://material-ui.com' color='primary'>Material-UI</Button>
        </CardActions>
      </StyledCard>
    )
  );
};

export default CardExample;
