import { Container, Box } from "@material-ui/core";
import { useSelector } from "react-redux";
import EditAppBar from "./EditAppBar";
import EditChineseTextField from "./EditChineseTextField";
import EditTranslateTextField from "./EditTranslateTextField";

export default function EditScreen() {
  const word = useSelector((state) => state.editTextFieldReducer);

  return (
    <Box component="div">
      <EditAppBar word={word} />
      <Container maxWidth="xs">
        <Box component="div" mt={8} mb={2} pt={2}>
          <EditChineseTextField word={word} />
        </Box>
        <Box component="div" mt={1} pt={1}>
          <EditTranslateTextField />
        </Box>
      </Container>
    </Box>
  );
}
