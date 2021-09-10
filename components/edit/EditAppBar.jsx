import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, Typography, Button, AppBar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { landingWordListAddWord } from '../../redux/landing/actions/landingWordListActions';
import { editTextFieldClearWord } from '../../redux/landing/actions/editTextFieldActions';
import { useRouter } from 'next/dist/client/router';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

export default function EditAppBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();
  const word = useSelector(state => state.editTextFieldReducer);

  const isAlphabet = (word) => {
    let reg = /^[a-zA-Z]+$/;
    return word && reg.test(word);
  }
  
  const isShownButtonAppBar = (word) => {
    return isAlphabet(word.chinese) && isAlphabet(word.translate)
  }
  
  const addWord = (e) => {
    e.preventDefault();
    dispatch(landingWordListAddWord(word.chinese, word.translate));
    dispatch(editTextFieldClearWord());
    router.back();
  }
  
  const buttonAppBar = () => {
    return (
      <Button
        color="inherit"
        onClick={addWord}>
        OK
      </Button>
    )
  }

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Create Word
        </Typography>
        { 
          isShownButtonAppBar(word) ? buttonAppBar() : null
        }
      </Toolbar>
    </AppBar>
  );
}