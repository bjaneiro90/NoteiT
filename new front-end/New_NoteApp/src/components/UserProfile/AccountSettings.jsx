import React from 'react'
import '../../assets/css/accountSettings.css'

export function AccountSettings() {
  return (
    <section className='accountsettings'>
      <h1 className='mainhead1'>Your Details</h1>

      
        <form action= "" method="POST" className="form">
          <div>
            <div className="form-group">
              <input className="form-control" type="text" name="first_name" id="first_name" placeholder="first_name"/>
              <label htmlFor="first_name">First Name</label>
            </div>

            <div className="form-group">
              <input className="form-control" type="text" name="last_name" id="last_name" placeholder="last_name"/>
              <label htmlFor="last_name">Last Name</label>
            </div>

            <div className="form-group">
              <input className="form-control" type="text" name="address" id="address" placeholder="address"/>
              <label htmlFor="address">Address</label>
            </div>

            <div className="form-group">
              <input className="form-control" type="text" name="mobile" id="mobile" placeholder="mobile"/>
              <label htmlFor="mobile">Mobile</label>
            </div>


          </div>
          
          <div className="column">
            <div className="form-group">
              <input className="form-control" type="text" name="website" id="website" placeholder="website"/>
              <label htmlFor="website">Website</label>
            </div>

            <div className="form-group">
              <input className="form-control" type="text" name="facebook" id="facebook" placeholder="facebook"/>
              <label htmlFor="facebook">Facebook</label>
            </div>
            
            <div className="form-group">
              <input className="form-control" type="text" name="git_hub" id="git_hub" placeholder="git_hub"/>
              <label htmlFor="git_hub">GitHub</label>
            </div>

            <div className="form-group">
              <input className="form-control" type="text" name="linkedin" id="linkedin" placeholder="linkedin"/>
              <label htmlFor="linkedin">LinkedIn</label>
            </div>
          </div>
        </form>
      
      <button className='submit'>
        Save Changes
      </button>
    </section>
  )
}

export default AccountSettings