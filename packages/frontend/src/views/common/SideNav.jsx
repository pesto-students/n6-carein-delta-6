import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import GroupIcon from "@material-ui/icons/Group";
import DateRangeIcon from "@material-ui/icons/DateRange";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
//import Header from "../../containers/Header/Header";
//import Modals from "../../containers/Modal/Modal";
import DeleteRecordModal from "../../containers/DeleteRecordModal/DeleteRecordModal";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },

  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
  },
}));

export default function SideNav() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const showModel = () => {
    setOpen(true);
  };
  const onHide = () => {
    setOpen(false);
  };

  const drawer = (
    <div>
      <List component="nav" className={classes.content}>
        <ListItem button component={Link} to="/homepage">
          <ListItemIcon>
            <DynamicFeedIcon />
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
        <ListItem button onClick={() => showModel()}>
          <Button
            style={{
              color: "red",
              backgroundColor: 'white',
              border: "1px solid red",
            }}
            variant="contained"
            fullWidth
          >
            SOS
          </Button>
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <CssBaseline />

      <NavBar handleDrawer={handleDrawerToggle}></NavBar>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              className={classes.closeMenuButton}
            >
              <CloseIcon />
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <DeleteRecordModal closeModal={onHide} show={open} />
    </>
  );
}
