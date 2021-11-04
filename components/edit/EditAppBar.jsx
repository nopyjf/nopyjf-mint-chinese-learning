import { makeStyles } from "@material-ui/core/styles";
import {
  Toolbar,
  Typography,
  Button,
  AppBar,
  IconButton,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { landingWordListAddWord } from "../../redux/landing/actions/landingWordListActions";
import { editTextFieldClearWord } from "../../redux/landing/actions/editTextFieldActions";
import { useRouter } from "next/dist/client/router";
import { ArrowBack } from "@material-ui/icons";
import { LANDING_WORD_LIST_STORAGE } from "../../src/storage";

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

export default function EditAppBar({ word, wordList }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();

  const isShownButtonAppBar = (word) => {
    return word.chinese && word.translate;
  };

  const hasWindow = () => typeof window !== "undefined";

  const setLocalWordList = (wordList, chinese, translate) => {
    if (hasWindow()) {
      window.localStorage.setItem(
        LANDING_WORD_LIST_STORAGE,
        JSON.stringify({
          id: wordList.id + 1,
          data: [
            ...wordList.data,
            {
              id: wordList.id,
              chinese: chinese,
              translate: translate,
            },
          ],
        })
      );
    }
  };

  const addWord = (e) => {
    e.preventDefault();
    dispatch(landingWordListAddWord(word.chinese, word.translate));
    dispatch(editTextFieldClearWord());
    setLocalWordList(wordList, word.chinese, word.translate);
    router.back();
  };

  const buttonAppBar = () => {
    return (
      <Button color="inherit" onClick={addWord}>
        ตกลง
      </Button>
    );
  };

  return (
    <AppBar>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="back"
          onClick={() => {
            router.back();
          }}
        >
          <ArrowBack />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          เพิ่มคำศัพท์
        </Typography>
        {isShownButtonAppBar(word) ? buttonAppBar() : null}
      </Toolbar>
    </AppBar>
  );
}
