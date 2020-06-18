import React, {Component} from 'react';

class ClassChild extends Component {
    render(){
        return (
            <div>
                <p>{this.props.myName}</p>
                <button onClick={this.props.nameFn}>Change Name Two</button>
            </div>
        )
    }
}

export default ClassChild;