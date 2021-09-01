import React from 'react'
import SideNav from '../../common/SideNav'
import SubscriptionCard from '../../common/SubscriptionCard'
import SubscriptionHead from '../../common/SubscriptionHead'

const Subscription = () => {
    return (
        <div>
           <SideNav/> 
           <SubscriptionHead/>
           <SubscriptionCard/>
        </div>
    )
}

export default Subscription
