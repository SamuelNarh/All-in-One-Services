
import React from "react";
import FormInput from "../Form-input/Form-input";
import CustomButton from "../Custom-button/Custom-button";

import { auth ,createUserProfileDocument } from "../../firebase/firebase.utils";

import './signup.scss'

class SignUp extends React.Component{
    constructor(){
        super();
        this.state ={
            displayName :'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const { displayName , email , password , confirmPassword } = this.state;

        if (password !== confirmPassword){
            alert("Passwords don't match");
            return;
        }
        if (password === confirmPassword & password.length < 6){
            alert("Passwords must contain 6 or more characters");
            return;
        }

        try{
           const{user} = await auth.createUserWithEmailAndPassword(
            email,
            password);
           await createUserProfileDocument(user,{displayName});
           this.setState({
            displayName :'',
            email:'',
            password:'',
            confirmPassword:''
           });
        }
        catch(error){
            console.error(error);
        }
    };

    hadleChange = event =>{
        const{name,value} = event.target;
        this.setState({[name]:value});
    }

    render(){
        const {displayName,email,password,confirmPassword}=this.state
        return(
      
            <div className="sign-up">
              <h2 className="title">I do not have an account</h2>
              <span>Sign up with your email and password</span>
              <form className="sign-up-form" onSubmit={this.handleSubmit}>
                 <FormInput
                   type ="text"
                   name = 'displayName'
                   value ={displayName}
                   onChange ={this.hadleChange}
                   label ='Display Name'
                   required
                   />
                   <FormInput
                   type ="email"
                   name = 'email'
                   value ={email}
                   onChange ={this.hadleChange}
                   label ='Email'
                   required
                   />
                   <FormInput
                   type ="password"
                   name = 'password'
                   value ={password}
                   onChange ={this.hadleChange}
                   label ='Password'
                   required
                   />
                      <FormInput
                   type ="password"
                   name = 'confirmPassword'
                   value ={confirmPassword}
                   onChange ={this.hadleChange}
                   label ='Confirm Password'
                   required
                   />
                   <CustomButton type='submit'>SIGN UP</CustomButton>
              </form>
            </div>
        )
    }

}

export default SignUp;
