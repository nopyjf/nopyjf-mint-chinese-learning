import { Box, Container } from "@material-ui/core";
import { useSelector } from "react-redux";
import GameAppBar from "./GameAppBar";
import GameChoice from "./GameChoice";
import GameWord from "./GameWord";

export default function GameScreen() {
  const gameWordList = useSelector((state) => state.gameWordListReducer);
  const landingWordList = useSelector((state) => state.landingWordListReducer);

  console.log(gameWordList);

  if (!gameWordList) {
    router.push("/");
  }

  return (
    <Box component="div">
      <GameAppBar />
      <Container maxWidth="xs">
        <Box component="div" mt={8} mb={2} pt={2}>
          <GameWord words={gameWordList} />
          <GameChoice
            gameWords={gameWordList}
            landingWords={landingWordList.data}
          />
        </Box>
      </Container>
    </Box>
  );
}
