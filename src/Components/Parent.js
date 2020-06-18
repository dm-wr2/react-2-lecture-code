import React, {Component} from 'react';
import Child from './Child';
import ClassChild from './ClassChild';

class Parent extends Component {
    constructor(props){
        super(props);
        this.state = {
            myName: 'Matt',
            faveNum: 11,
            inputValue: ''
        }
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(){
        this.setState({
            myName: 'Eric'
        })
    }

    handleNameChangeArrow = () => {
        this.setState({
            myName: 'Lucas'
        })
    }

    handleInput(e){
        this.setState({
            inputValue: e.target.value
        })
    }

    render(){
        // const {myName, faveNum} = this.state;
        return (
            <div>
                <Child 
                    myName={this.state.myName} 
                    faveNum={this.state.faveNum} 
                    nameFn={this.handleNameChange} />
                <ClassChild myName={this.state.myName} nameFn={this.handleNameChangeArrow} />
                <input value={this.state.inputValue} onChange={(e) => this.handleInput(e)}/>
            </div>
        )
    }
}

export default Parent;