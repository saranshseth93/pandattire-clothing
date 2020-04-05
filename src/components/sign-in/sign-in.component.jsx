import React from 'react';

import './sign-in..style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:'', password: ''});
    }

    handleChange = event =>{
        const {value, name} = event.target;

        this.setState({[name]: value});
    }
    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' value={this.state.email} label='email' handleChange={this.handleChange} required type='email'/>
                    <FormInput name='password' value={this.state.password} label='password' handleChange={this.handleChange} required type='password'/>
                    <CustomButton type='submit'>SIGN IN</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;