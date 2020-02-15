import React from 'react';
import TextInput from 'react-component-library/TextInput';

/** Required TextBox with error */
export default class ExampleError extends React.Component {
    render() {
        return (
            <TextInput
                htmlId="example-optional"
                label="First Name"
                name="firstname"
                placeholder="Input Required"
                onChange={() => { }}
                required
                error="First name is required."
            />
        )
    }
}