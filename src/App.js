import React from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/system/Box";
import MultilineFilledInput from "./Multiline";
import CardExample from "./CardExample";
import ChipExample2 from "./ChipExample2";

function App() {
  return (
    <Box className="App" bgcolor="background.primary">
      <Grid container spacing={9}>
        <Grid xs={3} sx={{ width: 300}}>
          <Box bgcolor="background.dark" margin={2} padding={2}>
            <CardExample />
          </Box>
        </Grid>
        <Grid xs={6} p={3} my={3}>
          <MultilineFilledInput />
        </Grid>
        <Grid xs={3}>
          <ChipExample2 />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
