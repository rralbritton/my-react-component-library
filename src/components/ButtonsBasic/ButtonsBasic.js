import React from 'react'
import PropTypes from "prop-types";

function ButtonBasic({ theme, label, style: userStyles = {}, children, ...props }) {
    return (
        <button
            style={userStyles}
            className={`btn btn-${theme}`}
            {...props}>
            {label}
            {children}
        </button>
    )
}

ButtonBasic.defaultProps = {
    theme: "deq-primary"
}

ButtonBasic.propTypes = {
    /** Label for button */
    label: PropTypes.string.isRequired,

    /** Name of theme to use: 
     * 'deq-primary',  'daq-primary', 'ddw-primary', 'dwq-primary', 'derr-primary', 'dwmrc-primary' 
     * are all acceptable values
    */

    theme: PropTypes.string,

    /** style object - Allow users to create inline styles */
    style: PropTypes.object

}

export default ButtonBasic;