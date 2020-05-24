import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {

    constructor() {
        super();

        this.state = {
            displayName: '',
            firstName: '',
            lastName: '',
            email: '',
            phNumber: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        
        const {displayName, firstName, lastName, password, confirmPassword, email} = this.state;

        if(password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                firstName: '',
                lastName: '',
                email: '',
                phNumber: '',
                password: '',
                confirmPassword: ''
            })

        } catch(error) {
            console.error(error);
        }
    };

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    }

    render() {
        const {displayName, firstName, lastName, password, confirmPassword, email} = this.state;
        return(
            <div className = 'sign-up'>
                <h2 className = 'title'>I want to create a new account</h2>
                <span>Sign Up with our E-mail</span>
                <form className = 'sign-up-form' onSubmit = {this.handleSubmit}>
                    <FormInput
                        type = 'text'
                        name = 'displayName'
                        value = {displayName}
                        onChange = {this.handleChange}
                        label = 'Display Name'
                        required
                    />

                    <FormInput
                        type = 'text'
                        name = 'firstName'
                        value = {firstName}
                        onChange = {this.handleChange}
                        label = 'First Name'
                        required
                    />

                    <FormInput
                        type = 'text'
                        name = 'lastName'
                        value = {lastName}
                        onChange = {this.handleChange}
                        label = 'Last Name'
                        required
                    />

                    <FormInput
                        type = 'emal'
                        name = 'email'
                        value = {email}
                        onChange = {this.handleChange}
                        label = 'E-Mail'
                        required
                    />

                    <FormInput
                        type = 'password'
                        name = 'password'
                        value = {password}
                        onChange = {this.handleChange}
                        label = 'Password'
                        required
                    />

                    <FormInput
                        type = 'password'
                        name = 'confirmPassword'
                        value = {confirmPassword}
                        onChange = {this.handleChange}
                        label = 'Confirm Password'
                        required
                    />

                    <CustomButton type = 'submit'>SIGN UP</CustomButton>
                    
                </form>
            </div>
        )
    }
}

export default SignUp