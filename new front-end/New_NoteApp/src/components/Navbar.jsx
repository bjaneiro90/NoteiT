import "../assets/css/navbar.css"
import ThemeSwitcher from "./ThemeSwitcher"
import logo from "../images/note.png"
import edit from "../images/edit.png"
import user from "../images/user.png"
import inbox from "../images/inbox.png"
import settings from "../images/setting.png"
import help from "../images/help.png"
import logout from "../images/logout.png"
import React, { useEffect, useRef, useState } from "react"


export const Navbar = () => {

    const [open, setOpen] = useState(false)

    let menuRef = useRef()

    useEffect(() => {
        let handler = (e) => {
            if(!menuRef.current.contains(e.target)){
            setOpen(false);
            console.log(menuRef.current)
            }
        }
        document.addEventListener("mousedown", handler)

        return() => {
            document.removeEventListener("mousedown", handler)
        }
    })

    return (
        <nav className='navbar'>
            <div className="nav-wrapper container ">
                <img src={logo} alt="" width={80} height={100}/>
                <div className="nav-options">                 
                <ul>
                    <li className="nav-item">
                        <div className="nav-icon">
                               <ThemeSwitcher/>
                        </div>
                    </li>
                    <li className="nav-item" ref={menuRef}>
                        <div className="nav-icon"  onClick={() => {setOpen(!open)}}>
                            <i className="fa-solid fa-user fa-lg"></i>
                        </div>
                            <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
                                <h3>Bruno<br/><span>Web Developer</span></h3>
                                <ul>
                                    <DropdownItem img = {user} text = {"My Profile"}/>
                                    <DropdownItem img = {edit} text = {"Edit Profile"}/>
                                    <DropdownItem img = {inbox} text = {"Inbox"}/>
                                    <DropdownItem img = {settings} text = {"Settings"}/>
                                    <DropdownItem img = {help} text = {"Help"}/>
                                    <DropdownItem img = {logout} text = {"Log out"}/>
                                </ul>
                            </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-icon">
                        <i className="fa-solid fa-rocket fa-lg"></i>
                        </div>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

function DropdownItem(props) {
    return (
        <li className = 'dropdownItem'>
            <img src={props.img} alt="" />
            <p href="">{props.text}</p>
        </li>
    )
}
