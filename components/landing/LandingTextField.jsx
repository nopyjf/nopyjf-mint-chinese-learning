import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { landingTextFieldUpdateWord } from '../../redux/landing/actions/landingTextFieldActions';

const useStyles = makeStyles(() => ({
  textField: {
    width: "100%",
  },
}));

const updateWord = (e, dispatch) => {
  let word = e.target.value;
  let reg = /^[a-zA-Z]+$/;
  let wordMatchedList = word.match(reg, 0);

  e.preventDefault()
  if (word == "") {
    dispatch(landingTextFieldUpdateWord(word));
  } else if (wordMatchedList) {
    dispatch(landingTextFieldUpdateWord(wordMatchedList[0]));
  }
}

export default function LandingTextField() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const word = useSelector(state => state.landingTextFieldReducer)

  return (
    <TextField 
      className={classes.textField}
      label={ word ? "" : "Please insert word" } 
      variant="outlined"
      value={word} 
      onChange={(e) => { updateWord(e, dispatch) }} />
  );
}