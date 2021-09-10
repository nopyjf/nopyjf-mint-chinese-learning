import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { editTextFieldUpdateWord } from '../../redux/landing/actions/editTextFieldActions';

const useStyles = makeStyles(() => ({
  textField: {
    width: "100%",
  },
}));

export default function EditChineseTextField() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const word = useSelector(state => state.editTextFieldReducer);

  const updateWord = (e) => {
    e.preventDefault();
    dispatch(editTextFieldUpdateWord(e.target.value, word.translate));
  }

  return (
    <TextField
      className={classes.textField}
      label={"Please insert Chinese word here"}
      variant="outlined"
      value={word.chinese}
      onChange={updateWord} />
  );
}