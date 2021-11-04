import { Box, Container } from "@material-ui/core";
import { useSelector } from "react-redux";
import GameAppBar from "./GameAppBar";
import GameChoice from "./GameChoice";
import GameWord from "./GameWord";

export default function GameScreen() {
  const data = useSelector((state) => state.gameWordListReducer);

  return (
    <Box component="div">
      <GameAppBar />
      <Container maxWidth="xs">
        <Box component="div" mt={8} mb={2} pt={2}>
          <GameWord data={data} />
          <GameChoice data={data} />
        </Box>
      </Container>
    </Box>
  );
}
