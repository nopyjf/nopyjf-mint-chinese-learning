import React from "react";
import { Container, Box, Grid } from "@material-ui/core";
import LandingAppBar from "./LandingAppBar";
import LandingWordList from "./LandingWordList";
import LandingCreateWordButton from "./LandingCreateWordButton";
import { useSelector, useDispatch } from "react-redux";
import { landingWordListSetList } from "../../redux/landing/actions/landingWordListActions";
import { LANDING_WORD_LIST_STORAGE } from "../../src/storage";
import LandingPlaySavedListButton from "./LandingPlaySavedListButton";

export default function LandingScreen() {
  var wordList = null;
  const wordListFromReducer = useSelector((state) => state.landingWordListReducer);
  const dispatch = useDispatch();

  const hasWindow = () => typeof window !== "undefined";

  if (hasWindow()) {
    if (wordListFromReducer.id) {
      wordList = wordListFromReducer;
    } else {
      wordList = JSON.parse(window.localStorage.getItem(LANDING_WORD_LIST_STORAGE));
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
            <Box component="div" sx={{ width: "100%" }} overflow="hidden" mt={8} mb={2} pt={2}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <LandingCreateWordButton />
                </Grid>
                <Grid item xs={6}>
                  <LandingPlaySavedListButton />
                </Grid>
              </Grid>
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
