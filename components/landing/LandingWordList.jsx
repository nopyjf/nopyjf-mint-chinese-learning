import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import { useSelector } from 'react-redux';
import { Delete } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { landingWordListRemoveWord } from '../../redux/landing/actions/landingWordListActions';

export default function LandingWordList() {
  const wordList = useSelector(state => state.landingWordListReducer);
  const dispatch = useDispatch();

  const removeWord = (e, id) => {
    e.preventDefault();
    dispatch(landingWordListRemoveWord(id));
  }

  const getListItem = (word) => {
    return (
      <>
        <ListItem key={`landing-list-item-${word.id}`}>
          <ListItemText primary={word.chinese} secondary={word.translate} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={(e) => { removeWord(e, word.id) }}>
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider component="li" />
      </>
    )
  }

  return (
    <List>
      {
        wordList.data.map((word) => getListItem(word))
      }
    </List>
  );
}