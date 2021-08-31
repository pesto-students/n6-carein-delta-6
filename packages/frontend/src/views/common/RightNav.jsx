import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { ListItemText } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { Typography } from '@material-ui/core';


const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  activity: {
    margin: theme.spacing(3,3,3),
  },
  seemore: {
    margin: theme.spacing(-6,20 ,4),
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
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function RightNav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
        <div className={classes.toolbar} />
      
        <List component="nav">
        <Typography component="h1" variant="h6" sx={{ color: 'text.secondary', mt: 3 }} className={classes.activity}>
          Friends
        </Typography>
        <ListItem button>   
          <ListItemIcon>
          <Avatar alt="Remy Sharp" src="./assets/media/bg/pp.jpg" />
          </ListItemIcon>
          <ListItemText primary="Rakesh Kumar" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
          <Avatar alt="M" src="./assets/media/bg/pp1.jpg" />
          </ListItemIcon>
          <ListItemText primary="Manish Singh" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
          <Avatar alt="M" src="./assets/media/bg/pp2.png" />
          </ListItemIcon>
          <ListItemText primary="Megha Sharma" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
          <Avatar alt="V" src="./assets/media/bg/pp3.jpg" />
          </ListItemIcon>
          <ListItemText primary="Vimla Gupta" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
          <Avatar alt="A" src="./assets/media/bg/pp4.jpg" />
          </ListItemIcon>
          <ListItemText primary="Anish Kumar" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
          <Avatar alt="S" src="./assets/media/bg/pp5.jpg" />
          </ListItemIcon>
          <ListItemText primary="Shubham Bhatia" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
          <Avatar alt="V" src="./assets/media/bg/pp6.jpg" />
          </ListItemIcon>
          <ListItemText primary="Vinit Borole" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
          <Avatar alt="T" src="./assets/media/bg/pp7.jpg" />
          </ListItemIcon>
          <ListItemText primary="Tanu Grover" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
          <Avatar alt="M" src="./assets/media/bg/pp8.jpg" />
          </ListItemIcon>
          <ListItemText primary="Mahesh Bhatia" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
          <Avatar alt="S" src="./assets/media/bg/pp9.jpg" />
          </ListItemIcon>
          <ListItemText primary="Simran Kapoor" />
        </ListItem>
        <ListItem button>   
          <ListItemIcon>
          <Avatar alt="Remy Sharp" src="./assets/media/bg/pp.jpg" />
          </ListItemIcon>
          <ListItemText primary="Rakesh Kumar" />
        </ListItem>
        <ListItem button>   
          <ListItemIcon>
          <Avatar alt="Remy Sharp" src="./assets/media/bg/pp.jpg" />
          </ListItemIcon>
          <ListItemText primary="Rakesh Kumar" />
        </ListItem>
        <ListItem button>   
          <ListItemIcon>
          <Avatar alt="Remy Sharp" src="./assets/media/bg/pp.jpg" />
          </ListItemIcon>
          <ListItemText primary="Rakesh Kumar" />
        </ListItem>
        <ListItem button>   
          <ListItemIcon>
          <Avatar alt="Remy Sharp" src="./assets/media/bg/pp.jpg" />
          </ListItemIcon>
          <ListItemText primary="Rakesh Kumar" />
        </ListItem>
        <ListItem button>   
          <ListItemIcon>
          <Avatar alt="Remy Sharp" src="./assets/media/bg/pp.jpg" />
          </ListItemIcon>
          <ListItemText primary="Rakesh Kumar" />
        </ListItem>
        <ListItem button>   
          <ListItemIcon>
          <Avatar alt="Remy Sharp" src="./assets/media/bg/pp.jpg" />
          </ListItemIcon>
          <ListItemText primary="Rakesh Kumar" />
        </ListItem>
        <ListItem button>   
          <ListItemIcon>
          <Avatar alt="Remy Sharp" src="./assets/media/bg/pp.jpg" />
          </ListItemIcon>
          <ListItemText primary="Rakesh Kumar" />
        </ListItem>
        <ListItem button>   
          <ListItemIcon>
          <Avatar alt="Remy Sharp" src="./assets/media/bg/pp.jpg" />
          </ListItemIcon>
          <ListItemText primary="Rakesh Kumar" />
        </ListItem>
        <ListItem button>   
          <ListItemIcon>
          <Avatar alt="Remy Sharp" src="./assets/media/bg/pp.jpg" />
          </ListItemIcon>
          <ListItemText primary="Rakesh Kumar" />
        </ListItem>
      </List>
        
      </Drawer>
    </div>
  );
}
