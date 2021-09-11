import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import { useDispatch } from 'react-redux';
import { gameWordListCreateData } from '../../redux/landing/actions/gameWordListActions';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

export default function LandingAppBar({ wordList }) {
  const classes = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();

  const goToGameScreen = (e) => {
    e.preventDefault();
    dispatch(gameWordListCreateData(wordList.data))
    router.push("/game");
  }

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          เกมทายศัพท์จีน
        </Typography>
        {
          wordList.data.length < 3 ? null : <Button color="inherit" onClick={goToGameScreen}>Start</Button>  
        }
      </Toolbar>
    </AppBar>
  );
}