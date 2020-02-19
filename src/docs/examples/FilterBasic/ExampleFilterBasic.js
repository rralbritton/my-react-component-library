import React from "react";
import FilterBasic from "react-component-library/FilterBasic";

/** Basic Filter Example */
export default function ExampleFilterBasic() {
    return (
        <FilterBasic style={{ width: "40%" }} list={["one", "two", "three", "four", "five"]} />
    )
}