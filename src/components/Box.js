import React from "react";
import {
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  box: {
    background : '#F1F3FF',
    elevation: '0',
    height: '200px'
  },

}));

function Box() {
  const classes = useStyles();
  return (
    <div className={classes.box}></div>
  );
}
export default Box;