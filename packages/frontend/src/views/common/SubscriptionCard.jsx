import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Grid } from "@material-ui/core";
import { spacing } from "@material-ui/system";
import { Typography } from "@material-ui/core";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    maxHeight: "100%",
    backgroundColor: "#add8e6",
  },
}));

function SubscriptionCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography
                className={classes.main}
                gutterBottom
                variant="h5"
                component="h6"
              >
                LITE
              </Typography>
              <Typography
                className={classes.main}
                gutterBottom
                variant="p"
                component="p"
              >
                Rs. 499/-
              </Typography>
              <Typography
                className={classes.main}
                gutterBottom
                variant="p"
                component="p"
              >
                for 1 year
              </Typography>

              <List component="nav" className={classes.contentmargin}>
                <ListItem>
                  <ListItemIcon>
                    <DoneOutlineIcon />
                  </ListItemIcon>
                  <ListItemText primary="Access to all Features" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneOutlineIcon />
                  </ListItemIcon>
                  <ListItemText primary="Unlimited Services" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneOutlineIcon />
                  </ListItemIcon>
                  <ListItemText primary="Unlimited Events" />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <DoneOutlineIcon />
                  </ListItemIcon>
                  <ListItemText primary="Chat Support" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneOutlineIcon />
                  </ListItemIcon>
                  <ListItemText primary="Emergency Services" />
                </ListItem>
              </List>
              <Button
                size="small"
                className={classes.buttoninterested}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Subscribe
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography
                className={classes.main}
                gutterBottom
                variant="h5"
                component="h6"
              >
                LITE
              </Typography>
              <Typography
                className={classes.main}
                gutterBottom
                variant="p"
                component="p"
              >
                Rs. 499/-
              </Typography>
              <Typography
                className={classes.main}
                gutterBottom
                variant="p"
                component="p"
              >
                for 1 year
              </Typography>

              <List component="nav" className={classes.contentmargin}>
                <ListItem>
                  <ListItemIcon>
                    <DoneOutlineIcon />
                  </ListItemIcon>
                  <ListItemText primary="Access to all Features" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneOutlineIcon />
                  </ListItemIcon>
                  <ListItemText primary="Unlimited Services" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneOutlineIcon />
                  </ListItemIcon>
                  <ListItemText primary="Unlimited Events" />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <DoneOutlineIcon />
                  </ListItemIcon>
                  <ListItemText primary="Chat Support" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneOutlineIcon />
                  </ListItemIcon>
                  <ListItemText primary="Emergency Services" />
                </ListItem>
              </List>
              <Button
                size="small"
                className={classes.buttoninterested}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Subscribe
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography
                className={classes.main}
                gutterBottom
                variant="h5"
                component="h6"
              >
                LITE
              </Typography>
              <Typography
                className={classes.main}
                gutterBottom
                variant="p"
                component="p"
              >
                Rs. 499/-
              </Typography>
              <Typography
                className={classes.main}
                gutterBottom
                variant="p"
                component="p"
              >
                for 1 year
              </Typography>

              <List component="nav" className={classes.contentmargin}>
                <ListItem>
                  <ListItemIcon>
                    <DoneOutlineIcon />
                  </ListItemIcon>
                  <ListItemText primary="Access to all Features" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneOutlineIcon />
                  </ListItemIcon>
                  <ListItemText primary="Unlimited Services" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneOutlineIcon />
                  </ListItemIcon>
                  <ListItemText primary="Unlimited Events" />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <DoneOutlineIcon />
                  </ListItemIcon>
                  <ListItemText primary="Chat Support" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneOutlineIcon />
                  </ListItemIcon>
                  <ListItemText primary="Emergency Services" />
                </ListItem>
              </List>
              <Button
                size="small"
                className={classes.buttoninterested}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Subscribe
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography
                className={classes.main}
                gutterBottom
                variant="h5"
                component="h6"
              >
                LITE
              </Typography>
              <Typography
                className={classes.main}
                gutterBottom
                variant="p"
                component="p"
              >
                Rs. 499/-
              </Typography>
              <Typography
                className={classes.main}
                gutterBottom
                variant="p"
                component="p"
              >
                for 1 year
              </Typography>

              <List component="nav" className={classes.contentmargin}>
                <ListItem>
                  <ListItemIcon>
                    <DoneOutlineIcon />
                  </ListItemIcon>
                  <ListItemText primary="Access to all Features" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneOutlineIcon />
                  </ListItemIcon>
                  <ListItemText primary="Unlimited Services" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneOutlineIcon />
                  </ListItemIcon>
                  <ListItemText primary="Unlimited Events" />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <DoneOutlineIcon />
                  </ListItemIcon>
                  <ListItemText primary="Chat Support" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneOutlineIcon />
                  </ListItemIcon>
                  <ListItemText primary="Emergency Services" />
                </ListItem>
              </List>
              <Button
                size="small"
                className={classes.buttoninterested}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Subscribe
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default SubscriptionCard;
