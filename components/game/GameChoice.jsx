import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { gameWordListRemoveWord } from '../../redux/landing/actions/gameWordListActions';

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

export default function GameChoice({gameWords, landingWords}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();

  const randomChoice = (gameWords, landingWords) => {
    var choices = [];
    const correctWord = gameWords ? gameWords[0] : null;

    if (correctWord) {
      choices.push(correctWord);
      const filterOutCorrectWords = landingWords.filter((word) => word.id != correctWord.id);
      choices.push(filterOutCorrectWords[Math.floor(Math.random() * filterOutCorrectWords.length)]);
      choices.push(filterOutCorrectWords[Math.floor(Math.random() * filterOutCorrectWords.length)]);
    }

    return choices;
  }

  const selectChoice = (e, id) => {
    e.preventDefault();
    if (gameWords && id == gameWords[0].id) {
      dispatch(gameWordListRemoveWord(id));
      if (gameWords.length == 1) {
        router.back();
      }
    }
  }

  return (
    <>
      <Grid
        className={classes.root}
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center">
        {
          randomChoice(gameWords, landingWords).map((word) => {
            return (
              <Grid item>
                <Paper onClick={(e) => selectChoice(e, word.id) } variant="outlined" className={classes.card}>
                  <Typography variant="h5">{ word.translate }</Typography>
                </Paper>
              </Grid>
            );
          })
        }
      </Grid>
    </>
  );
}