import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import SignInAndSignUpPageComponent from './pages/signInAndSignUpPage';
import HomePageComponent from './pages/homePage';
import AdminPageComponent from './pages/adminPage';
import { connect } from 'react-redux';
import Header from './components/header/header';
import { auth, firestore } from './firebase/firebaseUtil';
import { setCurrentUser } from './redux/user/userAction';

class App extends React.Component<any>{

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const userRef = firestore.doc(`users/${user.uid}`);
                const userSnapshot = await userRef.get();
                if (userSnapshot.exists) {
                    const userData = userSnapshot.data()
                    console.log("LoggedInUser: ", userData);
                    this.props.setCurrentUser(userData);
                }
            }
        });
    }

    compountWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        console.log("app: ", this.props.currentUser);
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePageComponent} />
                    <Route exact path='/signin' render={() => {
                        return (this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUpPageComponent />)
                    }} />
                    <Route exact path='/admin' component={AdminPageComponent} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        currentUser: state.user.currentUser
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setCurrentUser: (user: any) => dispatch(setCurrentUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);