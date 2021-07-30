import React from 'react';
import Grid from '@material-ui/core/Grid';
import MultilineFilledInput from './Multiline';

function App() {
  return (
    <div className='App'>
      <Grid container spacing={9}>
        <Grid item xs={3}>
          {/* <ChipExample1 /> */}
        </Grid>
        <Grid item xs={6} p={3} my={3} style={{ backgroundColor: "inherit" }}>
          <MultilineFilledInput />
        </Grid>
        <Grid item xs={3}>
          {/* <ChipExample2 /> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
