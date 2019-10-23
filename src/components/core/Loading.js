import * as React from 'react';

export default class Loading extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            content: this.props.content
        };
    }
    
    render() {
        const { content } = this.state;
        return (
            <>
                <div className="loader"></div>
            </>
        )
    }
}