import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

export default function LandingAppBar() {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          App
        </Typography>
        <Button color="inherit">Start</Button>
      </Toolbar>
    </AppBar>
  );
}