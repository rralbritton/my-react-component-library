import React from "react";
import ButtonHollow from "react-component-library/ButtonHollow";

/** Example Basic Hollow Buttons with themed names */
export default function ExampleButtonBasicHollow() {

    return (
        <div>
            <ButtonHollow theme="deq-primary" label="DEQ Button" style={{ marginRight: "10px" }} />
            <ButtonHollow theme="daq-primary" label="DAQ Button" style={{ marginRight: "10px" }} />
            <ButtonHollow theme="ddw-primary" label="DDW Button" style={{ marginRight: "10px" }} />
            <ButtonHollow theme="derr-primary" label="DERR Button" style={{ marginRight: "10px" }} />
            <ButtonHollow theme="dwq-primary" label="DWQ Button" style={{ marginRight: "10px" }} />
            <ButtonHollow theme="dwmrc-primary" label="DWMRC Button" />
        </div>
    )
}