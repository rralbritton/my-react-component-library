import React from "react";
import SearchWithAutoComplete from "react-component-library/SearchWithAutoComplete";

/** This class expects to receive a prop called items. 
    Search is based on the first letter in the name. The name can be lower or uppercase.
    Suggestions can be clicked on to be completed.
    A button can be added to this to cause a click event such as retrieving a specific record from a database/api call.
    In this example I've just hard coded an array in this Home class.
    In a real-world app, this hardcoded list would most likely be replaced by an array retieved
    from an api in componentDidMount.    
    
 */

export default function ExampleSearchWithAutComplete() {
    return (
        <React.Fragment>

            <p><b>Names that you can search:</b> Rachel, Rob, Andrei, Mike, Malathi.</p>

            <SearchWithAutoComplete
                items={["Rachel", "Rob", "Andrei", "Mike", "Malathi"]}
            />

        </React.Fragment>
    )
}