import React from 'react';
import { Grid } from '@material-ui/core';
import CardExample from './CardExample';

function App () {
  return (
    <div className='App'>
      <Grid container spacing={2}>
        <Grid item xs={3} />
        <Grid item xs={6}>
          <CardExample />
        </Grid>
        <Grid item xs={3} />
      </Grid>
    </div>
  );
}

export default App;
