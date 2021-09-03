import React from 'react'
import ProfilePage from '../../common/ProfilePage'
import DashboardLayout from "../../../containers/TheLayout";

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
