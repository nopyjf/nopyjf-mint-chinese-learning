import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { editTextFieldUpdateWord } from '../../redux/landing/actions/editTextFieldActions';

const useStyles = makeStyles(() => ({
  textField: {
    width: "100%",
  },
}));

export default function EditTranslateTextField() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const word = useSelector(state => state.editTextFieldReducer);

  const updateWord = (e) => {
    e.preventDefault();
    dispatch(editTextFieldUpdateWord(word.chinese, e.target.value));
  }

  return (
    <TextField
      className={classes.textField}
      label={"Please insert translated word here"}
      variant="outlined"
      value={word.translate}
      onChange={updateWord} />
  );
}