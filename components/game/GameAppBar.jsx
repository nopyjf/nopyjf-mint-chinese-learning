import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

export default function GameAppBar() {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          ทายคำศัพท์
        </Typography>
      </Toolbar>
    </AppBar>
  )
}