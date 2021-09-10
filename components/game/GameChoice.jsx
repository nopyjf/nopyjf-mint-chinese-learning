import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';

var dispatch = null;
var word = null;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: theme.spacing(12),
    height: theme.spacing(12),
  }
}));

export default function GameChoice() {
  const classes = useStyles();
  dispatch = useDispatch();
  word = useSelector(state => state.gameWordListReducer);

  return (
    <>
      <Grid
        className={classes.root}
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center">
        <Grid item>
          <Paper variant="outlined" className={classes.card}>
            <Typography variant="h5">One</Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper variant="outlined" className={classes.card}>
            <Typography variant="h5">Two</Typography>
          </Paper>
        </Grid>
        <Grid item >
          <Paper variant="outlined" className={classes.card}>
            <Typography variant="h5">Three</Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}