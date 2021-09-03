import React from 'react'
import ProfilePage from '../../common/ProfilePage'

const Profile = () => {
    return (
        <DashboardLayout rightDrawer={true}>
      {data.map((text, index) => (
        <ProfilePage />
      ))}
    </DashboardLayout>
    )
}

export default Profile
