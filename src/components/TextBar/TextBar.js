import React from "react";
import PropTypes from "prop-types";

function TextBar({ theme, style: userStyles = {}, children, ...props }) {

    return (
        <div
            style={userStyles}
            className={`textbar btn-${theme}`}
            {...props}>
            {children}
        </div>
    )
}

TextBar.defaultProps = {
    theme: "deq-primary"
}

TextBar.propTypes = {

    /** Optional theme to color title*/
    theme: PropTypes.string,

    /** Optional inline style(s) */
    style: PropTypes.object
}

export default TextBar;