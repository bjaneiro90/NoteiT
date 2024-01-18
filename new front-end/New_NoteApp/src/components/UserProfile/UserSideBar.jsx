import React from 'react'
import '../../assets/css/UserSideBar.css'
import user from "../../images/userlogin.png"
import password from "../../images/padlock.png"
import edit from "../../images/editing.png"
import avatar from "../../images/man_avatar.png"
import calendar from "../../images/calendar.png"
import { Link } from 'react-router-dom'


export const UserSideBar = ({activepage}) => {
  return (
    <div className='usersidebar'>
        <header className='header_usersidebar'>
          <img className="avatar" src={avatar} alt="" />
          <h3>Hello, Bruno<br/><span>Web Developer</span></h3>
        </header>
      <ul>
      {
        activepage === 'myprofile' ?
        <div className="s2">
          <li>
            <img src= {user}/>
            <span>My Profile</span>
          </li>
        </div> 
        :
        <Link
        to='/user/myprofile' >
          <div className="s1">
              <li>
                <img src= {user}/>
                <span>My Profile</span>
              </li>
          </div>
        </Link>
      }


      {
        activepage === 'accountsettings' ?
        <div className="s2">
        <li>
          <img src= {edit}/>
          <span>Account Settings</span>
        </li>
    </div> 
        :
      <Link
      to='/user/accountsettings'>
        <div className="s1">
            <li>
              <img src= {edit}/>
              <span>Account Settings</span>
            </li>
        </div>
      </Link>
      }

       {
        activepage === 'changepassword' ?
        <div className="s2">
           <li>
              <img src= {password}/>
              <span>Change Password</span>
            </li>
        </div> 
        :
        <Link
        to='/user/changepassword'>
          <div className="s1">
              <li>
                <img src= {password}/>
                <span>Change Password</span>
              </li>
          </div>
        </Link>
      }
      {
        activepage === 'calendar' ?
        <div className="s2">
           <li>
              <img src= {calendar}/>
              <span>Calendar</span>
            </li>
        </div> 
        :
        <Link
          to='/user/calendar'>
          <div className="s1">
              <li>
                <img src= {calendar}/>
                <span>Calendar</span>
              </li>
          </div>
        </Link>
      }
      </ul>
    </div>
  )
}


export default UserSideBar