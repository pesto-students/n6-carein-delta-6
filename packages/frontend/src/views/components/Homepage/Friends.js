import { Grid } from '@material-ui/core'
import React from 'react'
import FriendCard from '../../common/FriendCard'
import FriendHead from '../../common/FriendHead'
import SideNav from '../../common/SideNav'
import { makeStyles } from '@material-ui/core'



const Friends = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
          marginLeft: 310,
        },
    })
    );

    return (
        <div>
        <SideNav/>
        <FriendHead/>
        <Grid container className={useStyles.root}>
        <Grid item xs={12} sm={6} md={3}>
        <FriendCard/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <FriendCard/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <FriendCard/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <FriendCard/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <FriendCard/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <FriendCard/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <FriendCard/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <FriendCard/>
        </Grid>
        
        </Grid>
        
        </div>
    )
}

export default Friends
