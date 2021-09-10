import { Container, Box } from '@material-ui/core';
import LandingAppBar from './LandingAppBar';
import LandingWordList from './LandingWordList';
import LandingCreateWordButton from './LandingCreateWordButton';

export default function LandingScreen() {
  return (
    <Box component="div">
      <LandingAppBar />
      <Container maxWidth="xs">
        <Box component="div" overflow="hidden" mt={8} mb={2} pt={2}>
          <LandingCreateWordButton />
          <LandingWordList />
        </Box >
      </Container>
    </Box>
  );
}