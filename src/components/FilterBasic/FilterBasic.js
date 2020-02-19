import React from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput";

export default class FilterBasic extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "",
        };
    }

    //The subsr limits the # of characters a user can enter into the seach box
    updateSearch = event => {
        this.setState({ search: event.target.value.substr(0, 10) });
    };

    render() {
        let filteredList = this.props.list.filter(item => {
            return item.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        });

        return (
            <div>
                <TextInput
                    type="text"
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}
                    placeholder="Enter Text Here..."
                    className="form-control"
                    aria-describedby="searchbox"
                    style={this.props.style}
                />
                <ul className="list-style-none">
                    {filteredList.map(item => {
                        return <li key={item}>{item}</li>;
                    })}
                </ul>
            </div>
        );
    }
}

FilterBasic.propTypes = {
    list: PropTypes.array.isRequired
}