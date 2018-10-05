import React, { Component } from 'react';

class Search extends Component {
    render() {
        const { params } = this.props.match;
        console.log(params);
        return (
            <div>
                <h2>Search : {params.keyword}</h2>
            </div>
        );
    }
}

export default Search;
