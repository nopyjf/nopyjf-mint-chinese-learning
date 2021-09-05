import { landingWordListAddWord } from '../../redux/landing/actions/landingWordListActions';
import { useDispatch, useSelector } from 'react-redux';
import { landingTextFieldClearWord } from '../../redux/landing/actions/landingTextFieldActions';
import { AddCircleRounded } from '@material-ui/icons';

export default function LandingCreateWordButton() {
  const word = useSelector(state => state.landingTextFieldReducer)
  const dispatch = useDispatch();

  const handleAddWord = (e) => {
    e.preventDefault()
    if (word) {
      dispatch(landingWordListAddWord(word))
      dispatch(landingTextFieldClearWord())
    }
  }

  return (
    <AddCircleRounded
      color="primary"
      onClick={handleAddWord}/>
  );
}