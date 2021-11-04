import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    width: "100%",
    height: "70vh",
    alignItems: "center",
    justifyContent: "center"
  },
}));

export default function GameWord({ data }) {
  const classes = useStyles();
  const word = data.words.length ? data.words[0].chinese : null

  return (
    <>
      <Box component="div" className={classes.root}>
        <Typography variant="h1" className={classes.root}>{ word }</Typography>
      </Box>
    </>
  );
}