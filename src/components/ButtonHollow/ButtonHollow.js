import React from 'react'
import PropTypes from "prop-types";

function ButtonHollow({ theme, label, style: userStyles = {}, children, ...props }) {
    return (
        <button
            style={userStyles}
            className={`btn btn-outline-${theme}`}
            {...props}>
            {label}
            {children}
        </button>
    )
}

ButtonHollow.defaultProps = {
    theme: "deq-primary"
}

ButtonHollow.propTypes = {
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

export default ButtonHollow;