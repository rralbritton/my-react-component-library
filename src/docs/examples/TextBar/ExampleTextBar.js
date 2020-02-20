import React from "react";
import TextBar from "react-component-library/TextBar";

/** Text Bar Examples:
using default (DEQ) | using theme */
export default function ExampleTextBars() {
    return (

        <React.Fragment>
            {/** Title Bar using defaults (DEQ Color)} */}
            <TextBar>Text Goes Here</TextBar>
            <div className="mt-3" />
            {/** Title Bar with DWQ Theme */}
            <TextBar theme="dwq-primary">Text Goes Here</TextBar>
            <div className="mt-3" />
            {/** Title Bar with inline styles */}
            <TextBar theme="daq-primary" style={{ boxShadow: ".3rem .5rem #b5aaaa", textTransform: "uppercase" }}>Text Goes Here</TextBar>
        </React.Fragment>
    )
}