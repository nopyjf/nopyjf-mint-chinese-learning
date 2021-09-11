import { Box, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    width: "100%",
    height: "70vh",
    alignItems: "center",
    justifyContent: "center"
  },
}));

export default function GameWord({ words }) {
  const classes = useStyles();

  return (
    <>
      <Box component="div" className={classes.root}>
        <Typography variant="h1" className={classes.root}>{ words.length > 0 ? words[0].chinese : null }</Typography>
      </Box>
    </>
  );
}