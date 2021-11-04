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

export default function GameChoice({ data }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();

  const randomChoice = (words, choices) => {
    var selectedChoices = [];
    const correctWord = words.length ? words[0] : null;

    if (correctWord) {
      selectedChoices.push(correctWord);
      const filterOutCorrectWords = choices.filter((word) => word.id != correctWord.id);
      selectedChoices.push(filterOutCorrectWords[Math.floor(Math.random() * filterOutCorrectWords.length)]);
      selectedChoices.push(filterOutCorrectWords[Math.floor(Math.random() * filterOutCorrectWords.length)]);
    }

    return choices;
  }

  const isCorrectWord = (selectedId, words) => {
    return words && selectedId == words[0]?.id;
  };

  const isFirstChoiceCorrect = (words, choices) => {
    return words.length == choices.length;
  }

  const selectChoice = (e, id) => {
    e.preventDefault();
    if (isCorrectWord(id, data.words)) {
      dispatch(gameWordListRemoveWord(id));
      if (data.words.length == 1) {
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
          randomChoice(data.words, data.choices).map((word) => {
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