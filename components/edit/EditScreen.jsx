import { Container, Box } from '@material-ui/core';
import EditAppBar from './EditAppBar';
import EditChineseTextField from './EditChineseTextField';
import EditTranslateTextField from './EditTranslateTextField';

export default function EditScreen() {
  return (
    <Box component="div">
      <EditAppBar />
      <Container maxWidth="xs">
        <Box component="div" mt={8} mb={2} pt={2}>
          <EditChineseTextField />
        </Box >
        <Box component="div" mt={1} pt={1}>
          <EditTranslateTextField/>
        </Box >
      </Container>
    </Box>
  );
}