import React from "react";
import ButtonBasic from "../ButtonsBasic";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import PropTypes from "prop-types";


export default function ButtonSubmit({ theme, label, ...props }) {
    return (
        <ButtonBasic
            theme={theme}
        >{label}<FontAwesomeIcon className="font-icon" icon={faPaperPlane} />
        </ButtonBasic>
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
