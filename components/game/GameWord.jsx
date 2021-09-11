import { Box, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/dist/client/router';

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
  const router = useRouter();

  if (words.length == 0) {
    router.push('/');
  }

  return (
    <>
      <Box component="div" className={classes.root}>
        <Typography variant="h1" className={classes.root}>{ words.length > 0 ? words[0].chinese : null }</Typography>
      </Box>
    </>
  );
}