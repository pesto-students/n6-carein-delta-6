import React from 'react'
import AssistanceServiceCard from '../../common/AssistanceServiceCard'
import SideNav from '../../common/SideNav'
import { Grid } from '@material-ui/core'
import ServiceHead from '../../common/ServiceHead'
import DedicatedServiceCard from '../../common/DedicatedServiceCard'
import CaretackerCard from '../../common/CaretackerCard'

const Services = () => {
    return (
        <div>
            <SideNav/>
            <ServiceHead/>
            <Grid container>
            <Grid item xs={12} sm={6} md={3}>
            <AssistanceServiceCard/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <DedicatedServiceCard/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <CaretackerCard/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <AssistanceServiceCard/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <AssistanceServiceCard/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <AssistanceServiceCard/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <AssistanceServiceCard/>
            </Grid>
            </Grid>
        </div>
    )
}

export default Services
