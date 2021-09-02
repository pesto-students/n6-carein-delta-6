import React from 'react'
import SideNav from '../../common/SideNav'
import EventHead from '../../common/EventHead'
import WalkCard from '../../common/WalkCard'
import { Grid } from '@material-ui/core'


const Events = () => {
    return (
        <div>
        <SideNav/>        
        <EventHead/>
        <Grid container>
        <Grid item xs={12} sm={6} md={3}>
        <WalkCard/>
        </Grid>
        {/* <Grid item xs={12} sm={6} md={3}>
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
        </Grid>  */}
        </Grid>
            
        </div>
    )
}

export default Events
