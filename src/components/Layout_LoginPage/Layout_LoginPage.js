import React, { Component } from 'react'
import LoginButton from '../ButtonLogin';
import { PropTypes } from "prop-types";


export default class Layout_LoginPage extends Component {
    render() {
        const { userManager, message, appName } = this.props;

        return (
            <div
                className="landing"
            >
                <div className="landing-text-box" >
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="ow">{appName}</h1>
                            {message ?
                                <h3>{message}</h3> : <h3>Please Login</h3>}
                            <hr />
                            <LoginButton userManager={userManager} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Layout_LoginPage.propTypes = {
    appName: PropTypes.string.isRequired,
    userManager: PropTypes.object.isRequired,
    message: PropTypes.string
}