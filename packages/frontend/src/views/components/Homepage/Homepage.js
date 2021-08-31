import React from 'react'
import PostCard from '../../common/PostCard'
import RightNav from '../../common/RightNav'
import SideNav from '../../common/SideNav'


const Homepage = () => {
    return (
        <div>
            <SideNav/>
            <PostCard/>
            <RightNav/>
        </div>
    )
}

export default Homepage