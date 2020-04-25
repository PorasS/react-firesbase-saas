import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './headerStyles.css';
import { auth } from '../../firebase/firebaseUtil';
import { userSignOut } from '../../redux/user/userAction';



class Header extends React.Component<any>{

    handleSignOut = () => {
        console.log("currentUser B: ", this.props.currentUser);
        const response = auth.signOut();
        console.log("signout", response);
        this.props.userSignOut();
        console.log("currentUser B: ", this.props.currentUser);

    }
    render() {
        console.log("Header: ", this.props.currentUser);
        return (
            <div className="header-container">
                <div>
                    logo
                </div>
                <div>
                    {
                        this.props.currentUser ? <div className="signOut" onClick={() => this.handleSignOut()}>SignOut</div> : <Link className='link' to='/signin'>SignIn</Link>
                    }
                    {
                        this.props.currentUser && this.props.currentUser.role === 'ADMIN' ? <Link className='link' to='/admin'>Admin</Link> : null
                    }
                    <Link className='link' to='/'>Home</Link>
                </div>
            </div>
        );
    }
}
const mapStateToprops = (state: any) => {
    return {
        currentUser: state.user.currentUser
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        userSignOut: () => dispatch(userSignOut())
    }
}
export default connect(mapStateToprops, mapDispatchToProps)(Header);