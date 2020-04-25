import React from 'react';
import { signUpData } from '../interfaces/interfaces';
import { auth, createUserProfileDocument } from '../firebase/firebaseUtil';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class SignUpComponent extends React.Component {


    state: signUpData = {
        firstName: '',
        lastName: '',
        email: '',
        organization: '',
        phone: '',
        role: '',
        password: '',
        confirmPassword: ''
    }

    handleSubmit = async (event: any) => {
        event.preventDefault();
        console.log(this.state);
        const { email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("password did not match: ");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            const userRef = await createUserProfileDocument(user, this.state);
            console.log("userRef: ", userRef);
        } catch (error) {
            console.error("error in creating user");
        }


        this.setState(
            {
                firstName: '',
                lastName: '',
                email: '',
                organization: '',
                phone: '',
                role: '',
                password: '',
                confirmPassword: ''
            }
        );

    }

    handleChange = (event: any) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log("state: ", this.state);
    }

    render(): JSX.Element {
        const { firstName, lastName, email, organization, phone, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2>Sign up with email and password:</h2>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>FirstName</Label>
                        <Input type="text" name='firstName' value={firstName} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label>LastName</Label>
                        <Input type="text" name='lastName' value={lastName} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="email" name='email' value={email} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label>organization</Label>
                        <Input type="string" name='organization' value={organization} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Phone</Label>
                        <Input type="tel" name='phone' value={phone} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type='password' name='password' value={password} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label>ConfirmPassword</Label>
                        <Input type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} />
                    </FormGroup>
                    <Button color="info">SignUp</Button>
                </Form>
            </div>
        )
    }
}


export default SignUpComponent;