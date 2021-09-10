import { Button, makeStyles } from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';

const useStyles = makeStyles(() => ({
  root: {
    width: "100%"
  },
}));

export default function LandingCreateWordButton() {
  const classes = useStyles();
  const router = useRouter();

  const goToEditText = (e) => {
    e.preventDefault();
    router.push("/edit");
  }

  return (
    <Button
      className={classes.root}
      variant="outlined"
      color="primary"
      onClick={goToEditText}>
      Create Word
    </Button>
  );
}