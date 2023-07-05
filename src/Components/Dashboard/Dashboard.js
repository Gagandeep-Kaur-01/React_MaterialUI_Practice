import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { AppBar, 
         Toolbar, 
         Typography, 
         Drawer, 
         List, 
         ListItem, 
         ListItemIcon, 
         ListItemText,
         IconButton, 
         Box 
        } from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import { People as PeopleIcon } from '@material-ui/icons';
import WorkIcon from '@material-ui/icons/Work';
import MailIcon from '@material-ui/icons/Mail';
import DehazeIcon from "@material-ui/icons/Dehaze";
import { makeStyles } from '@material-ui/core/styles';

import UsersPage from '../UserPage/UserPage';
import CheckboxSelection from '../CheckboxSelection';
import Searchbar from '../Searchbar';
import About from '../About';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        marginRight: "auto"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    iconAlign: {
        marginLeft: 160
    },
    ListItem: {
        marginTop: 10
    },
    content: {
        marginTop: 30,
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }));


function Dashboard() {
    const classes = useStyles();
    const [opens, setOpens] = useState(false);
  
    return (
      <Router>  
      <div className={classes.root}>
        {/* <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar> */}
        <Drawer
          open={opens} onClose={() => setOpens(false)}
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
        <Toolbar />
          <List>
            <ListItem button component={Link} to="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/about">
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button component={Link} to="/users">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
            <ListItem button component={Link} to="/searchbar">
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary="Searchbar" />
            </ListItem>
            <ListItem button component={Link} to="/checkboxselection">
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="CheckboxSelection" />
              </ListItem>
          </List>
        </Drawer> 
        {/* <AppBar style={{ background: '#2E3B55 '}}>
            <Toolbar>
                <Typography type="title" color="inherit" style={{ flex: 1}}>
                    Home
                </Typography>
                <IconButton edge = "start"
                className={classes.menuButton}
                color="inherit"
                onClick={() => setOpens(true)}>
                    <DehazeIcon />
                </IconButton>
            </Toolbar>
        </AppBar>     */}
        <main className={classes.content}>
          <Routes>
            <Route exact path="/users" element={<UsersPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/searchbar" element={<Searchbar />} /> 
            <Route path="/checkboxselection" element = {<CheckboxSelection />} />
          </Routes>
        </main>
      </div>
      </Router>
    );
}
  
export default Dashboard;