import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import GroupIcon from '@material-ui/icons/Group';
import DateRangeIcon from '@material-ui/icons/DateRange';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
    background: 'linear-gradient(45deg, #b7e9f7 30%, #92dff3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    height: 800,
    //padding: '0 30px',
    margin: theme.spacing(0, 0,0),
  },
  contentmargin: {
    margin: theme.spacing(3,5,3),
  },
  activity: {
    margin: theme.spacing(3,5,0),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function SideNav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar/>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div>
        <List component="nav" className={classes.contentmargin}>
        <ListItem button component={Link} to="/Homepage">
          <ListItemIcon>
            <DynamicFeedIcon/>
          </ListItemIcon>
          <ListItemText primary="Feed" />
        </ListItem>
        <ListItem button component={Link} to="/Friends">
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Friends" />
        </ListItem>        
        <ListItem button component={Link} to="/Events">
          <ListItemIcon>
            <DateRangeIcon />
          </ListItemIcon>
          <ListItemText primary="Events" />
        </ListItem>
     
        <ListItem button component={Link} to="/Services">
          <ListItemIcon>
            <SettingsApplicationsIcon />
          </ListItemIcon>
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem button component={Link} to="/Subscription">
          <ListItemIcon>
            <SubscriptionsIcon />
          </ListItemIcon>
          <ListItemText primary="Subscription" />
        </ListItem>
      </List>
          <Divider />
          <Typography component="h5" variant="h6" sx={{ color: 'text.secondary', mt: 3 }} className={classes.activity}>
          Activities you Like
        </Typography>
          <List className={classes.contentmargin}>
            {['Dance Club', 'Morning Walk', 'Temple Buddies'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
      </main>
    </div>
  );
}
