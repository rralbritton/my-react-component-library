import React from 'react';
import PropTypes from 'prop-types';

let Button = ({ size, label }) => {
    return (
        <button type="button" className="btn">{label}</button>
    )
}

Button.propTypes = {
    /** Label text */
    label: PropTypes.string.isRequired

}

export default Button;