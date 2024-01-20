import React, { useState, useRef } from 'react'
import AvatarEditor from 'react-avatar-editor'
import '../../assets/css/accountSettings.css'
import avatar from "../../images/man_avatar.png"
import upload from "../../images/cloud-computing.png"
import PhoneNumberValidation from './PhoneNumberValidation'


export function AccountSettings() {

    const inputRef = useRef(null)
    
    const handleImageClick = () => {
      inputRef.current.click()
    }

  return (
    <section className='accountsettings'>
      <h1 className='text'>My Details</h1>



        <form action= "" method="POST" className="form">
          <div>

          <div className="form-group" style={{display:"flex", justifyContent:"center", marginTop:"none"}}>
            <img className="profile_edit" style={{cursor: "pointer"}} onClick={handleImageClick}  src={avatar} alt="" />
            <input className="" style={{display:"none"}} type="file" ref={inputRef}/>
           </div>

            


            <div className="form-group">
              <input className="form-control" type="text" name="first_name" id="first_name" placeholder="first_name"/>
              <label htmlFor="first_name" className='form_label'>First Name</label>
            </div>

            <div className="form-group">
              <input className="form-control" type="text" name="last_name" id="last_name" placeholder="last_name"/>
              <label htmlFor="last_name" className='form_label'>Last Name</label>
            </div>

            <div className="form-group">
              <input className="form-control" type="text" name="address" id="address" placeholder="address"/>
              <label htmlFor="address" className='form_label'>Address</label>
            </div>
            <PhoneNumberValidation/>

          </div>

          
          
          <div className="column">
            
            <div className="form-group">
              <input className="form-control" type="text" name="website" id="website" placeholder="website"/>
              <label htmlFor="website" className='form_label'>Website</label>
            </div>

            <div className="form-group">
              <input className="form-control" type="text" name="facebook" id="facebook" placeholder="facebook"/>
              <label htmlFor="facebook" className='form_label'>Facebook</label>
            </div>
            
            <div className="form-group">
              <input className="form-control" type="text" name="git_hub" id="git_hub" placeholder="git_hub"/>
              <label htmlFor="git_hub" className='form_label'>GitHub</label>
            </div>

            <div className="form-group">
              <input className="form-control" type="text" name="linkedin" id="linkedin" placeholder="linkedin"/>
              <label htmlFor="linkedin" className='form_label'>LinkedIn</label>
            </div>
          </div>
        </form>
      
      <button className='submit_edit'>
        Save Changes
      </button>
    </section>
  )
}

export default AccountSettings