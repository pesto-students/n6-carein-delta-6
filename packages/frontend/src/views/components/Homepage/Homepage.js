import React from 'react'
import PostCard from '../../common/PostCard'
import RightNav from '../../common/RightNav'
import SideNav from '../../common/SideNav'
import FeedCard from '../../common/FeedCard'
import { Grid } from '@material-ui/core'


const Homepage = () => {
    return (
        <div>
            <SideNav/>
            <Grid container>
            <Grid item md={12}>
            <PostCard/>
            </Grid>
            <Grid item md={12}>
            <FeedCard/>
            </Grid>
            </Grid>        
            <RightNav/>
        </div>
    )
}

export default Homepage