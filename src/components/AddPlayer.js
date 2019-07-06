import React, { Component } from 'react';
import axios from 'axios';

export default class AddPlayer extends Component {
    constructor(props){
        super(props)

        this.state = {
            number: 0,
            name: "",
            position: "",
            avg: 0,
            homeruns: 0,
            RBIs: 0
        }
    }


    universalChangeHandler(property, value){
        this.setState({
            [property]: value
        });
    }

    createNewPlayer = () => {
        const newPlayer = {
          number: this.state.number,
          name: this.state.name,
          position: this.state.position,
          avg: this.state.avg,
          homeruns: this.state.homeruns,
          RBIs: this.state.RBIs
        };
        axios.post("/api/new_player", newPlayer).then(response => {
            console.log(response.data)
          this.props.setPlayerData(response.data)
        }).catch(err => console.log(err));
      }

    render(){
        console.log(this.state)

        const { number, name, position, avg, homeruns, RBIs} = this.state;
    
        return(
            <div>
                <div>
                Number:<input onChange={(e) => this.universalChangeHandler(e.target.name, e.target.value)} type='number' value={number} name="number" />
                </div>
                Name:<input onChange={(e) => this.universalChangeHandler(e.target.name, e.target.value)} type="text" value={name} name="name"></input>
                <input onChange={(e) => this.universalChangeHandler(e.target.name, e.target.value)} type="text" value={position} name="position"></input>
                <input onChange={(e) => this.universalChangeHandler(e.target.name, e.target.value)} type="number" value={avg} name="avg"></input>
                <input onChange={(e) => this.universalChangeHandler(e.target.name, e.target.value)} type="number"value={homeruns} name="homeruns"></input>
                <input onChange={(e) => this.universalChangeHandler(e.target.name, e.target.value)}type="number" value={RBIs} name="RBIs"></input>
                <button onClick={this.createNewPlayer}>Create Player</button>
            </div>
         
        )
    }
}