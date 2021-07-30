import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import MyAccordion from "./MyAccordion";
import FLAccordion from "./FLAccordion";
// import Partial from "./table_contact_detail";
import DivExample from "./divExample"
import MyComponent from "./MyComponent";

function App() {
  return (
    <Box style={{ backgroundColor: "lightgrey" }} m={1} p={1}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item>
          <DivExample />
          <MyComponent>Hello!</MyComponent>
          </Grid>
          {/* <Grid item xs={12}>
            <Typography variant="h1" color="textSecondary">
              UI
            </Typography>
            <Partial />
          </Grid> */}
          {/* <Grid item xs={6}>
            <Typography variant="h1" color="textSecondary">
              My
            </Typography>
            <MyAccordion />
          </Grid> */}
          {/* <Grid item xs={6}>
            <Typography variant="h1" color="textSecondary">
              My ui
            </Typography>
            <FLAccordion count={3} summary='The Summary!'>
              I hope this works.
            </FLAccordion>
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
