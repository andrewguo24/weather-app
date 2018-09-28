import React from 'react';

export default class Weather extends React.Component {
    render() {
        return(
            <div>
                { this.props.temperature }
            </div>
        );
    }
}