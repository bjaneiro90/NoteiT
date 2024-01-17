import React from 'react'
import '../../assets/css/UserSideBar.css'
import user from "../../images/user.png"
import note from "../../images/note.png"
import avatar from "../../images/man_avatar.png"



export const UserSideBar = ({activepage}) => {
  return (
    <div className='usersidebar'>
        <header className='header_usersidebar'>
          <img className="avatar" src={avatar} alt="" />
          <h3>Hello, Bruno<br/><span>Web Developer</span></h3>
        </header>
      <ul>
      {
        activepage === 'accountsettings' ?
        <div className="s2">
          <span>Account </span>
        </div> 
        :
      
        <div className="s1">
            <li>
              <img src= {user}/>
              <span>Account Settings</span>
            </li>
        </div>
      }
       {
        activepage === 'yournotes' ?
        <div className="s2">
          <span>My Notes</span>
        </div> 
        :
        <div className="s1">
            <li>
              <img src= {user}/>
              <span>My Notes</span>
            </li>
        </div>
      }
      </ul>
    </div>
  )
}


export default UserSideBar