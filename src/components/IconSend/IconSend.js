import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import PropTypes from "prop-types";



export default function IconSend({ theme, label, icon }) {
    return (
        <FontAwesomeIcon icon={faPaperPlane} />
    )
};