import React from "react";
import { Container, Box } from "@material-ui/core";
import LandingAppBar from "./LandingAppBar";
import LandingWordList from "./LandingWordList";
import LandingCreateWordButton from "./LandingCreateWordButton";
import { useSelector, useDispatch } from "react-redux";
import { landingWordListSetList } from "../../redux/landing/actions/landingWordListActions";
import { LANDING_WORD_LIST_STORAGE } from "../../src/storage";

export default function LandingScreen() {
  var wordList = null;
  const wordListFromReducer = useSelector(
    (state) => state.landingWordListReducer
  );
  const dispatch = useDispatch();

  const hasWindow = () => typeof window !== "undefined";

  if (hasWindow()) {
    if (wordListFromReducer.id) {
      wordList = wordListFromReducer;
    } else {
      wordList = JSON.parse(
        window.localStorage.getItem(LANDING_WORD_LIST_STORAGE)
      );
      if (wordList && wordList.id) {
        dispatch(landingWordListSetList(wordList));
      } else {
        wordList = wordListFromReducer;
      }
    }
  }

  return (
    <Box component="div">
      {wordList ? (
        <>
          <LandingAppBar wordList={wordList} />
          <Container maxWidth="xs">
            <Box component="div" overflow="hidden" mt={8} mb={2} pt={2}>
              <LandingCreateWordButton />
              <LandingWordList wordList={wordList} />
            </Box>
          </Container>
        </>
      ) : (
        <></>
      )}
    </Box>
  );
}
