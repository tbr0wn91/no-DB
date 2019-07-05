import React, { Component } from 'react';
import DisplayName from "./DisplayName"

export default class UserInput extends Component {
    constructor(props){
        super(props)

        this.state ={
            UserInput: ""
        }
    }

    handleUserInput(avg){
        this.setState({
            UserInput: avg
        })
    }


    render(){
        return (
            <div className="userinput">
            <input onChange={e => this.handleUserInput(this.props.player.avg)} type="text"></input>
            <button onClick={() =>this.props.updatePlayerStats(this.props.player.id)}>Update Avg</button>
            </div>
        )
    }
}