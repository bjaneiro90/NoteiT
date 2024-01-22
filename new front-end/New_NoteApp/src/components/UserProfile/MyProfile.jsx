import React from 'react'
import  '../../assets/css/MyProfile.css'
import avatar from "../../images/man_avatar.png"
import home from "../../images/home-icon-silhouette.png"
import website from "../../images/world-wide-web.png"
import twitter from "../../images/twitter.png"
import instagram from "../../images/instagram.png"
import facebook from "../../images/facebook.png"
import github from "../../images/github.png"


const MyProfile = () => {
  return (
    <section className='accountsettings'>
      <h1 className='text'>My Profile</h1>
      <div className="myprofile-container">
        <div className="first-profile">
            <header className='header_myprofile'>
              <img className="avatar_myprofile" src={avatar} alt="" />
              <h3>Bruno Janeiro<br/><span>Web Developer</span></h3>
              <div className="address">
                <div className='home_inside_p'>
                <img src={home} width={12} style={{opacity: "0.55"}} alt="" />
                  <span>Calle Jorge Gullien, 1</span>
                </div>
                <p>31400, Ayamonte</p>
              </div>
            </header>
        </div>
        <div className="underline_myprofile"></div>
            
            <div className="second-profile">
                <ul className='column_2'>
                  <li className="links_img_p">
                    <div className='home_inside_p'>
                      <img src={website} width={16} alt="" />
                      <span>Website</span>
                    </div>
                  <span>Website</span>
                  </li>
                  <li className="links_img_p">
                    <div className='home_inside_p'>
                      <img src={github} width={16}alt="" />
                      <span>Github</span>
                    </div>
                  <span>Github</span>
                  </li>
                  <li className="links_img_p">
                    <div className='home_inside_p'>
                      <img src={twitter} width={16} alt="" />
                      <span>Twitter</span>
                    </div>
                  <span>Twitter</span>
                  </li>
                  <li className="links_img_p">
                    <div className='home_inside_p'>
                      <img src={instagram} width={16}  alt="" />
                      <span>Instagram</span>
                    </div>
                  <span>Instagram</span>
                  </li>
                  <li className="links_img_p">
                    <div className='home_inside_p'>
                      <img src={facebook} width={16}  alt="" />
                      <span>Facebook</span>
                    </div>
                  <span>Facebook</span>
                  </li>
                </ul>
          </div>
        </div>


       
    </section>
  )
}

export default MyProfile