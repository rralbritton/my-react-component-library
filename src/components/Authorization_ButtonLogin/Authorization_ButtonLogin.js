import React, { Component } from 'react'
import PropTypes from "prop-types";
import { createUserManager } from 'redux-oidc';

class Authorization_LoginButton extends Component {

    onLoginButtonClick = (event) => {
        event.preventDefault();
        createUserManager(this.props.userManager).signinRedirect().then(function () {
            console.log(process.env);
        }).catch(function (err) {
            console.log(err);
        });
    }

    render() {
        return (
            <div>
                <button className="btn btn-deq-primary-color m-2" onClick={this.onLoginButtonClick}>Login</button><br />
            </div>
        )
    }
}

export default Authorization_LoginButton;

Authorization_LoginButton.propTypes = {
    userManager: PropTypes.object.isRequired
}