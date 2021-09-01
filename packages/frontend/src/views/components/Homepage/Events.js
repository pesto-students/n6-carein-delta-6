import React from 'react'
import SideNav from '../../common/SideNav'
import EventHead from '../../common/EventHead'
import WalkCard from '../../common/WalkCard'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const Events = () => {
    const useStyles = makeStyles((theme) => ({
    root: {
        minWidth:300,
        maxWidth: "100%",
        minHeight:300,
        margin: theme.spacing(0, 40, 2),
      },
    })
    );

    return (
        <div>
        <SideNav/>        
        <EventHead/>
        <Grid container className={useStyles.root}>
        <Grid item xs={12} sm={6} md={3}>
        <WalkCard/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <WalkCard/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <WalkCard/>
        </Grid> 
        <Grid item xs={12} sm={6} md={3}>
        <WalkCard/>
        </Grid> 
        <Grid item xs={12} sm={6} md={3}>
        <WalkCard/>
        </Grid> 
        <Grid item xs={12} sm={6} md={3}>
        <WalkCard/>
        </Grid> 
        </Grid>
            
        </div>
    )
}

export default Events
