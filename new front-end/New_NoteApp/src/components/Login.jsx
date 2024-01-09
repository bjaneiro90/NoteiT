import "../assets/css/login.css"
import React, { useState } from 'react'




export const Login = () => {

    const [open, setOpen] = useState("Sign")

    return (
    <div className="Login-base">
        <div className='container-geral' id="container-geral"> 
                <div className="form-container sign-up" id="container-signUp">
                    <form>
                        <h1>Create Account</h1>
                        <div className="social-icons">
                            <a href="#" className="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                            <a href="#" className="icon"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="#" className="icon"><i class="fa-brands fa-github"></i></a>
                            <a href="#" className="icon"><i class="fa-brands fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your e mail registration </span>
                            <input type="name" placeholder="Name"/>
                            <input type="email" placeholder="Email"/>
                            <input type="password" placeholder="Password" />
                        <button id="sign_up">Sign Up</button>
                    </form>
                </div>


                <div className="form-container sign-in">
                    <form>
                        <h1>Sign In</h1>
                        <div className="social-icons">
                            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your e mail password</span>
                            <input type="name" placeholder="Name"/>
                            <input type="email" placeholder="Email"/>
                            <a href="">Forget your password?</a>
                        <button id="sign_in">Sign in</button>
                        </form>
                        <div className="toogle-container">
                            <div className="toogle">
                                <div className="toogle-panel toogle-left">
                                    <h1>Welcome Back</h1>
                                    <p>Enter your personal details to use all of site features</p>
                                    <button id="sign_in">Sign In</button>
                                </div>
                                <div className={`toogle-panel toogle-right ${open ? 'active' : 'inactive'}`}>
                                    <h1>Hello, Friend!</h1>
                                    <p>Enter your personal details to use all of site features</p>
                                    <button id="sign_up" onClick={() => {setOpen(!open)}}>Sign up</button>
                                </div>
                            </div>
                        </div>
                </div>
             
        </div>
    </div>
    )
}

export default Login