import React from "react";
import ButtonBasic from "../ButtonsBasic";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import PropTypes from "prop-types";


/*export default function ButtonSubmit({ theme, label }) {
    return (
        <ButtonBasic
            theme={theme}
            label={`${label}`}
        ><FontAwesomeIcon icon={faPaperPlane} />
        </ButtonBasic>
    )
}*/

export default function ButtonSubmit({ theme, label }) {
    return (
        <button
            type="button"
            className={`btn btn-${theme}`}
        > {label} <FontAwesomeIcon icon={faPaperPlane} />
        </button>
    )
}

ButtonSubmit.defaultProps = {
    theme: "deq-primary",
    label: "Submit"
}

ButtonSubmit.propTypes = {
    /** See ButtonBasics for theme options */
    theme: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.object.isRequired
}
