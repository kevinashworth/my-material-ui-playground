import React from 'react';
import { Grid } from '@material-ui/core';
import CardExample from './CardExample';

function App () {
  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs>
          <CardExample />
        </Grid>
        <Grid item xs></Grid>
        <Grid item xs></Grid>
      </Grid>
    </div>
  );
}

export default App;
