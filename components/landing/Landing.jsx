import Container from '@material-ui/core/Container';
import LandingAppBar from './LandingAppBar';
import LandingCreateWordButton from './LandingCreateWordButton';
import LandingWordList from './LandingWordList';
import LandingTextField from './LandingTextField';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  gridContainer: {
    textAlign: "center"
  },
}));

export default function Landing() {
  const classes = useStyles();

  return (
    <Box component="div">
      <LandingAppBar />
      <Container maxWidth="xs">
        <Box component="div" overflow="hidden" mt={8} mb={2} pt={2}>
          <Grid
            className={classes.gridContainer}
            container
            direction="row"
            justifyContent="center"
            alignItems="center">
            <Grid item xs mr={2}>
              <LandingTextField />
            </Grid>
            <Grid item xs={1}>
              <LandingCreateWordButton hide />
            </Grid>
          </Grid>
          <LandingWordList />
        </Box >
      </Container>
    </Box>
  );
}