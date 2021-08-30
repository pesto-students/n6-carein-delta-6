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
        <WalkCard/>    
        </div>
    )
}

export default Events
