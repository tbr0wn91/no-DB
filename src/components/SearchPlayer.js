import React, { Component } from 'react';
import "./SearchPlayer.css";
import "./DisplayName"

export default class SearchPlayer extends Component{
    constructor(props){
        super(props)

        this.state = {
            filterName: "",
            PlayerData: []
        };
        
    }

    handleChange(filter) {
        this.setState({
            filterName: filter
        });
    }

    render(){
        let namesToFilter = this.props.PlayerData.filter((player, index) => {
            console.log(player)
            return player === (this.state.filterName);
        })
        
        return(
            <div className="search">
                <input onChange={e => this.handleChange(e.target.value)} type="text"></input>
                {namesToFilter}
                <button onClick={e => this}>Search</button>
           </div>
    
        )
    } 
}
