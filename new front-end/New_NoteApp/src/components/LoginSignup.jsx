import "../assets/css/LoginSignup.css"
import user from "../images/userlogin.png"
import email from "../images/email.png"
import padlock from "../images/padlock.png"
import view from "../images/view.png" 
import hidden from "../images/hidden.png"
import { useState } from "react"
import { CSSTransition } from "react-transition-group"


const LoginSignup = () => {


    const [action, setAction] = useState(true)
    const [password, setPassword]= useState("")
    const [visible, setVisible] = useState(true)
    

    return (
        //container
        <>
             <CSSTransition
                in={action}
                timeout={300}
                classNames='flip'
            >
                <div className="card">
                    <div className="card-front">
                        <section className="container-one">
                            <div className="header">
                                <div className="text">Log in</div>
                                <div className="underline"></div>
                                <div className="social-icons">
                                            <a href="#" className="iconG"><i class="fa-brands fa-google-plus-g"></i></a>
                                            <a href="#" className="iconF"><i class="fa-brands fa-facebook-f"></i></a>
                                            <a href="#" className="iconH"><i class="fa-brands fa-github"></i></a>
                                            <a href="#" className="iconL"><i class="fa-brands fa-linkedin-in"></i></a>
                                        </div>
                            </div>
                            <div className="inputs">
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
                                    <a className="forgot-password" href="">
                                    <span className="forgot-password-span">Forgot password?</span></a>
                                <div className="button-box">
                                    <button className="submit">Log In</button>
                                    <div className="footer-login">
                                        <span>Dont'have an account?</span>
                                        <p><a onClick={() =>{setAction((v) => !v)}}>
                                            <span className="link">Sign up</span>
                                        </a>
                                        </p>
                                </div>
                                    
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="card-back">
                    <section className="container-one">
                        <div className="header">
                            <div className="text">Sign up</div>
                            <div className="underline"></div>
                            <div className="social-icons">
                                        <a href="#" className="iconG"><i class="fa-brands fa-google-plus-g"></i></a>
                                        <a href="#" className="iconF"><i class="fa-brands fa-facebook-f"></i></a>
                                        <a href="#" className="iconH"><i class="fa-brands fa-github"></i></a>
                                        <a href="#" className="iconL"><i class="fa-brands fa-linkedin-in"></i></a>
                                    </div>
                        </div>
                        <div className="inputs">
                            <div className="input">
                                <img src={user} alt="" />
                                <input type="text" placeholder="Name" /></div>
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
                            <div className="button-box">
                                <button className="submit">Sign up</button>
                                <div className="footer-login">
                                        <span>Already have an account with us?</span>
                                        <p><a onClick={() =>{setAction((v) => !v)}}>
                                            <span className="link">Go back to Log in</span>
                                        </a>
                                        </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                </div>
            </CSSTransition>
     </>
    )
}

export default LoginSignup