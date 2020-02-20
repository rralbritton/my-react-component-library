import React from "react";
import ButtonLogin from "react-component-library/ButtonLogin";


/** Login button using Redux-OIDC connect. 
 * This will demostrate the redirect to the Utah State login page.
 * It does not yet demo the callback. You will need to use the back arrow
 * in order to return to this page.
*/

export default function ExampleButtonLogin() {
    let host = window.location.host;
    // eslint-disable-next-line no-unused-expressions
    return (

        <ButtonLogin
            userManager={{
                authority: "https://login.dev.utah.gov/sso/oauth2",
                client_id: "driving-allergy-614782",
                redirect_uri: "http://" + host + "/callback",
                response_type: "token id_token",
                scope: "openid email",
                post_logout_redirect_uri: "http://" + host + "/",
                loadUserInfo: true,
                filterProtocolClaims: true
            }} />
    )
}
