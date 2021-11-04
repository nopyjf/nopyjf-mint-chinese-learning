import { Button, makeStyles } from "@material-ui/core";
import { useRouter } from "next/dist/client/router";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginBottom: theme.spacing(1)
  }
}));

export default function LandingPlaySavedListButton() {
  const classess = useStyles();
  const router = useRouter();

  const goToGameScreenWithSaveList = (e) => {
    e.preventDefault();
    router.push("/game/saved");
  }

  return (
    <Button
      className={classess.root}
      variant="outlined"
      color="primary"
      onClick={goToGameScreenWithSaveList}>
        เล่นคำศัพท์ในรายการ
      </Button>
  )
}