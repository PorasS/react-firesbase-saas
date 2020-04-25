import React from 'react';
import SignUpComponent from '../components/signUpComponent';
import SignInComponent from '../components/signInComponent';
import './signInAndSignUpPageStyles.css';

class SignInAndSignUpPageComponent extends React.Component<any>{

    render() {
        return (
            <div className='container'>
                <div>
                    <SignInComponent />
                </div>
                <div>
                    <SignUpComponent />
                </div>
            </div>
        );
    }
}


export default SignInAndSignUpPageComponent;