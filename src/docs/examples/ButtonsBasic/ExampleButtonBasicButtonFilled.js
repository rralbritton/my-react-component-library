import React from "react";
import ButtonBasic from "react-component-library/ButtonsBasic";

/** Example Basic Filled Buttons with themed names */
export default function ExampleButtonBasicFilled() {
    return (
        <div>
            <ButtonBasic theme="deq-primary" label="DAQ Button" style={{ marginRight: "10px" }} />
            <ButtonBasic theme="daq-primary" label="DAQ Button" style={{ marginRight: "10px" }} />
            <ButtonBasic theme="ddw-primary" label="DAQ Button" style={{ marginRight: "10px" }} />
            <ButtonBasic theme="derr-primary" label="DAQ Button" style={{ marginRight: "10px" }} />
            <ButtonBasic theme="dwq-primary" label="DAQ Button" style={{ marginRight: "10px" }} />
            <ButtonBasic theme="dwmrc-primary" label="DAQ Button" />
        </div>
    )
}