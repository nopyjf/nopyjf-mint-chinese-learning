import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { useSelector } from 'react-redux';

export default function LandingWordList() {
  const wordList = useSelector(state => state.landingWordListReducer)

  return (
    <List>
      {
        wordList.map((word) => getListItem(word))
      }
    </List>
  );
}

const getListItem = (word) => {
  return (
    <>
      <ListItem>
        <ListItemText primary={word} />
      </ListItem>
      <Divider component="li" />
    </>
  )
}