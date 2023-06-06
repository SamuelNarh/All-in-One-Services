import React from "react";
import SignIn from "../../Components/Sign-in/Sign-in";
import SignUp from "../../Components/Sign-up/SignUp";

import './SignInandSignUp.scss';

const SignInAndSignUp =() =>(
    <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp/>
    </div>
)

export default SignInAndSignUp;
