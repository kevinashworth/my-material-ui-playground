import React from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core'

const CardExample = (props) => {
  console.log('props:', props)
  return (
    <Card>
      <CardMedia image='http://placekitten.com/320/240' />
      <CardHeader title='Card Title' />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Eum neque placeat et cumque voluptates? Ad deleniti dolorem <em>et dolor</em> nam consectetur Quis. Eum galisum esse <strong>nam odit non tempora explicabo id optio tempora</strong> qui vero ducimus et consequatur iste qui laudantium voluptatem.
        </Typography>
      </CardContent>
      <CardActions>
        <Button href="https://material-ui.com" color="primary">Material-UI</Button>
      </CardActions>
    </Card>
  )
}

export default CardExample;
