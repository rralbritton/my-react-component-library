import React from "react";
import LayoutLoginPage from "react-component-library/Layout_LoginPage";

/** Example login page */

export default function ExampleLoginPage() {

    let host = window.location.host;

    return (
        <LayoutLoginPage
            appName="Example Application"
            userManager={{
                authority: "https://login.dev.utah.gov/sso/oauth2",
                client_id: "driving-allergy-614782",
                redirect_uri: "http://" + host + "/callback",
                response_type: "token id_token",
                scope: "openid email",
                post_logout_redirect_uri: "http://" + host + "/",
                loadUserInfo: true,
                filterProtocolClaims: true
            }}
        />
    )
}