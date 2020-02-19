import React from "react";
import ButtonBasic from "react-component-library/ButtonsBasic";

/** Example Button with inline style. */
export default function ExampleButtonBasicStyles() {
    return (

        <ButtonBasic style={{
            backgroundColor: "red", border: "1px solid red", borderRadius: "1rem"
        }} label="Styled Button" />
    )
}