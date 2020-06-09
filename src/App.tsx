import React, { useState } from 'react';
import { HashRouter , } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Button,
//   Typography,
// } from '@material-ui/core';


// import {
//   Menu as MenuIcon,
// } from '@material-ui/icons';
import {
  Container,
  Grid,
  Hidden,
  Slide,
  Drawer,
  Typography,
} from '@material-ui/core';
import withWidth, { WithWidth } from '@material-ui/core/withWidth';

import AppTopBar from 'src/layout/appBar';
import MenuBar from 'src/layout/menuBar';
// import CanvasBase from './canvas/canvas.base';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      // flexDirection: "column",
      flexGrow: 1,
    },
    mainContainer: {
      // display: 'flex',
      // paddingTop: '70px',
      // width: '100vw',
      // height: '100hw',
      flexGrow: 1,
      minHeight: 'calc(100% - 70px)',
      paddingTop: '70px',
    },
    menuContainer: {
      width: '240px',
      height: '100vh',
      flexShrink: 0,
      // height: 'calc(100% - 70px)',
    }
  }),
);



function App() {//(props: WithWidth) {
  // const [count, setCount] = useState(1);
  const classes = useStyles();
  // const { width } = props;
  const [menuState, setMenuState] = useState(true); // 需要结合redux设置状态，按钮在appBar上
  const [mobileMenuState, setMobileMenuState] = React.useState(true);

  const handleMobileMenuToggle = () => {
    setMobileMenuState(!mobileMenuState);
  };

  return (
    <div className={classes.root}>
      <AppTopBar />
      <Hidden smDown>
        <Drawer
          className={classes.menuContainer}
          variant='permanent'
          open={menuState}
        >
          <Typography variant="h6">
            LemonC's practicies
          </Typography>
          <MenuBar />
        </Drawer>
      </Hidden>
      <Hidden mdUp implementation="css">
        <Drawer
          className={classes.menuContainer}
          variant='temporary'
          open={mobileMenuState}
          onClose={handleMobileMenuToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <Typography variant="h6">
            LemonC's practicies
          </Typography>
          <MenuBar />
        </Drawer>
      </Hidden>
      <div className={classes.mainContainer}>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>

      </div>
      {/* <Container /> */}
    </div>
  );
}

export default App;
