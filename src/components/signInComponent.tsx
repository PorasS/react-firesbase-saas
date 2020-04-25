import React from 'react';
import { signInData } from '../interfaces/interfaces';
import { auth } from '../firebase/firebaseUtil';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../pages/signInAndSignUpPageStyles.css';



class SignInComponent extends React.Component<any>{


    state: signInData = {
        email: '',
        password: ''
    }

    handleSubmit = async (event: any) => {
        event.preventDefault();
        console.log(this.state);
        const { email, password } = this.state;

        try {
            const { user } = await auth.signInWithEmailAndPassword(email, password);
            console.log("Local User: ", user);
            // this.props.setCurrentUser(user);
            // console.log("currentUser: ", this.props.currentUser);
            this.setState({
                email: '',
                password: ''
            });

        } catch (error) {
            console.log("error in log in:");
        }
    }

    handleChange = (event: any) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });

    }

    render(): JSX.Element {
        const { email, password } = this.state;
        return (
            <div className='sign-in'>
                <Form onSubmit={this.handleSubmit}>
                    <h3>SignIn With Email and Password:</h3>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="email" name='email' value={email} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type='password' name='password' value={password} onChange={this.handleChange} />
                    </FormGroup>
                    <Button color="info">SignIn</Button>
                </Form>
            </div>
        );
    }
}

export default SignInComponent;