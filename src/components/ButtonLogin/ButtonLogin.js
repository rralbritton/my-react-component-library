import React, { Component } from 'react'
import PropTypes from "prop-types";
import { createUserManager } from 'redux-oidc';
import ButtonBasic from "../ButtonsBasic/ButtonsBasic";

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

        const { userManager, ...props } = this.props;

        return (
            <div>
                <ButtonBasic
                    onClick={this.onLoginButtonClick}
                    label="Login"
                    userManager={userManager}
                    {...props} />
            </div>
        )
    }
}

export default Authorization_LoginButton;

Authorization_LoginButton.propTypes = {
    userManager: PropTypes.object.isRequired
}