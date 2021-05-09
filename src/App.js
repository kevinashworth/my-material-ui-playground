import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MyAccordion from "./MyAccordion";
import MuiAccordion from "./Accordion";

function App() {
  return (
    <Box style={{ backgroundColor: "black" }} m={1} p={1}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h1" color="textSecondary">
              My
            </Typography>
            <MyAccordion />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h1" color="textSecondary">
              Mui
            </Typography>
            <MuiAccordion />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
