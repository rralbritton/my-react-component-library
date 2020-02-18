import React from 'react'
import PropTypes from "prop-types";

function ButtonBasic({ theme, label }) {
    return (
        <button className={`btn btn-${theme}`}>{label}</button>
    )
}

ButtonBasic.propTypes = {
    /** Label for button */
    label: PropTypes.string.isRequired,

    /** Name of theme to use: 
     * deq-primary,  daq-primary, ddw-primary, dwq-primary, derr-primary, dwmrc-primary 
     * are all acceptable values
    */

    theme: PropTypes.string
}

export default ButtonBasic;