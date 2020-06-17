import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { HashRouter as Router, Link as RouterLink, Switch, Route, withRouter, LinkProps as RouterLinkProps, RouteProps} from 'react-router-dom';
import {
  Divider,
  Link,
  Typography,
  Collapse,
} from '@material-ui/core';
import {
 ExpandLess, ExpandMore, BlurOn,
} from '@material-ui/icons'
import { Omit } from '@material-ui/types';
import { routesConfig, RouteConfigProps} from 'src/routes';

// @gya-todos: a标签的样式，全局定义：去除默认的样式，如下划线，颜色变化等等，并定义此处list下a标签的样式
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '280px',
      height: '100vh',
      backgroundColor: theme.palette.background.paper,
    },
    menuTitle: {
      display: 'flex',
      height: '64px',
      alignItems: 'center',

    },
    nestedList: {
      paddingLeft: theme.spacing(4),
    },
  }),
);

interface ListItemLinkProps extends RouteConfigProps {
  isNested?: boolean;
}
// interface ListItemLinkProps {
//   icon?: React.ReactElement;
//   primary: string;
//   to: string;
// }

interface MenuProps {
  location: {
    pathname: string,
  }
}




function MenuBar(props: MenuProps) {
  const classes = useStyles();
  const { pathname = '/' } = props.location;
  // @gya-notes: see src/routes.ts
  const initMenuGroup = pathname.split('/').length > 2? `/${pathname.split('/')[1]}`: '';
  const [activeMenu, setActiveMenu] = React.useState(pathname);
  const [openMenuGroup, setOpenMenuGroup] = React.useState(initMenuGroup);
  const handleActiveMenu = (newMenu: string) => {
    setActiveMenu(newMenu);
  };
  const handleOpenMenuGroup = (newOpenGroup: string) => {
    setOpenMenuGroup(openMenuGroup === newOpenGroup ? '' : newOpenGroup);
  }

  // const renderListItem: (arg0: ListItemLinkProps) => void = (route) => {
  //   const { key, name, path, icon, routes } = route;
  //   return (<ListItemLink key={key} {...route} onClick={() => handleActiveMenu(path)} />);
  // }

  const ListItemLink = (props: ListItemLinkProps) => {
    const { name, icon: IconComponent, path, isNested } = props;
    const renderLink = React.useMemo(
      () =>
        React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((itemProps, ref) => (
          <RouterLink to={path} ref={ref} {...itemProps} />
        )),
      [path],
    );
  
    return (
      <ListItem
        // key={key} 
        button 
        className={isNested ? classes.nestedList : undefined} component={renderLink} 
        selected={activeMenu === path} 
        onClick={() => handleActiveMenu(path)}
      >
        <ListItemIcon><IconComponent /></ListItemIcon>
        {/* <ListItemIcon>{React.createElement(icon)}</ListItemIcon> */}
        <ListItemText primary={name} />
      </ListItem>
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.menuTitle}>
        <BlurOn />
      <Typography variant="h6">
          LemonC&apos;s practicies
      </Typography>
      </div>
      <Divider />
      <List>
        {routesConfig.map(route => {
          const { key, ...rest } = route;
          const { name, icon, path, routes } = route;
          const isOpend = openMenuGroup === path
          if (routes) {
            return (
              <li key={key}>
                <ListItem  button onClick={() => handleOpenMenuGroup(path)}>
                  <ListItemIcon>{React.createElement(icon)}</ListItemIcon>
                  <ListItemText primary={name} />
                  {isOpend ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={isOpend} timeout="auto" unmountOnExit>
                  <List>
                    {routes.map(subRoute => {
                      const { key: subKey, ...subRest } = subRoute;
                      return <ListItemLink key={subKey} {...subRest} isNested={true}/>
                    })}
                  </List>
                </Collapse>
              </li>
            )
          }
          return <ListItemLink key={key} {...rest} />
        })}
      </List>
      

      
        {/* <Route>
          {({ location }) => (
            <Typography gutterBottom>Current route: {location.pathname}</Typography>
          )}
        </Route>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
    </div>
  );
}

export default withRouter(MenuBar);