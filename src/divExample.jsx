import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  hoverTest: {
    backgroundColor: "cyan",
    "& :hover": {
      backgroundColor: "pink"
    }
  }
}));

const DivExample = () => {
  const classes = useStyles();
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div onClick={handleClick} role="gridcell" className={classes.hoverTest}>
      <a href="void 0">This is a test</a>
    </div>
  );
};

export default DivExample;
