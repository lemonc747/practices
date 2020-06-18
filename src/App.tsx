import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Hidden,
  Slide,
  Drawer,
  Typography,
} from '@material-ui/core';
// import withWidth, { WithWidth } from '@material-ui/core/withWidth';
import { routesConfig, RouteConfigProps } from 'src/routes';
import AppTopBar from 'src/layout/appBar';
import MenuBar from 'src/layout/menuBar';
// import CanvasBase from './canvas/canvas.base';


/**
 * @deprecated
 */
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
      // minHeight: 'calc(100% - 70px)',
      paddingTop: '70px',
    },
    menuContainer: {
      width: '280px',
      height: '100vh',
      flexShrink: 0,
      // height: 'calc(100% - 70px)',
    }
  }),
);

const slimRoutes: RouteConfigProps[] = (() => {
  const result: RouteConfigProps[] = [];
  routesConfig.forEach(route => {
    if (route && route.routes) {
      route.routes.forEach(subRoute => {
        result.push(subRoute);
      });
    } else {
      result.push(route);
    }
  });
  return result;
})();
console.log('slimRoutes', slimRoutes)

function App() {//(props: WithWidth) {
  // const [count, setCount] = useState(1);
  const classes = useStyles();
  // const { width } = props;
  const [menuState, setMenuState] = useState(true); // 需要结合redux设置状态，按钮在appBar上
  const [mobileMenuState, setMobileMenuState] = React.useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuState(!mobileMenuState);
  };

  return (
    <RecoilRoot>
      <div className={classes.root}>
        <Router>
          <AppTopBar />
          <Hidden smDown>
            <Drawer
              className={classes.menuContainer}
              variant='permanent'
              open={menuState}
            >
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
              <MenuBar />
            </Drawer>
          </Hidden>
          <div className={classes.mainContainer}>
            <Switch>
              {slimRoutes.map(route => {
                const { key, path, component: RouteComponent } = route;
                console.log('path', path)
                return !RouteComponent ? null :(
                  <Route key={key} exact path={path}>
                    <RouteComponent />
                  </Route>
                )
              })}
            </Switch>
            
            {/* {[1,2,3,4,5,6].map(() => (
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
            ))} */}

          </div>
        </Router>
        
        {/* <Container /> */}
      </div>
    </RecoilRoot>
  );
}

export default App;
