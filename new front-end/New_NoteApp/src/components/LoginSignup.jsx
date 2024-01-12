import "../assets/css/LoginSignup.css"
import user from "../images/userlogin.png"
import email from "../images/email.png"
import padlock from "../images/padlock.png"
import view from "../images/view.png" 
import hidden from "../images/hidden.png"
import { useState } from "react"
import { motion } from "framer-motion"


const LoginSignup = () => {


    const [action, setAction] = useState("Sign Up")
    const [password, setPassword]= useState("")
    const [visible, setVisible] = useState(true)
    const [isAnimating, setIsAnimating] = useState(false)

    function handleFlip () {
        if(!isAnimating) {
            setAction(!setAction)
            setIsAnimating(true)
        }
    }

    return (
        //container
        <>
        <div className="card">
            <div className="card-back">
                <section className="container-one">
                    <div className="header">
                        <div className="text">{action}</div>
                        <div className="underline"></div>
                        <div className="social-icons">
                                    <a href="#" className="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                                    <a href="#" className="icon"><i class="fa-brands fa-facebook-f"></i></a>
                                    <a href="#" className="icon"><i class="fa-brands fa-github"></i></a>
                                    <a href="#" className="icon"><i class="fa-brands fa-linkedin-in"></i></a>
                                </div>
                    </div>
                    <div className="inputs">
                        {action === "Sign In"? null : <div className="input">
                            <img src={user} alt="" />
                            <input type="text" placeholder="Name" /></div>}
                        <div className="input">
                            <img src={email} alt="" />
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="input">
                            <img src={padlock} alt="" />
                            <input 
                                value={password}
                                type= {visible ? "text": "password"}
                                placeholder="Password" 
                                onChange={e=> setPassword(e.target.value)}
                            ></input>
                            <div className="eye-div" onClick= {() => setVisible(!visible)}>
                                {
                                    visible ? <img className="eye-image" src={view}></img> 
                                    : 
                                    <img className="eye-image"src={hidden}></img>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="submit-container">
                        {action === "Sign Up" ? null :  <a className="forgot-password" href="">
                            <span>Forget your password?</span></a> }
                        <div className="button-box">
                            <button className={action === "Sign In"?"submit gray" : "submit"} onClick={() =>{setAction("Sign Up")}}>Sign up</button>
                            <button className={action === "Sign Up"?"submit gray":"submit"} onClick={() =>{setAction("Sign In")}}>Sign In</button>
                        </div>
                    </div>
                </section>
            </div>
            <div className="card-front">
            <section className="container-one">
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                    <div className="social-icons">
                                <a href="#" className="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                                <a href="#" className="icon"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#" className="icon"><i class="fa-brands fa-github"></i></a>
                                <a href="#" className="icon"><i class="fa-brands fa-linkedin-in"></i></a>
                            </div>
                </div>
                <div className="inputs">
                    {action === "Sign In"? null : <div className="input">
                        <img src={user} alt="" />
                        <input type="text" placeholder="Name" /></div>}
                    <div className="input">
                        <img src={email} alt="" />
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="input">
                        <img src={padlock} alt="" />
                        <input 
                            value={password}
                            type= {visible ? "text": "password"}
                            placeholder="Password" 
                            onChange={e=> setPassword(e.target.value)}
                        ></input>
                        <div className="eye-div" onClick= {() => setVisible(!visible)}>
                            {
                                visible ? <img className="eye-image" src={view}></img> 
                                : 
                                <img className="eye-image"src={hidden}></img>
                            }
                        </div>
                    </div>
                </div>
                <div className="submit-container">
                    {action === "Sign Up" ? null :  <a className="forgot-password" href="">
                        <span>Forget your password?</span></a> }
                    <div className="button-box">
                        <button className={action === "Sign In"?"submit gray" : "submit"} onClick={() =>{setAction("Sign Up")}}>Sign up</button>
                        <button className={action === "Sign Up"?"submit gray":"submit"} onClick={() =>{setAction("Sign In")}}>Sign In</button>
                    </div>
                </div>
            </section>
        </div>
        </div>
     </>
    )
}

export default LoginSignup