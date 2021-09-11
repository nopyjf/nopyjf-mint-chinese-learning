import { Container, Box } from '@material-ui/core';
import LandingAppBar from './LandingAppBar';
import LandingWordList from './LandingWordList';
import LandingCreateWordButton from './LandingCreateWordButton';
import { useSelector } from 'react-redux';

export default function LandingScreen() {
  const wordList = useSelector(state => state.landingWordListReducer);

  return (
    <Box component="div">
      <LandingAppBar wordList={wordList}/>
      <Container maxWidth="xs">
        <Box component="div" overflow="hidden" mt={8} mb={2} pt={2}>
          <LandingCreateWordButton />
          <LandingWordList wordList={wordList}/>
        </Box >
      </Container>
    </Box>
  );
}