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

import Icon from '../../Images/icon.jpg'

import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import MailIcon from '@material-ui/icons/Mail';
import DehazeIcon from "@material-ui/icons/Dehaze";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { makeStyles } from '@material-ui/core/styles';

import CheckboxSelection from '../CheckboxSelection';
import Searchbar from '../Searchbar';
import About from '../About';
import TabSelection from '../TabSelection';
import ExcelExport from '../ExcelExport';

import items from '../../Utilities/constant';

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
        <img src={Icon} alt="Website Icon" style={{ width: '40px', height: '40px', margin: '20px' }} />
          <List>  
            <ListItem button component={Link} to="/tabs">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Tab Selection" />
            </ListItem>                       
            <ListItem button component={Link} to="/about">
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
            {/* <ListItem button component={Link} to="/users">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem> */}
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
              <ListItemText primary="Checkbox Selection" />
            </ListItem>
            <ListItem button component={Link} to="/export">
            <ListItemIcon>
              <FileDownloadIcon />
            </ListItemIcon>
            <ListItemText primary="Excel Export" />
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
            {/* <Route exact path="/" element= {<Home />} /> */}
            <Route exact path="/tabs" element = {<TabSelection />} />
            {/* <Route exact path="/users" element = {<UsersPage />} />  */}
            <Route exact path="/export" element = {<ExcelExport tableData={items}/>} />
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