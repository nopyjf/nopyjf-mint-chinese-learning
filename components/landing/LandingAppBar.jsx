import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { gameWordListCreateData } from '../../redux/landing/actions/gameWordListActions';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

export default function LandingAppBar() {
  const classes = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();
  const wordList = useSelector(state => state.landingWordListReducer);

  const goToGameScreen = (e) => {
    e.preventDefault();
    dispatch(gameWordListCreateData(wordList.data))
    router.push("/game");
  }

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          App
        </Typography>
        <Button color="inherit" onClick={goToGameScreen}>Start</Button>
      </Toolbar>
    </AppBar>
  );
}