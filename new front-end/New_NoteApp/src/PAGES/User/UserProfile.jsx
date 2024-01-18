import React from 'react'
import UserSideBar from '../../components/UserProfile/UserSideBar'
import AccountSettings from '../../components/UserProfile/AccountSettings'
import '../../assets/css/UserProfile.css'
import { useParams } from 'react-router-dom'

export const UserProfile = () => {

    const {activepage} = useParams()



    return (
        <div className='userProfileIn'>
            <div className="left">
                <UserSideBar activepage={activepage}/>
            </div>
            <div className="right">
              { activepage === "accountsettings" &&  <AccountSettings/>}            
            </div>
        </div>
    )
}

export default UserProfile