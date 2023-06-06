import React from "react";
import './Sign-in.scss';
import FormInput from "../Form-input/Form-input";
import CustomButton from "../Custom-button/Custom-button";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        this.setState({email:'',password:''})
    }

    handleChange =(event) =>{
        const {name,value}=event.target;
        this.setState({[name]:value});
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                    name="email" 
                    value={this.state.email} 
                    type="email"  
                    hanChange={this.handleChange}
                    label='email'
                     /> 
                    <FormInput name="password"
                     value={this.state.password}
                      type="password"
                       hanChange={this.handleChange}
                       label='password'    
                       /> 
                       <div className="buttons">
                       <CustomButton type="submit"> Sign In </CustomButton>
                       <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Google SIgn In </CustomButton>
                       </div>
                </form>

            </div>

        )
    }
}

export default SignIn;