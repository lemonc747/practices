import React, { useState } from 'react';
import { HashRouter , } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Slide,
  useScrollTrigger,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
} from '@material-ui/icons';
// import CanvasBase from './canvas/canvas.base';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // flexGrow: 1,
      zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);



function App() {
  // const [count, setCount] = useState(1);
  const classes = useStyles();

  return (
    <Slide direction='down' appear={false} in={!useScrollTrigger()}>
      <AppBar position='fixed' className={classes.root}> 
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            LemonC's practicies
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Slide>

  );
}

export default App;
